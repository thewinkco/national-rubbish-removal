import { formatPrice, quoteFor } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "how-to-dispose-of-a-mattress-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;
const single = quoteFor("residential-rubbish-removal", "single");

export const post: BlogPost = {
  slug,
  title: "How to Dispose of a Mattress in Sydney: 5 Options Compared",
  h1: "How to Dispose of an Old Mattress in Sydney: 5 Options Compared",
  description: "Five ways to get rid of an old mattress in Sydney: council clean-up, retailer take-back, recycling, donation or pickup. Costs, wait times and what to avoid.",
  excerpt: "Council clean-up, retailer take-back, recycling, donation or a pickup: what each costs, how long it takes and which one suits you.",
  category: "Disposal & Recycling",
  primaryKeyword: "how to dispose of a mattress sydney",
  keywords: ["old mattress disposal options", "mattress disposal sydney", "mattress recycling sydney", "get rid of old mattress", "council mattress pickup sydney"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "Two NRR crew members carrying an old mattress from a Sydney home to the rubbish removal truck for recycling",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `In Sydney you can dispose of an old mattress through your council's booked clean-up, a retailer take-back when your new one is delivered, a mattress recycler, or a rubbish removal pickup from about ${formatPrice(single.low)}. Used mattresses are rarely accepted by charities, and leaving one on the street without a booking counts as illegal dumping.`,
  takeaways: [
    "Council clean-ups are often free but need a booking and can take weeks.",
    "Many retailers will take the old mattress when they deliver the new one, usually for a fee.",
    "Mattresses are highly recyclable: steel springs, foam, fabric and timber are all recovered.",
    "Charities rarely take used mattresses for hygiene reasons, so don't count on donation.",
    "Dumping a mattress on the kerb without a booking can bring a fine from council or the NSW EPA.",
  ],
  body: [
    { type: "h2", text: "What are my options for getting rid of a mattress in Sydney?" },
    {
      type: "p",
      text: "Mattresses are one of the most common things we're asked to collect, and one of the most commonly dumped. They're big, floppy and hard to move, and they don't fit in a hatchback. Here are the five real options, from cheapest to most convenient.",
    },
    {
      type: "table",
      caption: "Ways to dispose of a mattress in Sydney compared",
      head: ["Option", "Typical cost", "How fast", "You carry it?"],
      rows: [
        ["Council household clean-up", "Usually free (limits apply)", "Days to weeks, on a set date", "Yes, to the kerb"],
        ["Retailer take-back", "Usually a fee, added to delivery", "When the new mattress arrives", "No"],
        ["Drop it at a recycler or transfer station", "A gate fee, plus a trailer or van", "Same day if you can transport it", "Yes, all the way"],
        ["Donate it", "Free", "Rarely accepted", "Yes"],
        ["Rubbish removal pickup", `${formatPrice(single.low)}`, "Same day available", "No"],
      ],
    },
    { type: "h3", text: "1. Council clean-up" },
    {
      type: "p",
      text: "Most Sydney councils include mattresses in their booked household clean-up collections, but the rules vary: some limit how many you can put out, some ask for mattresses to be wrapped or kept dry, and you'll need to wait for your collection date. Check your council's website for the current rules. We compare clean-ups with private pickups in [council clean-up vs private rubbish removal](/blog/council-clean-up-vs-private-rubbish-removal).",
    },
    { type: "h3", text: "2. Retailer take-back" },
    {
      type: "p",
      text: "Buying a new mattress? Ask the store if they'll take the old one away on delivery. Many do, for an added fee. It's the easiest option if the timing lines up, but check that the old mattress is recycled rather than tipped.",
    },
    { type: "h3", text: "3. Mattress recycling" },
    {
      type: "p",
      text: "A mattress is mostly recyclable. Recyclers such as Soft Landing strip them down to steel springs (sold as scrap metal), foam (reused in carpet underlay and other products), timber and fabric. If you have a trailer or van, you can drop one off for a small fee. Mattresses we collect are taken to facilities that send them for recycling rather than straight to landfill.",
    },
    {
      type: "image",
      src: img("strata-car-park-mattress-pickup.webp"),
      alt: "NRR crew collecting an old mattress and furniture from a Sydney apartment building car park",
      caption: "Apartment and strata pickups: we collect from the unit, the lift lobby or the basement car park.",
    },
    { type: "h3", text: "4. Donation" },
    {
      type: "p",
      text: "Most charities won't accept used mattresses because of hygiene and fire-safety rules. If yours is nearly new, still in its plastic, or was only used in a guest room, it's worth calling a local charity first. Otherwise, recycling is the better path.",
    },
    { type: "h3", text: "5. Rubbish removal pickup" },
    {
      type: "p",
      text: `A [mattress removal](/mattress-removal) pickup costs ${formatPrice(single.low)} for a single mattress, collected from anywhere in the house. It's the fastest option, and it makes most sense when you've got other things to go as well, like the old bed base, bedside tables or a few bags, because the minimum pickup covers anything up to 1 m³.`,
    },
    { type: "review", name: "Belinda Jovcevski" },
    { type: "h2", text: "Can I just leave my mattress on the street?" },
    {
      type: "p",
      text: "Only if it's part of a booked council clean-up and you put it out within the dates your council gives you. A mattress left on the footpath without a booking is illegal dumping, and councils and the NSW EPA can issue on-the-spot fines. It also gets rained on, which makes it heavier, harder to recycle and a magnet for more dumped rubbish.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: keep it dry",
      text: "A mattress that's been rained on can double in weight and often can't be recycled. If yours has to wait a few days, keep it inside or under cover, and stand it on its side so it doesn't take up the garage floor.",
    },
    { type: "h2", text: "How do you get a mattress out of an apartment?" },
    {
      type: "p",
      text: "Queen and king mattresses bend, which helps on stairs, but they're awkward for one person in a lift. Book the lift if your building requires it, protect the lift walls with the building's blankets if there are any, and let your strata manager know. We handle this every week for [strata properties](/strata-rubbish-removal) across Sydney.",
    },
    {
      type: "image",
      src: img("apartment-bulky-item-removal.webp"),
      alt: "NRR rubbish removalists carrying a bulky armchair through an apartment car park to the truck in Sydney",
      caption: "Bulky items from units go down the lift and straight into the truck.",
    },
    {
      type: "cta",
      title: "Mattress gone today",
      text: "Book before 1pm and we can usually collect the same day. Add the bed base and anything else at the same time for one fixed price.",
    },
  ],
  faqs: [
    {
      q: "How much does mattress removal cost in Sydney?",
      a: `A single mattress pickup with National Rubbish Removal costs ${formatPrice(single.low)} as a minimum pickup, including carrying it out, transport and disposal. Additional items in the same pickup cost little extra.`,
    },
    {
      q: "Will the council collect my old mattress?",
      a: "Most Sydney councils collect mattresses as part of booked household clean-ups, with limits on numbers and set collection dates. Check your council's website for the current rules.",
    },
    {
      q: "Are mattresses recycled in NSW?",
      a: "Yes. Mattress recyclers recover steel springs, foam, timber and fabric. A large share of each mattress can be recovered instead of going to landfill.",
    },
    {
      q: "Can I donate a used mattress to charity?",
      a: "Usually not. Most charities don't accept used mattresses for hygiene reasons. Very new or unused mattresses are the exception, so call ahead.",
    },
    {
      q: "Do you take bed bases and frames too?",
      a: "Yes. Bed bases, ensembles, frames and bedheads go in the same trip, and are dismantled on site if needed.",
    },
  ],
  services: ["mattress-removal", "unwanted-furniture-removal", "strata-rubbish-removal", "household-rubbish-removal"],
};
