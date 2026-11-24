// Blog QA: checks every published post on a running build against the publishing rules in docs/BLOG-GUIDELINES.md.
//
//   npm run build && npm start            (in one terminal)
//   npm run check:blog                    (defaults to http://localhost:3000)
//   npm run check:blog -- https://www.nationalrubbishremoval.com.au   (check production after deploy)
//
// Exits with code 1 if any post fails a rule, so it can gate a deploy.

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const RULES = {
  titleLen: [35, 65],
  descLen: [120, 165],
  answerWords: [30, 75],
  minWords: 900,
  minH2: 4,
  minImages: 3, // cover + at least 2 in the article
  minInternalLinks: 4, // links from the article to service, estimator, contact or other guides
  minFaqs: 4,
};

let failures = 0;
let warnings = 0;
const fail = (where, msg) => { failures++; console.log(`  ✗ ${where}: ${msg}`); };
const warn = (where, msg) => { warnings++; console.log(`  ! ${where}: ${msg}`); };

const get = async (path) => {
  const res = await fetch(path.startsWith("http") ? path : `${BASE}${path}`, { redirect: "manual" });
  return { status: res.status, text: res.status === 200 ? await res.text() : "", type: res.headers.get("content-type") ?? "" };
};
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
const meta = (html, attr, name) => decode(html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`))?.[1] ?? html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`))?.[1] ?? "");
const text = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const words = (s) => s.split(/\s+/).filter(Boolean).length;
const inRange = (n, [lo, hi]) => n >= lo && n <= hi;

const checkedAssets = new Map();
async function assetOk(src) {
  if (!checkedAssets.has(src)) checkedAssets.set(src, fetch(`${BASE}${src}`, { method: "HEAD" }).then((r) => r.ok).catch(() => false));
  return checkedAssets.get(src);
}

