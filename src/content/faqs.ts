import { EXCLUDED_ITEMS, formatPrice, fromPrice, getJobType } from "./site";

const greenFrom = formatPrice(Math.min(...Object.values(getJobType("green-waste-removal").tiers).map((t) => t![0])));

export type Faq = { q: string; a: string };

// Core FAQs carried over from the live site, tightened up. Facts unchanged.
export const GENERAL_FAQS: Faq[] = [
  {
    q: "How does your rubbish removal service work?",
    a: "Call us, WhatsApp a few photos or fill in the quote form. You get a price. Once you say yes, our two-person crew turns up, carries everything out, loads the truck, sweeps up and drives away. You pay the price you agreed to, and you never lift a thing.",
  },
  {
    q: "Do you provide same day rubbish removal in Sydney?",
    a: "Yes. Same day rubbish removal is available across the Sydney Metro area. Book in the morning or early afternoon (ideally before 1pm) and we can usually collect the same day.",
  },
  {
    q: "How much does rubbish removal cost?",
    a: `You pay a fixed price for the space your rubbish takes up in the truck. Household pickups start from ${formatPrice(fromPrice("residential-rubbish-removal"))}, clean green waste from ${greenFrom}, and builder waste and commercial loads from ${formatPrice(fromPrice("construction-rubbish-removal"))}. See every load size in our [price guide](/quote-estimator), or send photos for an exact figure. Your price covers labour, loading, sweep-up and disposal fees, and it's confirmed before we lift anything.`,
  },
  {
    q: "Is it cheaper than hiring a skip bin?",
    a: "Often, yes: up to 30% less once you add council permits and collection fees. And a skip bin is just a box: it blocks your driveway, the neighbours fill it overnight, and you still do all the loading. We do the lifting, load immediately, sweep up and leave in one visit.",
  },
  {
    q: "What types of rubbish do you take?",
    a: "Almost all non-hazardous waste: household clutter, furniture, mattresses, fridges and washing machines, green waste, office desks and equipment, retail fit-outs and packaging, and renovation debris like timber, plasterboard, bricks and concrete.",
  },
  {
    q: "Is there anything you can't take?",
    a: `A short list for safety and legal reasons: ${EXCLUDED_ITEMS.join(", ").toLowerCase()}. If you're unsure about an item, send us a photo and we'll tell you straight.`,
  },
  {
    q: "Do you have a price match guarantee?",
    a: "Yes. Get a written, like-for-like quote from another licensed operator for the same service area and we'll beat it by 10%. Just call us with the quote.",
  },
  {
    q: "What happens to the rubbish you collect?",
    a: "We take everything to licensed Sydney sorting and transfer facilities. Metals, timber, cardboard, green waste and appliances are separated, and up to 95% of what we collect is recycled or donated instead of going to landfill.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. National Rubbish Removal is a fully licensed waste carrier with comprehensive public liability insurance, so your property is protected while our crew is on site.",
  },
];
