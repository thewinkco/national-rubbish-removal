/*
  Generates one blog photo with Hermes (our own AI API) and saves it in the post's image folder, sized like
  the rest of the blog. Same Hermes gateway as the Omniwink and Wopie routines (AI_API_URL / AI_API_KEY).

    node scripts/blog-image-hermes.mjs <slug> cover "<scene>"              -> <slug>-cover.webp (1440x810) + <slug>-og.jpg (1200x630)
    node scripts/blog-image-hermes.mjs <slug> <file-name> "<scene>"        -> <file-name>.webp (1200x800, 3:2)

  <file-name> is the descriptive, keyword-rich name used in the post (e.g. green-waste-loaded-into-truck).
  Pass --ref <url> (repeatable) to add reference photos; by default the NRR crew and truck photos on the live
  site are used so uniforms, truck livery and photo style match the rest of the website.

  Needs AI_API_URL and AI_API_KEY (environment, or .env.local when run locally). Takes 2 to 8 minutes.
  Generate images ONE AT A TIME: parallel requests to Hermes time out (seen on the first routine run).
  Prints the saved paths, or exits 1 with the reason so the caller can fall back to a photo from the library
  (scripts/blog-images.mjs).
*/
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

if (fs.existsSync(".env.local")) {
  for (const line of fs.readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const args = process.argv.slice(2);
const refs = [];
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--ref") refs.push(args[++i]);
  else positional.push(args[i]);
}
const [slug, name, scene] = positional;
const fail = (why) => {
  console.error(`blog-image-hermes: ${why}`);
  process.exit(1);
};

if (!slug || !name || !scene) fail('usage: node scripts/blog-image-hermes.mjs <slug> <cover|file-name> "<scene>" [--ref <url>]');
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
if (!SLUG.test(slug) || !SLUG.test(name)) fail("slug and file name must be lower-case words joined by hyphens");

const API_URL = process.env.AI_API_URL?.trim().replace(/\/+$/, "") || "";
const API_KEY = process.env.AI_API_KEY?.trim() || "";
const MODEL = process.env.AI_MODEL?.trim() || "hermes-agent";
if (!API_URL || !API_KEY) fail("AI_API_URL and AI_API_KEY are not set");
const ORIGIN = new URL(API_URL).origin;
const auth = { authorization: `Bearer ${API_KEY}`, "content-type": "application/json" };

const SITE = "https://www.nationalrubbishremoval.com.au";
const references = refs.length
  ? refs
  : [`${SITE}/images/about/national-rubbish-removal-team.webp`, `${SITE}/images/home/rubbish-removal-crew-loading-truck-sydney.webp`];

// House style: matches the existing NRR photo library (bright, real, Sydney, branded crew and truck).
const style = `Photorealistic editorial photograph for a Sydney rubbish removal company's blog. It must look like the reference photos: same crew uniform, same truck, same bright natural look.
- Crew: friendly Australian men in black polo shirts with orange shoulder panels (or orange hi-vis polos on building sites), black cargo work pants, black caps, work gloves and boots. Natural, candid, mid-task, not posing.
- Truck: white cab with a black tipper or box body that has bold orange and white diagonal stripes, exactly like the references.
- Setting: real Sydney places (suburban brick or weatherboard houses, terraces, apartment car parks, offices, building sites), bright natural Australian daylight, gum trees or jacarandas where it fits.
- Camera: full-frame DSLR, 35mm lens, eye level, shallow depth of field, true-to-life colour, realistic skin, fabric and materials.
- Wide landscape composition (${name === "cover" ? "16:9" : "3:2"}) with one clear focal point.
- No readable text, words, numbers, street signs, house numbers or watermarks. Keep logos to the truck's stripe pattern only. No recognisable real people.`;

async function streamText(res) {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let text = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (value) buffer += decoder.decode(value, { stream: true });
    let nl;
    while ((nl = buffer.indexOf("\n")) >= 0) {
      const line = buffer.slice(0, nl).trim();
      buffer = buffer.slice(nl + 1);
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (data === "[DONE]") return text;
      try {
        const chunk = JSON.parse(data);
        if (chunk.error) throw new Error(chunk.error.message ?? "Hermes error");
        text += chunk.choices?.[0]?.delta?.content ?? "";
      } catch (e) {
        if (e.message && !e.message.startsWith("Unexpected") && !e.message.includes("JSON")) throw e;
      }
    }
    if (done) return text;
  }
}

