// Local long-form content for suburb pages that have no migrated legacy content.
// Council rules in the guides were checked on each council's own website and are linked inline.
import type { LegacySection } from "@/lib/legacy";
import { formatPrice, fromPrice, type CategoryId } from "./site";
import type { Suburb } from "./suburbs";
import type { RichGuide } from "./guides/types";
import { INNER_CITY_GUIDES } from "./guides/inner-city";
import { INNER_WEST_GUIDES } from "./guides/inner-west";
import { WESTERN_SYDNEY_GUIDES } from "./guides/western-sydney";

const GUIDES: Record<string, RichGuide> = { ...INNER_CITY_GUIDES, ...INNER_WEST_GUIDES, ...WESTERN_SYDNEY_GUIDES };

const price = (id: CategoryId) => formatPrice(fromPrice(id));

/** Builds body sections and local FAQs for a suburb page from its guide, or returns null if none exists. */
export function getSuburbGuide(suburb: Suburb): { body: LegacySection[]; faqs: { q: string; a: string }[]; faqHeading: string } | null {
  const g = GUIDES[suburb.slug];
  if (!g) return null;
  const body: LegacySection[] = [
    {
      heading: `Local Rubbish Removal for ${suburb.name} NSW ${suburb.postcode}`,
      blocks: [
        ...g.intro.map((text) => ({ type: "p" as const, text })),
        ...g.scenarios.flatMap((s) => [{ type: "h3" as const, text: s.h3 }, ...s.p.map((text) => ({ type: "p" as const, text }))]),
      ],
    },
    {
      heading: g.council.heading,
      blocks: [
        ...g.council.blocks,
        {
          type: "p",
          text: "Every load we collect goes to licensed Sydney sorting and transfer facilities, where up to 95% is recycled or donated.",
        },
      ],
    },
    ...g.extra,
    {
      heading: `How Much Does Rubbish Removal Cost in ${suburb.name}?`,
      blocks: [
        {
          type: "p",
          text: `Home and apartment jobs start from ${price("residential-rubbish-removal")}, business clear-outs from ${price("commercial-rubbish-removal")} and renovation or building waste from ${price("construction-rubbish-removal")}. The price covers the crew, the carrying, loading, the sweep-up and tip fees, and it's agreed before we lift anything.`,
        },
        {
          type: "p",
          text: "For a quick figure, try our [Quote Estimator](/quote-estimator), or WhatsApp us a few photos for a firm price. Weighing up a skip? Our [skip bin alternatives](/skip-bin-alternatives) page shows how a pickup compares.",
        },
      ],
    },
  ];
  return { body, faqs: g.faqs, faqHeading: `Quick Answers about ${suburb.name} Rubbish Removal` };
}
