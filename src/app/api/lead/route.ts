// Website quote form → GoHighLevel. Runs on the Node server, so the GHL token never reaches the browser.
// 1. Upsert the contact (matched by phone/email), 2. tag it, 3. add a note with the job details,
// 4. copy the Cloudinary photos/videos into the contact's "Job Photos" file field,
// 5. open an opportunity in the marketing pipeline (unless the contact already has an open one there).
//
// Configured with environment variables (Hostinger → Node.js app → Environment variables; locally .env.local):
//   GHL_TOKEN              Private Integration token. Scopes: contacts.write, contacts.readonly, forms.write,
//                          opportunities.readonly, opportunities.write
//   GHL_LOCATION_ID        Settings → Business Profile → Location ID
//   GHL_FILE_FIELD_ID      ID of the contact File Upload field "Job Photos" (optional; photo links still go in the note)
//   GHL_PIPELINE_ID        Pipeline for new website leads (optional)
//   GHL_PIPELINE_STAGE_ID  Stage within that pipeline (optional; defaults to the first stage)

import { randomUUID } from "node:crypto";
import { SITE } from "@/content/site";

export const maxDuration = 120;

const GHL = "https://services.leadconnectorhq.com";
const TAGS = ["website-lead"];
const OPPORTUNITY_SOURCE = "Website";

const env = () => ({
  token: process.env.GHL_TOKEN ?? "",
  locationId: process.env.GHL_LOCATION_ID ?? "",
  fileFieldId: process.env.GHL_FILE_FIELD_ID ?? "",
  pipelineId: process.env.GHL_PIPELINE_ID ?? "",
  stageId: process.env.GHL_PIPELINE_STAGE_ID ?? "",
});

type Photo = { url: string; name: string; type: "image" | "video" };

const json = (status: number, body: Record<string, unknown>) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Australian numbers → E.164 so GHL matches existing contacts and can SMS them.
function auPhone(p: string) {
  const d = p.replace(/\D/g, "");
  if (d.startsWith("61")) return `+${d}`;
  if (d.startsWith("0") && d.length === 10) return `+61${d.slice(1)}`;
  if (d.length === 9 && d.startsWith("4")) return `+61${d}`;
  return p;
}

