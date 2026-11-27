// Single source of truth for business details (NAP), pricing and integrations.
// Everything here was taken from the live site (Nov 2026). Update in one place.

export const SITE = {
  name: "National Rubbish Removal",
  shortName: "NRR",
  url: "https://www.nationalrubbishremoval.com.au",
  phone: "0489 043 888",
  phoneHref: "tel:+61489043888",
  phoneE164: "+61489043888",
  whatsapp: "0418 665 429",
  whatsappHref: "https://wa.me/61418665429",
  email: "info@nationalrubbishremoval.com.au",
  emailHref: "mailto:info@nationalrubbishremoval.com.au",
  areaServed: "Sydney Metro Area",
  /** Date the core, service and suburb pages were last meaningfully updated (sitemap lastmod). Bump on real edits. */
  pagesUpdated: "2026-11-24",
  address: {
    street: "12/57 Allingham St",
    suburb: "Condell Park",
    state: "NSW",
    postcode: "2200",
    full: "12/57 Allingham St, Condell Park NSW 2200",
  },
  // Street-level coordinates for Allingham St, Condell Park (OpenStreetMap). Swap in the exact pin from the
  // Google Business Profile if it differs.
  geo: { latitude: -33.9198, longitude: 151.0014 },
  googleMapsCid: "https://maps.google.com/maps?cid=6280977622235014153",
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJG8AWv4ByiqwRCeR-j96DKlc",
  socials: {
    facebook: "https://www.facebook.com/p/National-Rubbish-Removal-61593067173554/",
    instagram: "https://www.instagram.com/nationalrubbishremoval/",
    linkedin: "https://www.linkedin.com/company/national-rubbish-removal/",
  },
  hours: [
    { label: "Monday – Friday", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "21:00", display: "6:00 AM – 9:00 PM" },
    { label: "Saturday", days: ["Saturday"], opens: "07:00", closes: "21:00", display: "7:00 AM – 9:00 PM" },
    { label: "Sunday", days: ["Sunday"], opens: "08:00", closes: "21:00", display: "8:00 AM – 9:00 PM" },
  ],
  recycleRate: "95%",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T2DRQQ74",
  // GoHighLevel chat widget (GHL → Sites → Chat Widget → Get code).
  chatWidgetId: process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_ID ?? "6affbce731ba0fcd4f926411",
  // Existing lead pipeline (Google Apps Script → Sheet) and media uploads (Cloudinary unsigned preset).
  // Both are the same endpoints the current site posts to, so leads keep landing in the same place.
  leadEndpoint:
    process.env.NEXT_PUBLIC_LEAD_ENDPOINT ??
    "https://script.google.com/macros/s/AKfycby8JvAaP204NeE44FiQzOlyKlWssbYDMnv3mLs9k9X2LBH529Ngse5nKYiyuIBmebCB0g/exec",
  // GoHighLevel: src/app/api/lead/route.ts holds the GHL token (env vars) and creates the contact.
  crmEndpoint: process.env.NEXT_PUBLIC_CRM_ENDPOINT ?? "/api/lead",
  cloudinaryCloud: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD ?? "oakve7mf",
  cloudinaryPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET ?? "nrr_website",
} as const;

export type CategoryId =
  | "residential-rubbish-removal"
  | "commercial-rubbish-removal"
  | "construction-rubbish-removal";

// ── Pricing (owner price list, Nov 2026) ─────────────────────────────────────────────
// Fixed prices by volume for the instant estimator, plus guide ranges for bigger jobs.
// Prices are shown as listed (no GST label). Change prices here only: every page, the blog and llms.txt read them.

/** Job types in the estimator and quote form. Green waste is its own type; it belongs to the residential category. */
export type JobType = CategoryId | "green-waste-removal";

export type VolumeId = "single" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

/** A full truck is 8 m³. */
export const FULL_LOAD_M3 = 8;

export const VOLUMES: { id: VolumeId; label: string; short: string; m3: number; hint: string }[] = [
  { id: "single", label: "Minimum pickup", short: "Single item", m3: 0.5, hint: "One mattress, fridge or couch (up to 1 m³)" },
  { id: "1", label: "1 m³", short: "1 m³", m3: 1, hint: "A few furniture items & bags" },
  { id: "2", label: "2 m³ · ¼ truck", short: "¼ truck", m3: 2, hint: "A small room or a trailer load" },
  { id: "3", label: "3 m³ · ⅜ truck", short: "⅜ truck", m3: 3, hint: "A spare room or small shed" },
  { id: "4", label: "4 m³ · ½ truck", short: "½ truck", m3: 4, hint: "Studio declutter or garden cleanup" },
  { id: "5", label: "5 m³ · ⅝ truck", short: "⅝ truck", m3: 5, hint: "A packed single garage" },
  { id: "6", label: "6 m³ · ¾ truck", short: "¾ truck", m3: 6, hint: "Garage or shed cleanout" },
  { id: "7", label: "7 m³ · ⅞ truck", short: "⅞ truck", m3: 7, hint: "Most of a house" },
  { id: "8", label: "8 m³ · full truck", short: "Full truck", m3: 8, hint: "Whole-home or big reno cleanup" },
];

