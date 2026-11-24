import type { BlogPost } from "../types";

const slug = "what-rubbish-removalists-wont-take";
const img = (name: string) => `/images/blog/${slug}/${name}`;

export const post: BlogPost = {
  slug,
  title: "What Can't Rubbish Removalists Take? Sydney Disposal Guide",
  h1: "What Can't Rubbish Removalists Take? (And Where It Goes Instead in Sydney)",
  description: "Asbestos, paint, gas bottles, e-waste and chemicals can't go in a rubbish removal truck. Here's why, and exactly where Sydney residents can take them safely.",
  excerpt: "The short list of items no licensed removalist should take, and the free or low-cost places in Sydney that will.",
  category: "Disposal & Recycling",
  primaryKeyword: "what can't rubbish removalists take",
  keywords: ["items rubbish removal won't take", "how to dispose of paint sydney", "gas bottle disposal sydney", "asbestos disposal nsw", "community recycling centre sydney", "e-waste disposal sydney"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "NRR crew member carrying bagged general rubbish out of a cleared Sydney commercial space to the truck",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: "Licensed rubbish removalists in Sydney can't take asbestos, chemicals, paint, gas bottles, oils, batteries, medical waste, e-waste, hot ash, wet concrete or contaminated soil. These need special handling. Most household hazardous items can go free to a NSW Community Recycling Centre, and asbestos must go to a facility licensed to accept it.",
  takeaways: [
    "Hazardous items are excluded for legal and safety reasons, not because removalists are being difficult.",
    "Paint, oils, gas bottles, batteries, fluoro globes and smoke alarms go free to NSW Community Recycling Centres.",
    "Asbestos (including fibro) needs a licensed removalist for larger amounts and must go to a licensed facility.",
    "E-waste like TVs and computers has its own drop-off points and council collection days.",
    "If you're unsure about an item, send a photo before the pickup so nothing is left behind on the day.",
  ],
  body: [
    { type: "h2", text: "Why won't rubbish removalists take everything?" },
    {
      type: "p",
      text: "Rubbish removal trucks go to licensed transfer stations that sort general waste. Those facilities can't legally accept hazardous materials mixed in with household rubbish, and loading them puts the crew, the truck and everyone at the tip at risk. A removalist who says \"we'll take anything\" either isn't disposing of it properly or will pass a hefty fee on to you.",
    },
    {
      type: "p",
      text: "Here's the full list of what we can't take, and the right place for each.",
    },
    { type: "h2", text: "The list: what we can't take, and where it goes" },
    {
      type: "table",
      caption: "Excluded items and where Sydney residents can dispose of them",
      head: ["Item", "Why it's excluded", "Where it should go"],
      rows: [
        ["Asbestos or fibro sheeting", "Dangerous fibres, strictly regulated", "Licensed asbestos removalist; landfill licensed for asbestos"],
        ["Paint, solvents, pool and garden chemicals", "Flammable or toxic", "Community Recycling Centre (paint, some solvents) or a Household Chemical CleanOut event"],
        ["Gas bottles and fire extinguishers", "Explosion risk in compaction", "Community Recycling Centre or gas bottle exchange"],
        ["Motor oil and cooking oil", "Leaks contaminate the load", "Community Recycling Centre"],
        ["Car and household batteries", "Fire risk", "Community Recycling Centre or battery recycling points"],
        ["E-waste (TVs, computers, printers)", "Contains recoverable and hazardous parts", "Council e-waste drop-off or a national TV and computer recycling drop-off point"],
        ["Medical waste and sharps", "Infection risk", "Council or pharmacy sharps disposal"],
        ["Hot ash, wet concrete, silica dust", "Fire, set-in-truck and health risk", "Let ash cool for days; let concrete cure; licensed handling for silica"],
        ["Food and liquid waste", "Odour, leaks and pests", "Your regular household bins"],
        ["Noxious weeds", "Spread risk", "Bag and follow your council's weed disposal advice"],
        ["Polystyrene and foam insulation", "Not accepted at most transfer stations", "Some council drop-off centres accept clean polystyrene"],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "What's a Community Recycling Centre?",
      text: "NSW Community Recycling Centres (CRCs) are permanent drop-off points, mostly run by councils with NSW EPA support, that accept common household problem waste for free: paint, motor and cooking oils, gas bottles, fire extinguishers, batteries, fluorescent globes and smoke detectors. Search \"Community Recycling Centre\" plus your council name for the nearest one and its opening hours.",
    },
    { type: "h2", text: "What about asbestos and fibro?" },
    {
      type: "p",
      text: "Many Sydney homes built before 1990 contain asbestos in eaves, wet-area walls, fences and old floor tiles. **Don't break it, cut it or bag it with other rubbish.** Under SafeWork NSW rules, larger amounts must be removed by a licensed asbestos removalist, and asbestos can only go to a landfill licensed to accept it. If you think something is fibro, stop, leave it in place and get it tested.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "If in doubt, don't touch it",
      text: "If our crew finds suspected asbestos on a job, we stop and leave it untouched. It's not worth anyone's lungs. A test is cheap compared with the cost of contaminating a whole load.",
    },
    {
      type: "image",
      src: img("renovation-materials-sorted-for-disposal.webp"),
      alt: "Renovation waste including plasterboard and timber offcuts being cleared from a Sydney home for proper disposal",
      caption: "Plasterboard, timber and rubble are fine. Fibro and asbestos sheeting are not.",
    },
    { type: "h2", text: "What can rubbish removalists take?" },
    {
      type: "p",
      text: "Pretty much everything else that's non-hazardous, including the things people often assume we can't:",
    },
    {
      type: "list",
      items: [
        "Furniture of every size, including [couches, wardrobes and bed frames](/unwanted-furniture-removal)",
        "[Mattresses](/mattress-removal) and bed bases",
        "Fridges, washing machines, dryers and other whitegoods",
        "[Green waste](/green-waste-removal): branches, clippings, palm fronds and stumps",
        "Renovation waste: timber, plasterboard, tiles, bricks and concrete",
        "[Scrap metal](/scrap-metal-removal), BBQs (with the gas bottle removed), bikes and gym equipment",
        "Office furniture, filing cabinets and retail fit-outs",
      ],
    },
    { type: "review", name: "Bradley Perillo" },
    { type: "h2", text: "How to avoid surprises on pickup day" },
    {
      type: "steps",
      items: [
        "Walk through what's going and set aside anything from the excluded list.",
        "Remove gas bottles from BBQs and heaters, and empty fuel from mowers.",
        "Send a photo of anything you're unsure about when you request your quote.",
        "Drop hazardous items at a Community Recycling Centre before or after the pickup.",
      ],
    },
    {
      type: "image",
      src: img("licensed-insured-crew-checklist.webp"),
      alt: "NRR crew member holding a tablet showing licensed, insured and trusted service checks before a Sydney rubbish removal job",
      caption: "Licensed, insured and disposing at licensed facilities: ask any removalist for the same.",
    },
    {
      type: "cta",
      title: "Not sure about an item?",
      text: "WhatsApp us a photo and we'll tell you straight whether we can take it, and if not, where it should go.",
    },
  ],
  faqs: [
    {
      q: "Do rubbish removalists take paint tins?",
      a: "Not liquid paint. Take paint (water-based and oil-based) to a NSW Community Recycling Centre for free. Completely empty, dry tins can usually go with general metal recycling.",
    },
    {
      q: "Can you take a BBQ with the gas bottle attached?",
      a: "We can take the BBQ but not the gas bottle. Disconnect it and take it to a Community Recycling Centre or a gas bottle exchange.",
    },
    {
      q: "Will you take old TVs and computers?",
      a: "No. E-waste goes to council e-waste drop-offs or a national TV and computer recycling drop-off point, where the parts are recovered properly.",
    },
    {
      q: "How do I get rid of asbestos in Sydney?",
      a: "Don't disturb it. Get the material tested, then use a licensed asbestos removalist. Asbestos can only go to a landfill licensed to accept it. See SafeWork NSW for current rules.",
    },
    {
      q: "Do you take fridges and washing machines?",
      a: "Yes. Whitegoods are fine and are sent for metal recycling. Let us know when booking because fridges can carry a small disposal fee.",
    },
  ],
  services: ["household-rubbish-removal", "building-materials-disposal", "scrap-metal-removal", "green-waste-removal"],
};
