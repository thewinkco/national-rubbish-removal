import type { BlogPost } from "../types";

const slug = "deceased-estate-clearance-guide";
const img = (name: string) => `/images/blog/${slug}/${name}`;

export const post: BlogPost = {
  slug,
  title: "How to Clear a Deceased Estate in Sydney: Step-by-Step",
  h1: "How to Clear a Deceased Estate in Sydney: A Gentle Step-by-Step Guide",
  description: "A calm, practical guide to clearing a deceased estate in Sydney: who can authorise it, what to keep, donate or sell, and how to clear the house respectfully.",
  excerpt: "Who has the authority, what to do first, what to keep, and how to clear a loved one's home without rushing or regrets.",
  category: "Home & Family",
  primaryKeyword: "deceased estate clearance sydney",
  keywords: ["how to clear a deceased estate", "deceased estate clean out", "clearing a parent's house", "executor clearing house nsw", "deceased estate rubbish removal"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "NRR crew member kneeling beside labelled keep and donate boxes while sorting a deceased estate in a Sydney home",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: "To clear a deceased estate, first confirm the executor (or administrator) agrees, secure the home and important papers, and let family choose keepsakes. Then sort the rest into sell, donate, recycle and dispose, and book a clearance crew for whatever is left. There's no rush: most families take a few weeks, and nothing should go before the will is checked.",
  takeaways: [
    "The executor named in the will (or an appointed administrator) decides what happens to the belongings.",
    "Secure documents, valuables and keys first. Don't throw out paperwork until it's been checked.",
    "Give family a set window to choose keepsakes, then move to selling and donating.",
    "A clearance crew can remove everything left, including heavy furniture, in a single visit.",
    "Allow time. Clearing a parent's home is emotional, and it's fine to do it in stages.",
  ],
  body: [
    {
      type: "p",
      text: "Clearing the home of someone you've lost is one of the hardest jobs there is. It's physical, it's emotional, and it often lands on one or two family members already dealing with everything else. This guide is the practical side, written from the many estates our crew has helped clear across Sydney. Take what's useful and go at your own pace.",
    },
    {
      type: "callout",
      tone: "note",
      title: "This isn't legal advice",
      text: "Estate law can be complex. If there's any doubt about the will, who the executor is, or whether items should be valued, talk to the estate's solicitor or the NSW Trustee and Guardian before anything leaves the house.",
    },
    { type: "h2", text: "Who is allowed to clear a deceased estate?" },
    {
      type: "p",
      text: "The **executor** named in the will is responsible for the deceased's belongings. If there's no will, a family member usually applies to become the **administrator**. Before clearing the home, make sure the executor has agreed, the will has been read, and any specific gifts (\"my watch to my grandson\") are set aside. If the home is rented, check the lease end date with the agent so you know your timeline. An [end of lease clear-out](/end-of-lease-rubbish-removal) can be booked around the handback date.",
    },
    { type: "h2", text: "What should I do first?" },
    {
      type: "steps",
      items: [
        "**Secure the property.** Lock up, collect all keys, and redirect mail through Australia Post.",
        "**Find the important papers:** the will, bank and super statements, insurance policies, property titles, tax records and any funeral plans. Keep them together somewhere safe.",
        "**Set aside valuables:** jewellery, cash, collectibles, artwork and anything that may need a valuation.",
        "**Photograph each room** before anything moves. It helps with valuations, insurance and family discussions.",
        "**Look after perishables:** empty the fridge and pantry, and arrange for the utilities and any services.",
      ],
    },
    {
      type: "image",
      src: img("estate-living-room-before-clearance.webp"),
      alt: "Sydney living room full of furniture, boxes and belongings before a deceased estate clearance",
      caption: "Most homes hold decades of belongings. Work room by room, not all at once.",
    },
    { type: "h2", text: "How do families decide what to keep?" },
    {
      type: "p",
      text: "Give family members a set window, a weekend or two, to walk through and choose keepsakes. Put a coloured sticker or name tag on each chosen item so there's no confusion later. Photos, letters and small personal items are usually the most treasured, so sort these by hand rather than in a rush.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: check pockets and drawers",
      text: "We often find cash, rings, photos and letters in coat pockets, book pages, handbags and the backs of drawers. Go through these before the clearance day. On the day, we set aside anything personal we come across.",
    },
    { type: "h2", text: "What can be sold or donated?" },
    {
      type: "list",
      items: [
        "**Sell:** antiques, quality furniture, tools, collectibles and jewellery. An estate auction house or online marketplace both work.",
        "**Donate:** clothing, linen, kitchenware, books and furniture in good condition. Call local charities first to check what they accept and whether they collect.",
        "**Recycle:** metals, whitegoods, cardboard and garden waste. Here's [where it all ends up](/blog/where-does-rubbish-go-recycling-sydney).",
        "**Dispose:** what's broken, worn or unwanted by anyone.",
      ],
    },
    {
      type: "image",
      src: img("careful-furniture-removal-estate.webp"),
      alt: "NRR crew carefully carrying an armchair out of a Sydney home during a deceased estate clearance",
      caption: "Heavy furniture is carried out carefully, protecting walls, floors and door frames.",
    },
    { type: "h2", text: "How does a professional estate clearance work?" },
    {
      type: "p",
      text: "Once keepsakes, sales and donations are sorted, a clearance crew removes everything else. With our [deceased estate clearance](/deceased-estate-clearance) service, you walk us through the home, point out anything that stays, and we give you a fixed price. On the day, a two-person crew carries out and loads everything, including [heavy furniture](/unwanted-furniture-removal), sends what can be donated or recycled to the right place, and sweeps the home clean, ready for sale, lease or handback.",
    },
    {
      type: "p",
      text: "If family can't be there, we can work with the executor or the real estate agent for access, and send photos when the job's done.",
    },
    { type: "review", name: "Isabel Olaño" },
    { type: "h2", text: "How long does a deceased estate clearance take?" },
    {
      type: "p",
      text: "The sorting is what takes time, often a few weeks of weekends. The clearance itself is quick: a unit is usually a few hours, and a full family home with a garage is typically one day, sometimes two trucks. Larger or slower jobs can be priced by the hour rather than by the load, so you're not paying for truck space you don't use.",
    },
    {
      type: "image",
      src: img("empty-room-after-estate-clearance.webp"),
      alt: "Empty, clean Sydney room with timber floors and natural light after a deceased estate clearance",
      caption: "Cleared and swept, ready for the sale, lease or handback.",
    },
    {
      type: "cta",
      title: "We'll take it from here",
      text: "Call or send a few photos. We'll give you a fixed price and work around your family's timeline, with care.",
    },
  ],
  faqs: [
    {
      q: "Who pays for a deceased estate clearance?",
      a: "Clearance costs are usually paid from the estate, by the executor. Keep the invoice for the estate's records.",
    },
    {
      q: "Can I clear a deceased estate before probate?",
      a: "Securing the home and removing perishables is fine. Before selling or disposing of belongings, check with the executor and, if needed, the estate's solicitor, as some items may need to be valued or distributed under the will.",
    },
    {
      q: "What happens to the furniture and belongings you remove?",
      a: "Items in good condition are donated where possible, metals and whitegoods are recycled, and the rest goes to licensed facilities. We recover up to 95% of what we collect.",
    },
    {
      q: "Do I need to be there on the day?",
      a: "No. We can arrange access with the executor, a family member or the real estate agent, and send photos once the property is clear.",
    },
    {
      q: "How much does a deceased estate clearance cost in Sydney?",
      a: "It depends on the volume and access. A unit can be under a full truck; a family home with a garage is often one to two trucks. Send photos or book a walk-through for a fixed price.",
    },
  ],
  services: ["deceased-estate-clearance", "household-rubbish-removal", "unwanted-furniture-removal", "garage-clean-out"],
};
