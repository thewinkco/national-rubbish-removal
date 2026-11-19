import type { RichGuide } from "./types";

const IWC_CLEANUP =
  "https://www.innerwest.nsw.gov.au/waste-and-recycling/council-clean-and-extra-red-lid-bin-collection";
const IWC_CRC = "https://www.innerwest.nsw.gov.au/drop-offs-and-recycling-centres/community-recycling-centres";
const IWC_TRANSFER = "https://www.innerwest.nsw.gov.au/drop-offs-and-recycling-centres/weekend-transfer-station";
const IWC_BIN_DAY = "https://www.innerwest.nsw.gov.au/waste-and-recycling/bin-collection-day";
const COS_PICKUP = "https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items";
const COS_DROP_OFF =
  "https://www.cityofsydney.nsw.gov.au/waste-recycling-services/drop-off-household-items-for-recycling";
const COS_DOORSTEP = "https://www.cityofsydney.nsw.gov.au/environmental-support-funding/doorstep-recycling";
const COS_BIN_DAY = "https://www.cityofsydney.nsw.gov.au/waste-recycling-services/find-my-bin-collection-day";
const CB_CLEANUP = "https://www.cbcity.nsw.gov.au/residents/booking-household-clean";
const CB_EWASTE = "https://www.cbcity.nsw.gov.au/residents/waste-and-recycling/electrical-waste-recycling";

