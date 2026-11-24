import type { CategoryId, JobType, VolumeId } from "./site";
import type { Faq } from "./faqs";

export type Category = {
  id: CategoryId;
  name: string;
  short: string;
  pitch: string;
  image: string;
  imageAlt: string;
  beforeAfter: string;
  audience: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "residential-rubbish-removal",
    name: "Residential Rubbish Removal",
    short: "Residential",
    audience: "Homeowners, renters & families",
    pitch:
      "The garage you can't park in. The spare room that became a storage unit. The couch that won't fit in the car. Point at it and we carry it out, load it and sweep up.",
    image: "/images/residential-rubbish-removal-clean-garage.webp",
    imageAlt: "Clean, empty garage after a residential rubbish removal in Sydney",
    beforeAfter: "/images/residential-rubbish-removal-near-me.webp",
  },
  {
    id: "commercial-rubbish-removal",
    name: "Commercial Rubbish Removal",
    short: "Commercial",
    audience: "Offices, shops, warehouses & strata",
    pitch:
      "Every hour your space is full of old desks and packaging is an hour it isn't making money. We work early, late or on weekends so trading never stops.",
    image: "/images/commercial-office-rubbish-removal.webp",
    imageAlt: "Cleared commercial office space after rubbish removal",
    beforeAfter: "/images/office-rubbish-removal-near-me.webp",
  },
  {
    id: "construction-rubbish-removal",
    name: "Construction Rubbish Removal",
    short: "Construction",
    audience: "Builders, renovators & trades",
    pitch:
      "Rubble piles slow trades down and look bad to clients. We clear bricks, timber, offcuts and site waste between stages. No skip, no permit, no waiting.",
    image: "/images/construction/brick-and-concrete-removal-sydney.webp",
    imageAlt: "NRR crew loading broken bricks and concrete rubble into the truck for construction rubbish removal in Sydney",
    beforeAfter: "/images/construction/brick-rubble-removal-before-after-sydney.webp",
  },
];

export type Service = {
  slug: string;
  name: string;
  category: CategoryId;
  h1: string;
  title: string;
  description: string;
  summary: string;
  hook: string;
  pains: string[];
  takes: string[];
  /** Service-specific photo (4:3). Falls back to the category image when absent. */
  image?: string;
  imageAlt?: string;
  /** Short line shown under the "Sound familiar?" photo. */
  imageCaption?: string;
  /** Load size the hero estimator opens on (default 2 m³). Single-item services open on "single". */
  defaultLoad?: VolumeId;
  /** Job type the estimator and quote form open on, when it isn't the category's default (e.g. green waste). */
  defaultJob?: JobType;
  /** Service-specific FAQs, shown (and marked up) before a couple of the general ones. */
  faqs?: Faq[];
};

