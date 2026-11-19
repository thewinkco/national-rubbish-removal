import type { RichGuide } from "./types";

// Council and facility facts below were checked on each council's own website (November 2026).
export const WESTERN_SYDNEY_GUIDES: Record<string, RichGuide> = {
  // ── Parramatta ─────────────────────────────────────
  parramatta: {
    intro: [
      "Parramatta sits on the Parramatta River about 23 km west of the Sydney CBD, and it works as Sydney's second city centre. Church Street, the river foreshore and the light rail run through the middle, with office towers, the justice precinct and Westfield close by. Westmead, with its big hospital and health precinct, is just to the west.",
      "Housing here is a real mix. Around the station and along the river you'll find new apartment towers, some 30 storeys or more. Step a few streets away and there are 1970s walk-up blocks, Federation cottages in Harris Park and North Parramatta, and brick family homes on quarter-acre blocks out towards Northmead.",
      "That mix shapes how we work. A tower job means booking the goods lift and a loading dock slot. A walk-up means carrying everything down two or three flights of stairs. A house in North Parramatta often has a long driveway and a garage full to the roof. Our two-person crew handles all of it, and the price is fixed before we start.",
    ],
    scenarios: [
      {
        h3: "Moving Out of a Parramatta Apartment",
        p: [
          "Many Parramatta units are rented, and people move in and out every week. When you're leaving, the old bed frame, the flat-pack desk and the sofa that won't fit the new place all need to go before the final inspection.",
          "Tell us your building's lift and dock booking times and we'll work to them. We protect the lift, carry everything out and sweep up so your cleaner can get started. See how our [end of lease rubbish removal](/end-of-lease-rubbish-removal) works.",
        ],
      },
      {
        h3: "Strata Clear-Outs for Bin Rooms and Car Parks",
        p: [
          "In big buildings, unclaimed furniture ends up in the basement car park, the bin room or the storage cages. It blocks walkways and attracts more dumping.",
          "Building managers and strata committees can book us for a one-off clear-out or a regular visit. We collect from the basement, load at the dock and leave the area swept. Read about our [strata rubbish removal](/strata-rubbish-removal).",
        ],
      },
      {
        h3: "Office Clear-Outs in the CBD",
        p: [
          "Parramatta's office towers are always changing tenants. When a team moves floors or a lease ends, the old desks, chairs, filing cabinets and partitions have to go before the make-good.",
          "We can start early, work after hours or come on a weekend so your staff aren't disrupted. Usable furniture is donated where possible. See our [office rubbish removal](/office-rubbish-removal) and [office cubicle removal](/office-cubicle-removal) services.",
        ],
      },
    ],
    council: {
      heading: "City of Parramatta Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "The City of Parramatta runs [kerbside bulky waste collections](https://www.cityofparramatta.nsw.gov.au/living-community/clean-up) for residents who already get a council domestic waste service. Depending on your address, you'll either have pre-booked or scheduled collections. Here's how the pre-booked service works:",
        },
        {
          type: "list",
          items: [
            "Book online or by calling council's contractor, Veolia, on 1300 580 811. Your next available date may be up to four weeks away.",
            "Pre-booked collections are limited to four per calendar year.",
            "Each pile must be less than 2 cubic metres, and every item must be safe for two people to lift.",
            "Items go out only the day before your booked date, with council's Booked Clean Up sign on them. Items left out early or without a booking may be treated as illegal dumping.",
            "Branches must be bundled, under 1.5 metres long and no thicker than 8 cm.",
            "Council won't take hazardous waste, car parts and tyres, sheet glass, tree trunks, e-waste like TVs and computers, or building waste such as fibro, bricks, concrete and dirt.",
          ],
        },
        {
          type: "p",
          text: "That suits a small pile when you can wait. If you need it gone this week, have more than 2 cubic metres, or live up three flights with no lift, we're the easier option. We come when it suits you, carry it out ourselves and take most things council won't, including bricks, tiles and old timber.",
        },
      ],
    },
    extra: [
      {
        heading: "Parramatta's Community Recycling Centre",
        blocks: [
          {
            type: "p",
            text: "We can't take hazardous waste, so here's where those items go. The City of Parramatta's [Community Recycling Centre](https://www.cityofparramatta.nsw.gov.au/residents/bins-waste-and-recycling/other-waste-services/community-recycling-centre) at 104 Grose Street, North Parramatta is a free drop-off for household problem waste. It's open Tuesday to Friday from 8am to 4pm and Saturday from 8am to 12pm.",
          },
          {
            type: "list",
            items: [
              "Anyone can drop off paint, gas bottles, aerosols, fire extinguishers, motor oils, smoke detectors, fluoro globes and tubes, and household and car batteries.",
              "City of Parramatta residents can also drop off e-waste, polystyrene and textiles.",
              "Only small household quantities are taken: up to 20 litres or 20 kg per waste type, per day. It isn't for commercial use.",
            ],
          },
          {
            type: "p",
            text: "So a typical Parramatta clear-out splits two ways. Take the paint tins and gas bottle to Grose Street, and leave the furniture, mattresses, boxes and garden waste to us.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you collect from a Parramatta apartment tower with a loading dock?",
        a: "Yes. Book the goods lift and dock with your building manager, tell us the time slot, and we'll arrive ready to load. We bring lift blankets and leave the hallway clean.",
      },
      {
        q: "Do you offer same day rubbish removal in Parramatta?",
        a: "Most days, yes, when you book early. Call before 1pm and we can often be there the same afternoon, weekends included.",
      },
      {
        q: "Can you clear an office floor outside business hours?",
        a: "Yes. Early mornings, evenings and weekends all work. We clear desks, chairs, cabinets and partitions, and agree the price before we start.",
      },
      {
        q: "Do you cover Harris Park, Rosehill and Westmead too?",
        a: "Yes. As well as Parramatta, we cover Harris Park, Rosehill, North Parramatta and Westmead, plus nearby [Castle Hill](/castle-hill), [Blacktown](/blacktown) and [Bankstown](/bankstown).",
      },
    ],
  },

  // ── Blacktown ──────────────────────────────────────
  blacktown: {
    intro: [
      "Blacktown is about 35 km west of the Sydney CBD, on the main western rail line between Parramatta and Penrith. The M4, the M7 and the Great Western Highway all pass close by, so it's easy for our trucks to reach, and Main Street, Westpoint and Blacktown Hospital anchor the town centre.",
      "Most of Blacktown and its neighbours, like Seven Hills, Marayong and Kings Langley, were built in the decades after the war. That means brick and fibro homes on generous blocks, wide driveways, carports and, very often, a big shed out the back. Closer to the station there are newer townhouses and unit blocks.",
      "Big blocks collect a lot. Families have lived in the same home for decades, and the shed, the garage and the back corner of the yard fill up over time. When it's finally time to clear them, the job is usually more than one trailer can handle.",
    ],
    scenarios: [
      {
        h3: "Shed and Garage Clean-Outs",
        p: [
          "A Blacktown shed might hold old mowers, broken bikes, paint tins, timber offcuts, car parts and boxes no one has opened in years. Sorting it is the hard part, and carrying it is the heavy part.",
          "Our crew empties it in one visit and sweeps out the floor. Metal goes to scrap recycling, timber is separated and usable tools are donated where we can. We'll set aside paint and chemicals for you to drop off separately, as we can't take hazardous waste. See our [garage clean out](/garage-clean-out) service.",
        ],
      },
      {
        h3: "Backyard Clear-Ups and Green Waste",
        p: [
          "Big yards mean big piles after a weekend of pruning or a tree being lopped. The green bin fills up after a few branches, and the rest sits on the lawn for weeks.",
          "We take branches, palm fronds, hedge clippings, old garden beds and lattice loose, straight from the yard. No bundling, no cutting to length. Read about our [green waste removal](/green-waste-removal).",
        ],
      },
      {
        h3: "Clearing a Family Home",
        p: [
          "When parents move into care or a home is being sold after a death, families often need a full Blacktown house cleared in one go. It's an emotional job, and it usually comes with a deadline from the agent or the estate.",
          "We work room by room, keep aside anything you want to hold onto, and donate furniture in good condition. Learn more about our [deceased estate clearance](/deceased-estate-clearance) service.",
        ],
      },
    ],
    council: {
      heading: "Blacktown Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Blacktown City Council's [household clean up service](https://www.blacktown.nsw.gov.au/Services/Waste/Household-clean-up) is generous on numbers. Here are the rules to know:",
        },
        {
          type: "list",
          items: [
            "You can book up to 12 collections a year at no extra fee, online or by phoning 02 5300 6000. You may wait up to 4 weeks for a date.",
            "Each collection is one box trailer load, which council describes as 2 m x 1 m x 1 m.",
            "Only properties paying for a council waste service can book. The owner or tenant must live at the property on collection day, and council doesn't take bookings from strata or real estate managers.",
            "Items go on the nature strip no earlier than the night before. Leave furniture whole, and bundle clippings to 1.5 metres or less, no thicker than your wrist.",
            "Whitegoods can take up to 5 business days to be collected, and mattresses up to 2.",
            "Building materials (tiles, bricks, plasterboard, timber, fencing, pallets, sinks, toilets and bathtubs), concrete, asbestos, glass and mirrors, car parts, tyres, tree stumps, soil, hazardous materials and anything too heavy for two people are not accepted.",
          ],
        },
        {
          type: "p",
          text: "Twelve collections a year is plenty for regular households. The gaps are speed, size and who can book. A landlord between tenants, an empty deceased estate or a shed full of timber and old fencing won't fit council's rules. We come when it suits you, carry it out from the back of the yard ourselves, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Paint, Gas Bottles and Batteries in Blacktown",
        blocks: [
          {
            type: "p",
            text: "Shed clean-outs nearly always turn up some problem waste, and we can't take hazardous items. Blacktown residents have a free option: council's [Mobile Community Recycling Service](https://www.blacktown.nsw.gov.au/Services/Waste-services-and-collection/Problem-and-hazardous-waste/Mobile-Community-Recycling-Service) collects domestic quantities straight from your front boundary.",
          },
          {
            type: "list",
            items: [
              "Book through [problemwaste.com.au](https://www.problemwaste.com.au/) and you'll be given a collection date.",
              "Accepted items are gas bottles, fire extinguishers, paint, fluoro globes and tubes, car and household batteries, motor oil, cooking oil and smoke detectors.",
            ],
          },
          {
            type: "p",
            text: "A good plan is to book that pickup for the paint and gas bottles, then book us for everything else in the shed on the same week.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you empty a full Blacktown shed in one visit?",
        a: "Usually, yes. Send us a few photos on WhatsApp and we'll tell you the price and how much truck space it needs before we come.",
      },
      {
        q: "Can a real estate agent or landlord book you for a Blacktown rental?",
        a: "Yes. Council won't take clean-up bookings from strata or real estate managers, but we will. We can arrange access with the agent and clear the property before the next inspection.",
      },
      {
        q: "Do you take large amounts of green waste?",
        a: "Yes. Branches, clippings, palm fronds and old garden beds are fine, loose and in any amount. We load it straight from the yard.",
      },
      {
        q: "Do you cover Seven Hills, Kings Langley and Marayong?",
        a: "Yes. We cover Blacktown, Seven Hills, Kings Langley, Marayong and Prospect, as well as nearby [Parramatta](/parramatta), [Castle Hill](/castle-hill) and [Penrith](/penrith).",
      },
    ],
  },

  // ── Penrith ────────────────────────────────────────
  penrith: {
    intro: [
      "Penrith sits on the Nepean River at the foot of the Blue Mountains, about 50 km west of the Sydney CBD. High Street and Westfield Penrith form the town centre, the M4 and Great Western Highway run east to Sydney, and Emu Plains is just across the river.",
      "Older suburbs like Kingswood, South Penrith and Jamisontown are full of brick and weatherboard homes on large blocks with established trees. Around them, newer estates have filled in old paddocks with modern double-storey houses on tighter lots, and more homes are still going up.",
      "So Penrith jobs tend to be one of two kinds: an established house with a big garden and decades of stored belongings, or a brand-new home with builder's leftovers to clear before move-in. We handle both, and the fixed price is agreed before we lift a thing.",
    ],
    scenarios: [
      {
        h3: "New Build and Renovation Clean-Ups",
        p: [
          "When the builder hands over, there's usually a pile left behind: timber and plasterboard offcuts, packaging, pallets, broken tiles and cardboard. Council's bulky waste won't take building waste, and you can't landscape until it's gone.",
          "We load the lot, from the side return to the garage, and sweep the slab. Timber, metal and cardboard are separated for recycling. Read about our [construction site clean up](/construction-site-clean-up) and [building materials disposal](/building-materials-disposal) services.",
        ],
      },
      {
        h3: "Green Waste from Big Penrith Yards",
        p: [
          "Penrith's large yards and tall trees produce a lot of garden waste, especially after summer storms or a big prune. Council's bulky collection only takes branches up to 1.2 metres long and 10 cm thick, tied with natural twine, and it won't take stumps or roots.",
          "We take branches of any length, palm fronds, hedge cuttings and old garden beds loose. See our [green waste removal](/green-waste-removal) service.",
        ],
      },
      {
        h3: "Downsizing from a Family Home",
        p: [
          "Lots of Penrith families are moving from the big block they raised their kids on to something smaller. That means sorting decades of furniture, the kids' old bedrooms and a garage full of tools.",
          "We clear room by room and set aside anything going to the new place or to family. Usable furniture is donated where possible. Read about our [household rubbish removal](/household-rubbish-removal).",
        ],
      },
    ],
    council: {
      heading: "Penrith Council Bulky Waste or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Penrith City Council offers free [bulky waste collections](https://penrithcity.nsw.gov.au/waste-environment/waste/bulky-waste-collection), booked online through The Waste Spot. Here are the key rules:",
        },
        {
          type: "list",
          items: [
            "Each household gets four free collections a year, and the allocation resets on 1 January.",
            "One booked collection can't be more than 2 cubic metres. For a bigger pile you can book several collections for the same date, but each one comes out of your four.",
            "Items go to the kerb no earlier than the evening before. In unit complexes with a bulky waste bay or room, items go there instead.",
            "Late cancellations still count towards your yearly allocation.",
            "Council won't take building and demolition waste such as bricks, tiles, concrete, fibro, fence palings, glass, mirrors and window frames. Tree stumps and roots, rocks, soil, car parts, tyres, solar panels, hazardous items and anything two people can't lift are also refused.",
          ],
        },
        {
          type: "p",
          text: "Council's service is a good fit for a couple of cubic metres of furniture you can put out yourself. It doesn't help with builder's leftovers, big tree prunings or a whole house to clear. We come when it suits you, carry everything out ourselves and take most things council won't, including offcuts, pavers and fencing.",
        },
      ],
    },
    extra: [
      {
        heading: "Penrith Community Recycling Centre",
        blocks: [
          {
            type: "p",
            text: "We can't take hazardous waste, but Penrith households can drop it off for free at the [Penrith Community Recycling Centre](https://www.penrithcity.nsw.gov.au/Community-Recycling-Centre), Gate 3, 96 Dunheved Circuit, St Marys. It opens Monday to Friday, 8.30am to 2pm, and is closed on weekends and public holidays.",
          },
          {
            type: "list",
            items: [
              "It takes paint, gas bottles, fire extinguishers, motor oil, car and household batteries, smoke detectors, fluoro globes and tubes, mobile phones and e-waste such as TVs and computers.",
              "Household quantities only, as a guide up to 20 litres or 20 kg per item. Paint is capped at 20 litres per tin and 100 litres in total.",
              "It doesn't take general rubbish, bulky items, construction waste, textiles or polystyrene, and it's not for businesses.",
            ],
          },
          {
            type: "p",
            text: "Drop off the paint and gas bottles at St Marys, and leave the furniture, offcuts and green waste to us.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you come to Penrith the same day?",
        a: "Often, yes, when you book early. Penrith is about 50 km from the city, so call us in the morning and we'll confirm the soonest time we can be there.",
      },
      {
        q: "Do you take builder's offcuts and packaging from a new home?",
        a: "Yes. Timber and plasterboard offcuts, broken tiles, pallets, packaging and mixed builder's waste are all fine. We load it and sweep up after.",
      },
      {
        q: "Will you take branches longer than council's limit?",
        a: "Yes. There's no need to cut or tie anything. We take branches, palm fronds and hedge cuttings loose, in any length.",
      },
      {
        q: "Do you cover Emu Plains, Kingswood and Jamisontown?",
        a: "Yes. We cover Penrith, Kingswood, Jamisontown, Emu Plains and South Penrith, plus [Blacktown](/blacktown) and [Parramatta](/parramatta) further east.",
      },
    ],
  },

  // ── Liverpool ──────────────────────────────────────
  liverpool: {
    intro: [
      "Liverpool is the main centre of south-west Sydney, about 32 km south-west of the CBD on the Georges River. The Hume Highway and the M5 run through it, and the city centre has Liverpool Hospital, Westfield Liverpool and a growing number of apartment and office buildings.",
      "Around the centre, suburbs like Casula, Warwick Farm and Chipping Norton are mostly brick family homes on decent blocks, with townhouses and villas mixed in. Families here are often large and multi-generational, so homes are busy and garages fill fast.",
      "Liverpool is also a working area. Moorebank and the industrial streets near the river hold warehouses, freight yards, trade businesses and storage units. So our Liverpool work is a mix of family homes on the weekend and warehouse loads during the week.",
    ],
    scenarios: [
      {
        h3: "Warehouse and Industrial Clear-Outs",
        p: [
          "Pallets, shrink wrap, broken racking, old stock and cardboard pile up fast in Liverpool's warehouses. Left too long, they block forklift lanes and fire exits.",
          "We load straight from your dock or roller door, separate timber, metal and cardboard for recycling, and leave the floor swept. Regular pickups can be booked too. See our [warehouse rubbish removal](/warehouse-rubbish-removal) service.",
        ],
      },
      {
        h3: "Furniture and Whitegoods from Busy Family Homes",
        p: [
          "New lounge arriving, old one still in the living room? Bunk beds outgrown, a second fridge that died in the garage? These are the everyday Liverpool jobs.",
          "Our crew carries items out from any room, takes down bed frames if needed and loads the truck. Usable furniture goes to donation where possible. Read about our [unwanted furniture removal](/unwanted-furniture-removal).",
          "Old mattresses are another common call, especially after a new bed arrives. We take any size, from a cot mattress to a king, and send them to licensed facilities where the springs, foam and timber can be recycled. See our [mattress removal](/mattress-removal) service.",
        ],
      },
      {
        h3: "Shop and Office Refits in the City Centre",
        p: [
          "Liverpool's city centre is changing, and shops and offices refit often. Old counters, shelving, desks and signage need to go before the new fit-out can start.",
          "We can work early or after trading hours so the shop next door isn't disrupted. See our [retail strip-out removal](/retail-strip-out-removal) and [office rubbish removal](/office-rubbish-removal) services.",
        ],
      },
    ],
    council: {
      heading: "Liverpool Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Liverpool City Council runs a household clean-up service for residents, which you book through council. The limits on volume, how many collections you get and which items are refused can change, so check council's [waste and recycling page](https://www.liverpool.nsw.gov.au/services/waste-and-recycling) or call council before you put anything out.",
        },
        {
          type: "p",
          text: "Like most Sydney councils, the service is for household items only. It isn't there for warehouse pallets, shop fit-outs or trade waste, and you still have to drag everything to the kerb yourself and wait for your date.",
        },
        {
          type: "p",
          text: "That's where we fit. We come when it suits you, carry it out ourselves from the house, garage or dock, and take most things council won't, including business waste, building rubble and heavy items.",
        },
      ],
    },
    extra: [
      {
        heading: "Regular Pickups for Liverpool Businesses",
        blocks: [
          {
            type: "p",
            text: "Many of our Liverpool customers are businesses, not households. Warehouses, removalists, trade suppliers and storage operators around Moorebank and Chipping Norton often need waste gone on a regular basis rather than all at once.",
          },
          {
            type: "list",
            items: [
              "Pallets and broken racking loaded straight from the dock.",
              "Cardboard, shrink wrap and packaging separated for recycling.",
              "Damaged or written-off stock cleared so the space can be re-let or re-used.",
              "Old office furniture from the front office or mezzanine.",
            ],
          },
          {
            type: "p",
            text: "Tell us your dock hours, site induction rules and any forklift or PPE requirements, and our two-person crew will work to them. We can come before the morning shift starts or after the last truck leaves, so loading doesn't get in the way of your own deliveries. We're licensed and insured, and the price is fixed before we start, so it's easy to approve. If a skip has been your default, our [skip bin alternatives](/skip-bin-alternatives) page explains the difference: no bin taking up a loading bay, and no staff doing the loading.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you take pallets, racking and packaging from a Liverpool warehouse?",
        a: "Yes. Pallets, broken racking, cardboard, shrink wrap and old stock are regular loads for us. We load from your dock or roller door.",
      },
      {
        q: "Do you offer same day pickup in Liverpool?",
        a: "Most days, yes, when you book early. Call before 1pm and we can often be there the same day.",
      },
      {
        q: "Can you clear a shop or office outside trading hours?",
        a: "Yes. We can start early, work into the evening or come on a weekend, and we sweep up before we leave.",
      },
      {
        q: "Do you cover Casula, Moorebank and Warwick Farm?",
        a: "Yes. We cover Liverpool, Warwick Farm, Casula, Moorebank and Chipping Norton, plus [Bankstown](/bankstown) and [Campbelltown](/campbelltown) nearby.",
      },
    ],
  },

  // ── Bankstown ──────────────────────────────────────
  bankstown: {
    intro: [
      "Bankstown is about 20 km south-west of the Sydney CBD and the main centre of the Canterbury-Bankstown area. Bankstown Central, the station and the shopping strips around Chapel Road and the Saigon Place area keep the centre busy seven days a week.",
      "The streets around it are full of mid-century brick and fibro homes on good-sized blocks. Many are being knocked down and replaced with duplexes, townhouses and granny flats, while apartment blocks keep going up near the station. Yagoona, Condell Park, Punchbowl and Greenacre follow the same pattern.",
      "That means a lot of our Bankstown work is heavy: bricks, concrete, tiles and old fixtures from renovations and knockdowns. The rest is busy family homes, unit blocks and shops that need clearing quickly.",
    ],
    scenarios: [
      {
        h3: "Knockdown and Renovation Rubble",
        p: [
          "Before a knockdown, the house needs emptying. During a renovation, the old bathroom, kitchen and floor tiles come out in pieces. Either way, you end up with broken bricks, concrete, tiles and old cabinetry that council clean-ups won't take.",
          "We lift and load the heavy stuff ourselves and send masonry for recycling. Any asbestos or suspected fibro must be removed by a licensed asbestos removalist first, as we can't take it. See our [brick and concrete removal](/brick-and-concrete-removal) service.",
        ],
      },
      {
        h3: "Shop and Retail Strip-Outs",
        p: [
          "When a Bankstown shop changes hands, the old shelving, counters, cool rooms and signage have to go fast so the next tenant can start.",
          "We clear it before or after trading so the strip isn't blocked, and leave the floor swept for the landlord. Read about our [retail strip-out removal](/retail-strip-out-removal).",
        ],
      },
      {
        h3: "Unit Clear-Outs Without Waiting for Strata",
        p: [
          "In bigger Bankstown unit blocks, residents can't book council's clean-up themselves. It has to go through the building manager or strata.",
          "Any resident can book us directly. We carry items down from your unit, garage or storage cage and take them straight to the truck. See our [household rubbish removal](/household-rubbish-removal).",
        ],
      },
    ],
    council: {
      heading: "Canterbury-Bankstown Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Canterbury-Bankstown Council runs a [booked household clean-up](https://www.cbcity.nsw.gov.au/residents/booking-household-clean), managed through its [online booking site](https://cleanup.cbcity.nsw.gov.au/). Here's how it works:",
        },
        {
          type: "list",
          items: [
            "Houses, townhouses and buildings with five or fewer units get two clean-ups each calendar year, booked online. Both can be combined into one double booking.",
            "Each standard collection is capped at 3 cubic metres: a pile no more than 3 metres wide, 1 metre high and 1 metre deep.",
            "Buildings with six or more units must be booked for the whole building by the building manager, strata manager or an authorised strata committee member, by calling 9707 9000. These buildings get more collections each year.",
            "Each area has one set collection weekday, and items go to the front kerb the evening before.",
            "Branches must be tied in bundles under 1 metre long and 15 cm wide, and carpet cut into 1 metre squares.",
            "Construction and demolition waste, glass and mirrors, gas bottles, batteries, chemicals, paint, car parts, sharp items, heavy and extra-large items, and business waste are not accepted.",
          ],
        },
        {
          type: "p",
          text: "Two collections a year doesn't go far in a home that's being renovated or emptied for a knockdown, and building rubble is off the list anyway. We come when it suits you, carry everything out ourselves and take most things council won't, from bricks and tiles to a shop full of shelving.",
        },
      ],
    },
    extra: [
      {
        heading: "Duplex Builds and Granny Flats in Bankstown",
        blocks: [
          {
            type: "p",
            text: "Duplex and granny flat projects are everywhere in Bankstown at the moment. Each one creates rubbish at three stages, and we're often called back for all three.",
          },
          {
            type: "list",
            items: [
              "Before demolition: the house needs emptying of furniture, whitegoods and anything left in the shed.",
              "During the build: offcuts, packaging and pallets build up on a tight site. See our [construction site clean up](/construction-site-clean-up).",
              "Before handover: a final clear-out of leftover materials so the new owners or tenants can move in.",
            ],
          },
          {
            type: "p",
            text: "On narrow Bankstown blocks there's rarely room for a skip, and a skip on the street can need a council permit. We load from the site and drive away, so nothing sits on the footpath.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you take bricks, concrete and tiles from a Bankstown knockdown or reno?",
        a: "Yes. We lift and load bricks, concrete, tiles and masonry. Asbestos and fibro must be removed by a licensed asbestos removalist first, as we can't take it.",
      },
      {
        q: "Can I book you if I live in a unit block where strata books the council clean-up?",
        a: "Yes. Any resident can book us directly. It helps to let your building manager know when we're coming, so the lift or driveway is clear.",
      },
      {
        q: "Can you clear a shop before or after trading hours?",
        a: "Yes. We can start early, work late or come on a weekend, so the strip stays open and your landlord gets an empty, swept shop.",
      },
      {
        q: "Do you cover Yagoona, Punchbowl and Greenacre?",
        a: "Yes. We cover Bankstown, Yagoona, Condell Park, Punchbowl and Greenacre, plus [Earlwood](/earlwood), [Liverpool](/liverpool) and [Parramatta](/parramatta).",
      },
    ],
  },

  // ── Castle Hill ────────────────────────────────────
  "castle-hill": {
    intro: [
      "Castle Hill is the heart of the Hills District, about 30 km north-west of the Sydney CBD. Castle Towers and the metro station sit in the middle, with Old Northern Road and Showground Road carrying traffic in and out. Norwest Business Park is just to the west.",
      "Most homes here are large, family-sized houses from the 1970s onwards, many on sloping blocks with double garages, rumpus rooms and established gardens. Around the metro station, newer apartment buildings and townhouses are changing the skyline.",
      "Many Castle Hill families have been in the same house for 20 or 30 years. When the kids move out, the garage, the spare rooms and the space under the house are full. Steep driveways and split-level homes make clearing them hard work, and that's where our crew comes in.",
    ],
    scenarios: [
      {
        h3: "Double Garage Clean-Outs",
        p: [
          "Two-car garages in Castle Hill often hold everything but cars: old furniture, bikes, camping gear, boxes of school books and a broken treadmill or two.",
          "We clear it in one visit, carry everything up the driveway and sweep the floor so the cars can go back in. See our [garage clean out](/garage-clean-out) service.",
        ],
      },
      {
        h3: "Downsizing Before a Sale",
        p: [
          "When it's time to sell the family home and move somewhere smaller, there's usually a lot to let go of. Agents want it clear before photos and open homes.",
          "We clear room by room, keep aside anything you're taking or passing to family, and donate furniture in good condition where possible. Read about our [household rubbish removal](/household-rubbish-removal) and [unwanted furniture removal](/unwanted-furniture-removal).",
        ],
      },
      {
        h3: "Garden Clean-Ups on Sloping Blocks",
        p: [
          "Big Hills gardens and steep backyards make green waste hard to move. Wheelbarrowing branches up a slope to the kerb is tough going.",
          "We carry it out for you and take branches, hedge cuttings and old garden beds loose. Council's clean-up won't take tree trunks, stumps or thorny plants, but we take most green waste. See our [green waste removal](/green-waste-removal).",
        ],
      },
    ],
    council: {
      heading: "Hills Shire Council Clean-Up or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "The Hills Shire Council offers a [clean-up collection](https://www.thehills.nsw.gov.au/Residents/Waste-Recycling/Clean-Up-Collection), run with Cleanaway. These are the rules:",
        },
        {
          type: "list",
          items: [
            "Each property gets two standard services per calendar year. The count doesn't reset when a home changes owners or tenants. Extra services can be booked for a fee.",
            "Book through Cleanaway's online portal or the Waste Hotline on 1800 623 895. Your date should fall within 14 to 28 days of your request.",
            "Items go to the kerb only the night before, sorted into separate piles: garden organics and timber, whitegoods, mattresses, and other household items.",
            "Garden waste must be bundled in pieces no longer than 1.5 metres, with branches under 10 cm thick.",
            "In units, townhouses and villas, the strata manager or executive committee must request the service through the Waste Hotline, and it covers the whole complex.",
            "Building and demolition materials, tree trunks and stumps, thorny plants, soil and concrete, car parts, glass and mirrors, chemicals, paint, gas bottles, asbestos, batteries, commercial quantities and items too heavy for two people are not accepted.",
          ],
        },
        {
          type: "p",
          text: "Two services a year, booked weeks ahead, rarely covers a full downsize. We come when it suits you, carry everything out ourselves, even from under the house or up a steep driveway, and take most things council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Small Item Recycling Around Castle Hill",
        blocks: [
          {
            type: "p",
            text: "A big clear-out always turns up small things that shouldn't go in any bin. The Hills Shire Council has [free small item drop-off points](https://www.thehills.nsw.gov.au/Residents/Waste-Recycling/FREE-Drop-Off-Events-and-Locations/Small-Item-Recycling-Points) close by:",
          },
          {
            type: "list",
            items: [
              "Castle Hill Library, on the corner of Castle Street and Pennant Street, takes batteries, mobile phones, CDs, DVDs, and VHS and cassette tapes.",
              "The Recycling Wall Hub at council's administration building, 3 Columbia Court, Norwest, is open weekdays and also takes small e-waste, blister packs, X-ray films, eyeglasses, coffee pods, and pens and markers.",
            ],
          },
          {
            type: "p",
            text: "Pop the batteries and old phones in a bag for the library, and we'll take the furniture, boxes, garden waste and everything else in one visit.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you clear a whole Castle Hill house when we downsize?",
        a: "Yes. We clear room by room, keep anything you're holding onto separate and donate usable furniture where we can. Many families book us in the week before the agent's photos.",
      },
      {
        q: "Do you offer same day pickup in Castle Hill?",
        a: "Most days, yes, when you book early. Call before 1pm and we can often be there the same afternoon.",
      },
      {
        q: "Can I book you for my townhouse without going through strata?",
        a: "Yes. Council's clean-up for townhouses and units has to be requested by your strata manager, but you can book us yourself. Just let the complex know when we're coming.",
      },
      {
        q: "Do you cover Baulkham Hills, Cherrybrook and Kellyville?",
        a: "Yes. We cover Castle Hill, Baulkham Hills, Cherrybrook, Kellyville and West Pennant Hills, as well as [Hornsby](/hornsby), [Parramatta](/parramatta) and [Blacktown](/blacktown).",
      },
    ],
  },

  // ── Campbelltown ───────────────────────────────────
  campbelltown: {
    intro: [
      "Campbelltown is the main centre of the Macarthur region, about 50 km south-west of the Sydney CBD. Queen Street, Macarthur Square and Campbelltown Hospital sit near the middle, and the Hume Motorway and the rail line link it to the rest of Sydney.",
      "Much of Campbelltown was built as planned suburbs from the 1970s and 80s, so you'll see brick homes and townhouses in places like Ambarvale, Bradbury and Leumeah, many on big blocks. There are plenty of rental properties, and newer estates keep growing on the city's edges.",
      "That mix brings two kinds of job our way. Landlords and agents need rentals cleared fast between tenants, and long-term owners have sheds, carports and backyards full of old metal, timber and furniture.",
    ],
    scenarios: [
      {
        h3: "Rental Property Clean-Outs",
        p: [
          "When tenants leave and take nothing with them, the property can't be re-let until it's cleared. Broken furniture, mattresses, bags of rubbish and a yard full of junk all have to go.",
          "We work with agents and landlords, arrange keys or access, and leave the property swept and ready for the cleaner. See how our [end of lease rubbish removal](/end-of-lease-rubbish-removal) works.",
        ],
      },
      {
        h3: "Scrap Metal, Old Sheds and Fencing",
        p: [
          "Old Colorbond fencing, roofing iron, dismantled sheds, trampolines and rusty frames are common on Campbelltown blocks. Council only takes metal under 2 metres long, and it needs its own separate booking.",
          "We take scrap metal in any size and send it for recycling. Read about our [scrap metal removal](/scrap-metal-removal).",
        ],
      },
      {
        h3: "Backyard and Carport Clear-Ups",
        p: [
          "Big backyards collect old timber, broken outdoor furniture, tyres stacked against the fence and green waste. It often builds up for years before someone decides to deal with it.",
          "We clear it in one go and sort timber, metal and green waste for recycling. See our [timber removal](/timber-removal) and [green waste removal](/green-waste-removal) services.",
        ],
      },
    ],
    council: {
      heading: "Campbelltown Council Bulky Waste or a Private Hard Rubbish Collection?",
      blocks: [
        {
          type: "p",
          text: "Campbelltown City Council's [bulky waste collection](https://www.campbelltown.nsw.gov.au/Services-and-Facilities/Waste-and-Recycling/kerbside-clean-up) works on entitlements. Here's what to know:",
        },
        {
          type: "list",
          items: [
            "Each household gets four entitlements per calendar year, which reset on 1 January. Book online or call 02 4645 4000, up to 3 months ahead.",
            "A single collection is 2 cubic metres and uses one entitlement. A double collection is 4 cubic metres and uses two.",
            "General waste and metal need separate bookings, and each booking uses entitlements.",
            "Only the booked volume is collected, and anything extra is left behind for you to deal with.",
            "Items go out by 6am on the day, but no more than 24 hours before. Garden prunings must be cut to 1 metre lengths.",
            "Building materials such as asbestos, concrete, gyprock, bricks and pallets, car parts and tyres, glass and mirrors, solar panels, chemicals, paint, oils, gas bottles, polystyrene and anything over 2 metres long or too heavy for two people are not accepted.",
          ],
        },
        {
          type: "p",
          text: "Four entitlements can go quickly if a rental clean-out needs both a general and a metal booking, and the wait can be too long when a property needs re-letting. We come when it suits you, carry everything out ourselves and take most things council won't, including long metal, pallets and tyres.",
        },
      ],
    },
    extra: [
      {
        heading: "Campbelltown Community Recycling Centre",
        blocks: [
          {
            type: "p",
            text: "We can't take hazardous waste, but Campbelltown has a permanent drop-off for it. The [Campbelltown Community Recycling Centre](https://www.campbelltown.nsw.gov.au/Services-and-Facilities/Waste-and-Recycling/CRC) is on Hepher Road, Campbelltown, open Monday to Saturday from 7am to 4pm and closed on Sundays and public holidays.",
          },
          {
            type: "list",
            items: [
              "It takes household and car batteries, paint, gas bottles, fire extinguishers, aerosols, motor and cooking oil, fluoro globes and tubes, smoke detectors, mobile phones, X-rays and e-waste such as TVs and computers.",
              "Residential quantities only, up to 20 litres or 20 kg per item type.",
              "Chemicals are not accepted there. Council directs them to Household Chemical CleanOut events.",
              "Council now asks customers to unload their own items, so bring a helper if anything is heavy.",
            ],
          },
          {
            type: "p",
            text: "Drop the paint and gas bottles at Hepher Road, and leave the furniture, metal and garden waste to us.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work with Campbelltown real estate agents and landlords?",
        a: "Yes. We can collect keys or meet the agent on site, clear the property and send photos when it's done, so it's ready for cleaning and the next tenant.",
      },
      {
        q: "Can you come to Campbelltown the same day?",
        a: "Often, yes, when you book early. Campbelltown is about 50 km from the city, so call in the morning and we'll confirm the soonest time we can be there.",
      },
      {
        q: "Do you take old sheds, fencing and roofing iron?",
        a: "Yes. We take dismantled sheds, Colorbond fencing, roofing iron, trampolines and other scrap metal in any length, and send it for recycling.",
      },
      {
        q: "Do you cover Leumeah, Ambarvale and Ingleburn?",
        a: "Yes. We cover Campbelltown, Leumeah, Ambarvale, Bradbury and Ingleburn, plus nearby [Liverpool](/liverpool).",
      },
    ],
  },
};