async function ghl(token: string, method: string, path: string, body?: unknown) {
  const headers: Record<string, string> = { Authorization: `Bearer ${token}`, Version: "2021-07-28", Accept: "application/json" };
  let payload: BodyInit | undefined;
  if (body instanceof FormData) payload = body;
  else if (body !== undefined) {
    headers["Content-Type"] = "application/json";
    payload = JSON.stringify(body);
  }
  const res = await fetch(`${GHL}${path}`, { method, headers, body: payload, signal: AbortSignal.timeout(60_000) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export async function POST(request: Request) {
  const cfg = env();
  if (!cfg.token || !cfg.locationId) return json(500, { ok: false, error: "Server not configured" });

  const raw = await request.text();
  if (raw.length > 64 * 1024) return json(413, { ok: false, error: "Too large" });
  let input: Record<string, unknown>;
  try {
    input = JSON.parse(raw);
    if (!input || typeof input !== "object") throw new Error();
  } catch {
    return json(400, { ok: false, error: "Bad request" });
  }

  const str = (k: string, max = 500) => String(input[k] ?? "").trim().slice(0, max);

  // Honeypot: bots fill every field.
  if (str("company")) return json(200, { ok: true });

  const name = str("name", 120);
  const phoneRaw = str("phone", 40);
  let email = str("email", 200);
  const location = str("location", 120);
  if (!name || phoneRaw.replace(/\D/g, "").length < 8 || !location) {
    return json(422, { ok: false, error: "Missing name, phone or suburb" });
  }
  if (email && !/^\S+@\S+\.\S+$/.test(email)) email = "";
  const phone = auPhone(phoneRaw);
  const [firstName, ...rest] = name.split(/\s+/);

  const services = (Array.isArray(input.services) ? input.services : [])
    .map((s) => (s && typeof s === "object" ? String((s as { label?: unknown }).label ?? "").slice(0, 60) : ""))
    .filter(Boolean);

  // Only accept media from our own Cloudinary account (stops the server fetching arbitrary URLs).
  const cloudPrefix = `https://res.cloudinary.com/${SITE.cloudinaryCloud}/`;
  const photos: Photo[] = (Array.isArray(input.photos) ? input.photos : [])
    .slice(0, 6)
    .flatMap((p) => {
      const o = (p ?? {}) as { url?: unknown; name?: unknown; type?: unknown };
      const url = String(o.url ?? "");
      if (!url.startsWith(cloudPrefix)) return [];
      return [{ url, name: String(o.name ?? "photo").slice(0, 120), type: o.type === "video" ? "video" : "image" } as Photo];
    });

  // 1. Upsert contact. Tags are added separately because upsert would overwrite existing tags.
  const contact = Object.fromEntries(
    Object.entries({
      locationId: cfg.locationId,
      firstName: firstName || name,
      lastName: rest.join(" "),
      name,
      phone,
      email,
      city: location,
      source: "Website quote form",
    }).filter(([, v]) => v !== ""),
  );
  const up = await ghl(cfg.token, "POST", "/contacts/upsert", contact);
  const contactId: string | undefined = up.data?.contact?.id;
  if (!up.ok || !contactId) {
    console.error("GHL upsert failed", up.status, JSON.stringify(up.data));
    return json(502, { ok: false, error: "CRM unavailable" });
  }

  // 2. Tags.
  await ghl(cfg.token, "POST", `/contacts/${contactId}/tags`, {
    tags: [...TAGS, ...services.map((s) => `service: ${s.toLowerCase()}`)],
  });

  // 3. Note with everything the crew needs to quote.
  const preferred = `${str("preferredDate", 20)} ${str("preferredTime", 40)}`.trim();
  const lines = [
    "Website quote request",
    `Service: ${services.length ? services.join(", ") : "—"}`,
    `Load size: ${str("size", 60) || "—"}`,
    `Online estimate: ${str("estimate", 60) || "—"}`,
    `Suburb: ${location}`,
    `Preferred: ${preferred || "—"}`,
    `Message: ${str("message", 2000) || "—"}`,
    `Page: ${str("page", 200)}`,
  ];
  if (photos.length) lines.push("", "Photos/videos:", ...photos.map((p) => p.url));
  await ghl(cfg.token, "POST", `/contacts/${contactId}/notes`, { body: lines.join("\n") });

  // 4. Attach media to the File Upload field. GHL accepts JPG/PNG/GIF/MP4 (not WebP/HEIC),
  //    so ask Cloudinary for a JPG (or MP4) copy, capped in size.
  let attached = 0;
  if (cfg.fileFieldId && photos.length) {
    const form = new FormData();
    await Promise.all(
      photos.map(async (p, i) => {
        const isVideo = p.type === "video";
        const transform = isVideo ? "f_mp4,q_auto,w_1280,c_limit" : "f_jpg,q_auto,w_2000,c_limit";
        const ext = isVideo ? "mp4" : "jpg";
        const url = p.url.replace("/upload/", `/upload/${transform}/`).replace(/\.[a-z0-9]+$/i, `.${ext}`);
        try {
          const res = await fetch(url, { signal: AbortSignal.timeout(60_000) });
          if (!res.ok) return;
          const buf = await res.arrayBuffer();
          if (!buf.byteLength || buf.byteLength > 45 * 1024 * 1024) return;
          const base = p.name.replace(/\.[^.]+$/, "") || `photo-${i + 1}`;
          form.append(`${cfg.fileFieldId}_${randomUUID()}`, new Blob([buf], { type: isVideo ? "video/mp4" : "image/jpeg" }), `${base}.${ext}`);
          attached++;
        } catch {
          // Skip media Cloudinary can't deliver; the link is still in the note.
        }
      }),
    );
    if (attached) {
      const q = new URLSearchParams({ contactId, locationId: cfg.locationId });
      const r = await ghl(cfg.token, "POST", `/forms/upload-custom-files?${q}`, form);
      if (!r.ok) {
        console.error("GHL file upload failed", r.status, JSON.stringify(r.data));
        attached = 0;
      }
    }
  }

  // 5. Opportunity, skipped if the contact already has an open one in this pipeline.
  let opportunity: "created" | "existing" | null = null;
  if (cfg.pipelineId) {
    const q = new URLSearchParams({ location_id: cfg.locationId, contact_id: contactId, pipeline_id: cfg.pipelineId, status: "open", limit: "1" });
    const found = await ghl(cfg.token, "GET", `/opportunities/search?${q}`);
    if (found.data?.opportunities?.[0]?.id) {
      opportunity = "existing";
    } else {
      const low = str("estimate", 60).match(/\d[\d,]*/)?.[0];
      const value = low ? Number(low.replace(/,/g, "")) : 0;
      const opp = await ghl(cfg.token, "POST", "/opportunities/", {
        locationId: cfg.locationId,
        pipelineId: cfg.pipelineId,
        ...(cfg.stageId && { pipelineStageId: cfg.stageId }),
        contactId,
        name: `${name} – ${services.length ? services.join(", ") : "Rubbish removal"} (${location})`,
        status: "open",
        source: OPPORTUNITY_SOURCE,
        ...(value > 0 && { monetaryValue: value }),
      });
      if (opp.ok) opportunity = "created";
      else console.error("GHL opportunity failed", opp.status, JSON.stringify(opp.data));
    }
  }

  return json(200, { ok: true, attached, opportunity });
}