export const SERVICES: Service[] = [
  // ── Residential ───────────────────────────────────────────
  {
    slug: "household-rubbish-removal",
    imageCaption: "We carry it out, load it and sweep up",
    image: "/images/residential/household-rubbish-removal-sydney.webp",
    imageAlt: "NRR crew carrying boxes and an armchair out of a Sydney home to the truck for household rubbish removal",
    name: "Household Rubbish Removal",
    category: "residential-rubbish-removal",
    h1: "Household Rubbish Removal Sydney",
    title: "Household Rubbish Removal Sydney | Same Day, We Lift",
    description:
      "Household rubbish removal across Sydney. We carry it out, load it & sweep up. Price locked before we lift. Same day pickup. Call 0489 043 888.",
    summary: "Removal of general household junk, unwanted items, and clutter from any room, garage, or outdoor area.",
    hook: "You've been 'getting to it' for months. Give us one hour and it's gone: every room, every bag, every broken thing you've been stepping around.",
    pains: [
      "The council pickup is weeks away and only takes 2 cubic metres.",
      "Nothing fits in the car and you've already done three tip runs.",
      "You don't have a spare weekend, or a spare back.",
    ],
    takes: ["Old furniture & beds", "Boxes, bags & general clutter", "Whitegoods & appliances", "Toys, bikes & sporting gear", "Rugs, carpet & curtains", "Outdoor settings & BBQs"],
  },
  {
    slug: "green-waste-removal",
    defaultJob: "green-waste-removal",
    imageCaption: "Branches, fronds and clippings loaded for you",
    image: "/images/residential/green-waste-removal-sydney.webp",
    imageAlt: "NRR crew loading branches and garden clippings onto the truck for green waste removal in Sydney",
    name: "Green Waste Removal",
    category: "residential-rubbish-removal",
    h1: "Green Waste Removal Sydney",
    title: "Green Waste Removal Sydney | Garden Waste Gone Today",
    description:
      "Green waste removal in Sydney: branches, clippings, palm fronds & garden waste loaded and taken today. Upfront price. Call 0489 043 888.",
    summary: "Collection of garden clippings, branches, leaves, and lawn waste from residential properties.",
    hook: "Your green bin fills up in ten minutes. The pile in the backyard took ten weekends. We take the whole lot in one visit.",
    pains: [
      "The green bin is full again, and the pile hasn't moved.",
      "Branches and palm fronds don't fit in a trailer, let alone a car.",
      "You want the garden finished, not a heap rotting by the fence.",
    ],
    takes: ["Branches & tree limbs", "Hedge & lawn clippings", "Palm fronds", "Leaves & garden prunings", "Old pot plants & planters", "Garden furniture & edging"],
  },
  {
    slug: "deceased-estate-clearance",
    imageCaption: "Sorted into keep and donate before anything leaves",
    image: "/images/residential/deceased-estate-clearance-sydney.webp",
    imageAlt: "NRR crew member with a clipboard beside boxes labelled keep and donate during a deceased estate clearance",
    name: "Deceased Estate Clearance",
    category: "residential-rubbish-removal",
    h1: "Deceased Estate Clearance Sydney",
    title: "Deceased Estate Clearance Sydney | Respectful & Careful",
    description:
      "Respectful deceased estate clearance in Sydney. We clear what you choose, set aside what matters & donate where we can. Call 0489 043 888.",
    summary: "Full clearance of furniture, belongings, and household items following a deceased estate, handled with care and discretion.",
    hook: "You've got enough on your plate. Tell us what stays and what goes. We handle the rest quietly, carefully and on your timeline.",
    pains: [
      "You live far away and can't spend weeks sorting a house.",
      "Agents or family need the property cleared by a fixed date.",
      "It's emotionally heavy, and physically heavier.",
    ],
    takes: ["Furniture & beds", "Clothing & linen", "Kitchenware & appliances", "Garage & shed contents", "Garden waste", "Items set aside for donation"],
  },
  {
    slug: "unwanted-furniture-removal",
    imageCaption: "Two-person crew, down the stairs and onto the truck",
    image: "/images/residential/furniture-removal-sydney.webp",
    imageAlt: "Two NRR removalists carrying an old couch down the front steps of a Sydney home for furniture removal",
    name: "Unwanted Furniture Removal",
    category: "residential-rubbish-removal",
    h1: "Unwanted Furniture Removal Sydney",
    title: "Furniture Removal Sydney | Couches, Beds & Wardrobes",
    description:
      "Unwanted furniture removal in Sydney. Couches, wardrobes, beds & tables carried out of any room and taken today. Call 0489 043 888.",
    summary: "Collection and disposal of sofas, wardrobes, tables, and other bulky furniture no longer needed.",
    hook: "The new couch arrives Friday. The old one is still in the lounge room. We'll get it down the stairs and out of your life today.",
    pains: [
      "Nobody wants it on Marketplace, even for free.",
      "It won't fit through the door without taking it apart.",
      "Leaving it on the kerb risks a council fine.",
    ],
    takes: ["Couches & lounges", "Wardrobes & drawers", "Beds & bed frames", "Dining tables & chairs", "Bookshelves & TV units", "Office desks & chairs"],
  },
  {
    slug: "garage-clean-out",
    imageCaption: "Before → after one NRR visit",
    image: "/images/residential/garage-clean-out-before-after.webp",
    imageAlt: "Sydney garage clean-out before and after: a packed garage full of boxes and tools, then empty and swept",
    name: "Garage Clean Out",
    category: "residential-rubbish-removal",
    h1: "Garage Clean Out Sydney",
    title: "Garage Clean Out Sydney | Park Your Car Again",
    description:
      "Garage clean out in Sydney. We clear boxes, tools, old furniture & junk, then sweep the floor. Same day available. Call 0489 043 888.",
    summary: "Clearing garages, sheds, and storage areas of accumulated tools, boxes, and unused equipment.",
    hook: "You paid for a double garage. You're using it as a $100,000 storage cupboard. Let's get your car back inside by this afternoon.",
    pains: [
      "The car lives in the driveway because the garage is full.",
      "You can't find anything, so you keep buying it again.",
      "Every weekend you say 'this weekend'. It never happens.",
    ],
    takes: ["Boxes & storage tubs", "Old tools & equipment", "Bikes & sporting gear", "Shelving & racking", "Old appliances", "Tyres, timber & scrap"],
  },
  {
    slug: "mattress-removal",
    imageCaption: "Carried out from any room, recycled where possible",
    image: "/images/residential/mattress-removal-sydney.webp",
    imageAlt: "Two NRR crew members loading a mattress onto the truck for mattress removal in Sydney",
    name: "Mattress Removal",
    category: "residential-rubbish-removal",
    h1: "Mattress Removal Sydney",
    title: "Mattress Removal Sydney | Same Day Pickup, We Carry It",
    description:
      "Mattress removal in Sydney. We carry it from any room, upstairs or down, and recycle where possible. Same day pickup. Call 0489 043 888.",
    summary: "Collection and disposal of old or damaged mattresses and bed bases.",
    hook: "A queen mattress doesn't fit in a hatchback. It barely fits down the stairs. We'll carry it out of the bedroom and it's gone the same day.",
    pains: [
      "Council caps mattresses per pickup, and you still have to haul it to the kerb.",
      "The new one is arriving and the old one has nowhere to go.",
      "Left outside, it gets wet, heavy and harder to recycle.",
    ],
    takes: ["Single to king mattresses", "Bed bases & ensembles", "Bed frames & headboards", "Cots & bunk beds", "Mattress toppers", "The rest of the bedroom, too"],
    defaultLoad: "single",
    faqs: [
      {
        q: "How much does mattress removal cost?",
        a: "A single mattress is priced as a single item. Pick \"Single Item\" in the estimator above for your price range, or send a photo for a fixed price. Adding the bed base or a few other items to the same pickup costs little extra.",
      },
      {
        q: "Will the council take my old mattress?",
        a: "Most Sydney councils collect mattresses in their booked household clean-ups, but you usually wait for a set date, there are limits on numbers, and you carry it to the kerb yourself. Our guide on [how to dispose of a mattress in Sydney](/blog/how-to-dispose-of-a-mattress-sydney) compares every option.",
      },
      {
        q: "Do you take bed bases, ensembles and frames too?",
        a: "Yes. Bed bases, ensembles, frames, bedheads, cots and bunk beds go in the same trip. We dismantle them on site if they won't fit through the door in one piece.",
      },
      {
        q: "Can you collect from an apartment or upstairs?",
        a: "Yes. We carry it from any room, down stairs or the lift, or from the basement car park. Let us know about stairs or lift bookings when you ask for a quote.",
      },
      {
        q: "Are old mattresses recycled?",
        a: "Where possible, yes. We take mattresses to facilities that send them for recycling, where the steel springs, foam, timber and fabric are recovered instead of going to landfill.",
      },
      {
        q: "Can you pick it up today?",
        a: "Usually. Book before 1pm and we can often collect the same day anywhere in the Sydney Metro area.",
      },
    ],
  },
  // ── Commercial ───────────────────────────────────────────
  {
    slug: "strata-rubbish-removal",
    image: "/images/commercial/strata-rubbish-removal-sydney.webp",
    imageAlt: "NRR crew clearing dumped furniture and mattresses from a Sydney apartment car park for strata rubbish removal",
    imageCaption: "Dumped items cleared from the car park, no fuss",
    name: "Strata Rubbish Removal",
    category: "commercial-rubbish-removal",
    h1: "Strata Rubbish Removal Sydney",
    title: "Strata Rubbish Removal Sydney | Common Areas Cleared",
    description:
      "Strata rubbish removal for Sydney buildings. Bin rooms, basements & common areas cleared one-off or on schedule. Call 0489 043 888.",
    summary: "Scheduled or one off rubbish collection for strata-managed apartment blocks and common areas.",
    hook: "Dumped couches in the car park. Mystery boxes in the bin room. Complaints in your inbox. One call and it's handled, with photos to prove it.",
    pains: [
      "Residents keep dumping and nobody owns the problem.",
      "Council may recover costs from strata for illegal dumping.",
      "You need it cleared before an inspection or AGM.",
    ],
    takes: ["Dumped furniture & mattresses", "Bin room overflow", "Basement & cage clear-outs", "Common area junk", "Move-out leftovers", "Recurring scheduled pickups"],
  },
  {
    slug: "office-rubbish-removal",
    image: "/images/commercial/office-rubbish-removal-sydney.webp",
    imageAlt: "NRR crew removing office chairs, boxes and furniture from a Sydney office with the Harbour Bridge outside",
    imageCaption: "Desks, chairs and boxes out, ready for the next fit-out",
    name: "Office Rubbish Removal",
    category: "commercial-rubbish-removal",
    h1: "Office Rubbish Removal Sydney",
    title: "Office Rubbish Removal Sydney | After-Hours Available",
    description:
      "Office rubbish removal in Sydney. Desks, chairs, paperwork & equipment cleared before or after hours. Upfront quotes. Call 0489 043 888.",
    summary: "Removal of general office waste, old paperwork, and everyday business rubbish.",
    hook: "Your team shouldn't be carrying desks down the fire stairs. We clear the office before 9am or after 5pm, so your business doesn't skip a beat.",
    pains: [
      "Old furniture is eating floor space you pay rent on.",
      "Building management wants it done out of hours.",
      "You need one invoice, not five tip runs.",
    ],
    takes: ["Desks & office chairs", "Filing cabinets & storage", "Old paperwork & archives", "Kitchen & breakroom items", "Boardroom furniture", "Packaging & general waste"],
  },
  {
    slug: "office-cubicle-removal",
    image: "/images/commercial/office-cubicle-removal-sydney.webp",
    imageAlt: "NRR crew dismantling office cubicle partitions with a drill in a Sydney office",
    imageCaption: "Partitions dismantled on site and carried out",
    name: "Office Cubicle Removal",
    category: "commercial-rubbish-removal",
    h1: "Office Cubicle Removal Sydney",
    title: "Office Cubicle Removal Sydney | Workstations Cleared",
    description:
      "Office cubicle & workstation removal in Sydney. Partitions dismantled, carried out & taken away with minimal downtime. Call 0489 043 888.",
    summary: "Dismantling and removal of office cubicles, partitions, and workstation furniture during fit-outs or relocations.",
    hook: "New fit-out starts Monday. The old workstations are still bolted together. We dismantle, carry and clear, so the builders can start on time.",
    pains: [
      "Fit-out trades can't start until the floor is empty.",
      "Partitions are heavy, awkward and need to come apart.",
      "Every day of delay costs you rent and productivity.",
    ],
    takes: ["Cubicles & partitions", "Workstation desks", "Screens & dividers", "Pedestals & cabinets", "Office chairs", "Cabling trays & offcuts"],
  },
  {
    slug: "retail-strip-out-removal",
    image: "/images/commercial/retail-strip-out-removal-sydney.webp",
    imageAlt: "NRR crew removing shelving and fit-out debris during a retail shop strip-out in Sydney",
    imageCaption: "Shelving and fit-out cleared so the shell can be handed back",
    name: "Retail Strip Out Removal",
    category: "commercial-rubbish-removal",
    h1: "Retail Strip Out Removal Sydney",
    title: "Retail Strip Out Removal Sydney | Shop Fittings Cleared",
    description:
      "Retail strip out removal in Sydney. Shelving, displays, counters & signage cleared after close so you hand back on time. Call 0489 043 888.",
    summary: "Clearing shop fittings, displays, and fixtures during a retail strip out or store closure.",
    hook: "Lease ends Friday. The shop is still full of shelving, counters and stock you can't sell. We clear it overnight so you hand the keys back on time.",
    pains: [
      "Make-good deadlines don't move, and penalties are expensive.",
      "Shopping centres have strict loading-dock windows.",
      "You're juggling a closure, a move and staff at once.",
    ],
    takes: ["Shelving & gondolas", "Display units & counters", "Signage & lightboxes", "Stockroom racking", "Old stock & packaging", "Fitting offcuts"],
  },
  {
    slug: "warehouse-rubbish-removal",
    image: "/images/commercial/warehouse-rubbish-removal-sydney.webp",
    imageAlt: "NRR crew loading broken pallets and packaging waste into the truck at a Sydney warehouse",
    imageCaption: "Pallets, packaging and racking loaded straight onto the truck",
    name: "Warehouse Rubbish Removal",
    category: "commercial-rubbish-removal",
    h1: "Warehouse Rubbish Removal Sydney",
    title: "Warehouse Rubbish Removal Sydney | Pallets & Packaging",
    description:
      "Warehouse rubbish removal in Sydney. Pallets, packaging, racking & industrial waste cleared around your operations. Call 0489 043 888.",
    summary: "Collection of pallets, packaging, and general waste from warehouses and storage facilities.",
    hook: "Broken pallets and shrink-wrap mountains are a safety risk and a waste of floor space. We clear it around your shifts, with no forklift time wasted.",
    pains: [
      "Waste is blocking aisles and becoming a WHS issue.",
      "Your general waste bins can't handle bulky items.",
      "You need the floor clear for a new client or audit.",
    ],
    takes: ["Pallets & crates", "Cardboard & shrink-wrap", "Old racking & shelving", "Damaged stock", "Office & lunchroom furniture", "Scrap metal & timber"],
  },
  {
    slug: "end-of-lease-rubbish-removal",
    image: "/images/commercial/end-of-lease-rubbish-removal-sydney.webp",
    imageAlt: "NRR crew member sweeping an empty commercial space after end of lease rubbish removal in Sydney",
    imageCaption: "Cleared and swept, ready for handover",
    name: "End of Lease Rubbish Removal",
    category: "commercial-rubbish-removal",
    h1: "End of Lease Rubbish Removal Sydney",
    title: "End of Lease Rubbish Removal Sydney | Hand Back on Time",
    description:
      "End of lease rubbish removal in Sydney. Everything left behind cleared before handover so you get your bond back. Call 0489 043 888.",
    summary: "Clearing furniture, fittings, and rubbish left behind at the end of a commercial lease.",
    hook: "Your bond depends on an empty space. We clear everything you're leaving behind before inspection, and sweep up so the cleaners can get straight in.",
    pains: [
      "The final inspection is booked and the space is still full.",
      "Leftover furniture means a deduction from your bond.",
      "You're already paying rent on the new place.",
    ],
    takes: ["Furniture & fittings", "Leftover stock & equipment", "Kitchen & breakroom items", "Signage", "Packaging & general rubbish", "Garden & outdoor items"],
  },
  // ── Construction ─────────────────────────────────────────
  {
    slug: "building-materials-disposal",
    image: "/images/construction/building-materials-disposal-renovation-sydney.webp",
    imageAlt: "NRR crew picking up plasterboard and timber offcuts at a Sydney renovation for building materials disposal",
    imageCaption: "Plasterboard, timber and offcuts loaded for you",
    name: "Building Materials Disposal",
    category: "construction-rubbish-removal",
    h1: "Building Materials Disposal Sydney",
    title: "Building Materials Disposal Sydney | Loaded For You",
    description:
      "Building materials disposal in Sydney. Offcuts, plasterboard, packaging & reno waste loaded and removed. No skip needed. Call 0489 043 888.",
    summary: "Disposal of offcuts, packaging, and leftover building materials from renovation or construction sites.",
    hook: "Offcuts, plasterboard, packaging: it piles up faster than you can work around it. We load it and haul it so your trades keep moving.",
    pains: [
      "The pile is in the way of the next trade.",
      "A skip needs a permit and still has to be loaded by hand.",
      "Clients are judging the job by how messy the site looks.",
    ],
    takes: ["Plasterboard offcuts", "Timber & framing", "Tiles & bricks", "Packaging & pallets", "Old fixtures & fittings", "Mixed renovation waste"],
  },
  {
    slug: "construction-site-clean-up",
    image: "/images/construction/construction-waste-removal-loading-truck-sydney.webp",
    imageAlt: "NRR crew loading construction waste and bulka bags onto the truck at a Sydney building site",
    imageCaption: "Site waste cleared between stages",
    name: "Construction Site Clean Up",
    category: "construction-rubbish-removal",
    h1: "Construction Site Clean Up Sydney",
    title: "Construction Site Clean Up Sydney | Between Stages",
    description:
      "Construction site clean up in Sydney between stages or at handover. We load the waste, sweep up & leave the site ready. Call 0489 043 888.",
    summary: "General site clean up during and after construction, clearing debris to keep the site safe and accessible.",
    hook: "Handover is in three days and the site looks like a bomb went off. We clear the debris, sweep the slab and leave it ready for the walkthrough.",
    pains: [
      "A messy site is a safety risk and a liability.",
      "Your labourers cost more than our crew does.",
      "Handover photos need to look professional.",
    ],
    takes: ["Site debris & rubble", "Timber & metal offcuts", "Packaging & strapping", "Plasterboard & insulation (non-hazardous)", "Old fixtures", "Final sweep-up"],
  },
  {
    slug: "scrap-metal-removal",
    image: "/images/construction/scrap-metal-removal-sydney.webp",
    imageAlt: "NRR crew loading scrap metal, pipes and old appliances for scrap metal removal in Sydney",
    imageCaption: "Metal sorted and sent for recycling",
    name: "Scrap Metal Removal",
    category: "construction-rubbish-removal",
    h1: "Scrap Metal Removal Sydney",
    title: "Scrap Metal Removal Sydney | Steel & Metal Waste",
    description:
      "Scrap metal removal in Sydney. Steel offcuts, roofing, fencing & metal waste collected and sent for recycling. Call 0489 043 888.",
    summary: "Collection of scrap metal, steel offcuts, and other metal waste from building sites.",
    hook: "Sharp, heavy and dangerous to leave lying around. We collect your scrap metal and get it to recyclers, and you get the space back.",
    pains: [
      "Offcuts are a trip and cut hazard on site.",
      "It's too heavy and awkward to move yourself.",
      "You'd rather it got recycled than landfilled.",
    ],
    takes: ["Steel offcuts & beams", "Roofing iron", "Old fencing & gates", "Pipes & guttering", "Old frames & racking", "Metal furniture"],
  },
  {
    slug: "brick-and-concrete-removal",
    image: "/images/construction/brick-and-concrete-removal-sydney.webp",
    imageAlt: "NRR crew lifting broken bricks and concrete rubble into the truck in Sydney",
    imageCaption: "Heavy rubble lifted and loaded by our crew",
    name: "Brick and Concrete Removal",
    category: "construction-rubbish-removal",
    h1: "Brick and Concrete Removal Sydney",
    title: "Brick and Concrete Removal Sydney | Rubble Loaded",
    description:
      "Brick and concrete removal in Sydney. Broken rubble, pavers & masonry loaded by our crew and removed today. Call 0489 043 888.",
    summary: "Removal of broken bricks, concrete rubble, and masonry waste from demolition or renovation work.",
    hook: "Rubble is the heaviest, nastiest waste there is. You shouldn't be wheelbarrowing it. We'll load the lot and drive it away.",
    pains: [
      "Council clean-ups won't touch bricks or concrete.",
      "A skip fills up fast and gets overweight fees.",
      "You've already done your back in once.",
    ],
    takes: ["Broken bricks", "Cured concrete rubble", "Pavers & tiles", "Besser blocks", "Masonry & render", "Retaining wall debris"],
  },
  {
    slug: "timber-removal",
    image: "/images/construction/timber-removal-old-decking-sydney.webp",
    imageAlt: "NRR crew removing old timber decking boards from a Sydney backyard for timber removal",
    imageCaption: "Old decking and timber carried out and loaded",
    name: "Timber Removal",
    category: "construction-rubbish-removal",
    h1: "Timber Removal Sydney",
    title: "Timber Removal Sydney | Offcuts, Decking & Framing",
    description:
      "Timber removal in Sydney. Offcuts, old decking, framing & fencing collected and recycled where possible. Call 0489 043 888.",
    summary: "Collection of timber offcuts, old framing, and wood waste from construction and renovation projects.",
    hook: "Old decking full of nails. Framing offcuts everywhere. We clear it out, keep usable timber separate and recycle what we can.",
    pains: [
      "Nail-ridden timber is a safety hazard for kids and pets.",
      "It's too long to fit in a trailer.",
      "You want the deck gone so the new one can go in.",
    ],
    takes: ["Old decking", "Framing & offcuts", "Fencing & palings", "Pallets", "Doors & architraves", "Untreated & treated timber"],
  },
  {
    slug: "skip-bin-alternatives",
    image: "/images/construction/renovation-waste-removal-skip-bin-alternative-sydney.webp",
    imageAlt: "NRR crew loading renovation waste straight onto the truck from a Sydney driveway, no skip bin needed",
    imageCaption: "Loaded straight from the driveway, no skip needed",
    name: "Skip Bin Alternatives",
    category: "construction-rubbish-removal",
    h1: "Skip Bin Alternatives Sydney",
    title: "Skip Bin Alternatives Sydney | No Permit, We Load It",
    description:
      "The Sydney skip bin alternative: no council permit, no driveway blocked, no loading yourself. We lift, load & sweep. Call 0489 043 888.",
    summary: "A faster alternative to skip bin hire, with no council permits needed and full loading included.",
    hook: "A skip bin is a big metal box you still have to fill yourself. We're a truck and a crew. We load it, sweep up and leave, usually for less.",
    pains: [
      "Skips need permits on the street and block the driveway.",
      "Neighbours fill your skip with their junk overnight.",
      "You still have to do all the lifting.",
    ],
    takes: ["Mixed household waste", "Renovation debris", "Furniture & bulky items", "Garden waste", "Bricks, timber & metal", "Everything a skip would hold"],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const servicesIn = (category: CategoryId) => SERVICES.filter((s) => s.category === category);
export const getCategory = (id: CategoryId) => CATEGORIES.find((c) => c.id === id)!;
