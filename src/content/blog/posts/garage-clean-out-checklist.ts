import type { BlogPost } from "../types";

const slug = "garage-clean-out-checklist";
const img = (name: string) => `/images/blog/${slug}/${name}`;

export const post: BlogPost = {
  slug,
  title: "Garage Clean-Out Checklist: Clear Your Garage in One Day",
  h1: "Garage Clean-Out Checklist: How to Clear a Sydney Garage in One Day",
  description: "A step-by-step garage clean-out checklist from Sydney rubbish removalists: sort, sell, donate and dispose, plus what to do with paint, tools and old furniture.",
  excerpt: "A one-day plan to get your car back in the garage: what to sort first, what to keep, and how to get rid of the rest without a skip.",
  category: "How-To Guides",
  primaryKeyword: "garage clean out checklist",
  keywords: ["how to clean out a garage", "garage clean out sydney", "garage declutter tips", "garage junk removal", "what to do with garage junk"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "NRR crew carrying old furniture and boxes out of a cluttered Sydney garage to the rubbish removal truck",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: "To clean out a garage in one day: book the rubbish pickup first, then empty the garage onto the driveway, sort everything into keep, sell or donate, dispose and hazardous piles, put back only what you'll use, and have the crew take the dispose pile the same afternoon. Hazardous items like paint and gas bottles go to a Community Recycling Centre.",
  takeaways: [
    "Book the pickup before you start. A deadline is what turns a garage job into a finished garage.",
    "Empty everything out first. You can't sort a garage while it's still packed.",
    "Use four piles: keep, sell or donate, dispose, and hazardous.",
    "If you haven't used it in two years and it isn't sentimental, it goes.",
    "Paint, chemicals and gas bottles need a Community Recycling Centre, not the truck.",
  ],
  body: [
    { type: "h2", text: "Before you start: what do you need?" },
    {
      type: "list",
      items: [
        "A booked rubbish pickup for the afternoon (or a quote ready to confirm)",
        "Heavy-duty garbage bags and a few sturdy boxes",
        "Gloves, closed shoes and a dust mask (old garages are dusty)",
        "Masking tape and a marker to label the piles",
        "A broom and a spare pair of hands, if you can get one",
        "Phone charged, for photos of anything you'll sell online",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: book the pickup first",
      text: "The garages we see finished in a day are the ones with a truck booked for 2pm. Without a deadline, the 'maybe' pile wins and half the junk goes back inside.",
    },
    { type: "h2", text: "The one-day garage clean-out checklist" },
    {
      type: "image",
      src: img("cluttered-garage-before.webp"),
      alt: "Cluttered Sydney garage packed with boxes, storage tubs, a bike and old household items before a clean-out",
      caption: "Before: a typical single garage that hasn't fit a car in years.",
    },
    { type: "h3", text: "Morning: empty and sort (8am – 12pm)" },
    {
      type: "steps",
      items: [
        "**Clear a sorting zone** on the driveway or lawn and mark out four piles with tape: Keep, Sell or donate, Dispose, Hazardous.",
        "**Empty the garage completely.** Start nearest the door and work back. It feels slower, but it's the only way to see what you have.",
        "**Make a fast decision on every item.** Use the two-year rule: not used in two years and not sentimental? It goes.",
        "**Check boxes before tossing them.** Old paperwork, photos and keepsakes hide in garages. Set aside anything personal for a later look.",
        "**Pull out the hazardous items:** paint, pool chemicals, fuel, gas bottles, batteries and fluoro globes. These can't go in a rubbish truck.",
      ],
    },
    { type: "h3", text: "Midday: sell, donate and clean (12pm – 2pm)" },
    {
      type: "steps",
      items: [
        "Photograph and list anything worth selling. Give it a week: if it hasn't sold, it goes in the next pickup.",
        "Bag donations for a local charity shop. Check what they accept first. Most want clean, working items.",
        "With the garage empty, sweep it out and check for leaks, pests or damp before anything goes back.",
      ],
    },
    { type: "h3", text: "Afternoon: pickup and put back (2pm – 5pm)" },
    {
      type: "steps",
      items: [
        "The crew loads the Dispose pile. You point, they lift, including the heavy stuff.",
        "Put back only the Keep pile, using shelves and wall hooks to get things off the floor.",
        "Drop the Hazardous pile at your nearest Community Recycling Centre (it's free for households).",
      ],
    },
    {
      type: "image",
      src: img("empty-garage-after-clean-out.webp"),
      alt: "Empty, swept-clean Sydney garage with bare concrete floor after a full garage clean-out",
      caption: "After: everything out, swept clean, ready for shelving and a car.",
    },
    { type: "h2", text: "What usually ends up in the dispose pile?" },
    {
      type: "list",
      items: [
        "Broken furniture and old [couches or mattresses](/unwanted-furniture-removal)",
        "Old bikes, exercise equipment and kids' toys",
        "Empty boxes, packaging and broken storage tubs",
        "Leftover renovation materials: timber offcuts, tiles, plasterboard",
        "Dead appliances, old fridges and freezers",
        "Garden tools, broken mowers (fuel emptied) and [green waste](/green-waste-removal)",
        "[Scrap metal](/scrap-metal-removal): shelving, bike frames, old BBQs",
      ],
    },
    { type: "review", name: "Ali Hijazi" },
    { type: "h2", text: "How much does a garage clean-out cost?" },
    {
      type: "p",
      text: "A single garage usually ranges from a half to a full truck, depending on how high it's packed. A double garage packed to the roof can be more than one truck. Use our [price estimator](/quote-estimator) for a ballpark, or see the full breakdown in [how much rubbish removal costs in Sydney](/blog/rubbish-removal-cost-sydney).",
    },
    {
      type: "callout",
      tone: "note",
      title: "Not up to doing the sorting?",
      text: "Our [garage clean-out](/garage-clean-out) crew can do the whole thing: you point at what stays, we take everything else and sweep up. Most single garages take under two hours.",
    },
    { type: "h2", text: "How do I keep the garage clear afterwards?" },
    {
      type: "list",
      items: [
        "Get things off the floor: wall shelving, hooks for bikes and tools, overhead racks.",
        "Label clear tubs by category so you can see what you own.",
        "Use a one-in, one-out rule for tools and sports gear.",
        "Book a quick clear-out once a year, before the clutter becomes a full truck again.",
      ],
    },
    {
      type: "image",
      src: img("organised-garage-after-declutter.webp"),
      alt: "Organised Sydney garage with wall shelving and clear floor space after decluttering and rubbish removal",
      caption: "Shelving and a clear floor make it easy to keep it this way.",
    },
    {
      type: "cta",
      title: "Lock in your garage pickup",
      text: "Send a photo of the garage and get a fixed price. Book before 1pm for same day collection.",
    },
  ],
  faqs: [
    {
      q: "How long does it take to clean out a garage?",
      a: "Sorting a single garage yourself usually takes half a day to a full day. The loading part, done by a two-person crew, typically takes under two hours.",
    },
    {
      q: "What should I throw out from my garage?",
      a: "Anything broken, anything you haven't used in two years that isn't sentimental, duplicates, expired chemicals (taken to a Community Recycling Centre) and leftover building materials you won't use.",
    },
    {
      q: "Do I have to sort my garage before the rubbish removal crew arrives?",
      a: "No. It helps keep the cost down, but our crew can work through the garage with you and only take what you point to.",
    },
    {
      q: "Can you take old paint and chemicals from my garage?",
      a: "No. Paint, chemicals, fuel and gas bottles go free to a NSW Community Recycling Centre. We can take almost everything else.",
    },
    {
      q: "How much does a garage clean-out cost in Sydney?",
      a: "Most single garages fall between a half and a full truck load. Use the online estimator for a range, or send photos for a fixed price.",
    },
  ],
  services: ["garage-clean-out", "household-rubbish-removal", "unwanted-furniture-removal", "scrap-metal-removal"],
};