/** Price per volume: [price] for a fixed price, [low, high] for a range. */
type Tiers = Partial<Record<VolumeId, [number] | [number, number]>>;

export const JOB_TYPES: { id: JobType; label: string; blurb: string; category: CategoryId; tiers: Tiers }[] = [
  {
    id: "residential-rubbish-removal",
    label: "Household",
    blurb: "Furniture, junk, clutter & clean-outs",
    category: "residential-rubbish-removal",
    tiers: { single: [249], 1: [289], 2: [360], 3: [520], 4: [690], 5: [840], 6: [980], 7: [1120], 8: [1250] },
  },
  {
    id: "green-waste-removal",
    label: "Green waste",
    blurb: "Clean branches, clippings & garden waste",
    category: "residential-rubbish-removal",
    tiers: { 1: [150], 2: [250], 4: [450], 6: [650], 8: [850] },
  },
  {
    id: "construction-rubbish-removal",
    label: "Builder waste",
    blurb: "Mixed light renovation & building waste",
    category: "construction-rubbish-removal",
    tiers: { 2: [450], 4: [800], 6: [1050], 8: [1350] },
  },
  {
    id: "commercial-rubbish-removal",
    label: "Commercial",
    blurb: "Factory, warehouse & business waste",
    category: "commercial-rubbish-removal",
    tiers: { 2: [450, 550], 4: [800, 950], 8: [1400, 1600] },
  },
];

export const getJobType = (id: JobType) => JOB_TYPES.find((j) => j.id === id) ?? JOB_TYPES[0];

/** Volumes a job type is priced for, smallest first. */
export const volumesFor = (id: JobType) => VOLUMES.filter((v) => getJobType(id).tiers[v.id]);

/**
 * Price for a job type and volume. If that exact volume isn't on the list for this job type,
 * the next size up is used (or the largest), so every combination has a price.
 */
export function quoteFor(jobId: JobType, volumeId: VolumeId) {
  const job = getJobType(jobId);
  const wanted = VOLUMES.find((v) => v.id === volumeId) ?? VOLUMES[0];
  const priced = volumesFor(job.id);
  const volume = priced.find((v) => v.id === wanted.id) ?? priced.find((v) => v.m3 >= wanted.m3) ?? priced[priced.length - 1];
  const [low, high = low] = job.tiers[volume.id]!;
  return { low, high, isRange: high > low, job, volume, adjusted: volume.id !== wanted.id };
}

/** "$360" or "$450–$550". */
export const formatQuote = (q: { low: number; high: number }) => (q.high > q.low ? `${formatPrice(q.low)}–${formatPrice(q.high)}` : formatPrice(q.low));

/** Starting price for a site category: the smallest load of its main job type (household, builder waste, commercial). */
export function fromPrice(category: CategoryId) {
  return Math.min(...Object.values(getJobType(category).tiers).map((t) => t![0]));
}

/** Guide ranges for bigger jobs, confirmed after photos or a site visit. */
export const PRICE_GUIDE: { title: string; note?: string; items: { label: string; price: string }[] }[] = [
  {
    title: "Deceased estate clearances",
    items: [
      { label: "Single room", price: "$550–$850" },
      { label: "1 bedroom home", price: "$1,200–$1,800" },
      { label: "2 bedroom home", price: "$1,600–$2,500" },
      { label: "3 bedroom home", price: "$2,400–$3,800" },
      { label: "4 bedroom home", price: "$3,200–$5,000" },
      { label: "5+ bedroom home", price: "$4,500–$7,500" },
    ],
  },
  {
    title: "Factory & warehouse clear-outs",
    items: [
      { label: "2 m³ load", price: "$450–$550" },
      { label: "4 m³ load", price: "$800–$950" },
      { label: "8 m³ load", price: "$1,400–$1,600" },
      { label: "Small factory or workshop", price: "$1,500–$3,000" },
      { label: "Medium factory or warehouse", price: "$3,000–$6,000" },
    ],
  },
  {
    title: "Strip-outs",
    items: [
      { label: "Minimum strip-out (mobilisation)", price: "From $850" },
      { label: "Standard bathroom strip-out", price: "$2,500–$3,800" },
      { label: "Standard kitchen strip-out", price: "$2,200–$3,800" },
      { label: "Single-room soft strip-out", price: "$2,000–$4,500" },
    ],
  },
  {
    title: "Office & retail",
    items: [
      { label: "Light office defit", price: "$45–$65 per m²" },
      { label: "Retail strip-out", price: "$55–$90 per m²" },
    ],
  },
];

