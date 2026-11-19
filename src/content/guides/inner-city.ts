import type { RichGuide } from "./types";

// City of Sydney facts below were checked on the council's own pages (November 2026):
// bulky pick-up, doorstep recycling, Recycle It Saturday, Ultimo recycling pop-up and drop-off pages.

export const INNER_CITY_GUIDES: Record<string, RichGuide> = {
  "sydney-cbd": {
    intro: [
      "The Sydney CBD stretches from Circular Quay in the north down to Central and Haymarket in the south, with Darling Harbour on one side and Hyde Park and The Domain on the other. It's the heart of the City of Sydney council area.",
      "Almost everyone here lives or works in a tower. Homes are mostly high-rise apartments, with older converted buildings around the edges near Haymarket and The Rocks. Above street level are office floors, co-working spaces and serviced suites, and at street level are shops, cafés and food courts.",
      "Access is the whole story in the CBD. Street parking is close to non-existent, loading zones are time-limited, and clearways change through the day. Most buildings run a loading dock, a goods lift and a building manager who wants every removal booked in advance. That's the part we plan around before we turn up.",
    ],
    scenarios: [
      {
        h3: "Apartment Move-Outs in CBD Towers",
        p: [
          "Moving out of a CBD apartment usually means two bookings: a loading dock slot and a goods lift. Your building gives you a window, and anything not out by the end of it becomes your problem. Send us the times and we'll arrive inside them, pad the lift if the building asks, and bring everything down in as few trips as possible.",
          "We take one sofa or the contents of a whole apartment. If you're leaving a rental and want your bond back, our [end of lease rubbish removal](/end-of-lease-rubbish-removal) is set up for exactly that, and we sweep up before we leave.",
        ],
      },
      {
        h3: "Office Clear-Outs Before and After Hours",
        p: [
          "Few CBD buildings want trolleys of old desks in the passenger lifts at 10am. We can start before the office opens, work into the evening or come on a weekend, so the floor is cleared without your team or the neighbours noticing much.",
          "Our crew takes desks, chairs, filing cabinets, meeting tables and old fit-out, and we can pull apart workstations on site. See our [office rubbish removal](/office-rubbish-removal) and [office cubicle removal](/office-cubicle-removal) services.",
        ],
      },
      {
        h3: "Shop and Food Court Tenancy Strip-Outs",
        p: [
          "When a CBD shop or food court tenancy closes, the landlord usually wants it handed back empty by a set date. Shelving, counters, display units and leftover stock all have to go out through the centre's service corridors and dock. We work to centre rules and trading hours. Read about our [retail strip-out removal](/retail-strip-out-removal).",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Rubbish Collection in the CBD?",
      blocks: [
        {
          type: "p",
          text: "The City of Sydney runs a [free pick-up for bulky household items](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items). In a CBD apartment tower it works differently from a house, so here's what it means for you:",
        },
        {
          type: "list",
          items: [
            "If your building has a building manager or booking contact, the booking goes through them, not you.",
            "Apartment buildings can put out up to 4 cubic metres per booking, and that limit is shared by the whole building.",
            "Bookings are made online only, by 2pm the day before your building's collection day.",
            "Items must be sorted into three groups kept apart: mattresses; furniture and bulky items; and metals, whitegoods and electronics.",
            "Collectors won't take renovation material, carpet, mirrors or glass (including glass-topped tables), pianos or commercial waste.",
            "Business-rated properties can't use the service at all, so CBD offices and shops need a private collection.",
          ],
        },
        {
          type: "p",
          text: "For a single resident in a big tower, that shared building limit can fill up fast, and you still have to get everything down to the collection point yourself. We come at a time that suits your dock booking, do all the carrying, and take most things the council won't, including office furniture and shop fit-out.",
        },
      ],
    },
    extra: [
      {
        heading: "Working With CBD Building Managers and Loading Docks",
        blocks: [
          { type: "p", text: "Most CBD towers have their own rules for removals, and building managers are right to be strict. A careless crew can scratch lift walls, block the dock for other deliveries or leave rubbish in the bin room." },
          {
            type: "list",
            items: [
              "Tell us your dock and lift booking times and we'll arrive within them.",
              "We bring our own trolleys and protect lifts and doorways when the building asks.",
              "We can supply our licence and insurance details ahead of time if your building needs them.",
              "Nothing is left in the dock or the hallway when we go.",
            ],
          },
          { type: "p", text: "Strata committees and building managers can also book us to clear dumped furniture from car parks and storage cages. See our [strata rubbish removal](/strata-rubbish-removal) service." },
        ],
      },
      {
        heading: "Recycling Small Items From a CBD Apartment",
        blocks: [
          { type: "p", text: "Batteries, light globes and small electronics shouldn't go in the bin. City of Sydney residents can take them to the [Ultimo recycling pop-up](https://www.cityofsydney.nsw.gov.au/environmental-support-funding/ultimo-recycling-pop-up) at 10-16 Bay Street, Ultimo, which opens on Tuesdays from 2pm to 7pm. It only accepts items from City of Sydney residents, and not from businesses." },
          { type: "p", text: "The council also runs a free weekly [doorstep recycling collection](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-doorstep-recycling-collection) for things like clothes, batteries, polystyrene and small electronics, which can be picked up from your door or apartment lobby. Leave the bulky items to us." },
        ],
      },
    ],
    faqs: [
      { q: "Can you work with my building's loading dock booking?", a: "Yes. Send us your dock and lift times and we'll arrive inside that window. We do all the carrying and leave the dock clear for the next booking." },
      { q: "Can you clear a CBD office after hours or on a weekend?", a: "Yes. Early starts, evenings and weekends all work. We're open 7 days, so your team can keep working while we clear the floor." },
      { q: "Can my office use the council's free bulky pick-up?", a: "No. The City of Sydney says business-rated properties aren't eligible and commercial waste isn't accepted. We clear offices, shops and food court tenancies with a fixed price agreed before we start." },
      { q: "Do you cover The Rocks, Haymarket, Pyrmont and Barangaroo too?", a: "Yes. We cover the whole CBD plus The Rocks, Haymarket, Ultimo, Pyrmont and Barangaroo. Same day pickups are often available when you book before 1pm." },
    ],
  },

  "surry-hills": {
    intro: [
      "Surry Hills sits about 2 km south-east of the Sydney CBD, between Central station and Moore Park. Crown Street and Bourke Street run north to south through the middle, Cleveland Street marks the southern edge, and Prince Alfred Park sits on the western side near the railway line.",
      "This is one of Sydney's oldest suburbs, and it shows. Rows of 19th-century terraces line the side streets, many of them two storeys tall and barely five metres wide. In between are converted warehouses, former factories turned into studios and lofts, and newer apartment blocks squeezed onto old industrial sites.",
      "Locals are a mix of renters, long-time owners, young professionals and the creative businesses that fill the old warehouses. Streets are narrow and often one-way, parking is mostly permit-only, and plenty of terraces back onto a rear lane. Getting a truck close to the door takes some planning, and that's something our crew does every week.",
    ],
    scenarios: [
      {
        h3: "Terrace Clear-Outs Down Tight Stairs",
        p: [
          "Surry Hills terraces weren't built for king beds and three-seater sofas. Stairs are steep and narrow, they often turn halfway, and the front door opens straight onto the footpath. A wardrobe that went up in pieces years ago may not come down in one.",
          "Our two-person crew carries everything by hand, takes care with old plaster walls and timber banisters, and takes apart bulky pieces on site when they won't fit. Have a look at our [unwanted furniture removal](/unwanted-furniture-removal) service.",
        ],
      },
      {
        h3: "Studio and Small Office Moves",
        p: [
          "Design studios, agencies, architects and start-ups fill the converted warehouses around Surry Hills. When a lease ends or a team outgrows the space, there are always desks, chairs, shelving and old display boards left over.",
          "We clear it in one visit and can work outside office hours. See our [office rubbish removal](/office-rubbish-removal) service.",
        ],
      },
      {
        h3: "Small Terrace Renovations",
        p: [
          "A kitchen or bathroom update in a terrace creates old cabinets, tiles, timber and plasterboard, and there's rarely space for a skip bin out the front without a permit. We load straight from the house or the rear lane and take it away the same day. Read about our [building materials disposal](/building-materials-disposal) and [skip bin alternatives](/skip-bin-alternatives).",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Hard Rubbish Collection in Surry Hills?",
      blocks: [
        {
          type: "p",
          text: "Surry Hills residents can book the City of Sydney's [free bulky item pick-up](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items) each week. It's a useful service for a small load, but the rules are firm:",
        },
        {
          type: "list",
          items: [
            "Book online only, by 2pm the day before your collection day.",
            "Houses and terraces are limited to 1 cubic metre per booking, which the council compares to about one box trailer load.",
            "Put items out the night before, not earlier. Items put out without a booking, or too soon, count as illegal dumping.",
            "Items must sit next to your property where drivers can see them. Collectors won't move things from porches, front yards or driveways.",
            "Long or heavy items (over 1.5 m or 100 kg) must be easy for two people to lift.",
            "Renovation material, carpet, mirrors, glass, pianos and stone or cement items aren't taken.",
          ],
        },
        {
          type: "p",
          text: "On a narrow Surry Hills footpath, a pile left overnight can block neighbours and tends to attract other people's rubbish on top. With us there's no pile. We come when it suits you, carry it straight from the room to the truck, and take most things the council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Rear Lane Access and Parking in Surry Hills",
        blocks: [
          { type: "p", text: "Many Surry Hills terraces have a back gate onto a lane. When the lane is wide enough, it's usually the easiest way in, as it keeps furniture off the front stairs and the truck out of the main street." },
          { type: "p", text: "When you book, tell us whether you have lane access, which floor the items are on and roughly how much there is. We'll plan the parking and the carry before we arrive, so the job moves quickly and we're not holding up the street." },
        ],
      },
      {
        heading: "Recycling Tricky Items in Surry Hills",
        blocks: [
          { type: "p", text: "Small things like batteries, paint tins, light globes and worn-out clothes have their own council options. The City of Sydney's [doorstep recycling service](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-doorstep-recycling-collection) collects them from your door each week for free, and the quarterly [Recycle It Saturday](https://www.cityofsydney.nsw.gov.au/environmental-support-funding/recycle-it-saturday) drive-through takes them at the Alexandra Canal Depot, 67C Bourke Road, Alexandria. Check the council page for the next date." },
          { type: "p", text: "Mattresses and whitegoods aren't accepted at Recycle It Saturday. We take both, and send them to licensed Sydney facilities for recycling where possible." },
        ],
      },
    ],
    faqs: [
      { q: "Can you collect from a rear lane in Surry Hills?", a: "Yes. If your terrace backs onto a lane, we can load from there. Let us know when you book and we'll plan the access." },
      { q: "Can you take apart furniture that won't fit down the stairs?", a: "Yes. We dismantle bed frames, wardrobes and other bulky pieces on site when they won't come out in one piece." },
      { q: "Will the council take my old tiles and kitchen cabinets?", a: "No. The City of Sydney's bulky pick-up doesn't accept renovation or demolition material. We take tiles, cabinets, timber and plasterboard. The only things we can't take are asbestos and hazardous waste." },
      { q: "Do you also cover Moore Park, Strawberry Hills and Chippendale?", a: "Yes. We cover all of Surry Hills plus Moore Park, Strawberry Hills and Chippendale, and the rest of the City of Sydney." },
    ],
  },

  darlinghurst: {
    intro: [
      "Darlinghurst climbs the hill about 2 km east of the Sydney CBD, from the edge of Hyde Park up towards Kings Cross. Oxford Street runs along its southern side, Taylor Square sits at the main crossroads, and William Street marks the northern edge.",
      "Homes here are a dense mix of 19th-century terraces, Art Deco and inter-war walk-up apartment blocks, and a few newer buildings. A lot of the older blocks are three or four storeys with no lift at all, and the stairwells are narrow. Most residents rent, many live alone or as couples, and people move in and out all year.",
      "Darlinghurst is also busy with hospitals, the National Art School, bars, restaurants and small shops along Oxford Street and Crown Street. Streets are steep in places, parking is tight, and many side streets are one-way, so we plan the truck and the carry before we arrive.",
    ],
    scenarios: [
      {
        h3: "Walk-Up Flat Clear-Outs Without a Lift",
        p: [
          "A fourth-floor walk-up with a sofa, fridge and bed frame is not a job for two friends and a borrowed van. Darlinghurst stairwells are tight, the landings are small, and one slip can mean a damaged wall or a hurt back.",
          "Our crew carries everything down by hand and loads the truck straight away. Moving out? Our [end of lease rubbish removal](/end-of-lease-rubbish-removal) suits bond inspections, and we sweep up after.",
        ],
      },
      {
        h3: "Oxford Street Shop, Bar and Salon Strip-Outs",
        p: [
          "When a shop, bar, gallery or salon on Oxford Street changes hands, the old fit-out has to come out before the new tenant can start. That means counters, shelving, fixtures, signage and leftover stock, often through a narrow shopfront.",
          "We can start early or work after close so neighbouring businesses aren't disrupted. See our [retail strip-out removal](/retail-strip-out-removal) service.",
        ],
      },
      {
        h3: "Mattress and Bed Removal",
        p: [
          "Mattresses are one of the most common things we carry out of Darlinghurst flats. They're awkward on narrow stairs and nobody wants one left on the footpath. We take them away, bases and all, and send them to licensed recyclers where we can. See our [mattress removal](/mattress-removal) service.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Rubbish Collection in Darlinghurst?",
      blocks: [
        {
          type: "p",
          text: "The City of Sydney's [bulky item pick-up](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items) is free and weekly, but in a Darlinghurst walk-up it comes with some catches:",
        },
        {
          type: "list",
          items: [
            "In an apartment building with a building manager or booking contact, they make the booking for the whole building, not each resident.",
            "Apartment buildings share a 4 cubic metre limit per booking. Houses and terraces get 1 cubic metre.",
            "Bookings are online only and close at 2pm the day before your collection day.",
            "Mattresses, furniture and electronics must go in separate piles, as they're collected by different trucks. Items in the wrong group won't be picked up.",
            "Mirrors and glass, including glass-topped furniture, aren't accepted.",
            "You still have to carry everything down and leave it next to the property where drivers can see it.",
          ],
        },
        {
          type: "p",
          text: "That last point is the hard part in a walk-up. Council crews collect from the kerb; they don't climb the stairs. We come when it suits you, carry everything down every flight ourselves, and take most things the council won't, including mirrors and glass tables.",
        },
      ],
    },
    extra: [
      {
        heading: "Tips for Clearing a Darlinghurst Walk-Up",
        blocks: [
          { type: "list", items: [
            "Let us know the floor and whether the stairwell turns, so we can bring the right gear.",
            "Tell your strata or building manager if your building has removal rules or set times.",
            "Clear a path through the flat, but leave the heavy lifting to us.",
            "If a piece came up in parts, it can usually go down in parts. We dismantle on site.",
          ] },
          { type: "p", text: "Body corporates and building managers can also book us to clear common areas, garages and storage cages. See our [strata rubbish removal](/strata-rubbish-removal) service." },
          { type: "p", text: "Have small things too, like batteries, light globes or a box of worn-out clothes? The City of Sydney's free weekly [doorstep recycling collection](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-doorstep-recycling-collection) picks them up from your door or apartment lobby, so they don't need to go down the stairs with the furniture." },
        ],
      },
    ],
    faqs: [
      { q: "My flat has no lift. Can you still help?", a: "Yes. Walk-ups are routine for us. Our two-person crew carries everything down the stairs and loads it straight onto the truck." },
      { q: "Can you clear a shop on Oxford Street outside trading hours?", a: "Yes. We can start early or work after close so the strip-out doesn't get in the way of neighbouring businesses." },
      { q: "Will the council pick up a glass coffee table or mirror?", a: "No. The City of Sydney's bulky pick-up doesn't accept mirrors or glass, including glass-topped furniture. We can take them for you." },
      { q: "Do you cover Potts Point, Woolloomooloo, Elizabeth Bay and Rushcutters Bay?", a: "Yes. We cover Darlinghurst plus Potts Point, Woolloomooloo, Elizabeth Bay and Rushcutters Bay, and most days we can come the same day when you book early." },
    ],
  },

  redfern: {
    intro: [
      "Redfern sits about 3 km south of the Sydney CBD, built around Redfern station, one of the busiest stops on the rail network. Redfern Street is the main shopping strip, Regent Street runs along the western side, and Redfern Park and its oval sit near the centre.",
      "The suburb is mostly rows of 19th-century terraces and workers' cottages on narrow streets, many with a rear lane. Newer apartment buildings have gone up near the station and along the old industrial edges, and public housing towers stand on the eastern side towards Waterloo.",
      "Redfern has deep Aboriginal history and community ties, a big student population thanks to the university next door in Darlington, and plenty of renters and share houses. People move in and out year-round, and the old rail workshops at Eveleigh now host offices and creative spaces.",
    ],
    scenarios: [
      {
        h3: "Share House Move-Out Clean-Ups",
        p: [
          "When a Redfern share house breaks up, someone usually ends up with the beds, desks and bags of stuff nobody claimed. The lease ends on a set day, the agent wants it empty, and the housemates have already gone.",
          "We clear it room by room in one visit, then sweep up so you can clean for the inspection. See our [household rubbish removal](/household-rubbish-removal) service.",
        ],
      },
      {
        h3: "Terrace Renovation Waste",
        p: [
          "Renovating a Redfern terrace creates plasterboard, old timber, broken tiles and outdated fixtures, and there's rarely room for a skip out the front. We load straight from the house or the rear lane, so there's nothing left sitting in the street.",
          "Read about our [building materials disposal](/building-materials-disposal) and [timber removal](/timber-removal) services.",
        ],
      },
      {
        h3: "Backyard and Courtyard Clean-Ups",
        p: [
          "Small Redfern courtyards fill up with broken outdoor furniture, pot plants, old bikes and overgrown cuttings. We take the lot, including bagged and loose garden waste. See our [green waste removal](/green-waste-removal) service.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Hard Rubbish Collection in Redfern?",
      blocks: [
        {
          type: "p",
          text: "Redfern households can book the City of Sydney's [free bulky item pick-up](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items) every week. Before you rely on it for a move-out, check the rules:",
        },
        {
          type: "list",
          items: [
            "Bookings are online only and must be in by 2pm the day before your collection day. Changes and cancellations also close at 2pm the day before.",
            "A house or terrace can put out 1 cubic metre per booking, about a box trailer load.",
            "There's one booking per item group each week: mattresses; furniture and bulky items; and metals, whitegoods and electronics.",
            "Garden waste needs to be bundled, with branches no longer than 1 m or thicker than 10 cm.",
            "Building and renovation material, carpet, car parts and tyres aren't taken.",
            "Collections happen between 6am and 6pm on the day, so you can't pick the time.",
          ],
        },
        {
          type: "p",
          text: "A full share house is usually much more than a cubic metre, and the collection day may not line up with your inspection. We come when it suits you, carry everything out of the house ourselves, and take most things the council won't, including renovation waste.",
        },
      ],
    },
    extra: [
      {
        heading: "Getting Ready for a Rental Inspection in Redfern",
        blocks: [
          { type: "p", text: "If you're moving out of a Redfern rental, book us a day or two before your final inspection. That leaves time to clean once the rooms are empty." },
          { type: "list", items: [
            "Walk through each room and decide what's staying, going with you or going to the tip.",
            "Point the crew to the leftovers and we'll carry them out.",
            "Check the backyard, laundry and under the stairs. That's where forgotten things hide.",
            "We sweep up after, so you can start cleaning straight away.",
          ] },
          { type: "p", text: "Agents and landlords can also book us directly to clear what a tenant left behind. See our [end of lease rubbish removal](/end-of-lease-rubbish-removal) service." },
        ],
      },
      {
        heading: "Where Redfern's Rubbish Ends Up",
        blocks: [
          { type: "p", text: "A share house clear-out is rarely all rubbish. Desks, chairs and bookshelves in good shape can often be reused, and metal bed frames, clothes airers and old bikes can be recycled. We sort loads at licensed Sydney facilities, and up to 95% of what we collect is recycled or donated." },
          { type: "p", text: "For the small leftovers, like batteries, light globes and paint tins, City of Sydney residents can use the council's quarterly [Recycle It Saturday](https://www.cityofsydney.nsw.gov.au/environmental-support-funding/recycle-it-saturday) drive-through at 67C Bourke Road, Alexandria, a short drive south of Redfern. It doesn't take mattresses or whitegoods, so leave those for us." },
        ],
      },
    ],
    faqs: [
      { q: "Can you clear a share house before our final inspection?", a: "Yes. Book us a day or two before your inspection so there's time to clean. We take everything that's going in one visit." },
      { q: "Do you take renovation waste from Redfern terraces?", a: "Yes. We take plasterboard, timber, tiles, old fixtures and mixed renovation waste. We can't take asbestos or hazardous waste." },
      { q: "Can you load from a rear lane?", a: "Yes. Many Redfern terraces have lane access, and it's often the easiest way in. Tell us when you book." },
      { q: "Do you cover Eveleigh, Darlington and Chippendale?", a: "Yes. We cover Redfern plus Eveleigh, Darlington and Chippendale, and the rest of the City of Sydney." },
    ],
  },

  waterloo: {
    intro: [
      "Waterloo sits about 3.5 km south of the Sydney CBD, between Redfern to the north and Zetland and Green Square to the south. Botany Road runs down the western side, Elizabeth Street and Bourke Street cross the suburb, and the newer metro station has brought more people through the area.",
      "It's a suburb in the middle of change. Older streets still have rows of terraces and small workers' cottages, while the eastern side has large public housing towers and walk-up blocks. Towards the south, old factories and warehouses have been replaced by new apartment buildings, with showrooms, cafés and small businesses on the ground floors.",
      "Residents range from long-time locals and public housing tenants to young renters in new apartments. Businesses include furniture and design showrooms, small warehouses and trade suppliers along Bourke Street and Danks Street. That mix means our Waterloo jobs vary a lot from one day to the next.",
    ],
    scenarios: [
      {
        h3: "Cottage and Terrace End of Lease Clear-Outs",
        p: [
          "Waterloo's older cottages and terraces change tenants often. If you're short on time before handover, we'll clear what you're leaving and sweep the floors for the agent.",
          "See how our [end of lease rubbish removal](/end-of-lease-rubbish-removal) works.",
        ],
      },
      {
        h3: "Showroom and Small Warehouse Clear-Outs",
        p: [
          "Showrooms and small warehouses build up old display pieces, damaged stock, pallets and packaging. When a range changes or the lease ends, it all has to go fast.",
          "We clear it in one visit and work around your trading hours, including early starts and weekends. Read about our [warehouse rubbish removal](/warehouse-rubbish-removal).",
        ],
      },
      {
        h3: "Clearing Furniture From New Apartments",
        p: [
          "New buildings in Waterloo usually have a goods lift and a loading area, plus strata rules about when you can use them. Book the lift, tell us the time and we'll carry old sofas, beds and tables from your door to the truck. See our [unwanted furniture removal](/unwanted-furniture-removal) service.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Rubbish Collection in Waterloo?",
      blocks: [
        {
          type: "p",
          text: "The City of Sydney's [free bulky item pick-up](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items) covers Waterloo homes. How it works depends on where you live:",
        },
        {
          type: "list",
          items: [
            "Houses and terraces book online for up to 1 cubic metre per booking.",
            "In an apartment building with a building manager or booking contact, they book for the whole building, with a 4 cubic metre limit per booking.",
            "Bookings close at 2pm the day before your scheduled collection day.",
            "Items go out the night before, sorted into separate groups, next to the property where drivers can see them.",
            "Commercial waste isn't accepted, and business-rated properties can't book the service.",
            "Pianos, carpet, renovation material and stone or cement items aren't taken.",
          ],
        },
        {
          type: "p",
          text: "So a showroom or warehouse needs a private collection either way, and a house clear-out often goes over the 1 cubic metre limit. We come when it suits you, do all the lifting and loading, and take most things the council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Business Clear-Outs in Waterloo",
        blocks: [
          { type: "p", text: "Because the council's bulky pick-up is for households only, Waterloo businesses need their own way to get rid of large waste. We regularly clear:" },
          { type: "list", items: [
            "Old display furniture and samples from showrooms.",
            "Pallets, cardboard and plastic wrap from small warehouses.",
            "Broken racking, shelving and scrap metal.",
            "Office desks, chairs and filing cabinets.",
          ] },
          { type: "p", text: "You get a fixed price agreed before we start, and we're licensed and insured. Metal goes to scrap recyclers where possible. See our [scrap metal removal](/scrap-metal-removal) and [office rubbish removal](/office-rubbish-removal) services." },
        ],
      },
      {
        heading: "Doorstep Recycling for Waterloo Households",
        blocks: [
          { type: "p", text: "Not everything needs a truck. For small, tricky items, the City of Sydney runs a free weekly [doorstep recycling collection](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-doorstep-recycling-collection), booked through Resource Recovery Australia. It picks up from your door or apartment lobby." },
          { type: "list", items: [
            "It takes small batteries, small electronics, light globes, paint and empty paint tins, polystyrene, gas bottles, and clothes too worn to donate.",
            "Each collection needs at least 2 bags, and furniture is limited to 3 items in great condition.",
            "Mattresses, carpets, whitegoods and construction items aren't collected.",
          ] },
          { type: "p", text: "So book the doorstep service for the small things, and call us for the sofa, the fridge, the mattress and anything else that's too big or too heavy." },
        ],
      },
    ],
    faqs: [
      { q: "Can you clear a showroom without closing the business?", a: "Yes. We can work early, after close or on a weekend so customers aren't disrupted." },
      { q: "How quickly can you clear a rental before handover?", a: "Often the same day if you call before 1pm. Most rental clear-outs take one visit." },
      { q: "Can my business use the council's free bulky pick-up?", a: "No. The City of Sydney's service doesn't accept commercial waste or bookings from business-rated properties. We clear showrooms, warehouses and offices." },
      { q: "Do you cover Rosebery and Moore Park?", a: "Yes. We cover Waterloo plus Rosebery and Moore Park, and the rest of the City of Sydney." },
    ],
  },

  zetland: {
    intro: [
      "Zetland sits about 4 km south of the Sydney CBD, at the centre of the Green Square renewal area. Green Square station is on its western edge, Joynton Avenue runs through the middle, and the Gunyama Park aquatic centre and Green Square library have become local meeting points.",
      "Not long ago this was an industrial area. Today almost everyone lives in a newer apartment building, many of them mid-rise or high-rise, with a lift, a basement car park, a bin room and strata rules. Lots of residents are young professionals, couples and families, and plenty are renting.",
      "That means a lot of moves, a lot of new furniture arriving and a lot of old furniture with nowhere to go. Most buildings want removals booked through the building manager, with the goods lift padded and the loading area kept clear.",
    ],
    scenarios: [
      {
        h3: "Apartment Furniture Removal",
        p: [
          "Upgraded the sofa, swapped to a bigger bed or bought a new dining set? The old pieces won't fit in the bin room, and leaving them in the car park causes trouble with strata.",
          "We carry them from your apartment to the truck in one trip. See our [unwanted furniture removal](/unwanted-furniture-removal) service.",
        ],
      },
      {
        h3: "Strata Clean-Ups in Green Square Buildings",
        p: [
          "Dumped mattresses, broken chairs and boxes in basements, bin rooms and storage cages are a constant headache for building managers. Nobody owns them, and they pile up until someone pays to clear them.",
          "We clear common areas when you call or on a regular schedule, and we work around residents and car park traffic. Read about our [strata rubbish removal](/strata-rubbish-removal).",
        ],
      },
      {
        h3: "Mattress Removal From Upper Floors",
        p: [
          "A queen or king mattress is awkward in a lift and even worse down a fire stair. We carry it out for you, along with the base, and send it to licensed recyclers where we can. See our [mattress removal](/mattress-removal) service.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Rubbish Collection in Zetland?",
      blocks: [
        {
          type: "p",
          text: "The City of Sydney runs a [free weekly pick-up for bulky items](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items). In Zetland, where most homes are apartments, these rules matter most:",
        },
        {
          type: "list",
          items: [
            "If your building has a building manager or booking contact, book through them. Residents in those buildings don't book directly.",
            "Apartment buildings have a limit of 4 cubic metres per booking for the whole building.",
            "The booking system allows one booking per item group, per building, each week.",
            "Mattresses (including bed base ensembles), furniture and electronics must go in separate piles.",
            "Electric bike and hoverboard batteries must be removed and recycled separately.",
            "Glass-topped furniture, mirrors and pianos aren't accepted.",
          ],
        },
        {
          type: "p",
          text: "In a large building, that weekly limit is shared by a lot of neighbours. We come when it suits you and your lift booking, carry everything out ourselves, and take most things the council won't.",
        },
      ],
    },
    extra: [
      {
        heading: "Before You Book a Removal in a Zetland Building",
        blocks: [
          { type: "list", items: [
            "Check your building's rules for removals and book the goods lift.",
            "Ask the building manager where the truck can park, such as a loading bay or visitor spot.",
            "Send us the time window and your unit and floor.",
            "We protect the lift if the building asks and leave the hallway clean.",
          ] },
          { type: "p", text: "Moving in rather than out? Flat-pack boxes, foam and wrapping from new furniture pile up fast. We can take that away along with the old pieces, so the bin room doesn't overflow." },
        ],
      },
      {
        heading: "Recycle It Saturday, Just Down the Road",
        blocks: [
          { type: "p", text: "Zetland residents are close to [Recycle It Saturday](https://www.cityofsydney.nsw.gov.au/environmental-support-funding/recycle-it-saturday), the City of Sydney's free drive-through recycling day at the Alexandra Canal Depot, 67C Bourke Road, Alexandria. It runs from 9am to 3pm a few times a year; check the council page for the next date." },
          { type: "p", text: "You can drop off electronics, batteries, light globes, paint tins, polystyrene and worn-out clothes. Furniture in great condition is accepted for reuse, up to five items per resident. Mattresses and whitegoods aren't accepted, but we can take those for you." },
        ],
      },
    ],
    faqs: [
      { q: "Do I need to book the lift in my Zetland building?", a: "Usually, yes. Check your building's rules, book the goods lift and let us know the time. We'll arrive in that window." },
      { q: "Can building managers book regular clean-ups?", a: "Yes. We can clear car parks, bin rooms and storage cages on a regular schedule or whenever dumped items appear." },
      { q: "Can I book the council pick-up myself if I live in an apartment?", a: "If your building has a building manager or booking contact, the City of Sydney says to book through them. If you'd rather not wait, we can collect straight from your apartment." },
      { q: "Do you cover Green Square, Rosebery and Beaconsfield?", a: "Yes. We cover Zetland plus Green Square, Rosebery and Beaconsfield, and the rest of the City of Sydney." },
    ],
  },

  alexandria: {
    intro: [
      "Alexandria sits about 5 km south of the Sydney CBD, between Erskineville and the Alexandra Canal. Bourke Road, O'Riordan Street and McEvoy Street carry most of the traffic, and Sydney Park sits on the south-western edge. It's close to the airport and the main freight routes, which is why so many businesses chose it.",
      "This is one of the inner city's biggest business areas. Large blocks are taken up by warehouses, distribution centres, showrooms, offices, gyms and creative spaces, many in converted factories. Between them are pockets of older terraces and workers' cottages, plus newer apartment buildings near Mitchell Road and the northern streets.",
      "So our Alexandria jobs are mostly commercial: roller doors, loading docks and deadlines. But we also clear homes and apartments for the people who live among it all.",
    ],
    scenarios: [
      {
        h3: "Warehouse Rubbish Removal",
        p: [
          "Pallets, cardboard, plastic wrap, broken racking and dead stock build up fast in Alexandria warehouses. Left too long, it eats into floor space and becomes a safety problem.",
          "We load straight from your roller door and take it all in one trip. See our [warehouse rubbish removal](/warehouse-rubbish-removal) service.",
        ],
      },
      {
        h3: "Office Fit-Out and Cubicle Removal",
        p: [
          "Moving to a new office or refitting the old one? We take apart workstations and partitions on site, then remove desks, chairs, cabinets and meeting tables.",
          "We can work after hours or over a weekend so the new fit-out can start on Monday. Read about our [office cubicle removal](/office-cubicle-removal).",
        ],
      },
      {
        h3: "Gym, Studio and Showroom Clear-Outs",
        p: [
          "Gyms and studios in Alexandria's old factories leave behind heavy equipment, mirrors, flooring and fit-out when they move. We carry out the heavy pieces and send metal to scrap recyclers where possible. See our [scrap metal removal](/scrap-metal-removal) and [retail strip-out removal](/retail-strip-out-removal) services.",
        ],
      },
    ],
    council: {
      heading: "City of Sydney Pick-Up or a Private Rubbish Collection in Alexandria?",
      blocks: [
        {
          type: "p",
          text: "Alexandria households can use the City of Sydney's [free bulky item pick-up](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/book-pick-up-for-bulky-items). It's a household service, and it has clear limits:",
        },
        {
          type: "list",
          items: [
            "Business-rated properties aren't eligible, and commercial waste isn't accepted.",
            "Houses and terraces can put out 1 cubic metre per booking. Apartment buildings get 4 cubic metres per booking.",
            "Bookings are made online, by 2pm the day before your collection day.",
            "Items go out the night before, never earlier. Items put out without a booking can result in a fine.",
            "Renovation material, car parts and tyres, carpet, pianos, household chemicals and loose materials aren't taken.",
          ],
        },
        {
          type: "p",
          text: "For most Alexandria jobs, that means a private collection is the only option. We come when it suits your business, carry everything out ourselves, and take most things the council won't, from pallets to old fit-out.",
        },
      ],
    },
    extra: [
      {
        heading: "Recycle It Saturday at the Alexandra Canal Depot",
        blocks: [
          { type: "p", text: "The City of Sydney's [Recycle It Saturday](https://www.cityofsydney.nsw.gov.au/environmental-support-funding/recycle-it-saturday) is held right here in Alexandria, at the Alexandra Canal Depot, 67C Bourke Road. It's a free drive-through: you stay in the car and staff unload it. It runs from 9am to 3pm a few times a year; check the council page for the next date." },
          { type: "p", text: "It's for residents of the City of Sydney, Waverley and Woollahra only, and the council says it can't accept items from businesses. Mattresses, whitegoods, carpets and construction items aren't accepted." },
          { type: "p", text: "For hazardous items like chemicals, the council points residents to a Household Chemical CleanOut event or a Community Recycling Centre, as set out on its [drop-off recycling page](https://www.cityofsydney.nsw.gov.au/waste-recycling-services/drop-off-household-items-for-recycling). We can't take asbestos or hazardous waste." },
        ],
      },
      {
        heading: "Regular Pickups for Alexandria Businesses",
        blocks: [
          { type: "p", text: "Some businesses here create bulky waste every week. Instead of letting it pile up, you can book us when you need us. We give you a fixed price before we start, we're licensed and insured, and up to 95% of what we collect is recycled or donated through licensed Sydney facilities." },
          { type: "p", text: "Clearing a home in one of Alexandria's terraces or apartments instead? The same crew handles household jobs too, from a single couch to a full garage. See our [garage clean-out](/garage-clean-out) service." },
          { type: "p", text: "Not sure how big the job is? Try our [quote estimator](/quote-estimator)." },
        ],
      },
    ],
    faqs: [
      { q: "Can you take pallets and packaging from a warehouse?", a: "Yes. Pallets, cardboard, plastic wrap, broken racking and old stock are all regular loads for us." },
      { q: "Can you dismantle office workstations?", a: "Yes. We take apart cubicles and partitions on site, then carry everything out and load it." },
      { q: "Can businesses drop off at Recycle It Saturday?", a: "No. The City of Sydney says it can't accept items from businesses at Recycle It Saturday. We clear business waste for you, with a fixed price agreed first." },
      { q: "Do you cover Erskineville, St Peters and Beaconsfield?", a: "Yes. We cover Alexandria plus Erskineville, St Peters and Beaconsfield, and the rest of the surrounding area." },
    ],
  },
};