const signed = (url) => {
  try {
    const u = new URL(url);
    return u.origin === ORIGIN && /^\/v1\/images\/[^/]+$/.test(u.pathname) && Boolean(u.searchParams.get("token"));
  } catch {
    return false;
  }
};

async function paint() {
  // Hermes can take several minutes per image, longer when busy. Run one image at a time, never in parallel.
  const signal = AbortSignal.timeout(480_000);
  const res = await fetch(`${API_URL}/chat/completions`, {
    method: "POST",
    headers: auth,
    signal,
    body: JSON.stringify({
      model: MODEL,
      stream: true,
      max_tokens: 600,
      messages: [
        {
          role: "user",
          content: `${style}

The photo shows: ${scene}

Reference photos (pass them to your image generation tool as reference images, to match the uniforms, the truck and the photo style; do not copy their exact scene):
${references.map((u) => `- ${u}`).join("\n")}

Create the image with your image generation tool and save it (PNG). Reply with only this line, using the public link of the image with its real file name and token:
<img src="${ORIGIN}/v1/images/FILE.png?token=...">`,
        },
      ],
    }),
  });
  if (!res.ok || !res.body) throw new Error(`Hermes answered ${res.status}`);
  const text = await streamText(res);

  let url = text.match(/https:\/\/[^\s"'<>)\]]+\/v1\/images\/[^\s"'<>)\]]+/)?.[0]?.replace(/&amp;/g, "&") ?? null;
  if (!url || !signed(url)) {
    const p = text.match(/(?:file:\/\/)?(\/opt\/data\/[^\s"'<>)\]]+\.(?:png|jpe?g|webp))/i)?.[1];
    if (p) {
      const r = await fetch(`${API_URL}/images/url`, { method: "POST", headers: auth, body: JSON.stringify({ path: p }), signal });
      url = r.ok ? ((await r.json().catch(() => null))?.url ?? null) : null;
    }
  }
  if (!url || !signed(url)) throw new Error(`no image link in the reply: ${text.replace(/token=[^"&\s]+/g, "token=…").slice(0, 160)}`);

  const img = await fetch(url, { signal });
  if (!img.ok || !(img.headers.get("content-type") ?? "").startsWith("image/")) throw new Error("the image link did not serve an image");
  return Buffer.from(await img.arrayBuffer());
}

let raw;
for (let attempt = 1; attempt <= 2 && !raw; attempt++) {
  try {
    raw = await paint();
  } catch (e) {
    console.error(`blog-image-hermes: attempt ${attempt} failed: ${e.message}`);
  }
}
if (!raw) fail("Hermes did not return an image; use a photo from the library instead (scripts/blog-images.mjs)");

// Same sizes as scripts/blog-images.mjs, so generated and library photos sit side by side.
const dir = path.join("public", "images", "blog", slug);
fs.mkdirSync(dir, { recursive: true });
const saved = [];
async function save(file, w, h, format) {
  const frame = sharp(raw).resize(w, h, { fit: "cover", position: "attention" });
  let buf;
  for (const quality of [82, 74, 66, 58]) {
    buf = format === "jpg" ? await frame.clone().jpeg({ quality, mozjpeg: true }).toBuffer() : await frame.clone().webp({ quality }).toBuffer();
    if (buf.length <= 350_000) break;
  }
  const out = path.join(dir, file);
  fs.writeFileSync(out, buf);
  saved.push(`${out} (${Math.round(buf.length / 1024)} KB)`);
}
if (name === "cover") {
  await save(`${slug}-cover.webp`, 1440, 810, "webp");
  await save(`${slug}-og.jpg`, 1200, 630, "jpg");
} else {
  await save(`${name}.webp`, 1200, 800, "webp");
}
console.log(saved.join("\n"));