export const formatPrice = (n: number) => `$${n.toLocaleString("en-AU")}`;

// Google Business Profile rating: update when the review count changes.
export const GOOGLE_RATING = { score: "5.0", count: 27 } as const;

export type Review = {
  name: string;
  /** Reviewer line as shown on Google, e.g. "Local Guide · 36 reviews". */
  meta: string;
  /** Where / what the job was. */
  tag: string;
  text: string;
  /** Verbatim pull-quote taken from the review text, for featured layouts. */
  pull?: string;
};

// Verbatim 5-star reviews from the NRR Google Business Profile (collected Nov 2026). Emojis and owner replies removed;
// long reviews trimmed at a sentence boundary.
export const REVIEWS: Review[] = [
  { name: "Misty Mason", meta: "9 reviews", tag: "Kirrawee · garden debris", pull: "I contacted NRR on a Monday… they were at my property first thing Tuesday morning.", text: "Highly recommend NRR! I contacted NRR on a Monday to get a quote to remove a large amount of garden debris and tree branches from my home in Kirrawee, and they were at my property first thing Tuesday morning. The price was very fair and reasonable, and the service was fantastic from start to finish. They were fast, efficient and extremely tidy. Once everything was removed, they swept the area thoroughly and made sure no rubbish or debris was left behind." },
  { name: "Ali Hijazi", meta: "6 reviews", tag: "Garage clean-out", pull: "I called them this morning. My garage was spotless by midday.", text: "The team at National Rubbish Removal were beyond amazing. I had built up alot of junk over the years and I called them this morning. My garage was spotless by midday. Their service and professionalism was outstanding. I highly recommend them." },
  { name: "George Khattar", meta: "2 reviews", tag: "Civil construction sites", pull: "Running a civil company, reliability and professionalism are everything, and NRR have never let us down.", text: "We’ve used National Rubbish Removal across numerous civil construction sites, and I genuinely can’t speak highly enough of these boys. Running a civil company, reliability and professionalism are everything, and NRR have never let us down. Always on time, extremely professional, and consistently going above and beyond no matter the size of the job." },
  { name: "Jollibee Macabare", meta: "7 reviews · 6 photos", tag: "Parramatta · garage", text: "Really happy with the service from National Rubbish Removal. They came out to our home in Parramatta and removed some old furniture, boxes, and general rubbish from the garage. The guys were friendly, on time, and got everything cleared out quickly without any hassle. They also cleaned up after themselves, which was a nice touch." },
  { name: "Rob Elbasha", meta: "14 reviews · 1 photo", tag: "School demolition project", text: "We recently engaged National Rubbish Removal for a large demolition project at a school, and the experience from start to finish was excellent. Working within a live school environment comes with additional requirements around safety, communication and coordination, and the NRR team understood this from day one." },
  { name: "Roxy Rox", meta: "1 review", tag: "Household removal", text: "Nathan and Scott were lovely guys that did a great rubbish removal. No fuss, no problems. Punctual and polite. Highly recommend to everyone and they were the best price as well. Thanks guys, excellent job." },
  { name: "Hamza Z", meta: "6 reviews · 3 photos", tag: "Georges Hall · shop fit-out", text: "Had a great experience with the boys from NRR. We needed an old shop fit-out removed from our shop in Georges Hall, including some large benches and other unwanted items. They made the whole thing really easy for us. Turned up, got straight into it and had everything cleared out without any fuss." },
  { name: "Richard Dib", meta: "4 reviews", tag: "Oatley · construction site", text: "NRR removed a large amount of construction rubbish from our development project in Oatley after the scaffolding came down, including waste in some extremely difficult-to-access areas; the team came out promptly, inspected the site, provided a very competitive price, and completed the job professionally and efficiently." },
  { name: "Belinda Jovcevski", meta: "10 reviews · 1 photo", tag: "Bexley · furniture", text: "Thank you Nathan and the great team at National Rubbish Removal! They removed furniture for us in Bexley and were fast, efficient, and very professional. Competitive pricing and excellent service from start to finish. Highly recommended!" },
  { name: "Eli Ng", meta: "Local Guide · 13 reviews", tag: "Office clear-out", text: "We needed rubbish and unwanted items cleared out of our office and had a tight deadline to work with. They answered our enquiry straight away and managed to get everything sorted in time, which took a lot of stress off us. They left the office clean and tidy." },
  { name: "Bradley Perillo", meta: "2 reviews", tag: "Lane Cove · mixed load", text: "NRR removed a mixed load of burnt household rubbish and building materials in Lane Cove. The team was punctual, professional, and worked quickly to clear everything out. They were easy to deal with, offered fair pricing, and left the area clean and tidy once the job was finished." },
  { name: "Adam Vee", meta: "4 reviews", tag: "Moorebank · moving out", text: "Great experience with National Rubbish Removal! Used their services for a garage clean-out and general household rubbish removal while moving out of a property in Moorebank. The whole process was easy and stress-free, with great communication, a straightforward approach and great organisation from start to finish." },
  { name: "Mika N.", meta: "1 review", tag: "North Sydney · shop", text: "Fast and reliable team! Called National Rubbish Removal to get rid of old appliances and rubbish from our shop in North Sydney. They arrived right on schedule, worked quickly, and charged a fair price. Very happy with the job!" },
  { name: "Karolina Tavic", meta: "3 reviews · 1 photo", tag: "Pearl Beach · site clean-up", text: "We needed some rubbish removed from site at a property in Pearl Beach. They answered all of our queries, were super easy and helpful to deal with and got a team out straight away to assist with the removal process. They were incredibly professional on site." },
  { name: "Jamela O.", meta: "1 review", tag: "Mt Annan · garage", text: "They did a great job clearing rubbish from our property (garage) in Mt Annan, NSW. The team was friendly, professional and efficient, and made the whole process really easy. Everything was removed promptly and the area was left clean and tidy." },
  { name: "Nila", meta: "1 review", tag: "Double Bay", text: "NRR did a great job removing a load of rubbish from our property in Double Bay. The team was friendly, professional and efficient, and everything was cleared away quickly with no hassle. Great service from start to finish." },
  { name: "Jordan Renz Anam", meta: "1 review", tag: "Richmond", text: "Really happy with the service from National Rubbish Removal. They came out to Richmond and cleared the rubbish from the property quickly and without any fuss. The team was friendly, professional and left everything nice and tidy afterwards." },
  { name: "Amanda Morgan", meta: "3 reviews", tag: "East Hills · home", text: "Great service from NRR! They did a great job removing rubbish at our home in East Hills and made the whole process easy. Reliable, friendly and got the job done without any dramas. Would definitely recommend them if you need rubbish removed!" },
  { name: "Isabel Olaño", meta: "1 review", tag: "Garage declutter", text: "We were decluttering our property and needed to clear out a large amount of old items from our garage. Thankfully, NRR made the process easy. The team completed the job quickly and professionally. They left the area clean and tidy. Communication was excellent, and the pricing was fair." },
  { name: "JBS JBS", meta: "Local Guide · 36 reviews", tag: "Garage", text: "The Guys come in and cleaned up all my rubbish that i needed taken away in my garage, They where in and out in no time and now have made so much more room for me to work on bike. Great job boys. Thankyou" },
  { name: "Nathan Nicolas", meta: "Local Guide · 12 reviews", tag: "Residential", text: "Great experience with National Rubbish Removal. The team were punctual, efficient and professional, made the whole process easy and left the area clean afterwards. Would definitely recommend NRR to anyone looking for reliable rubbish removal." },
  { name: "Romeo Aoun", meta: "17 reviews", tag: "St Huberts Island · retaining wall", text: "Unbelievable service. Removed retaining wall from St Hubert’s Island. Fast and no fuss." },
  { name: "Wahib Moussa", meta: "5 reviews", tag: "Residential", text: "Perfect service, on time and very reasonable prices." },
];

// Things the crew will not take, used in FAQ and "what we take" sections.
export const EXCLUDED_ITEMS = [
  "Asbestos or fibro cement sheeting",
  "Food or liquid waste",
  "Hazardous or contaminated materials",
  "Chemicals, gas and oils",
  "Polystyrene or foam insulation",
  "E-waste",
  "Medical waste",
  "Wet concrete, hot ash, silica",
  "Noxious weeds",
];
