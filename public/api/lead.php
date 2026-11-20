<?php
// Website quote form → GoHighLevel.
// Runs on the PHP host (Hostinger) so the GHL token never reaches the browser.
// 1. Upsert the contact (matched by phone/email), 2. tag it, 3. add a note with the job details,
// 4. copy the Cloudinary photos/videos into the contact's "Job Photos" file field (if configured).

declare(strict_types=1);
ignore_user_abort(true);
set_time_limit(120);
header('Content-Type: application/json');
header('Cache-Control: no-store');

const GHL = 'https://services.leadconnectorhq.com';

function out(int $code, array $body): void {
  http_response_code($code);
  echo json_encode($body);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(405, ['ok' => false, 'error' => 'POST only']);

$cfgFile = __DIR__ . '/config.php';
if (!is_file($cfgFile)) out(500, ['ok' => false, 'error' => 'Server not configured']);
$cfg = require $cfgFile;

$raw = file_get_contents('php://input', false, null, 0, 64 * 1024);
$in = json_decode($raw ?: '', true);
if (!is_array($in)) out(400, ['ok' => false, 'error' => 'Bad request']);

$str = fn(string $k, int $max = 500): string => mb_substr(trim((string)($in[$k] ?? '')), 0, $max);

// Honeypot: bots fill every field.
if ($str('company') !== '') out(200, ['ok' => true]);

$name = $str('name', 120);
$phoneRaw = $str('phone', 40);
$email = $str('email', 200);
$location = $str('location', 120);
if ($name === '' || strlen(preg_replace('/\D/', '', $phoneRaw)) < 8 || $location === '') {
  out(422, ['ok' => false, 'error' => 'Missing name, phone or suburb']);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $email = '';

// Australian numbers → E.164 so GHL matches existing contacts and can SMS them.
function au_phone(string $p): string {
  $d = preg_replace('/\D/', '', $p);
  if (str_starts_with($d, '61')) return '+' . $d;
  if (str_starts_with($d, '0') && strlen($d) === 10) return '+61' . substr($d, 1);
  if (strlen($d) === 9 && $d[0] === '4') return '+61' . $d;
  return $p;
}
$phone = au_phone($phoneRaw);

$parts = preg_split('/\s+/', $name, 2);
$services = array_values(array_filter(array_map(
  fn($s) => is_array($s) ? mb_substr((string)($s['label'] ?? ''), 0, 60) : '',
  is_array($in['services'] ?? null) ? $in['services'] : []
)));

// Only accept media from our own Cloudinary account (prevents the server fetching arbitrary URLs).
$cloudPrefix = 'https://res.cloudinary.com/' . $cfg['cloudinary_cloud'] . '/';
$photos = [];
foreach (array_slice(is_array($in['photos'] ?? null) ? $in['photos'] : [], 0, 6) as $p) {
  $url = is_array($p) ? (string)($p['url'] ?? '') : '';
  if (!str_starts_with($url, $cloudPrefix)) continue;
  $photos[] = ['url' => $url, 'name' => mb_substr((string)($p['name'] ?? 'photo'), 0, 120), 'type' => ($p['type'] ?? '') === 'video' ? 'video' : 'image'];
}

function ghl(array $cfg, string $method, string $path, ?array $json = null, ?array $multipart = null): array {
  $ch = curl_init(GHL . $path);
  $headers = ['Authorization: Bearer ' . $cfg['ghl_token'], 'Version: 2021-07-28', 'Accept: application/json'];
  $opts = [CURLOPT_CUSTOMREQUEST => $method, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 60];
  if ($json !== null) {
    $headers[] = 'Content-Type: application/json';
    $opts[CURLOPT_POSTFIELDS] = json_encode($json);
  } elseif ($multipart !== null) {
    $opts[CURLOPT_POSTFIELDS] = $multipart;
  }
  $opts[CURLOPT_HTTPHEADER] = $headers;
  curl_setopt_array($ch, $opts);
  $body = curl_exec($ch);
  $code = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);
  return [$code, json_decode((string)$body, true) ?? ['raw' => $body]];
}

// 1. Upsert contact. Tags are added separately because upsert would overwrite existing tags.
$contact = array_filter([
  'locationId' => $cfg['location_id'],
  'firstName' => $parts[0] ?? $name,
  'lastName' => $parts[1] ?? '',
  'name' => $name,
  'phone' => $phone,
  'email' => $email,
  'city' => $location,
  'source' => 'Website quote form',
], fn($v) => $v !== '');
[$code, $res] = ghl($cfg, 'POST', '/contacts/upsert', $contact);
$contactId = $res['contact']['id'] ?? null;
if ($code >= 300 || !$contactId) {
  error_log('GHL upsert failed ' . $code . ' ' . json_encode($res));
  out(502, ['ok' => false, 'error' => 'CRM unavailable']);
}

// 2. Tags.
$tags = array_merge($cfg['tags'], array_map(fn($s) => 'service: ' . strtolower($s), $services));
ghl($cfg, 'POST', "/contacts/$contactId/tags", ['tags' => $tags]);

// 3. Note with everything the crew needs to quote.
$lines = [
  'Website quote request',
  'Service: ' . ($services ? implode(', ', $services) : '—'),
  'Load size: ' . ($str('size', 60) ?: '—'),
  'Online estimate: ' . ($str('estimate', 60) ?: '—'),
  'Suburb: ' . $location,
  'Preferred: ' . (trim($str('preferredDate', 20) . ' ' . $str('preferredTime', 40)) ?: '—'),
  'Message: ' . ($str('message', 2000) ?: '—'),
  'Page: ' . $str('page', 200),
];
if ($photos) {
  $lines[] = '';
  $lines[] = 'Photos/videos:';
  foreach ($photos as $p) $lines[] = $p['url'];
}
ghl($cfg, 'POST', "/contacts/$contactId/notes", ['body' => implode("\n", $lines)]);

// 4. Attach media to the File Upload custom field. GHL accepts JPG/PNG/GIF/MP4 (not WebP/HEIC),
//    so ask Cloudinary for a JPG (or MP4) copy, capped in size.
$attached = 0;
$fieldId = $cfg['file_field_id'] ?? '';
if ($fieldId !== '' && $photos) {
  $multipart = [];
  $tmpFiles = [];
  foreach ($photos as $i => $p) {
    $isVideo = $p['type'] === 'video';
    $transform = $isVideo ? 'f_mp4,q_auto,w_1280,c_limit' : 'f_jpg,q_auto,w_2000,c_limit';
    $ext = $isVideo ? 'mp4' : 'jpg';
    $url = preg_replace('#/upload/#', "/upload/$transform/", $p['url'], 1);
    $url = preg_replace('#\.[a-z0-9]+$#i', ".$ext", $url);
    $tmp = tempnam(sys_get_temp_dir(), 'nrr');
    $fh = fopen($tmp, 'wb');
    $ch = curl_init($url);
    curl_setopt_array($ch, [CURLOPT_FILE => $fh, CURLOPT_FOLLOWLOCATION => true, CURLOPT_TIMEOUT => 60]);
    curl_exec($ch);
    $ok = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE) === 200;
    curl_close($ch);
    fclose($fh);
    $tmpFiles[] = $tmp;
    if (!$ok || filesize($tmp) === 0 || filesize($tmp) > 45 * 1024 * 1024) continue;
    $base = pathinfo($p['name'], PATHINFO_FILENAME) ?: 'photo-' . ($i + 1);
    $key = $fieldId . '_' . bin2hex(random_bytes(8));
    $multipart[$key] = new CURLFile($tmp, $isVideo ? 'video/mp4' : 'image/jpeg', "$base.$ext");
  }
  if ($multipart) {
    $q = http_build_query(['contactId' => $contactId, 'locationId' => $cfg['location_id']]);
    [$code, $res] = ghl($cfg, 'POST', "/forms/upload-custom-files?$q", null, $multipart);
    if ($code < 300) $attached = count($multipart);
    else error_log('GHL file upload failed ' . $code . ' ' . json_encode($res));
  }
  foreach ($tmpFiles as $t) @unlink($t);
}

