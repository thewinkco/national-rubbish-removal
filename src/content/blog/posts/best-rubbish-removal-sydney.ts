import { EXCLUDED_ITEMS, GOOGLE_RATING, SITE, formatQuote, quoteFor, type JobType, type VolumeId } from "@/content/site";
import type { BlogPost } from "../types";

const slug = "best-rubbish-removal-sydney";
const img = (name: string) => `/images/blog/${slug}/${name}`;
// Every price comes from the price list in src/content/site.ts, so this post updates itself when prices change.
const H: JobType = "residential-rubbish-removal";
const p = (job: JobType, vol: VolumeId) => formatQuote(quoteFor(job, vol));
const nExcluded = EXCLUDED_ITEMS.length;

export const post: BlogPost = {
  slug,
  title: "Best Rubbish Removal Sydney? 9 Checks Before You Book",
  h1: "Best Rubbish Removal in Sydney? 9 Checks to Make Before You Book",
  description: "Choosing the best rubbish removal in Sydney? Use these 9 checks: ABN, insurance, fixed price, tip dockets, reviews and more, so you book a crew you can trust.",
  excerpt: "Nine quick checks that separate a reliable Sydney rubbish removal crew from a risky one, from the ABN and insurance to the tip docket.",
  category: "How-To Guides",
  primaryKeyword: "best rubbish removal sydney",
  keywords: ["best rubbish removal sydney", "how to choose a rubbish removal company", "rubbish removal checklist", "reliable rubbish removal sydney", "rubbish removal quotes compared", "tip docket rubbish removal", "cheap rubbish removal sydney"],
  published: "2026-11-25",
  updated: "2026-11-25",
  author: "nrr-crew",
  cover: {
    src: img(`${slug}-cover.webp`),
    alt: "The uniformed National Rubbish Removal crew standing with arms crossed in front of the NRR truck on a leafy Sydney street",
    width: 1440,
    height: 810,
  },
  ogImage: img(`${slug}-og.jpg`),
  answer: `The best rubbish removal in Sydney is the crew that passes nine checks: a real ABN, current insurance, genuine local reviews, a fixed written price, labour and tip fees included, a like-for-like quote, a tip docket, honest answers about banned items, and a tidy finish. Prices start at ${p(H, "single")} for a minimum pickup, so be wary of anything far lower.`,
  takeaways: [
    "Check the ABN, ask for proof of insurance and read the Google reviews for local, specific jobs.",
    "Get a fixed written price that says labour, loading, tip fees and sweep-up are included.",
    "Compare quotes for the same volume of rubbish. A cheaper quote often leaves something out.",
    "You stay responsible for your waste in NSW, so ask for a tip docket as proof it went to a lawful facility.",
    "A good crew tells you what it will not take before the day, not on the driveway.",
  ],
  body: [
    { type: "h2", text: "What makes the best rubbish removal in Sydney?" },
    {
      type: "p",
      text: "The best rubbish removal is the one that does what it said, for the price it said, and can prove where your rubbish went. Cheapest and fastest matter, but they come after trust. There is no official ranking of Sydney removalists, so the useful question is how to pick a good one yourself.",
    },
    {
      type: "p",
      text: "Rubbish removal is an easy business to start. A ute and a phone number is enough, and that is why quality varies so much. Some crews are insured, local and careful. Others quote low, add fees on the day or leave your rubbish on someone else's nature strip. Nine checks, most of them done in a few minutes from your couch, tell the two apart.",
    },
    {
      type: "image",
      src: img("crew-carrying-furniture-from-sydney-home-to-rubbish-removal-truck.webp"),
      alt: "Two NRR crew members carrying an armchair and a box of items from a brick Sydney home to the rubbish removal truck",
      caption: "Two people in uniform, a marked truck and a clear pile: the basic picture of a local household pickup.",
    },
    { type: "h2", text: "How do I check a rubbish removal company is real and insured?" },
    {
      type: "p",
      text: "Look up the business, ask for proof of insurance and read the reviews. Three checks, about ten minutes, and they filter out most of the risk.",
    },
    { type: "h3", text: "1. Look up the ABN" },
    {
      type: "p",
      text: "Search the company's ABN on [ABN Lookup](https://abr.business.gov.au/), the government register, where you can check whether an ABN is active or cancelled. A real business can give you its ABN straight away. If the number is missing from their website, quote and invoice, ask why.",
    },
    { type: "h3", text: "2. Ask for proof of insurance" },
    {
      type: "p",
      text: "Ask whether they hold public liability insurance and for a copy of the certificate. Crews carry heavy furniture through your home, and a scratched floor or a cracked tile is much easier to sort out when the business is insured. A company that cannot answer in one sentence has told you what you need to know.",
    },
    {
      type: "image",
      src: img("licensed-insured-rubbish-removal-company-checks.webp"),
      alt: "NRR crew member holding a tablet showing licensed, insured and trusted service checks in front of the NRR truck",
      caption: "Ask any company the same questions: licensed facilities, insurance and real reviews.",
    },
    { type: "h3", text: "3. Read the reviews like a detective" },
    {
      type: "p",
      text: `Look for Google reviews that name suburbs, jobs and the crew. Vague praise is easy to fake. Details such as "garage in Parramatta, finished by midday" are hard to. Our own profile has ${GOOGLE_RATING.count} reviews at ${GOOGLE_RATING.score} stars, and you can read them all on [our reviews page](${SITE.googleReviewsUrl}). Check how a company replies to the occasional bad review too, because that shows how it treats you when something goes wrong.`,
    },
    { type: "review", name: "Misty Mason" },
    { type: "h2", text: "Is the quote fixed, and what should it include?" },
    {
      type: "p",
      text: "A good quote is a fixed price in writing, agreed before anyone lifts a thing, that includes labour, loading, transport, tip fees and sweep-up. If any of those is missing, ask. That is where most surprise charges come from.",
    },
    { type: "h3", text: "4. Get the price in writing, before the work starts" },
    {
      type: "p",
      text: "A text, WhatsApp message or email counts. A number shouted over the phone and then \"it depends once we see it\" does not. Photos are enough for almost every job, so there is no reason for a vague price. Send a few through the [quote form](/contact#quote-form) and ask for a fixed price back.",
    },
    { type: "h3", text: "5. Make sure tip fees and sweep-up are in the price" },
    {
      type: "p",
      text: "Transfer stations charge by weight, and a company that leaves tip fees out of the headline price will add them after. Ask: \"Is that everything, including disposal and the clean-up after?\" Our prices include both. For how a Sydney quote is built, see our guide to [how much rubbish removal costs in Sydney](/blog/rubbish-removal-cost-sydney).",
    },
    { type: "h3", text: "6. Compare like for like" },
    {
      type: "p",
      text: `Quotes are only comparable when they cover the same amount of rubbish. For example, our price for a small clear-out of about 2 m³ is ${p(H, "2")}, and for a half truck (4 m³) it is ${p(H, "4")}. A price of $150 for "a load" might be a quarter of what you are actually throwing out. Ask every company how many cubic metres their price covers, or use our [price estimator](/quote-estimator) to work out your own volume first.`,
    },
    {
      type: "table",
      caption: "What to compare when you have two or three quotes",
      head: ["Ask about", "A good answer", "A warning sign"],
      rows: [
        ["Price", "Fixed price in writing, before work", "\"We'll see on the day\""],
        ["What is included", "Labour, loading, tip fees, sweep-up", "Tip fees or labour charged on top"],
        ["Volume", "Stated in cubic metres or part of a truck", "\"A load\" with no size"],
        ["Insurance", "Public liability, certificate available", "No answer, or \"we've never had a problem\""],
        ["Disposal", "Licensed facility, tip docket on request", "Vague about where it goes"],
        ["Timing", "A clear arrival window", "\"Sometime this week\""],
      ],
    },
    {
      type: "callout",
      tone: "tip",
      title: "From the crew: the cheapest quote is usually the shortest one",
      text: "When two quotes are far apart, it is rarely because one crew is better at maths. Ask the cheap one three things: is tip disposal included, is it per load or per item, and what happens if the pile is bigger than the photos? The answers usually explain the gap.",
    },
    { type: "h2", text: "Where does my rubbish go, and can I get proof?" },
    {
      type: "p",
      text: "A reputable crew takes your rubbish to a licensed facility and will give you the tip docket (weighbridge receipt) if you ask. In NSW you stay responsible for your waste, so this is a check that protects you, not just a nice extra.",
    },
    { type: "h3", text: "7. Ask for a tip docket" },
    {
      type: "p",
      text: "The NSW EPA says that [when someone disposes of waste on your behalf you should get proof it went to a legal landfill or recycling facility](https://www.epa.nsw.gov.au/Your-environment/Illegal-dumping/prevent-illegal-dumping), for example tip dockets from your contractor, and reminds householders that you are responsible for your waste.",
    },
    {
      type: "p",
      text: `A good company is happy to show where it goes. We sort loads at licensed Sydney transfer and recycling facilities, and recover up to ${SITE.recycleRate} through recycling or donation. See [where your rubbish goes after pickup](/blog/where-does-rubbish-go-recycling-sydney) for the full picture.`,
    },
    {
      type: "image",
      src: img("crew-unloading-rubbish-at-licensed-recycling-facility.webp"),
      alt: "NRR crew unloading furniture and cardboard from the truck at a licensed Sydney recycling facility with sorted recycling bins",
      caption: "Loads should end up at a licensed facility, and you can ask for the tip docket to prove it.",
    },
    { type: "h3", text: "8. Check they are honest about what they will not take" },
    {
      type: "p",
      text: `Every removalist has a banned list. Ours has ${nExcluded} categories, including asbestos, chemicals, gas and oils, and e-waste. A company that says "we take everything" is either not telling the truth or is dumping what it should not. Read our guide to [what rubbish removalists will not take](/blog/what-rubbish-removalists-wont-take) before you book, so nothing is left behind on the day.`,
    },
    {
      type: "callout",
      tone: "note",
      title: "Not sure about an item?",
      text: "Asbestos, chemicals and some old building materials have strict rules and need a licensed specialist. This post is general information, not legal advice. Check with your council, the NSW EPA or a qualified professional if you are unsure what you are dealing with.",
    },
    { type: "h2", text: "What should I check on the day?" },
    {
      type: "p",
      text: "On the day, a good crew arrives in the window they gave you, wears a uniform, confirms the price with you, and sweeps up before leaving. Anything that feels different from the quote is the moment to pause, not after the truck has gone.",
    },
    { type: "h3", text: "9. Check the crew, the truck and the finish" },
    {
      type: "p",
      text: "Marked truck, uniforms, two people (so nobody is lifting a wardrobe alone), a price confirmed before loading, and a sweep of the spot when they finish. That is the basic standard for a local household job, and it is also what you should expect from [household rubbish removal](/household-rubbish-removal) at any price.",
    },
    { type: "h2", text: "How do I get the best price without cutting corners?" },
    {
      type: "p",
      text: "Do the work that makes the job easier for the crew, and the price follows. Gather everything in one spot near the driveway, break down boxes, and send photos. Our [garage clean-out checklist](/blog/garage-clean-out-checklist) shows how to prepare a big pile. Same day pickup is usually available if you book before 1pm, which is handy if you need things gone fast.",
    },
    {
      type: "steps",
      items: [
        "Photograph everything that is going, from two angles, with something for scale.",
        "Send the photos to two or three companies with your suburb and any stairs or tight access.",
        "Ask each one the same three questions: what is included, how many cubic metres, and will they give a tip docket.",
        "Choose the crew you trust, not just the lowest number, and confirm the price in writing.",
      ],
    },
    {
      type: "cta",
      title: "Want a fixed price you can compare?",
      text: "Send photos through the quote form or pick a load size in the estimator. You get a fixed price that includes labour, tip fees and sweep-up before anyone lifts a thing.",
    },
  ],
  faqs: [
    {
      q: "Who is the best rubbish removal company in Sydney?",
      a: "No one can rank them objectively, so judge by evidence: an active ABN, public liability insurance, a fixed written price, local Google reviews and a tip docket on request. A company that scores well on all of them is a safe pick.",
    },
    {
      q: "How can I tell if a rubbish removal quote is too cheap?",
      a: `Compare it with the going rate for the same volume. A minimum household pickup with us is ${p(H, "single")}, so a price far below that for a full load usually means tip fees, labour or sweep-up are not included, or the rubbish may not be going to a licensed facility.`,
    },
    {
      q: "What should I have ready before the crew arrives?",
      a: "Gather everything in one spot near the driveway, set aside anything that is staying, and keep the access clear. If items are inside the home, be there at the start so you can point out what goes.",
    },
    {
      q: "Can a rubbish removal company take items from a unit block?",
      a: "Yes, but check access first. Strata buildings often have booking rules for lifts and loading docks, so tell the crew when you ask for a quote. Our strata rubbish removal page explains how it works.",
    },
    {
      q: "Is a skip bin or a rubbish removal service better value?",
      a: "It depends on who does the lifting and how much time you have. A removalist loads for you and may be quicker. We compare the cost and effort in our skip bin vs rubbish removal guide.",
    },
  ],
  services: ["household-rubbish-removal", "strata-rubbish-removal"],
};
