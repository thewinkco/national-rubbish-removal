<?php
// Copy to config.php (same folder) and fill in. config.php is git-ignored and blocked from web access.
return [
  // GHL → Settings → Private Integrations. Scopes: contacts.write, contacts.readonly, forms.write,
  // opportunities.readonly, opportunities.write
  'ghl_token' => 'pit-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  // GHL → Settings → Business Profile → Location ID
  'location_id' => 'xxxxxxxxxxxxxxxxxxxx',
  // ID of the contact custom field "Job Photos" (type: File Upload). Leave '' to skip attaching files;
  // the photo links are still added to the contact note.
  'file_field_id' => '',
  'tags' => ['website-lead'],
  // Pipeline + stage for new website leads (GET /opportunities/pipelines). Leave pipeline_id '' to skip.
  // Needs the opportunities.readonly + opportunities.write scopes.
  'pipeline_id' => '',
  'pipeline_stage_id' => '',
  'opportunity_source' => 'Website',
  'cloudinary_cloud' => 'oakve7mf',
];
