import type { BlogBlock, BlogPost } from "./types";
import { post as cost } from "./posts/rubbish-removal-cost-sydney";
import { post as skip } from "./posts/skip-bin-vs-rubbish-removal-sydney";
import { post as wontTake } from "./posts/what-rubbish-removalists-wont-take";
import { post as mattress } from "./posts/how-to-dispose-of-a-mattress-sydney";
import { post as council } from "./posts/council-clean-up-vs-private-rubbish-removal";
import { post as garage } from "./posts/garage-clean-out-checklist";
import { post as estate } from "./posts/deceased-estate-clearance-guide";
import { post as recycling } from "./posts/where-does-rubbish-go-recycling-sydney";
import { post as greenWaste } from "./posts/green-waste-removal-sydney";

export type { BlogPost, BlogBlock } from "./types";
export { AUTHORS } from "./authors";

// To publish a post: add its file in ./posts, import it here and add it to this list (any order).
// Then run `node scripts/blog-images.mjs` for its images and `npm run check:blog` against a build.
const ALL: BlogPost[] = [cost, skip, wontTake, mattress, council, garage, estate, recycling, greenWaste];

/** Newest first; posts dated in the future stay hidden until a rebuild on or after that date. */
export const POSTS: BlogPost[] = ALL.filter((p) => p.published <= today()).sort(
  (a, b) => b.published.localeCompare(a.published) || ALL.indexOf(a) - ALL.indexOf(b),
);

function today() {
  return new Date().toISOString().slice(0, 10);
}

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const headingId = (b: Extract<BlogBlock, { type: "h2" }>) => b.id ?? slugify(b.text);

export const toc = (post: BlogPost) =>
  post.body.filter((b): b is Extract<BlogBlock, { type: "h2" }> => b.type === "h2").map((b) => ({ id: headingId(b), text: b.text }));

const stripInline = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");

/** Plain text of the whole article (answer, takeaways, body, FAQs) for word counts and feeds. */
export function plainText(post: BlogPost) {
  const parts: string[] = [post.answer, ...post.takeaways];
  for (const b of post.body) {
    if (b.type === "p" || b.type === "h2" || b.type === "h3") parts.push(b.text);
    else if (b.type === "list" || b.type === "steps") parts.push(...b.items);
    else if (b.type === "callout") parts.push(b.title, b.text);
    else if (b.type === "table") parts.push(...b.head, ...b.rows.flat());
    else if (b.type === "cta") parts.push(b.title, b.text);
  }
  for (const f of post.faqs) parts.push(f.q, f.a);
  return parts.map(stripInline).join(" ");
}

export const wordCount = (post: BlogPost) => plainText(post).split(/\s+/).filter(Boolean).length;
export const readingMinutes = (post: BlogPost) => Math.max(1, Math.round(wordCount(post) / 220));

/** Same-category posts first, then the newest others. */
export function relatedPosts(post: BlogPost, n = 3) {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  return [...others.filter((p) => p.category === post.category), ...others.filter((p) => p.category !== post.category)].slice(0, n);
}

/** Guides that support a given service page (used for internal links from service pages). */
export const postsForService = (serviceSlug: string, n = 3) => POSTS.filter((p) => p.services.includes(serviceSlug)).slice(0, n);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00+11:00`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "Australia/Sydney" });