// 5. Opportunity in the marketing pipeline. Skipped if the contact already has an open one there,
//    so a repeat enquiry doesn't create a duplicate deal.
$opportunity = null;
if (($cfg['pipeline_id'] ?? '') !== '') {
  $q = http_build_query(['location_id' => $cfg['location_id'], 'contact_id' => $contactId, 'pipeline_id' => $cfg['pipeline_id'], 'status' => 'open', 'limit' => 1]);
  [$code, $res] = ghl($cfg, 'GET', "/opportunities/search?$q");
  $existing = $res['opportunities'][0]['id'] ?? null;
  if ($existing) {
    $opportunity = 'existing';
  } else {
    preg_match('/\d[\d,]*/', $str('estimate', 60), $m);
    $value = isset($m[0]) ? (float)str_replace(',', '', $m[0]) : 0;
    $opp = array_filter([
      'locationId' => $cfg['location_id'],
      'pipelineId' => $cfg['pipeline_id'],
      'pipelineStageId' => $cfg['pipeline_stage_id'] ?? '',
      'contactId' => $contactId,
      'name' => $name . ' – ' . ($services ? implode(', ', $services) : 'Rubbish removal') . " ($location)",
      'status' => 'open',
      'source' => $cfg['opportunity_source'] ?? 'Website',
      'monetaryValue' => $value ?: null,
    ], fn($v) => $v !== '' && $v !== null);
    [$code, $res] = ghl($cfg, 'POST', '/opportunities/', $opp);
    if ($code < 300) $opportunity = 'created';
    else error_log('GHL opportunity failed ' . $code . ' ' . json_encode($res));
  }
}

out(200, ['ok' => true, 'attached' => $attached, 'opportunity' => $opportunity]);
