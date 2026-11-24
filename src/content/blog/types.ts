import type { Faq } from "@/content/faqs";

// Blog content model. One file per post in ./posts, registered in ./index.ts.
// Inline text supports [label](/internal-link), [label](https://external) and **bold**.

export type BlogImage = {
  /** Path under /public, e.g. /images/blog/<slug>/<descriptive-name>.webp */
  src: string;
  /** Describe what is in the photo, naturally including the topic. Never "image of". */
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type BlogBlock =
  | { type: "p"; text: string }
  /** H2s become the table of contents. Phrase them as the question people search for. */
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: string[] }
  | ({ type: "image" } & BlogImage)
  | { type: "callout"; tone: "tip" | "warning" | "note"; title: string; text: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  /** A real Google review from REVIEWS in src/content/site.ts, matched by reviewer name. */
  | { type: "review"; name: string }
  | { type: "cta"; title: string; text: string };

export type BlogCategory = "Pricing & Costs" | "How-To Guides" | "Disposal & Recycling" | "Home & Family" | "Business & Building";

export type BlogPost = {
  slug: string;
  /** <title>: 50–60 characters, main keyword first, ends with a hook (year, Sydney, "guide"). */
  title: string;
  h1: string;
  /** Meta description: 140–160 characters, answers the question and gives a reason to click. */
  description: string;
  /** Card text on /blog. One or two sentences. */
  excerpt: string;
  category: BlogCategory;
  primaryKeyword: string;
  keywords: string[];
  /** ISO dates (YYYY-MM-DD). Bump `updated` whenever facts or prices change. */
  published: string;
  updated: string;
  author: AuthorId;
  cover: BlogImage;
  /** 1200x630 JPEG used for social shares. */
  ogImage: string;
  /** The 40–60 word direct answer shown first. Written to be quoted by Google, ChatGPT and Perplexity. */
  answer: string;
  takeaways: string[];
  body: BlogBlock[];
  faqs: Faq[];
  /** Service slugs this post supports (links back to money pages). */
  services: string[];
};

export type AuthorId = "nrr-crew";

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  /** "Person" once a named, real team member is the author (better for E-E-A-T). */
  kind: "Organization" | "Person";
  image?: string;
};