async function checkPost(path) {
  const where = path;
  const before = failures;
  const { status, text: html } = await get(path);
  if (status !== 200) return fail(where, `status ${status}`);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (!inRange(title.length, RULES.titleLen)) fail(where, `title is ${title.length} chars (want ${RULES.titleLen.join("–")}): "${title}"`);

  const desc = meta(html, "name", "description");
  if (!inRange(desc.length, RULES.descLen)) fail(where, `meta description is ${desc.length} chars (want ${RULES.descLen.join("–")})`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "";
  if (!canonical.endsWith(path)) fail(where, `canonical "${canonical}" does not end with ${path}`);

  if (meta(html, "property", "og:type") !== "article") fail(where, "og:type is not article");
  const ogImage = meta(html, "property", "og:image");
  if (!ogImage) fail(where, "missing og:image");
  else if (!(await assetOk(new URL(ogImage).pathname))) fail(where, `og:image not found: ${ogImage}`);

  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) fail(where, `${h1s} <h1> tags (want exactly 1)`);

  // Structured data
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    try { const j = JSON.parse(m[1]); return j["@graph"] ?? [j]; } catch { fail(where, "invalid JSON-LD"); return []; }
  });
  const types = ld.map((n) => n["@type"]);
  for (const t of ["BlogPosting", "FAQPage", "BreadcrumbList", "LocalBusiness"]) if (!types.includes(t)) fail(where, `missing ${t} schema`);
  const article = ld.find((n) => n["@type"] === "BlogPosting");
  if (article) {
    for (const k of ["headline", "datePublished", "dateModified", "author", "publisher", "image"]) if (!article[k]) fail(where, `BlogPosting missing ${k}`);
    if (article.headline?.length > 110) fail(where, "BlogPosting headline over 110 chars");
  }
  const faq = ld.find((n) => n["@type"] === "FAQPage");
  if (faq && faq.mainEntity.length < RULES.minFaqs) fail(where, `${faq.mainEntity.length} FAQs (want ${RULES.minFaqs}+)`);

  // Article content
  const articleHtml = html.match(/<article>([\s\S]*?)<\/article>/)?.[1] ?? "";
  if (!articleHtml) return fail(where, "no <article> element");
  const body = text(articleHtml);
  if (words(body) < RULES.minWords) fail(where, `${words(body)} words in article (want ${RULES.minWords}+)`);

  const answer = text(articleHtml.match(/<p data-speakable[^>]*>([\s\S]*?)<\/p>/)?.[1] ?? "");
  if (!inRange(words(answer), RULES.answerWords)) fail(where, `quick answer is ${words(answer)} words (want ${RULES.answerWords.join("–")})`);

  const h2s = articleHtml.match(/<h2[^>]*id="[^"]+"/g)?.length ?? 0;
  if (h2s < RULES.minH2) fail(where, `${h2s} section headings (want ${RULES.minH2}+)`);

  const imgs = [...articleHtml.matchAll(/<img\b([^>]*)>/g)].map((m) => ({
    alt: decode(m[1].match(/alt="([^"]*)"/)?.[1] ?? ""),
    src: decode(m[1].match(/src="([^"]*)"/)?.[1] ?? ""),
  })).filter((i) => i.src.includes("/images/blog/"));
  if (imgs.length < RULES.minImages) fail(where, `${imgs.length} blog images (want ${RULES.minImages}+: 1 cover + 2 in article)`);
  for (const i of imgs) {
    if (i.alt.length < 25) fail(where, `image alt too short: ${i.src}`);
    if (/^(image|photo|picture) of/i.test(i.alt)) warn(where, `alt starts with "image of": ${i.src}`);
    if (!(await assetOk(i.src))) fail(where, `image not found: ${i.src}`);
  }

  const links = [...articleHtml.matchAll(/<a[^>]*href="(\/[^"#]*)[^"]*"/g)].map((m) => m[1]).filter((h) => h !== "/" && h !== "/blog" && h !== path);
  const unique = [...new Set(links)];
  if (unique.length < RULES.minInternalLinks) fail(where, `${unique.length} internal links in article (want ${RULES.minInternalLinks}+)`);
  for (const href of unique) {
    const r = await fetch(`${BASE}${href}`, { method: "HEAD", redirect: "manual" });
    if (r.status !== 200) fail(where, `internal link ${href} returns ${r.status}`);
  }

  if (failures === before) console.log(`  ✓ ${path}  (${words(body)} words, ${imgs.length} images, ${unique.length} internal links, ${faq?.mainEntity.length ?? 0} FAQs)`);
  return { title, desc };
}

async function main() {
  console.log(`Checking blog at ${BASE}\n`);

  const index = await get("/blog");
  if (index.status !== 200) { fail("/blog", `status ${index.status}`); return; }
  const posts = [...new Set([...index.text.matchAll(/href="(\/blog\/[a-z0-9-]+)"/g)].map((m) => m[1]))].filter((p) => p !== "/blog/rss.xml");
  console.log(`/blog lists ${posts.length} posts`);
  if (!posts.length) fail("/blog", "no posts found");

  const sitemap = await get("/sitemap.xml");
  const rss = await get("/blog/rss.xml");
  const llms = await get("/llms.txt");
  if (!rss.type.includes("rss")) fail("/blog/rss.xml", `content-type is ${rss.type}`);
  for (const p of posts) {
    if (!sitemap.text.includes(`${p}</loc>`)) fail("/sitemap.xml", `missing ${p}`);
    if (!rss.text.includes(`${p}</link>`)) fail("/blog/rss.xml", `missing ${p}`);
    if (!llms.text.includes(`${p})`)) fail("/llms.txt", `missing ${p}`);
  }
  const robots = await get("/robots.txt");
  if (/Disallow: \/blog/i.test(robots.text)) fail("/robots.txt", "blog is blocked");

  console.log("\nPosts:");
  const seenTitles = new Set();
  const seenDescs = new Set();
  for (const p of posts) {
    const r = await checkPost(p);
    if (!r) continue;
    if (seenTitles.has(r.title)) fail(p, "duplicate title");
    if (seenDescs.has(r.desc)) fail(p, "duplicate meta description");
    seenTitles.add(r.title);
    seenDescs.add(r.desc);
  }

  console.log(`\n${failures ? `✗ ${failures} problem(s)` : "✓ All blog checks passed"}${warnings ? `, ${warnings} warning(s)` : ""}`);
  process.exitCode = failures ? 1 : 0;
}

main().catch((e) => { console.error(e); process.exitCode = 1; });
