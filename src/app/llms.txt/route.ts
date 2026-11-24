import { CATEGORIES, servicesIn } from "@/content/services";
import { REGION_ORDER, SUBURBS } from "@/content/suburbs";
import { GENERAL_FAQS } from "@/content/faqs";
import { POSTS } from "@/content/blog";
import { EXCLUDED_ITEMS, FULL_LOAD_M3, GOOGLE_RATING, JOB_TYPES, PRICE_GUIDE, SITE, formatQuote, quoteFor, volumesFor } from "@/content/site";

// /llms.txt (https://llmstxt.org): a plain Markdown summary of the business for AI assistants and answer engines.
// Generated from the same content files as the pages, so it never drifts from the site. Prerendered at build time.
export const dynamic = "force-static";

const u = (path: string) => `${SITE.url}${path}`;

function build() {
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(
    `# ${SITE.name}`,
    "",
    `> Sydney owned and operated rubbish removal for homes, businesses and building sites across the ${SITE.areaServed}. ` +
      `A two-person crew does all the lifting, loading and sweep-up, with same day collection available and up to ${SITE.recycleRate} of what is collected recycled or donated.`,
    "",
    "## Key facts",
    "",
    `- Phone: ${SITE.phone} (${SITE.phoneE164})`,
    `- WhatsApp: ${SITE.whatsapp}`,
    `- Email: ${SITE.email}`,
    `- Address: ${SITE.address.full}`,
    `- Service area: ${SITE.areaServed}`,
    `- Hours: ${SITE.hours.map((h) => `${h.label} ${h.display}`).join("; ")}`,
    `- Google rating: ${GOOGLE_RATING.score} from ${GOOGLE_RATING.count} reviews`,
    "- Fixed price agreed before any work starts; the price covers labour, loading, sweep-up and disposal fees.",
    "- Same day collection is usually available when booked before 1pm.",
    "- Price match: beats a written like-for-like quote from another licensed operator by 10%.",
    "",
    "## Pricing guide",
    "",
    `Fixed prices by the space the rubbish takes up in the truck (a full truck is ${FULL_LOAD_M3} cubic metres). The price covers labour, loading, sweep-up and disposal, and is confirmed from photos or on site before work starts.`,
    "",
  );
  for (const j of JOB_TYPES) {
    const prices = volumesFor(j.id)
      .map((v) => `${v.id === "single" ? "minimum pickup (up to 1 m³)" : v.label} ${formatQuote(quoteFor(j.id, v.id))}`)
      .join(", ");
    push(`- ${j.label} (${j.blurb.toLowerCase()}): ${prices}.`);
  }
  push("", "Guide prices for bigger jobs (confirmed from photos or a site visit):", "");
  for (const g of PRICE_GUIDE) push(`- ${g.title}: ${g.items.map((i) => `${i.label.toLowerCase()} ${i.price}`).join("; ")}.`);
  push("", `Not accepted: ${EXCLUDED_ITEMS.join("; ").toLowerCase()}.`, "");

  push(
    "## Main pages",
    "",
    `- [Home](${SITE.url}): overview, how it works, reviews and quote form`,
    `- [All services](${u("/services")}): residential, commercial and construction rubbish removal`,
    `- [Price estimator](${u("/quote-estimator")}): instant price range by load size`,
    `- [Service areas](${u("/location")}): every Sydney suburb and region covered`,
    `- [About](${u("/about")}): the team, recycling and how jobs are run`,
    `- [Contact and free quote](${u("/contact")}): phone, WhatsApp, email and quote form`,
    `- [Guides and tips](${u("/blog")}): answers to common rubbish removal questions in Sydney`,
    "",
  );

  for (const cat of CATEGORIES) {
    push(`## ${cat.name}`, "", `${cat.audience}.`, "");
    for (const s of servicesIn(cat.id)) push(`- [${s.name}](${u(`/${s.slug}`)}): ${s.summary}`);
    push("");
  }

  push("## Suburbs with a dedicated page", "");
  for (const region of REGION_ORDER) {
    const list = SUBURBS.filter((s) => s.region === region);
    if (!list.length) continue;
    push(`### ${region}`, "");
    for (const s of list) push(`- [Rubbish removal ${s.name} ${s.postcode}](${u(`/${s.slug}`)}): ${s.council}`);
    push("");
  }

  push("## Guides (quick answers)", "");
  for (const p of POSTS) push(`- [${p.h1}](${u(`/blog/${p.slug}`)}) (updated ${p.updated}): ${p.answer}`);
  push("");

  push("## Frequently asked questions", "");
  for (const f of GENERAL_FAQS) push(`### ${f.q}`, "", f.a, "");

  push(
    "## Optional",
    "",
    `- [Sitemap (HTML)](${u("/sitemap")})`,
    `- [XML sitemap](${u("/sitemap.xml")})`,
    `- [Blog RSS feed](${u("/blog/rss.xml")})`,
    `- [Privacy policy](${u("/policy")})`,
    `- [Terms of service](${u("/terms")})`,
    "",
  );
  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=86400" },
  });
}
