import type { BlogPost } from "../types";

const slug = "council-clean-up-vs-private-rubbish-removal";
const img = (name: string) => `/images/blog/${slug}/${name}`;

export const post: BlogPost = {
  slug,
  title: "Council Clean-Up vs Private Rubbish Removal in Sydney",
  h1: "Council Clean-Up vs Private Rubbish Removal: Which Should You Book?",
  description: "Sydney council clean-ups are free but come with waits, limits and kerbside rules. Here's when the free option works, and when a private pickup is worth it.",
  excerpt: "Free is great, until you're waiting three weeks with a couch on the kerb. How council clean-ups work and when to go private.",
  category: "Home & Family",
  primaryKeyword: "council clean up vs rubbish removal",
  keywords: ["council clean up sydney", "council bulky waste collection sydney", "hard rubbish collection sydney", "free council pickup sydney", "council clean up rules"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "NRR rubbish removalist loading boxes and furniture from a Sydney home into the truck with the Harbour Bridge behind",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: "Book a council clean-up if your items are standard household junk, you can carry them to the kerb, and you can wait for the next collection date. Book a private rubbish removal if you need it gone this week, have more than the council limit, have renovation waste, or can't lift and carry the items yourself.",
  takeaways: [
    "Most Sydney councils offer booked household clean-ups, usually free, with limits on how often and how much.",
    "You carry everything to the kerb yourself, and it must go out within set dates.",
    "Building waste, car parts and hazardous items are usually excluded from council clean-ups.",
    "Private removal costs money but is same day, collected from inside, and has no volume cap.",
    "Many people use both: council for the basics, a private crew for the rest.",
  ],
  body: [
    { type: "h2", text: "How do council clean-ups work in Sydney?" },
    {
      type: "p",
      text: "Most Sydney councils run a booked household clean-up (sometimes called a bulky waste or hard rubbish collection). You book online or by phone, get a collection date, and put your items on the kerb, usually the night before. Each council sets its own rules: how many collections each household gets per year, how much you can put out, and which items are accepted.",
    },
    {
      type: "p",
      text: "Because rules change, always check your own council's page before booking. Our [suburb pages](/location) list the council for each area we cover.",
    },
    { type: "h2", text: "Council clean-up vs private rubbish removal compared" },
    {
      type: "table",
      caption: "How a booked council clean-up compares with a private rubbish removal in Sydney",
      head: ["", "Council clean-up", "Private rubbish removal"],
      rows: [
        ["Cost", "Usually free for ratepayers and tenants", "Paid, fixed price upfront"],
        ["Wait time", "Next available date, can be weeks", "Same day or next day"],
        ["Volume", "Capped (often around a small trailer load)", "No cap: single item to multiple trucks"],
        ["Who carries", "You, to the kerb", "The crew, from anywhere on the property"],
        ["Building and reno waste", "Usually not accepted", "Accepted (except asbestos)"],
        ["Mess left behind", "Items can be picked through and scattered", "Swept clean on the spot"],
        ["Unit blocks", "Often depends on strata arrangements", "Collected from the unit, lift or car park"],
      ],
    },
    {
      type: "image",
      src: img("crew-carrying-household-items-to-truck.webp"),
      alt: "NRR crew carrying household items and furniture from inside a Sydney home directly to the rubbish removal truck",
      caption: "With a private pickup, items are carried straight from the house to the truck.",
    },
    { type: "h2", text: "When is a council clean-up the right choice?" },
    {
      type: "list",
      items: [
        "Your items are standard household junk: old furniture, a mattress, a broken BBQ (gas bottle removed).",
        "The total fits within your council's volume limit.",
        "You can lift and carry everything to the kerb safely.",
        "You're not in a hurry. The kerb isn't going anywhere.",
      ],
    },
    { type: "h2", text: "When is private rubbish removal worth paying for?" },
    {
      type: "list",
      items: [
        "**You're on a deadline.** Moving out, an [end of lease](/end-of-lease-rubbish-removal) (see our [end of lease checklist](/blog/end-of-lease-checklist-sydney)), a property settlement or an inspection this week.",
        "**There's too much.** A full [garage clean-out](/garage-clean-out) or [deceased estate](/deceased-estate-clearance) is often several times the council limit.",
        "**It's not household waste.** Renovation offcuts, rubble and site waste are usually excluded from council clean-ups.",
        "**You can't carry it.** Stairs, heavy items, health issues or no help on hand.",
        "**You don't want a pile on the kerb.** No scavenging, no mess, no complaints from neighbours or strata.",
      ],
    },
    { type: "review", name: "Misty Mason" },
    {
      type: "image",
      src: img("couch-carried-down-front-steps.webp"),
      alt: "Two NRR rubbish removalists carrying a couch down the front steps of a Sydney house to the truck",
      caption: "Stairs and heavy items are where a private crew saves your back.",
    },
    { type: "h2", text: "Can I use both?" },
    {
      type: "p",
      text: "Yes, and it's often the smartest approach on a big clear-out. Put the light, standard household items out for your council clean-up, and book a private crew for the heavy, bulky or excluded items, or for the overflow. You'll pay only for what the council can't take.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: watch the timing",
      text: "If you're moving out, book the council date first, then book a private pickup a day or two after for whatever's left. You won't pay to remove anything the council would have taken for free.",
    },
    { type: "h2", text: "What happens to council clean-up rubbish vs private removal?" },
    {
      type: "p",
      text: "Both go to licensed facilities. Council collections are processed under council contracts, with some recycling of metals and mattresses. We sort every load at licensed Sydney transfer and recycling facilities and recover up to 95% through recycling or donation. Read more in [where does your rubbish go](/blog/where-does-rubbish-go-recycling-sydney).",
    },
    {
      type: "image",
      src: img("furniture-removal-crew-harbour.webp"),
      alt: "NRR crew carrying a sofa past the truck on a Sydney residential street near the harbour",
      caption: "Covering every Sydney council area, seven days a week.",
    },
    {
      type: "cta",
      title: "Can't wait for your council date?",
      text: "Tell us what's going. We'll give you a fixed price and can usually collect the same day if you book before 1pm.",
    },
  ],
  faqs: [
    {
      q: "Is council clean-up free in Sydney?",
      a: "For most households, yes. Most Sydney councils include a set number of booked household clean-ups each year in your rates. Limits and accepted items vary by council.",
    },
    {
      q: "What won't council clean-ups take?",
      a: "Common exclusions are building and renovation waste, asbestos, chemicals, paint, gas bottles, car parts, tyres and commercial waste. Each council publishes its own list.",
    },
    {
      q: "How long do council clean-ups take to book?",
      a: "It depends on your council and the time of year. It can be days or several weeks. Busy times like December and the end of the financial year tend to book out faster.",
    },
    {
      q: "Can renters book a council clean-up?",
      a: "Usually yes, as the occupant of the property. Some councils ask the owner or strata manager to book for unit blocks, so check your council's rules.",
    },
    {
      q: "Is private rubbish removal faster than a council clean-up?",
      a: "Yes. A private rubbish removal is usually same day or next day, and the crew carries everything from inside the property, so nothing sits on the kerb.",
    },
  ],
  services: ["household-rubbish-removal", "end-of-lease-rubbish-removal", "unwanted-furniture-removal", "garage-clean-out"],
};
