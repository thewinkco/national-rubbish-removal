import { LOAD_SIZES, PRICING, SITE, calculateQuote, formatPrice } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "green-waste-removal-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;
const [res] = PRICING;
const range = (load: (typeof LOAD_SIZES)[number]["id"]) => {
  const q = calculateQuote(res.id, load);
  return `${formatPrice(q.low)} to ${formatPrice(q.high)}`;
};

export const post: BlogPost = {
  slug,
  title: "How to Get Rid of Green Waste in Sydney: Options and Costs",
  h1: "How to Get Rid of Green Waste in Sydney, Fast",
  description: `Branches, palm fronds and clippings piling up? Compare your green bin, council pick-up and a removalist in Sydney, with limits and prices from ${formatPrice(res.minCharge)}.`,
  excerpt: "Your green bin takes the small stuff. Here is what to do with palm fronds, big branches and a whole backyard of clippings, and what each option costs.",
  category: "How-To Guides",
  primaryKeyword: "how to get rid of green waste sydney",
  keywords: ["green waste disposal sydney", "garden waste removal sydney", "palm fronds disposal sydney", "tree branch removal sydney", "green waste pick up sydney"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "Two NRR crew members in hi-vis loading palm fronds and tree branches from a backyard lawn into the truck for green waste removal in Sydney",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `The fastest way to clear a big pile of green waste in Sydney is a rubbish removal crew. A half truck of branches, fronds and clippings costs about ${range("half")}, loaded and swept up. Council green bins and bulky pick-ups cost less but take longer, and their size limits vary by council.`,
  takeaways: [
    "Your green bin only takes small branches and clippings. Palm fronds, thick branches and stumps are usually refused.",
    "Council limits differ: Ryde takes branches up to 8 cm thick and 90 cm long, City of Sydney up to 10 cm thick and 1 m long.",
    `A half truck of garden waste is about ${range("half")} with us. The minimum charge is ${formatPrice(res.minCharge)}.`,
    "Check with your council before removing a tree. Some trees need approval, and fines can be big.",
    "Tell the crew about weeds, soil and treated timber when you book. They change what can go in the load.",
  ],
  body: [
    { type: "h2", text: "What is the fastest way to get rid of green waste in Sydney?" },
    {
      type: "p",
      text: `Book a rubbish removal crew. You point at the pile, agree a fixed price, and the crew lifts, loads and sweeps up, often the same day if you book before 1pm. Our [green waste removal](/green-waste-removal) service handles branches, palm fronds, hedge clippings, leaves and old pot plants in one visit. Garden jobs like this usually fill about half a truck, which is ${range("half")}.`,
    },
    {
      type: "p",
      text: "Every other route works, but each has a catch. The green bin is slow and has a size limit. A council bulky pick-up needs booking weeks ahead in some areas. A trailer hire means you do the lifting and the tip run. Which one suits you depends on how much you have and how soon you need it gone.",
    },
    {
      type: "image",
      src: img("branches-palm-fronds-pile-backyard-crew-loading.webp"),
      alt: "NRR crew member loading a large pile of branches, palm fronds and garden clippings from a Sydney backyard into the truck",
      caption: "A pile like this will not fit in a green bin, and palm fronds are often refused by council.",
    },
    { type: "h2", text: "What can go in my green bin in Sydney?" },
    {
      type: "p",
      text: "Green bins take grass clippings, leaves, small branches, prunings, flowers and weeds, but the exact rules depend on your council. Many Sydney councils now run a FOGO bin (food and garden organics), so check your council's A to Z list before you fill it.",
    },
    {
      type: "table",
      caption: "Examples of garden waste limits at three Sydney councils (always check your own council's current rules)",
      head: ["Council", "Branch limit in bin or pick-up", "Palm fronds", "Excess garden waste"],
      rows: [
        ["[City of Sydney](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/recycle-garden-organics)", "Up to 10 cm thick and 1 m long, bundled and tied for pick-ups", "Not mentioned on the page, so ask council", "Book a bulky pick-up. No stumps, logs or trunks"],
        ["[Ryde](https://www.ryde.nsw.gov.au/Environment-and-Waste/Waste-and-Recycling/Household-Waste-Services/Garden-Organics-Collection)", "Up to 8 cm thick and 90 cm long in the bin", "Not accepted. Take to a Resource Recovery Centre (fees may apply)", "Free chipping and mulching service for bigger branches"],
        ["[North Sydney](https://www.northsydney.nsw.gov.au/waste-recycling/book-garden-waste-pick)", "Pick-up allowance of 2 m³ per single residence, in a standard 240 litre green bin", "Not mentioned on the page, so ask council", "Booked pick-up every second Monday"],
      ],
    },
    {
      type: "p",
      text: "Willoughby Council also says palm fronds are not compatible with the machines that process its green bins. It points residents to a [waste facility such as Veolia or Cleanway](https://willoughby.nsw.gov.au/Residents/Waste-and-recycling/FAQs-and-other-resources/A-Z-of-recycling/Palm-trees-and-palm-tree-fronds), where fees apply. Never bag garden waste in plastic, because many councils refuse bagged loads.",
    },
    { type: "h2", text: "Does council collect green waste and palm fronds?" },
    {
      type: "p",
      text: "Some do, with limits. Many councils collect garden waste in a green bin, for example fortnightly in Ryde, and some offer a booked pick-up or a household clean-up for extra. The catch is that palm fronds, thick branches and stumps are items councils often exclude, and these are exactly what builds up in a big backyard tidy.",
    },
    {
      type: "p",
      text: "If your pile is bigger than a bin or two, a council pick-up may still be worth a look. Our guide to [council clean-up vs private rubbish removal](/blog/council-clean-up-vs-private-rubbish-removal) explains when each makes sense and what to expect on timing.",
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: how to stack palm fronds",
      text: "Palm fronds are the heavy, awkward ones. Cut them in half and stack them with the cut ends facing the same way, and they pack into the truck tightly. A tight pile near the driveway loads faster and can keep the load size down. If you cannot cut them, leave them in a pile and we will handle them.",
    },
    { type: "h2", text: "How much does green waste removal cost in Sydney?" },
    {
      type: "p",
      text: `Household green waste is priced by the space it takes in the truck, from ${formatPrice(res.minCharge)} for a very small load up to ${range("full")} for a full 10 m³ truck. The price includes the two-person crew, loading, transport, tip fees and sweep-up. You agree the number before anyone lifts a branch.`,
    },
    {
      type: "table",
      caption: "Residential green waste removal prices, Sydney metro (fixed price, tip fees included)",
      head: ["Load", "Looks like", "Price"],
      rows: LOAD_SIZES.map((l) => [l.label, l.hint, range(l.id)]),
    },
    {
      type: "p",
      text: `A sunny Saturday hedge trim and a few palm fronds is usually a quarter truck. A full backyard cut-back after a storm is usually half to three-quarters. If you have more than that, we can price by the hour at ${formatPrice(res.hourly)}. For other items in the same pickup, see our [price estimator](/quote-estimator) or the full [rubbish removal cost guide](/blog/rubbish-removal-cost-sydney).`,
    },
    {
      type: "image",
      src: img("backyard-swept-clean-after-green-waste-removal.webp"),
      alt: "Tidy Sydney backyard lawn with garden beds and a dark fence after the green waste was removed",
      caption: "The job is not finished until the garden is clear and swept. Sweep-up is included in the price.",
    },
    { type: "review", name: "Misty Mason" },
    { type: "h2", text: "What can't go in a green waste load?" },
    {
      type: "p",
      text: "Keep soil, rubble, treated timber and plastic out of the green pile, and tell us about weeds. Soil and rock are heavy and cost more to dispose of, treated timber is not green waste, and plastic pots and hoses contaminate the load. Our crews also do not take noxious weeds or hazardous material (see [what rubbish removalists will not take](/blog/what-rubbish-removalists-wont-take)).",
    },
    {
      type: "p",
      text: "Priority weeds are regulated in NSW, and landholders have a duty to manage them. NSW government guidance on [controlling invasive weeds](https://www.nsw.gov.au/regional-and-primary-industries/biosecurity/weeds) explains the rules and who to contact. If you are not sure whether a plant is a priority weed, ask your council before you cut it down and move it.",
    },
    { type: "h2", text: "Do I need approval to remove a tree?" },
    {
      type: "p",
      text: "Often yes. Rules vary by council, and Service NSW says you may need a permit before removing a tree from your property, and that failing to get one can bring substantial fines. Check with your council first, and see the [Service NSW guide to removing trees on your property](https://www.service.nsw.gov.au/referral/removing-trees-on-your-property).",
    },
    {
      type: "callout",
      tone: "note",
      title: "Trees and approvals",
      text: "We remove the green waste after the tree work is done. We do not advise on whether a tree needs approval. Your council or a qualified arborist can tell you.",
    },
    { type: "h2", text: "What happens to green waste after pickup?" },
    {
      type: "p",
      text: `Green waste is taken to a licensed facility and processed into mulch and compost, not buried. Up to ${SITE.recycleRate} of what we collect is recycled. For the full story, see [where your rubbish goes after pickup](/blog/where-does-rubbish-go-recycling-sydney).`,
    },
    {
      type: "cta",
      title: "Got a backyard full of branches and fronds?",
      text: "Send two or three photos and your suburb, and we will send back a fixed price. Same day pickup is often possible if you book before 1pm.",
    },
  ],
  faqs: [
    {
      q: "Can I put palm fronds in my green bin in Sydney?",
      a: "Usually not. Ryde and Willoughby both say palm fronds are not accepted in the green bin, and other councils may have similar rules. Check your council's A to Z waste guide, or book a removalist.",
    },
    {
      q: "How big can branches be for council collection?",
      a: "It depends on the council. Ryde allows branches up to 8 cm thick and 90 cm long in the bin, and City of Sydney allows up to 10 cm thick and 1 m long for bundled pick-ups. Longer or thicker branches need a different service.",
    },
    {
      q: "How much is a green waste pickup in Sydney?",
      a: `Prices start at ${formatPrice(res.minCharge)}. A quarter truck of garden waste is about ${range("quarter")}, and a half truck is about ${range("half")}. The price is fixed before work starts.`,
    },
    {
      q: "Do you take tree stumps and logs?",
      a: "Yes. Stumps and logs are heavy and bulky, so they take up more of the truck than they look. Send photos and we will price it. Several councils exclude them from green bins and pick-ups, so people often book us for these.",
    },
    {
      q: "Do I need to bag the garden waste?",
      a: "No. Loose piles are fine. Bundle branches if it is easy, and stack fronds in one direction. Bagging in plastic does not help, because the crew has to empty the bags again.",
    },
  ],
  services: ["green-waste-removal", "household-rubbish-removal"],
};
