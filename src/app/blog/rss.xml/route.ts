import { AUTHORS, POSTS } from "@/content/blog";
import { SITE } from "@/content/site";

// RSS feed for the blog: lets feed readers, aggregators and AI crawlers pick up new guides quickly.
export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const rfc822 = (iso: string) => new Date(`${iso}T08:00:00+11:00`).toUTCString();

export function GET() {
  const items = POSTS.map((p) => {
    const url = `${SITE.url}/blog/${p.slug}`;
    return `    <item>
      <title>${esc(p.h1)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(p.published)}</pubDate>
      <category>${esc(p.category)}</category>
      <dc:creator>${esc(AUTHORS[p.author].name)}</dc:creator>
      <description>${esc(p.answer)}</description>
      <enclosure url="${SITE.url}${p.ogImage}" type="image/jpeg" length="0" />
    </item>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${esc(SITE.name)}: Guides &amp; Tips</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${SITE.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Rubbish removal prices, disposal rules and clear-out guides for Sydney.</description>
    <language>en-au</language>
    <lastBuildDate>${POSTS[0] ? rfc822(POSTS[0].updated) : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
