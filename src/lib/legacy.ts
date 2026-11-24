// Unique long-form content migrated verbatim from the indexed site.
// Keeping it intact protects existing rankings while the page around it is rebuilt.
import data from "@/content/legacy.json";
import { formatPrice, quoteFor } from "@/content/site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "qa"; q: string; a: string };

export type LegacySection = { heading: string; blocks: Block[] };

export type LegacyPage = {
  h1: string | null;
  sub: string | null;
  title: string;
  description: string;
  sections: LegacySection[];
};

// Prices in the copy are written as {{price.*}} placeholders and filled from the price list in site.ts,
// so a price change never leaves an old number behind on a suburb or service page.
const PRICE_TOKENS: Record<string, string> = {
  "price.household": formatPrice(quoteFor("residential-rubbish-removal", "single").low),
  "price.full": formatPrice(quoteFor("residential-rubbish-removal", "8").low),
  "price.green": formatPrice(quoteFor("green-waste-removal", "1").low),
  "price.builder": formatPrice(quoteFor("construction-rubbish-removal", "2").low),
  "price.commercial": formatPrice(quoteFor("commercial-rubbish-removal", "2").low),
};

function fillPrices<T>(x: T): T {
  if (typeof x === "string") {
    return x.replace(/\{\{(price\.[a-z]+)\}\}/g, (m, key: string) => {
      if (!PRICE_TOKENS[key]) throw new Error(`Unknown price placeholder ${m} in legacy.json`);
      return PRICE_TOKENS[key];
    }) as T;
  }
  if (Array.isArray(x)) return x.map(fillPrices) as T;
  if (x && typeof x === "object") return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, fillPrices(v)])) as T;
  return x;
}

const pages = fillPrices(data as unknown as Record<string, LegacyPage>);

export function getLegacy(slug: string): LegacyPage | undefined {
  return pages[slug];
}

const isQuickAnswers = (s: LegacySection) =>
  s.blocks.some((b) => b.type === "qa") && /quick answers|questions/i.test(s.heading);

/** Splits a page into body sections and its local FAQ (Q&A pairs + closing CTA line). */
export function splitLegacy(slug: string) {
  const page = getLegacy(slug);
  if (!page) return { body: [] as LegacySection[], faqs: [] as { q: string; a: string }[], faqHeading: null as string | null };
  const faqSection = page.sections.find(isQuickAnswers);
  const body = page.sections.filter((s) => s !== faqSection);
  const faqs = (faqSection?.blocks ?? [])
    .filter((b): b is Extract<Block, { type: "qa" }> => b.type === "qa")
    .map(({ q, a }) => ({ q, a }));
  return { body, faqs, faqHeading: faqSection?.heading ?? null };
}

/** Strip inline markdown for plain-text contexts (JSON-LD). */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "");
