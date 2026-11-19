import type { Block } from "@/lib/legacy";

type BodyBlock = Exclude<Block, { type: "qa" }>;

/**
 * Long-form local content for a suburb page, matching the depth of the migrated legacy pages.
 * Text supports inline markdown links: [label](/internal-path) or [label](https://official-source).
 */
export type RichGuide = {
  /** 2–3 paragraphs introducing the area: location, housing, access, who lives and works there. */
  intro: string[];
  /** 2–3 local job types, each an h3 with 1–2 paragraphs that link to the matching service page. */
  scenarios: { h3: string; p: string[] }[];
  /** Council clean-up section. Rules must be verified on the council's own site and linked. */
  council: { heading: string; blocks: BodyBlock[] };
  /** 1–2 further local sections (e.g. strata, recycling drop-offs, renovations). */
  extra: { heading: string; blocks: BodyBlock[] }[];
  /** 4 local questions and answers. */
  faqs: { q: string; a: string }[];
};
