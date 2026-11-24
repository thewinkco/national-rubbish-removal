import { SITE } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "where-does-rubbish-go-recycling-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;

export const post: BlogPost = {
  slug,
  title: "Where Does Your Rubbish Go? Sydney Recycling Explained",
  h1: "Where Does Your Rubbish Go After Pickup? How Sydney Junk Gets Recycled",
  description: `What really happens to furniture, metal, timber, green waste and rubble after a Sydney rubbish removal, and how up to ${SITE.recycleRate} of it is kept out of landfill.`,
  excerpt: "Follow a load from your driveway to the sorting floor: what gets recycled, what gets donated, and the little that still goes to landfill.",
  category: "Disposal & Recycling",
  primaryKeyword: "where does rubbish go sydney",
  keywords: ["eco friendly rubbish removal sydney", "rubbish recycling sydney", "what happens to hard rubbish", "is rubbish removal recycled", "landfill diversion sydney"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "NRR crew in hi-vis sorting cardboard and metal into recycling bays at a Sydney waste sorting facility",
    width: 1200,
    height: 675,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `After pickup, a responsible Sydney removalist takes your rubbish to licensed transfer and recycling facilities where it's sorted by material. Metal goes to scrap recyclers, timber and green waste become mulch or compost, concrete and bricks are crushed into road base, cardboard is pulped, and good furniture is donated. National Rubbish Removal recovers up to ${SITE.recycleRate} of what it collects.`,
  takeaways: [
    "Mixed loads are sorted by material at licensed transfer and recycling facilities.",
    "Metal, timber, green waste, cardboard, concrete and bricks all have established recycling paths in Sydney.",
    "Furniture and household goods in good condition are donated where possible.",
    "Landfill is expensive in NSW because of the waste levy, which gives everyone a reason to recycle.",
    "Ask any removalist where your rubbish goes. A good one will tell you.",
  ],
  body: [
    { type: "h2", text: "What happens after the truck leaves your driveway?" },
    {
      type: "p",
      text: "Once the crew has loaded and swept up, the truck heads to a licensed transfer station or recycling facility in Sydney. The load is tipped onto a sorting floor or separated as it's unloaded, and each material goes its own way. Very little of a typical household load needs to end up in landfill.",
    },
    {
      type: "image",
      src: img("sorted-metal-timber-bays-facility.webp"),
      alt: "Sydney recycling facility with separate bays for scrap metal, timber pallets and green waste, with an NRR truck unloading",
      caption: "Separate bays for metal, timber and green waste: each one has a recycling path.",
    },
    { type: "h2", text: "What happens to each type of rubbish?" },
    {
      type: "table",
      caption: "Common materials from Sydney rubbish removal jobs and what they become",
      head: ["Material", "Where it goes", "What it becomes"],
      rows: [
        ["Steel, aluminium, copper, whitegoods", "Scrap metal recyclers", "Melted down into new metal"],
        ["Clean timber and pallets", "Timber recyclers", "Mulch, particleboard or biomass fuel"],
        ["Green waste (branches, clippings)", "Organics processors", "Compost and garden mulch"],
        ["Bricks, concrete, tiles", "Construction and demolition recyclers", "Crushed aggregate and road base"],
        ["Cardboard and paper", "Paper recyclers", "New cardboard and packaging"],
        ["Mattresses", "Mattress recyclers", "Springs to scrap metal; foam, timber and fabric recovered"],
        ["Furniture and goods in good condition", "Charities and reuse", "A second life in someone else's home"],
        ["Mixed residual waste", "Licensed landfill", "The small share that can't be recovered"],
      ],
    },
    { type: "h3", text: "Metal" },
    {
      type: "p",
      text: "Old BBQs, bike frames, shelving, fridges and washing machines are worth something as scrap. Metal is one of the easiest materials to recycle, and it can be recycled again and again. That's why our [scrap metal removal](/scrap-metal-removal) loads go straight to metal recyclers.",
    },
    {
      type: "image",
      src: img("scrap-metal-separated-for-recycling.webp"),
      alt: "NRR crew loading old metal window frames and scrap metal into a truck for recycling in Sydney",
      caption: "Metal is separated and sent for recycling, not landfill.",
    },
    { type: "h3", text: "Timber" },
    {
      type: "p",
      text: "Clean timber, old decking and pallets are chipped for mulch or used to make engineered wood products. Treated or painted timber needs different handling, which is why it's worth mentioning it when you book [timber removal](/timber-removal).",
    },
    {
      type: "image",
      src: img("old-timber-decking-for-recycling.webp"),
      alt: "NRR crew removing old timber decking boards from a Sydney backyard to be recycled",
      caption: "Old decking and offcuts are chipped or reprocessed.",
    },
    { type: "h3", text: "Green waste" },
    {
      type: "p",
      text: "Branches, palm fronds, hedge clippings and stumps from a [green waste removal](/green-waste-removal) are shredded and composted into mulch and soil conditioner that ends up back in Sydney gardens. Our guide to [green waste removal in Sydney](/blog/green-waste-removal-sydney) covers council limits and prices.",
    },
    { type: "h3", text: "Bricks, concrete and rubble" },
    {
      type: "p",
      text: "Clean bricks, concrete and tiles are crushed into recycled aggregate used under new roads, driveways and slabs. Keeping rubble clean (no plastic, timber or general rubbish mixed in) makes it far easier to recycle.",
    },
    { type: "h3", text: "Furniture and household goods" },
    {
      type: "p",
      text: "Couches, tables, bookshelves and homewares that are clean and in good condition are set aside for donation where charities can take them. It's especially important on [deceased estate](/deceased-estate-clearance) and moving-out jobs, where a lot of perfectly good furniture would otherwise go to waste.",
    },
    { type: "review", name: "Nathan Nicolas" },
    { type: "h2", text: "Why does recycling matter so much in NSW?" },
    {
      type: "p",
      text: "Sending waste to landfill in Sydney is expensive, largely because of the NSW waste levy charged on every tonne. Landfill space around Sydney is also limited. Sorting and recycling keeps costs down, keeps valuable materials in use, and is better for the environment, so there's every reason to do it properly.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: help your rubbish get recycled",
      text: "Keep green waste separate from general rubbish, keep rubble free of plastic and timber, and tell us about anything still in working order. A cleaner load is easier to sort, and more of it gets a second life.",
    },
    { type: "h2", text: "How can I tell if a removalist recycles?" },
    {
      type: "list",
      items: [
        "Ask which facilities they use. Licensed transfer stations and recyclers are the right answer.",
        "Ask what they do with furniture in good condition.",
        "Be wary of very cheap cash-only quotes. Illegal dumping is how some operators undercut prices.",
        "Check their reviews for mentions of tidy, professional work.",
      ],
    },
    {
      type: "p",
      text: "For what can't go in a rubbish removal truck, like paint, gas bottles and e-waste, see [what rubbish removalists won't take](/blog/what-rubbish-removalists-wont-take).",
    },
    {
      type: "cta",
      title: "Rubbish removal that doesn't cost the earth",
      text: `Every load we collect is sorted, and up to ${SITE.recycleRate} is recycled or donated. Get a fixed price today.`,
    },
  ],
  faqs: [
    {
      q: "Does rubbish removal get recycled in Sydney?",
      a: `It should. Licensed removalists take loads to transfer stations and recycling facilities where they're sorted by material. National Rubbish Removal recovers up to ${SITE.recycleRate} of what it collects.`,
    },
    {
      q: "What happens to old furniture after it's collected?",
      a: "Furniture in good condition is donated where charities can accept it. Damaged furniture is broken down so the metal and timber can be recycled.",
    },
    {
      q: "Is green waste recycled?",
      a: "Yes. Green waste is shredded and composted into mulch and soil products.",
    },
    {
      q: "Can concrete and bricks be recycled?",
      a: "Yes. Clean concrete, bricks and tiles are crushed into recycled aggregate and road base.",
    },
    {
      q: "How do I know my rubbish won't be dumped?",
      a: "Use a licensed, insured company with real reviews, and ask which facilities they use. Very cheap cash-only offers are a warning sign.",
    },
  ],
  services: ["scrap-metal-removal", "green-waste-removal", "timber-removal", "brick-and-concrete-removal"],
};