export const INNER_WEST_GUIDES: Record<string, RichGuide> = {
  newtown: {
    intro: [
      "Newtown sits about 4 km south west of the Sydney CBD, next to the University of Sydney and Royal Prince Alfred Hospital. King Street runs right through it, lined with cafés, bars, bookshops and op shops, and Enmore Road branches off towards Enmore and Marrickville. Newtown and Erskineville stations sit on either side of the shopping strip.",
      "Step off King Street and you're among rows of 19th-century terraces, narrow semis and small blocks of flats. Many terraces have been split into share houses, and lots of streets have rear lanes. Parking is tight almost everywhere, and on King Street itself there's often nowhere to stop at all during the day.",
      "Locals are a mix of students, hospital and university staff, young professionals and long-time owners who bought decades ago. A lot of people rent, so leases end all year round, and the shops along King Street change hands often. That means a steady flow of old furniture, mattresses and shop fittings that need to go somewhere.",
    ],
    scenarios: [
      {
        h3: "Share House Move-Outs",
        p: [
          "In a Newtown share house, the end of a lease is rarely tidy. One housemate leaves early, another takes only what fits in a car, and the hallway fills with a broken couch, two mattresses and bags of odds and ends. The bond inspection is coming and nobody owns a ute.",
          "We clear the whole house room by room, carry everything down the stairs and out the front door, and sweep up before we go. Book us a day or two before your inspection so you still have time to clean. See how our [end of lease rubbish removal](/end-of-lease-rubbish-removal) service works.",
        ],
      },
      {
        h3: "King Street Shop and Café Strip-Outs",
        p: [
          "When a King Street shop closes or changes hands, the old fit-out has to come out before the new tenant can start. Shelving, counters, display racks, signage and stock all have to go, and the footpath outside is busy from morning to late at night.",
          "We can start early, before trade picks up, and load quickly so we're not blocking the street for long. Our two-person crew handles the lifting and leaves the space swept and ready for the builders. Read about our [retail strip-out removal](/retail-strip-out-removal) service.",
        ],
      },
      {
        h3: "Terrace Furniture Removal",
        p: [
          "Newtown terraces were not built for modern furniture. Halls are narrow, stairs turn tight corners and the front door often opens straight onto the footpath. Getting a big sofa or a wardrobe out takes care, and sometimes a screwdriver.",
          "We take apart large items when needed and carry them out without scuffing walls or old floorboards. Have a look at our [unwanted furniture removal](/unwanted-furniture-removal) service for the items we take.",
        ],
      },
    ],
    council: {
      heading: "Inner West Council or City of Sydney Clean-Up, or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Newtown is split between two councils. Part of the suburb is in Inner West Council and part is in the City of Sydney, and the two run their bulky waste pickups very differently. If you're not sure which side your street is on, check your address on the [Inner West bin day lookup](" + IWC_BIN_DAY + ") or the [City of Sydney bin day lookup](" + COS_BIN_DAY + ").",
        },
        { type: "h3", text: "If you're with Inner West Council" },
        {
          type: "list",
          items: [
            "You book a [council clean-up online](" + IWC_CLEANUP + ") and choose a category. Bulky household items, mattresses, metal and whitegoods, and branches are each booked separately, as different trucks collect them.",
            "Each collection is limited to 2 cubic metres, about 2 metres long, 1 metre wide and 1 metre high. Bigger piles won't be collected.",
            "Building materials, car parts, paint and chemicals, household garbage and items two people can't lift are not taken.",
            "Items go on the street the evening before, with your booking reference attached. Council says spots are limited each day.",
          ],
        },
        { type: "h3", text: "If you're with the City of Sydney" },
        {
          type: "list",
          items: [
            "You can [book a free pick-up](" + COS_PICKUP + ") online each week. Book by 2pm the day before your area's collection day.",
            "Houses and terraces get about 1 cubic metre per booking, roughly a box trailer load.",
            "Single items over 1.5 metres long or 100 kg are not collected.",
            "Renovation materials, carpet, mirrors and glass, pianos and business waste are not accepted.",
            "Put items out the night before, not earlier, next to your property where the truck can see them.",
          ],
        },
        {
          type: "p",
          text: "Both services work well for a small pile that can wait for collection day. For a full share house, a shop fit-out or anything heavy or oversized, a private pickup is simpler. We come when it suits you, carry everything out ourselves, and take most of the things council won't, on either side of King Street.",
        },
      ],
    },
    extra: [
      {
        heading: "Recycling Paint, Batteries and E-Waste in Newtown",
        blocks: [
          {
            type: "p",
            text: "We don't take hazardous waste, so a few things need their own trip. Inner West Council runs a [Community Recycling Centre](" + IWC_CRC + ") at 15-17 Unwins Bridge Road, St Peters, with entry at the rear through Bolton Street. It's open Saturday and Sunday, 8am to 1pm, it's free, and no proof of residence is needed.",
          },
          {
            type: "list",
            items: [
              "Paint, gas bottles, fire extinguishers and smoke detectors",
              "Car and household batteries, motor and cooking oil",
              "Fluorescent globes and tubes, and aerosols",
              "Computers, TVs, monitors and sound equipment",
            ],
          },
          {
            type: "p",
            text: "On the City of Sydney side, residents can book [doorstep recycling](" + COS_DOORSTEP + "), a free pick-up of bagged items like small electronics, batteries, light bulbs and worn-out clothes, with a minimum of 2 bags. Once those are sorted, we can take the furniture, mattresses and general junk in one visit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does it matter which council my Newtown home is in?",
        a: "Not to us. Newtown is split between Inner West Council and the City of Sydney, but we work the same way on both sides. It only matters if you want to book a council pickup instead.",
      },
      {
        q: "Can you clear a King Street shop before it opens?",
        a: "Yes. We can start early so the footpath is clear by the time the street gets busy. Tell us your trading hours when you book.",
      },
      {
        q: "Can you collect from a share house today?",
        a: "Most days, yes, when you book early. Call before 1pm and we can often get to Newtown the same day, weekends included.",
      },
      {
        q: "Do you also cover Enmore, Stanmore, Camperdown and Erskineville?",
        a: "Yes. We cover Newtown and the suburbs around it, including Enmore, Stanmore, Camperdown and Erskineville. We also work in nearby [Marrickville](/marrickville) and [Glebe](/glebe).",
      },
    ],
  },

  marrickville: {
    intro: [
      "Marrickville is about 7 km south west of the Sydney CBD and one of the biggest suburbs in the Inner West. Marrickville Road and Illawarra Road are the two main shopping streets, full of grocers, bakeries and cafés, and the suburb is served by Marrickville, Dulwich Hill and Sydenham stations. The Cooks River runs along its southern edge.",
      "Housing is mostly Federation houses, semis and brick cottages, many on decent blocks with real backyards. There are also blocks of flats along the main roads and a large light industrial area towards Sydenham and St Peters, where old warehouses now house breweries, studios and workshops. Many streets have driveways or rear lanes, which makes loading easier than in the tighter inner suburbs.",
      "Families, tradies, artists and long-time Greek, Vietnamese and Portuguese households live side by side here. Renovations are everywhere. On almost any street you'll see a skip, a scaffold or a pile of old tiles waiting to go.",
    ],
    scenarios: [
      {
        h3: "Kitchen and Bathroom Renovation Waste",
        p: [
          "A Marrickville bathroom reno can fill a driveway with broken tiles, an old vanity, plasterboard, timber and the bathtub itself. A kitchen job adds cabinets and benchtops. A skip on the street can need a permit and takes up a parking spot for days.",
          "We load straight from your driveway, yard or rear lane and take it all in one trip. Read about our [building materials disposal](/building-materials-disposal) service. We can't take asbestos, so if your home has old fibro, get it tested before demolition starts.",
        ],
      },
      {
        h3: "Backyard and Green Waste Clean-Ups",
        p: [
          "Big Marrickville backyards grow fast. Overgrown hedges, palm fronds, old fruit trees and piles of prunings build up over a few seasons, and the green bin only takes so much.",
          "We clear the lot in one visit, with no bundling or cutting to size, and carry it down the side path to the truck. See our [green waste removal](/green-waste-removal) service.",
        ],
      },
      {
        h3: "Warehouse and Workshop Clear-Outs",
        p: [
          "The industrial streets near Sydenham and St Peters are full of small businesses. When a studio moves or a workshop closes, there's usually old shelving, pallets, scrap metal and office furniture to remove.",
          "We work around your hours and keep loading bays clear. Read about our [warehouse rubbish removal](/warehouse-rubbish-removal) service.",
        ],
      },
    ],
    council: {
      heading: "Inner West Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Marrickville homes that pay a domestic waste charge can [book a council clean-up](" + IWC_CLEANUP + ") through Inner West Council's online system. Here's how it works:",
        },
        {
          type: "list",
          items: [
            "Book online, choose a category, then a date, size and collection point. Your booking is only confirmed once you get a reference number.",
            "Bulky household items, mattresses, metal and whitegoods, and branches are separate categories, each booked on its own.",
            "Each collection is capped at 2 cubic metres. Piles over the limit won't be collected.",
            "Building materials are not accepted in the bulky items category. Rubble, rocks, stumps and dirt are not taken with branches either.",
            "Crews won't enter your yard or driveway. Everything has to be on the street the evening before.",
          ],
        },
        {
          type: "p",
          text: "That rules out most renovation waste, which is what Marrickville produces most. Council's service is fine for an old bed frame or a broken chair. For tiles, timber, a full backyard or a pile bigger than 2 cubic metres, a private collection makes more sense. We come when it suits, carry everything out from the back of the block ourselves, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Problem Waste Drop-Off Near Marrickville",
        blocks: [
          {
            type: "p",
            text: "Paint tins, gas bottles and old batteries are common after a reno, and they can't go in your bins or on our truck. The closest option is Inner West Council's [St Peters Community Recycling Centre](" + IWC_CRC + ") at 15-17 Unwins Bridge Road, entered from Bolton Street at the rear. It's free, open Saturday and Sunday from 8am to 1pm, and only takes household quantities, with a 20 kg or 20 litre maximum container size.",
          },
          {
            type: "p",
            text: "It accepts paint, gas bottles, fire extinguishers, batteries, motor and cooking oil, fluorescent globes and smoke detectors, plus computers and TVs. Drop those off on the weekend, then book us for the tiles, timber, furniture and garden waste.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take tiles, old cabinets and plasterboard?",
        a: "Yes. Mixed renovation waste is fine, including tiles, cabinets, benchtops, plasterboard and timber. Asbestos is the one thing we can't take.",
      },
      {
        q: "Do I need to bundle branches for you?",
        a: "No. Council's branches collection needs bundles, but we take branches, palm fronds and clippings loose, straight from the yard.",
      },
      {
        q: "Can you load from my rear lane?",
        a: "Yes. If your garage or back gate opens onto a lane, we can often load from there and keep the front street clear.",
      },
      {
        q: "Do you cover Dulwich Hill, Sydenham, Tempe and Petersham?",
        a: "Yes. We cover Marrickville and the nearby suburbs of Dulwich Hill, Sydenham, Tempe and Petersham. We also work in [Newtown](/newtown), [Earlwood](/earlwood) and [Leichhardt](/leichhardt).",
      },
    ],
  },

  earlwood: {
    intro: [
      "Earlwood is about 10 km south west of the Sydney CBD, on the high ground south of the Cooks River. It is part of Canterbury-Bankstown Council, even though most locals think of it as Inner West. The shops are spread along Homer Street and Clarke Street, and the Wolli Creek bushland valley runs along the suburb's southern side.",
      "This is a hilly suburb. Many streets climb steeply from the river, so homes sit above or below the road with long front steps, steep driveways or split levels. Most housing is free-standing brick bungalows and Federation homes on full blocks, with garages underneath or down the side, plus some low-rise flats near the shops.",
      "Earlwood is a settled family suburb. Many homes have been owned by the same family for decades, and long-standing Greek and other communities sit alongside younger families moving in from closer to the city. That mix means a lot of downsizing, estate clear-outs and full-house renovations.",
    ],
    scenarios: [
      {
        h3: "Steep Driveways and Long Front Steps",
        p: [
          "Carrying a fridge or a sofa up a steep Earlwood driveway is hard work and easy to get wrong. A skip bin on a sloping block or a steep street isn't always practical either, and council won't collect from your property.",
          "Our two-person crew carries everything up or down to the truck on the street, however many steps there are. See our [unwanted furniture removal](/unwanted-furniture-removal) service.",
        ],
      },
      {
        h3: "Downsizing and Deceased Estate Clear-Outs",
        p: [
          "When parents move into something smaller, or a family home needs clearing after a loss, there can be fifty years of furniture, clothes, tools and keepsakes to sort through. It's emotional work and nobody wants to rush it.",
          "We work at your pace, set aside anything you want to keep, and donate usable items where we can. Read about our [deceased estate clearance](/deceased-estate-clearance) service.",
        ],
      },
      {
        h3: "Under-House Garage Clean-Outs",
        p: [
          "Because of the slope, many Earlwood homes have a garage or storage room under the house. Old paint tins, timber offcuts, spare doors, bikes and broken furniture end up there and stay for years.",
          "We empty it in one visit and sweep it out. Check our [garage clean out](/garage-clean-out) service. Leave any paint or chemicals aside, as we can't take hazardous waste.",
        ],
      },
    ],
    council: {
      heading: "Canterbury-Bankstown Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Earlwood homes can [book a bulky waste clean-up](" + CB_CLEANUP + ") with Canterbury-Bankstown Council. The main rules are:",
        },
        {
          type: "list",
          items: [
            "Houses, townhouses and buildings of five units or fewer book online. In buildings of six or more units, only the building manager, strata manager or an authorised committee member can book, by phone.",
            "You get two free clean-ups per calendar year. You can combine them into one double booking.",
            "A standard clean-up is 3 cubic metres, and a double booking is 6 cubic metres.",
            "Glass and mirrors, gas bottles, batteries, paint and chemicals, food waste, car parts, bricks, pianos, tree stumps, and building or demolition waste are not accepted.",
            "Items must be at the front of your property by the kerb, put out the day before. Rejected items must be moved back within 24 hours or you could be fined.",
          ],
        },
        {
          type: "p",
          text: "On a steep Earlwood block, getting everything down to the kerb is often the hardest part. With us, you don't move a thing. We come when it suits, carry it out from wherever it is in the house, and take most things council won't, including bricks and renovation waste.",
        },
      ],
    },
    extra: [
      {
        heading: "E-Waste and Chemical Drop-Off for Earlwood Residents",
        blocks: [
          {
            type: "p",
            text: "Canterbury-Bankstown Council runs [two free e-waste drop-off events](" + CB_EWASTE + ") each year for residents. Council says these are usually held in June at Bankstown Paceway in Condell Park and in November at the Council Administration Building car park in Campsie. Officeworks stores also take some e-waste during the year.",
          },
          {
            type: "p",
            text: "For paint, gas bottles and batteries at any time, council points residents towards Community Recycling Centres run by other councils. The nearest is Inner West Council's [St Peters Community Recycling Centre](" + IWC_CRC + ") at 15-17 Unwins Bridge Road, open weekends from 8am to 1pm. It's free and doesn't ask for proof of residence.",
          },
        ],
      },
      {
        heading: "Clearing a Family Home Before Sale",
        blocks: [
          {
            type: "p",
            text: "Many Earlwood homes go to market after a long family ownership, and agents want the house empty before photos. We can clear whole rooms, the garage, the shed and the back garden in one or two visits, and leave the floors swept for the cleaners or stylists.",
          },
          {
            type: "p",
            text: "Tell us which items stay and which go, and we'll work around them. If you need a figure for the family to agree on first, try our [quote estimator](/quote-estimator) or send us photos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you handle steep driveways and stairs?",
        a: "Yes. That's most of Earlwood. We carry everything to the truck ourselves, however steep the driveway or long the steps.",
      },
      {
        q: "I've used both council clean-ups this year. What now?",
        a: "Book us. There's no yearly limit with a private collection, and you don't need to wait for a date or drag anything to the kerb.",
      },
      {
        q: "Can you clear a parent's home gently and at our pace?",
        a: "Yes. We keep anything you want separate, take breaks when you need them, and donate usable items where we can.",
      },
      {
        q: "Do you cover Clemton Park, Undercliffe and Canterbury?",
        a: "Yes. We cover Earlwood and the surrounding suburbs of Clemton Park, Undercliffe and Canterbury. Across the river, we also work in [Marrickville](/marrickville).",
      },
    ],
  },

  leichhardt: {
    intro: [
      "Leichhardt is about 5 km west of the Sydney CBD. Norton Street runs north to south through the suburb with its Italian cafés, restaurants and shops, and Parramatta Road forms its southern edge. The light rail runs along the old goods line on the western side, and buses along Norton Street and Parramatta Road link it to the city.",
      "Most homes are 19th-century and Federation cottages, semis and terraces, plus some interwar bungalows and newer townhouses. Many have been extended at the back, and plenty still have a garage or shed off a rear lane. Streets are mostly residential and quieter than Newtown, but parking is still tight near Norton Street.",
      "Leichhardt has a long Italian history, and many families have been here for generations. Today it's also popular with young families who buy an older home and renovate. That means bricks, rubble and old joinery coming out of backyards all year round.",
    ],
    scenarios: [
      {
        h3: "Brick and Concrete Rubble from Extensions",
        p: [
          "Knocking out a back wall or digging up an old concrete yard in Leichhardt leaves heavy rubble: broken bricks, slabs, old render and pavers. It's slow, back-breaking work to move, and council's clean-up won't take any of it.",
          "We bag or barrow it out to the truck ourselves. Read about our [brick and concrete removal](/brick-and-concrete-removal) service.",
        ],
      },
      {
        h3: "Garage and Rear-Lane Shed Clean-Outs",
        p: [
          "A Leichhardt garage that hasn't seen a car in years is a common sight. Old furniture, tools, bikes, boxes and timber fill it to the roof.",
          "We clear the lot, load from the lane where we can, and sweep it out so the car can go back in. See our [garage clean out](/garage-clean-out) service.",
        ],
      },
      {
        h3: "Small Office and Shop Clear-Outs on Norton Street",
        p: [
          "Norton Street has plenty of small offices, clinics and shops above and behind the street front. When a lease ends, desks, chairs, filing cabinets and old partitions need to go, often down a flight of stairs.",
          "We do the carrying and work around your hours. Read about our [office rubbish removal](/office-rubbish-removal) service.",
        ],
      },
    ],
    council: {
      heading: "Inner West Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Inner West Council offers [booked clean-ups](" + IWC_CLEANUP + ") for properties that pay the domestic waste management charge. Before you book, it helps to know these rules:",
        },
        {
          type: "list",
          items: [
            "Each category is booked separately: bulky household items, mattresses, metal and whitegoods, and branches. Items in the wrong category won't be collected.",
            "Each collection is limited to 2 cubic metres.",
            "Building materials and items two people can't lift are not accepted. That rules out bricks, concrete and most renovation waste.",
            "Changes and cancellations must be made 48 hours before your collection date.",
            "Items go on the street, not inside your property, the evening before. Putting them out early could be treated as illegal dumping.",
          ],
        },
        {
          type: "p",
          text: "So council is the right call for a broken chair or an old rug. For reno rubble, a full garage or anything heavy, a private collection is easier. We come when it suits, carry everything out ourselves, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Leichhardt's Weekend Transfer Station and Recycling Centre",
        blocks: [
          {
            type: "p",
            text: "Leichhardt is home to Inner West Council's drop-off site at 50-54 Moore Street. If you have a car and a free weekend, it's worth knowing about.",
          },
          {
            type: "list",
            items: [
              "The [Weekend Transfer Station](" + IWC_TRANSFER + ") is open Saturday and Sunday, 7:45am to 11:30am and 1pm to 3:45pm, for Inner West residents with proof of residence.",
              "It takes mattresses, whitegoods and metals, garden organics, TVs and computers, and sorted recycling for free. Bulky waste like broken furniture is accepted for a fee.",
              "It does not take soil, bricks, concrete, asbestos, chemicals or household rubbish.",
              "The [Community Recycling Centre](" + IWC_CRC + ") at the same address takes paint, gas bottles, batteries, oils and fluorescent globes for free, with no proof of residence needed.",
            ],
          },
          {
            type: "p",
            text: "If you don't have a trailer, or your pile is mostly bricks and rubble, the transfer station can't help. That's where we come in.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take bricks and concrete?",
        a: "Yes. Broken bricks, concrete, pavers and masonry rubble are all fine. Our crew lifts and loads it, so you don't have to barrow it to the street.",
      },
      {
        q: "How long does a garage clean-out take?",
        a: "Most single and double garages are cleared in one visit. We agree a fixed price with you before we start.",
      },
      {
        q: "Can you take the furniture the Moore Street transfer station charges for?",
        a: "Yes. We take broken furniture, rugs and general junk as part of the same job, so you don't need to make several trips.",
      },
      {
        q: "Do you cover Lilyfield, Annandale and Haberfield?",
        a: "Yes. We cover Leichhardt and the nearby suburbs of Lilyfield, Annandale and Haberfield. We also work in [Balmain](/balmain), [Rozelle](/rozelle) and [Glebe](/glebe).",
      },
    ],
  },

  balmain: {
    intro: [
      "Balmain sits on a peninsula about 3 km west of the Sydney CBD as the crow flies, with the harbour on three sides. Darling Street runs down its spine from Rozelle to the ferry wharf at Balmain East, lined with pubs, cafés and boutiques. Ferries from Balmain and Birchgrove wharves are a quick way into the city.",
      "This is one of Sydney's oldest suburbs. The streets are narrow and winding, many of them steep as they drop towards the water. Homes are mostly 19th-century workers' cottages, stone houses and terraces, often on tiny blocks with no driveway. There are also converted warehouses and newer apartment blocks near the old wharves.",
      "Balmain residents are mostly owner-occupiers, with families, professionals and retirees who have been here a long time. Heritage controls are strict, so renovations tend to be careful and slow. Street parking is scarce, and a skip bin can block a whole lane.",
    ],
    scenarios: [
      {
        h3: "A Skip Bin Alternative for Narrow Streets",
        p: [
          "On most Balmain streets, a skip means a council permit, a lost parking spot and a bin sitting out for days. On the narrowest lanes there's simply no room for one.",
          "We park, load straight into the truck and leave the same visit. Nothing sits on the street overnight. See how our [skip bin alternatives](/skip-bin-alternatives) compare.",
        ],
      },
      {
        h3: "Heritage Cottage Renovations",
        p: [
          "Restoring a Balmain cottage often means old floorboards, skirting, doors, joinery and timber framing coming out, as well as plaster and lath from old walls.",
          "We remove it in one trip and sweep up after. Read about our [timber removal](/timber-removal) service. If your home has old fibro, have it checked first, as we can't take asbestos.",
        ],
      },
      {
        h3: "Wharf Apartment and Strata Clear-Outs",
        p: [
          "Balmain's converted warehouses and harbourside blocks have shared garages, storage cages and bin rooms that slowly fill with abandoned furniture.",
          "We work with strata managers and building managers to clear common areas, carry items up from basements and leave the space swept. Learn about our [strata rubbish removal](/strata-rubbish-removal) service.",
        ],
      },
    ],
    council: {
      heading: "Inner West Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Balmain is in Inner West Council, which runs [booked clean-ups](" + IWC_CLEANUP + ") for homes that pay the domestic waste charge. What to know:",
        },
        {
          type: "list",
          items: [
            "You book online, pick a category and a collection point, and get a booking reference number. Write it on paper and leave it on your pile.",
            "The limit is 2 cubic metres per collection.",
            "Bulky items, mattresses, metal and whitegoods, and branches are booked separately and collected by different trucks.",
            "Items must be on the street, not inside your boundary, and must not block the footpath. Crews won't come into your yard.",
            "Building materials and anything two people can't lift are not accepted.",
          ],
        },
        {
          type: "p",
          text: "On a narrow Balmain footpath, finding space for a 2 cubic metre pile without blocking the way can be hard in itself. With us there's no pile at all. We come when it suits, carry it straight from your house to the truck, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Working Around Heritage Homes and Tight Access",
        blocks: [
          {
            type: "p",
            text: "Many Balmain homes have narrow front doors, steep internal stairs, sandstone steps and old timber floors. Some can only be reached by a set of stairs from the street or a side path. Our crew is used to this and takes care with walls, door frames and polished boards.",
          },
          {
            type: "list",
            items: [
              "We take apart beds, wardrobes and tables when they won't fit through the door in one piece.",
              "We carry everything by hand, so there's no trolley damage on old floors.",
              "We plan parking before we arrive. Tell us about any steep or one-way streets when you book.",
            ],
          },
          {
            type: "p",
            text: "Heritage jobs often turn up things worth saving, like old doors, fireplace surrounds or solid timber furniture. Tell us what you'd like kept aside and we'll leave it in place. Usable pieces we take are donated where possible, and the rest goes to licensed Sydney facilities for sorting and recycling.",
          },
          {
            type: "p",
            text: "Have photos? Send them through or use our [quote estimator](/quote-estimator) for a quick idea before we visit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a permit for your truck?",
        a: "No. We park, load and leave in the same visit, so there's no skip permit and nothing left on the street.",
      },
      {
        q: "Do you take old floorboards and joinery?",
        a: "Yes. Floorboards, skirting, doors, decking and framing are all fine, painted or not. Asbestos-containing materials are the exception.",
      },
      {
        q: "Can you work with our strata manager?",
        a: "Yes. We can quote the strata committee or building manager directly, work around access times and clear shared areas in one visit.",
      },
      {
        q: "Do you cover Birchgrove and Balmain East?",
        a: "Yes. We cover all of Balmain, plus Birchgrove and Balmain East. We also work in nearby [Rozelle](/rozelle) and [Leichhardt](/leichhardt).",
      },
    ],
  },

  glebe: {
    intro: [
      "Glebe is about 3 km south west of the Sydney CBD, between Broadway and Blackwattle Bay. Glebe Point Road runs from Broadway down to the water, with bookshops, cafés, pubs and the Saturday markets near the school. The University of Sydney is a short walk away, and the light rail stops at Glebe and Jubilee Park.",
      "Housing is mostly 19th-century terraces, many of them two or three storeys with steep internal stairs, plus older walk-up flats and some newer apartment blocks near the bay. Rear lanes run behind many streets. Parking near Glebe Point Road is hard, and much of the suburb is permit parking.",
      "Glebe has a big renting population, including university students, hospital staff and young workers, alongside long-term owners and a large public housing community. Leases turn over constantly, and the busiest times are the end of each semester and the end of the year.",
    ],
    scenarios: [
      {
        h3: "Student and Rental Move-Outs",
        p: [
          "At the end of semester, Glebe is full of desks, bed frames, cheap bookshelves and mattresses that nobody wants to take home. International students often fly out within days of their last exam.",
          "We clear everything that's going in one visit so you can hand back the keys on time. See how our [end of lease rubbish removal](/end-of-lease-rubbish-removal) service works.",
        ],
      },
      {
        h3: "Mattress Removal from Upstairs Rooms",
        p: [
          "In a three-storey Glebe terrace, getting a queen mattress down two flights of narrow stairs is a two-person job at least. Many renters just don't have the help.",
          "We carry mattresses down from any floor and send them for recycling where possible. Read about our [mattress removal](/mattress-removal) service.",
        ],
      },
      {
        h3: "Walk-Up Flat Furniture Removal",
        p: [
          "Glebe's older blocks of flats rarely have lifts. A sofa or wardrobe on the third floor needs careful handling on tight stairwells.",
          "Our crew takes items apart where needed and carries them out without damaging common areas. See our [unwanted furniture removal](/unwanted-furniture-removal) service.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Glebe is in the City of Sydney, which offers a [free weekly pick-up for bulky items](" + COS_PICKUP + "). It's a good service, but it has firm rules:",
        },
        {
          type: "list",
          items: [
            "Book online by 2pm the day before your area's scheduled collection day.",
            "Houses and terraces get about 1 cubic metre per booking. Apartment buildings get 4 cubic metres, usually booked by the building manager for the whole block.",
            "Items are split into three groups: mattresses; furniture and bulky items; and metals, whitegoods and electronics. Keep each group apart.",
            "Items over 1.5 metres long or 100 kg, and anything two people can't easily lift, are not collected.",
            "Renovation materials, carpet, mirrors and glass, pianos and business waste are not accepted.",
            "Put items out the night before, not earlier, next to your property. Items on porches or private property won't be picked up.",
          ],
        },
        {
          type: "p",
          text: "That works for one or two items when your collection day lines up with your move. If your lease ends before then, or you have a whole flat to clear, a private pickup is simpler. We come when it suits, carry everything down the stairs ourselves, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Recycling Drop-Offs for Glebe Residents",
        blocks: [
          {
            type: "p",
            text: "Some things we don't take, like batteries, paint and gas bottles. The City of Sydney has a few [drop-off options](" + COS_DROP_OFF + ") that suit Glebe well:",
          },
          {
            type: "list",
            items: [
              "Recycle It Saturday runs every 3 months at Alexandra Canal Depot, 67C Bourke Road, Alexandria. It takes electronics, batteries, paint, gas bottles, light bulbs and worn-out clothes and bedding.",
              "The Ultimo recycling pop-up opens on Tuesdays from 2pm to 7pm, and suits people walking or riding from Glebe.",
              "Recycling stations at libraries and customer service centres take household batteries, small light bulbs and small electronics under 10 cm wide.",
              "[Doorstep recycling](" + COS_DOORSTEP + ") is a free pick-up of bagged items from your door, with a minimum of 2 bags.",
            ],
          },
          {
            type: "p",
            text: "None of these take mattresses or furniture. Sort the small stuff through council, and leave the beds, desks and sofas to us.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you clear a student flat before the lease ends?",
        a: "Yes. Book us a day or two before your handover and we'll take everything that's going in one visit, with a sweep-up after.",
      },
      {
        q: "Can you collect from a third-floor flat with no lift?",
        a: "Yes. Our two-person crew carries everything down the stairs. You don't need to bring anything to the street.",
      },
      {
        q: "Can you come today?",
        a: "Most days, yes, when you book early. Call before 1pm and we can often get to Glebe the same day.",
      },
      {
        q: "Do you cover Forest Lodge and Camperdown?",
        a: "Yes. We cover Glebe and the nearby suburbs of Forest Lodge and Camperdown. We also work in [Newtown](/newtown), [Leichhardt](/leichhardt) and the [Sydney CBD](/sydney-cbd).",
      },
    ],
  },

  rozelle: {
    intro: [
      "Rozelle is about 4 km west of the Sydney CBD, at the neck of the Balmain peninsula. Darling Street is the local high street, with cafés, pubs and the weekend markets at the school. The suburb borders Lilyfield and the large harbourside grounds of Callan Park, and the old rail yards have been turned into the Rozelle Parklands above the new motorway tunnels.",
      "Homes are mostly small workers' cottages and terraces on narrow blocks, often with a tiny front yard and a long thin backyard. Some streets have rear lanes with garages and sheds. A few newer apartment blocks sit near the main road towards the city. Frontages are tight, and street parking fills quickly near the shops.",
      "Rozelle locals are a mix of young families, professionals and long-time residents who remember the area's working past. Many cottages have been renovated, and plenty of gardens have been left to grow wild between projects.",
    ],
    scenarios: [
      {
        h3: "Backyard and Green Waste Clearing",
        p: [
          "A small Rozelle backyard can still produce a surprising amount of green waste. Overgrown vines, old shrubs, palm fronds and a few seasons of prunings soon fill the space.",
          "We clear it all and carry it through the house or down the side passage to the truck, with no bundling needed. See our [green waste removal](/green-waste-removal) service.",
        ],
      },
      {
        h3: "Rear-Lane Garage and Shed Clean-Outs",
        p: [
          "Rozelle's lane garages are often too small for a modern car, so they become storage. Old bikes, paint tins, tools, timber and boxes pile up for years.",
          "We empty them in one visit and load straight from the lane where we can. Read about our [garage clean out](/garage-clean-out) service. Set aside paint and chemicals, as we can't take hazardous waste.",
        ],
      },
      {
        h3: "Cottage Renovation Waste",
        p: [
          "When a Rozelle cottage gets a new kitchen or bathroom, old cabinets, tiles, plasterboard and timber all need to come out through a narrow hallway. There's rarely room for a skip at the front.",
          "We carry it out by hand and load in one trip. Read about our [building materials disposal](/building-materials-disposal) service.",
        ],
      },
    ],
    council: {
      heading: "Inner West Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Rozelle is in Inner West Council, which runs [booked clean-ups](" + IWC_CLEANUP + ") for properties that pay the domestic waste charge. Council's branches category is the one most Rozelle gardeners look at, and it has strict rules:",
        },
        {
          type: "list",
          items: [
            "Branches must be bundled and tied. Real Christmas trees go in the same category.",
            "Stumps, dirt, rocks, rubble, garden hoses and leaves in plastic bags are not accepted.",
            "Every collection, in any category, is limited to 2 cubic metres.",
            "Bulky household items, mattresses, and metal and whitegoods are booked separately from branches.",
            "Items go on the street the evening before, with your booking number on them, and must not block the footpath.",
          ],
        },
        {
          type: "p",
          text: "With narrow frontages, a pile on the footpath in Rozelle soon gets in the way of prams and neighbours. A private collection avoids that. We come when it suits, carry everything out from the backyard ourselves, and take most things council won't, including loose garden waste, soil and stumps.",
        },
      ],
    },
    extra: [
      {
        heading: "Garden Waste Without the Bundling",
        blocks: [
          {
            type: "p",
            text: "Bundling and tying branches into neat lengths takes hours, and council won't take loose leaves or bags of clippings. Many Rozelle gardens also have old pots, broken pavers and bags of tired soil that council won't collect at all.",
          },
          {
            type: "list",
            items: [
              "We take branches, vines, palm fronds and clippings loose.",
              "Soil, small stumps, old pavers and broken pots can go in the same load.",
              "We sweep the yard and path once we're done.",
            ],
          },
          {
            type: "p",
            text: "If you'd rather drop off clean garden waste yourself, Inner West Council's [Weekend Transfer Station](" + IWC_TRANSFER + ") at 50-54 Moore Street, Leichhardt takes garden organics for free from residents with proof of address, but it doesn't take soil or bricks.",
          },
          {
            type: "p",
            text: "Planning a bigger garden overhaul before spring? Book us once the cutting is done and we'll take the lot in one visit. Not sure how big the load is? Send a few photos or try our [quote estimator](/quote-estimator) and we'll agree a fixed price before we start.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you reach a backyard through a narrow side passage?",
        a: "Yes. We carry everything through by hand, however narrow the access. If the only way out is through the house, we'll protect the floors as we go.",
      },
      {
        q: "Can you load from my rear lane?",
        a: "Yes. If your garage or back gate opens onto a lane, we can usually load straight from there and keep the front street clear.",
      },
      {
        q: "Do you take soil and old pavers with the green waste?",
        a: "Yes. Unlike council's branches collection, we take soil, small stumps, pavers and pots in the same load as your garden waste.",
      },
      {
        q: "Do you cover Lilyfield and Birchgrove?",
        a: "Yes. We cover Rozelle and the nearby suburbs of Lilyfield and Birchgrove. We also work in [Balmain](/balmain), [Leichhardt](/leichhardt) and [Glebe](/glebe).",
      },
    ],
  },
};
