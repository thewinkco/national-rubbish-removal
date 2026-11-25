import { JOB_TYPES, PRICE_GUIDE, VOLUMES, formatQuote, quoteFor, type JobType, type VolumeId } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "rubbish-removal-cost-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;
// Every price comes from the price list in src/content/site.ts, so this post updates itself when prices change.
const H: JobType = "residential-rubbish-removal";
const G: JobType = "green-waste-removal";
const B: JobType = "construction-rubbish-removal";
const p = (job: JobType, vol: VolumeId) => formatQuote(quoteFor(job, vol));
const guide = (label: string) => PRICE_GUIDE.flatMap((g) => g.items).find((i) => i.label === label)!.price;

export const post: BlogPost = {
  slug,
  title: "How Much Does Rubbish Removal Cost in Sydney? (2026)",
  h1: "How Much Does Rubbish Removal Cost in Sydney? A 2026 Price Guide",
  description: `Sydney rubbish removal costs ${p(H, "single")} for a minimum pickup up to ${p(H, "8")} for a full 8 m³ truck. Real 2026 prices by load size, plus estate and strip-out guides.`,
  excerpt: "Real 2026 prices by load size for household, business and building waste, plus the five things that push a quote up or down.",
  category: "Pricing & Costs",
  primaryKeyword: "rubbish removal cost sydney",
  keywords: ["how much does rubbish removal cost", "rubbish removal prices sydney", "junk removal cost", "cost per cubic metre rubbish removal", "hard rubbish removal price", "best rubbish removal sydney"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "Customer holding a phone showing a fixed price rubbish removal quote on WhatsApp, with an NRR truck parked by Sydney Harbour",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `Rubbish removal in Sydney with NRR costs ${p(H, "single")} for a minimum pickup (one bulky item), ${p(H, "4")} for half a truck (4 m³) and ${p(H, "8")} for a full 8 m³ truck of household rubbish. Clean green waste is cheaper, from ${p(G, "1")}, while mixed builder waste starts at ${p(B, "2")} for 2 m³ because it costs more to tip.`,
  takeaways: [
    "You pay for the space your rubbish takes up in the truck (cubic metres), not the number of items.",
    `Household pickups start at ${p(H, "single")}, clean green waste at ${p(G, "1")}, and builder or commercial loads at ${p(B, "2")}.`,
    "Labour, loading, transport, tip fees and sweep-up should all be in the price. Ask if they are not.",
    "Heavy materials (bricks, concrete, soil) cost more per cubic metre because tip fees are charged by weight.",
    "Send photos before booking and you can lock a fixed price before anyone lifts a thing.",
  ],
  body: [
    { type: "h2", text: "How is rubbish removal priced in Sydney?" },
    {
      type: "p",
      text: "Almost every Sydney rubbish removalist prices by **volume**: how much of the truck your rubbish fills. Our truck holds 8 cubic metres (m³), roughly the size of a large skip bin or a single garage packed waist-high. Quotes are usually given by the cubic metre or by fractions of a truck: quarter, half, three-quarter and full.",
    },
    {
      type: "p",
      text: "Volume pricing is fair because it reflects what actually costs money: crew time to carry and load, truck space, and the tip fee at the transfer station. It also means you can estimate the cost yourself before you call anyone. Our [price estimator](/quote-estimator) does the maths for you in about ten seconds.",
    },
    {
      type: "image",
      src: img("photo-quote-rubbish-pile-sydney.webp"),
      alt: "Sydney homeowner photographing a pile of old furniture and rubbish bags on the driveway to get a photo quote",
      caption: "A couple of photos from two angles is usually enough for an accurate fixed price.",
    },
    { type: "h2", text: "Rubbish removal prices by load size (2026)" },
    {
      type: "p",
      text: "These are our prices today across the Sydney metro area. Household, green waste and builder waste are fixed by load size; commercial loads show a range. Every price includes the two-person crew, all lifting and loading, transport, tip fees and a sweep-up. Heavy loads and difficult access are quoted from photos (more on that below).",
    },
    {
      type: "table",
      caption: "National Rubbish Removal prices, Sydney metro, including labour, loading and tip fees",
      head: ["Load size", "Roughly", ...JOB_TYPES.map((j) => j.label)],
      rows: VOLUMES.map((v) => [v.label, v.hint, ...JOB_TYPES.map((j) => (j.tiers[v.id] ? p(j.id, v.id) : "–"))]),
    },
    {
      type: "p",
      text: `Bigger jobs are priced as a whole job rather than by the load. As a guide, a single-room estate clearance is ${guide("Single room")}, a three-bedroom home ${guide("3 bedroom home")}, and a standard bathroom strip-out ${guide("Standard bathroom strip-out")}. See every guide price on our [price guide](/quote-estimator#bigger-jobs). Either way, you get the number before work starts.`,
    },
    { type: "h2", text: "What makes a rubbish removal quote go up or down?" },
    {
      type: "image",
      src: img("crew-loading-truck-volume-pricing.webp"),
      alt: "Two-person NRR crew loading boxes and furniture into a rubbish removal truck, showing how truck space determines the price",
      caption: "Loaded tightly, the same pile takes less room in the truck, and costs less.",
    },
    { type: "h3", text: "1. Volume" },
    { type: "p", text: "The biggest factor by far. A couch, a mattress and ten bags is roughly a quarter truck. A single garage packed to the ceiling is usually a full truck or more." },
    { type: "h3", text: "2. Weight and material" },
    {
      type: "p",
      text: "Transfer stations charge by the tonne, and the NSW waste levy is added on top. A cubic metre of bricks or concrete can weigh more than a tonne, while a cubic metre of cardboard weighs very little. That's why [brick and concrete removal](/brick-and-concrete-removal) costs more per m³ than household junk.",
    },
    { type: "h3", text: "3. Access" },
    { type: "p", text: "Ground-floor driveway pickups are fastest. Third-floor walk-ups, long hallways, steep back yards or a car park with a low ceiling take longer, and a fair quote reflects that." },
    { type: "h3", text: "4. Dismantling" },
    { type: "p", text: "Flat-pack wardrobes, office cubicles, cubby houses and sheds take time to break down before they can be loaded. Mention them when you ask for a quote." },
    { type: "h3", text: "5. Special items" },
    { type: "p", text: "Fridges, mattresses and tyres often carry an extra disposal fee at the tip because they need special handling. A good removalist tells you about this upfront rather than adding it later." },
    {
      type: "image",
      src: img("brick-concrete-rubble-heavy-load.webp"),
      alt: "NRR crew in hi-vis loading broken bricks and concrete rubble into a truck, a heavy load that costs more per cubic metre",
      caption: "Bricks and concrete are priced higher per m³ because tip fees are charged by weight.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: how to get the lowest price",
      text: "Put everything in one spot near the driveway if you can, break down boxes, and bag loose small items. A tidy, accessible pile loads faster and packs tighter, which can drop a quote by a quarter-truck.",
    },
    { type: "h2", text: "Is a rubbish removal service cheaper than a skip bin?" },
    {
      type: "p",
      text: "For most household jobs, yes, or close enough that the time saved makes it the better deal. A skip bin price covers the bin only: you still do the lifting, you may need a council permit if it sits on the street, and overloading or putting in the wrong material brings extra fees. We compare the two in detail in [skip bin vs rubbish removal](/blog/skip-bin-vs-rubbish-removal-sydney).",
    },
    { type: "h2", text: "Are there hidden fees to watch for?" },
    {
      type: "list",
      items: [
        "**Tip fees charged separately.** Ask whether the quote includes disposal. Ours always does.",
        "**\"From\" prices.** A low headline price that turns into a much bigger bill on the day.",
        "**Per-item surcharges** for mattresses, tyres or fridges that weren't mentioned.",
        "**Waiting time** if the crew has to wait for access or for you to decide what goes.",
      ],
    },
    {
      type: "p",
      text: "The best rubbish removal quote isn't always the cheapest one. It's the one that puts the lifting, tip fees and sweep-up in writing, from an insured crew with real local reviews. A cheap price without those has a habit of growing on the day. Our [9 checks before you book](/blog/best-rubbish-removal-sydney) walk through how to compare quotes.",
    },
    { type: "review", name: "Roxy Rox" },
    { type: "h2", text: "How do I get an exact price?" },
    {
      type: "steps",
      items: [
        "Take two or three photos of everything that's going, with something for scale (a door, a car).",
        "Send them on [WhatsApp](https://wa.me/61418665429) or through the [quote form](/contact#quote-form), with your suburb and any stairs or tricky access.",
        "Get a fixed price back, usually the same day.",
        "Say yes and pick a time. Same day pickup is usually available if you book before 1pm.",
      ],
    },
    {
      type: "cta",
      title: "Want a ballpark right now?",
      text: "Pick the type of rubbish and the load size in our estimator and see your price in seconds. No phone number needed.",
    },
  ],
  faqs: [
    {
      q: "How do I choose the best rubbish removal company in Sydney?",
      a: "Look for a fixed written price that includes labour, tip fees and sweep-up, proof of insurance, genuine Google reviews from local customers, and a straight answer about which licensed facilities they use. Be wary of cash-only quotes far below everyone else's.",
    },
    {
      q: "How much does it cost to remove a single item like a couch or mattress in Sydney?",
      a: `A single bulky item is a minimum pickup: ${p(H, "single")} for household items, covering anything up to 1 m³. A full cubic metre is ${p(H, "1")}, so it's worth clearing anything else at the same time.`,
    },
    {
      q: "Is rubbish removal priced per hour or per load?",
      a: "We price per load (by volume), with a fixed price agreed before we start. Bigger jobs like deceased estates, strip-outs and factory clear-outs get a whole-job price from photos or a walk-through, and our price guide shows the usual ranges.",
    },
    {
      q: "Does the price include tip fees?",
      a: "With National Rubbish Removal, yes. The price you agree to covers labour, loading, transport, disposal fees and sweep-up. Always check this with other companies, because some quote tip fees separately.",
    },
    {
      q: "Why does building waste cost more than household rubbish?",
      a: "Rubble, concrete, tiles and soil are far heavier per cubic metre, and Sydney transfer stations charge by weight plus the NSW waste levy. Heavy loads also take more effort to load safely.",
    },
    {
      q: "Can I get a quote without someone coming out?",
      a: "Yes. Photos are enough for almost every job. Send them by WhatsApp or the online quote form and you'll get a fixed price back. We only visit first for very large commercial or construction jobs.",
    },
  ],
  services: ["household-rubbish-removal", "garage-clean-out", "brick-and-concrete-removal", "skip-bin-alternatives"],
};
