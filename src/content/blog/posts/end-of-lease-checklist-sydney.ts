import { EXCLUDED_ITEMS, formatPrice, quoteFor, formatQuote, type VolumeId } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "end-of-lease-checklist-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;
// Every price comes from the price list in src/content/site.ts, so this post updates itself when prices change.
const H = "residential-rubbish-removal" as const;
const p = (vol: VolumeId) => formatQuote(quoteFor(H, vol));
const excluded = EXCLUDED_ITEMS.slice(0, 5).map((s) => s.toLowerCase()).join(", ");

export const post: BlogPost = {
  slug,
  title: "End of Lease Checklist Sydney: Rubbish Out, Bond Back",
  h1: "End of Lease Checklist for Sydney Renters: Clear the Rubbish and Get Your Bond Back",
  description: `A Sydney end of lease checklist: what to remove, what counts as damage, what it costs to clear leftovers from ${p("2")}, and how the NSW bond claim works.`,
  excerpt: "A week-by-week plan for moving out of a Sydney rental: what to throw out, what the NSW rules say about your bond, and how to clear the leftovers before the final inspection.",
  category: "Home & Family",
  primaryKeyword: "end of lease checklist sydney",
  keywords: ["end of lease checklist", "moving out checklist nsw", "how to get your bond back nsw", "end of lease rubbish", "what to do with furniture when moving out", "bond clean checklist"],
  published: "2026-11-27",
  updated: "2026-11-27",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "Two NRR crew members carrying a couch out of a Sydney home to the rubbish removal truck before an end of lease handover",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `To get your bond back in NSW, hand the place back as close as possible to how you got it: all your belongings and rubbish out, cleaned, damage repaired, keys returned. Book rubbish removal two or three days before the final inspection. A couch and a few bags is about ${p("2")} with NRR, with a fixed price agreed first.`,
  takeaways: [
    "NSW tenants must leave the property clean, remove all their belongings and repair damage beyond fair wear and tear.",
    "Rubbish and unwanted furniture left behind is the easiest thing for an agent to claim against your bond.",
    "Book the rubbish pickup for two or three days before the final inspection, so cleaners can get in afterwards.",
    `A small leftover load of 1 to 2 m³ costs ${p("1")} to ${p("2")} to clear, and a minimum single item pickup is ${p("single")}.`,
    "Take photos of the empty, cleaned property. They are your best evidence if the bond is disputed.",
  ],
  body: [
    { type: "h2", text: "What do I have to do before I move out of a rental in Sydney?" },
    {
      type: "p",
      text: "Before you claim your bond, NSW Government guidance says you should have paid rent up to your move-out date, cleaned the property to its original condition, removed all your personal belongings, repaired damage beyond fair wear and tear, signed off the condition report and returned every key. The rules are set out on the NSW Government page on [getting your bond back](https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live/getting-your-bond-back).",
    },
    {
      type: "p",
      text: "Rubbish sits in the middle of that list. If it is yours and it is still there on handover day, it is a belonging you have not removed. That is why a rubbish clear-out is the first job on any move-out plan, ahead of the clean. This guide covers residential renters. For a shop, office or warehouse lease, your lease sets the handback terms, and our [commercial end of lease clearing](/end-of-lease-rubbish-removal) follows the same order of work.",
    },
    {
      type: "image",
      src: img("moving-out-rubbish-removal-sydney.webp"),
      alt: "NRR crew member stacking boxes and furniture on the footpath outside a Sydney terrace home beside the truck on moving out day",
      caption: "Furniture that will not fit in the new place is the most common move-out leftover.",
    },
    { type: "h2", text: "What is the end of lease rubbish checklist?" },
    {
      type: "p",
      text: "The checklist below works backwards from your final inspection. It stops the last-day scramble that leaves furniture on the nature strip and a cleaner standing in a full house.",
    },
    {
      type: "steps",
      items: [
        "**Four weeks out: walk every room and make a list.** Note what is moving with you, what you can sell, what you can donate and what is rubbish. Check the balcony, garage, storage cage and car space too.",
        "**Three weeks out: sell and donate.** List good furniture online and book charity pickups early. Most charities want clean, working items and often have waiting lists.",
        "**Two weeks out: start the heavy sorting.** Box what you are keeping. Pile everything else in one spot, like a garage or a corner of the living room. One pile makes the quote easy.",
        "**One week out: get a fixed price.** Send photos to [get a quote](/contact#quote-form) or use the [price estimator](/quote-estimator). Pick a pickup day two or three days before the inspection.",
        "**Pickup day: point and walk away.** The crew lifts, loads and sweeps up. Check the bathroom, laundry and outdoor areas for anything you missed.",
        "**One or two days out: clean.** With the rubbish gone, cleaning takes half the time. Do the oven, windows, tracks, bathroom and floors last.",
        "**Handover day: photograph everything.** Take dated photos of every room, return the keys and sign the condition report only when you agree with it.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: book the pickup before the cleaners, not after",
      text: "The most common move-out mistake we see is a cleaner booked for the morning and rubbish still in the lounge room. They either work around it or leave. Book us two or three days before the inspection and the cleaner gets an empty house. If you are late, we can often collect the same day when you book before 1pm.",
    },
    { type: "h2", text: "What counts as rubbish I must remove, and what is fair wear and tear?" },
    {
      type: "p",
      text: "You must remove anything you brought in or left behind, but you are not responsible for fair wear and tear. The NSW Government says tenants should leave the property as near as possible to the same condition as when they started living in it, and are not responsible for fair wear and tear. They are responsible for damage caused by negligent, irresponsible or intentional actions, including by guests. See its guide to [fair wear and tear versus damage](https://www.nsw.gov.au/housing-and-construction/rules/fair-wear-and-tear-versus-damage-rental-properties).",
    },
    {
      type: "table",
      caption: "Examples from NSW Government guidance, plus what usually counts as leftover rubbish",
      head: ["Item", "Usually fair wear and tear", "Usually your responsibility"],
      rows: [
        ["Carpet", "Dents from furniture, traffic marks", "Stains, scorch marks"],
        ["Floorboards", "Light scuffing", "Deep scratches or gouges"],
        ["Walls", "Paint worn near a light switch", "Paint pulled off by poster tape"],
        ["Curtains", "Fading, frayed cords", "Missing or torn curtains"],
        ["Furniture and boxes", "Not applicable", "Always yours to remove"],
        ["Bags of rubbish, old mattress", "Not applicable", "Always yours to remove"],
        ["Items left in garage or balcony", "Not applicable", "Always yours to remove"],
      ],
    },
    {
      type: "p",
      text: `Rubbish removal does not fix damage, so check the right-hand column before you book. We can take almost everything you leave behind, except ${excluded} and a few other items listed in [what rubbish removalists will not take](/blog/what-rubbish-removalists-wont-take).`,
    },
    { type: "review", name: "Adam Vee" },
    { type: "h2", text: "What happens if I leave things behind in a rental?" },
    {
      type: "p",
      text: "If you leave goods behind, your landlord or agent can deal with them under NSW rules and charge you the actual costs. The NSW Government page on [goods left behind](https://www.nsw.gov.au/housing-and-construction/rules/dealing-goods-left-behind) says landlords can charge only the actual costs of removing, storing, maintaining, insuring and disposing of the goods.",
    },
    {
      type: "p",
      text: "The same page says rubbish and perishables can be disposed of with no notice period, while other goods have notice periods that depend on their value. In practice, that means rubbish you leave is quick for them to dump and easy to bill to you. A quote from us is fixed and agreed before work starts, so there are no surprises. Whether your agent can pass costs on to your bond is a question for NSW Fair Trading or the Tenants' Union of NSW, not us.",
    },
    { type: "h2", text: "How much does end of lease rubbish removal cost in Sydney?" },
    {
      type: "p",
      text: `Most renters clear between one and four cubic metres, which costs ${p("1")} to ${p("4")} for household rubbish with NRR. The price covers the two-person crew, lifting, loading, transport, tip fees and sweep-up, and you agree it before work starts.`,
    },
    {
      type: "table",
      caption: "National Rubbish Removal household prices, Sydney metro, including labour, loading and tip fees",
      head: ["What you are clearing", "Load size", "Price"],
      rows: [
        ["One bulky item, like a mattress or couch", "Minimum pickup", p("single")],
        ["A few boxes, a chair and some bags", "1 m³", p("1")],
        ["Couch, mattress, small table and bags", "2 m³, a quarter truck", p("2")],
        ["Studio or small 1 bedroom leftovers", "3 m³", p("3")],
        ["Half a 2 bedroom unit's furniture", "4 m³, half a truck", p("4")],
        ["Most of a house", "7 m³", p("7")],
      ],
    },
    {
      type: "p",
      text: "Prices depend on volume, so selling or donating furniture first lowers the bill. For a full breakdown of what changes a quote, read [how much rubbish removal costs in Sydney](/blog/rubbish-removal-cost-sydney).",
    },
    {
      type: "image",
      src: img("empty-space-swept-after-end-of-lease-rubbish-removal.webp"),
      alt: "NRR crew member sweeping an empty space with a clear floor after end of lease rubbish removal, ready for the final inspection",
      caption: "Cleared and swept, like this commercial space: empty floors are what an agent wants to see on inspection day.",
    },
    { type: "h2", text: "Can I use a council clean-up or a skip bin instead?" },
    {
      type: "p",
      text: "Sometimes, but a move-out deadline rarely suits either. Council hard rubbish collections are booked days or weeks ahead and put the items on the nature strip on a set date. Our guide to [council clean-up vs private rubbish removal](/blog/council-clean-up-vs-private-rubbish-removal) explains when that works.",
    },
    {
      type: "p",
      text: "A skip bin needs space on your property or a council permit for the street, and you load it yourself. If you live in a unit or terrace with no driveway, [skip bin alternatives](/skip-bin-alternatives) and [skip bin vs rubbish removal](/blog/skip-bin-vs-rubbish-removal-sydney) will help you compare. For a normal household move-out, our [household rubbish removal](/household-rubbish-removal) crew carries everything out of the house, unit or garage, so you do not need to touch the heavy stuff.",
    },
    { type: "h2", text: "What if my agent disputes the bond claim?" },
    {
      type: "p",
      text: "If a landlord or agent claims against your bond without your agreement, you have 14 days to respond to the Notice of Claim. The NSW Government explains the steps in [dealing with bond disputes for tenants](https://www.nsw.gov.au/housing-and-construction/renting-a-place-to-live/residential-rental-bonds/dealing-bond-disputes-for-tenants): they must send you the condition report and quotes, invoices or receipts within 7 days of making the claim, and if you cannot agree the matter can go to the NSW Civil and Administrative Tribunal (NCAT).",
    },
    {
      type: "callout",
      tone: "note",
      title: "Bond and tenancy questions",
      text: "We are rubbish removalists, not tenancy advisers. For advice on your bond, your lease or a dispute, contact NSW Fair Trading on 13 32 20 or the Tenants' Union of NSW. Keep your dated photos and receipts either way.",
    },
    {
      type: "cta",
      title: "Clear your rental before the inspection",
      text: "Send photos for a fixed price and pick a day two or three days before handover. Book before 1pm and we can often collect the same day.",
    },
  ],
  faqs: [
    {
      q: "How long before the end of my lease should I book rubbish removal?",
      a: "Book one week out for the best choice of days. Last-minute jobs are possible, and we can often collect the same day if you book before 1pm.",
    },
    {
      q: "Do I need to professionally clean a rental when I move out in NSW?",
      a: "You must leave the property reasonably clean, as close as possible to how you found it, but it depends on your lease and the condition report. Ask NSW Fair Trading if you are unsure what your agent can require.",
    },
    {
      q: "What do I do with furniture I cannot take to my new place?",
      a: "Sell or donate anything in good condition, and book a pickup for the rest. Most charities want clean, working items, so keep broken or stained pieces for the rubbish load.",
    },
    {
      q: "Will the crew take the rubbish from my balcony, garage and storage cage?",
      a: "Yes. Show the crew every spot and they will load it. Just make sure the building manager has approved lift and loading dock access if you live in a unit block.",
    },
    {
      q: "Can I get a price before the day?",
      a: `Yes. Send photos or use the estimator and we give you a fixed price. A minimum pickup starts at ${formatPrice(quoteFor(H, "single").low)}.`,
    },
  ],
  services: ["end-of-lease-rubbish-removal", "household-rubbish-removal"],
};
