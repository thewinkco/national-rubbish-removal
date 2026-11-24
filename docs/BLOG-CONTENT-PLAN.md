# Blog content plan: 30-day growth sprint (24 Nov – 24 Dec 2026)

**Goal for the month:** get the blog indexed, start showing in Google and AI answers for the questions Sydney customers ask most, and turn readers into calls and quotes.

**Being realistic:** new pages usually take 2–8 weeks to settle in Google's rankings. A month is enough to publish the core library, get it all indexed and see the first impressions, clicks and leads. The biggest ranking gains from this month's work usually show up in months 2–3. The posts that convert fastest are the ones closest to buying (prices, skip bin comparison, same day pickup), so they come first.

**Cadence:** 8 launch posts now, then **3 new posts a week** (Tuesday, Thursday, Saturday). Write ahead and set a future `published` date. The post goes live on the first rebuild on or after that date (see the guidelines), so redeploy on each publish day.

Every post follows [BLOG-GUIDELINES.md](BLOG-GUIDELINES.md) and must pass `npm run check:blog` before it goes live.

---

## Topic clusters

Each cluster has a "money" service page at the centre. Posts link to it, and it links back to them automatically.

| Cluster | Money pages | Posts |
|---|---|---|
| **Price and value** | `/quote-estimator`, `/skip-bin-alternatives` | Cost guide ✅, skip bin vs removal ✅, how much fits in a truck, same day removal |
| **What goes where** | `/household-rubbish-removal`, `/scrap-metal-removal` | Won't take ✅, recycling ✅, mattress ✅, fridge and washing machine, furniture donation, green waste |
| **Home life events** | `/garage-clean-out`, `/deceased-estate-clearance`, `/end-of-lease-rubbish-removal` | Garage ✅, deceased estate ✅, council vs private ✅, end of lease, moving house, Christmas clean-up |
| **Business and building** | `/office-rubbish-removal`, `/building-materials-disposal`, `/strata-rubbish-removal` | Office clean-out, renovation waste, strata dumped rubbish |

## Week 1 (24 – 30 Nov): launch ✅

| Date | Post | Primary keyword | Search intent | Status |
|---|---|---|---|---|
| 24 Nov | How Much Does Rubbish Removal Cost in Sydney? | rubbish removal cost sydney | Buying | ✅ Live |
| 24 Nov | Skip Bin vs Rubbish Removal | skip bin vs rubbish removal | Buying | ✅ Live |
| 24 Nov | What Can't Rubbish Removalists Take? | what can't rubbish removalists take | Research | ✅ Live |
| 24 Nov | How to Dispose of an Old Mattress in Sydney | how to dispose of a mattress sydney | Buying / research | ✅ Live |
| 24 Nov | Council Clean-Up vs Private Rubbish Removal | council clean up vs rubbish removal | Comparison | ✅ Live |
| 24 Nov | Garage Clean-Out Checklist | garage clean out checklist | How-to | ✅ Live |
| 24 Nov | How to Clear a Deceased Estate in Sydney | deceased estate clearance sydney | How-to / buying | ✅ Live |
| 24 Nov | Where Does Your Rubbish Go? | where does rubbish go sydney | Trust | ✅ Live |

**Launch tasks this week**

- [ ] Deploy, then run `npm run check:blog -- https://www.nationalrubbishremoval.com.au`
- [ ] Search Console: resubmit `sitemap.xml` and request indexing for `/blog` and the 8 posts
- [ ] Google Business Profile: one post per day linking to a guide (start with the cost guide)
- [ ] Share the mattress, garage and council guides on Facebook and Instagram
- [ ] Send the owner/crew lead's name, photo and short bio, so the author box can become a real person (biggest E-E-A-T upgrade available)

## Week 2 (1 – 7 Dec)

| Date | Post (working title) | Primary keyword | Links to | Image ideas from the library |
|---|---|---|---|---|
| Tue 2 Dec | How to Get Rid of Green Waste in Sydney (Fast) | green waste removal sydney | `/green-waste-removal` | `home/green-waste-removal-sydney-before/after`, `residential/green-waste-removal-sydney` |
| Thu 4 Dec | End of Lease Rubbish Removal Checklist: Get Your Bond Back | end of lease rubbish removal | `/end-of-lease-rubbish-removal` | `commercial/end-of-lease-*`, `home/moving-out-rubbish-removal-sydney` |
| Sat 6 Dec | How to Dispose of an Old Fridge or Washing Machine in Sydney | fridge disposal sydney | `/household-rubbish-removal` | crew loading truck, recycling facility |

## Week 3 (8 – 14 Dec)

| Date | Post (working title) | Primary keyword | Links to | Image ideas |
|---|---|---|---|---|
| Tue 9 Dec | Christmas Clear-Out: Make Room Before the Holidays | christmas clean up rubbish removal | `/household-rubbish-removal`, `/garage-clean-out` | garage before/after, family home photos |
| Thu 11 Dec | Office Clean-Out Checklist for a Move or Lease End | office clean out checklist | `/office-rubbish-removal`, `/office-cubicle-removal` | `commercial/office-*`, `home/office-rubbish-removal-sydney-before/after` |
| Sat 13 Dec | How Much Rubbish Fits in a Truck? A Visual Guide to Cubic Metres | how much is a cubic metre of rubbish | `/quote-estimator` | truck photos, loaded truck, garage before |

## Week 4 (15 – 21 Dec)

| Date | Post (working title) | Primary keyword | Links to | Image ideas |
|---|---|---|---|---|
| Tue 16 Dec | Renovation Waste Disposal in Sydney: A Homeowner's Guide | renovation waste disposal sydney | `/building-materials-disposal`, `/construction-site-clean-up` | `construction/*` |
| Thu 18 Dec | Where to Donate Furniture in Sydney (and What Charities Won't Take) | donate furniture sydney | `/unwanted-furniture-removal` | furniture carrying photos |
| Sat 20 Dec | Same Day Rubbish Removal in Sydney: How It Works | same day rubbish removal sydney | `/household-rubbish-removal`, `/contact` | WhatsApp quote, truck photos |

## Week 5 (22 – 31 Dec)

| Date | Post (working title) | Primary keyword | Links to | Image ideas |
|---|---|---|---|---|
| Tue 23 Dec | Moving House? What to Throw Out Before You Move | decluttering before moving | `/household-rubbish-removal`, `/end-of-lease-rubbish-removal` | `home/moving-out-rubbish-removal-sydney`, boxes |
| Mon 29 Dec | After Christmas: What to Do With Boxes, Packaging and Your Tree | christmas tree disposal sydney | `/household-rubbish-removal`, `/green-waste-removal` | cardboard, green waste |
| Wed 31 Dec | Dumped Rubbish in Your Unit Block: Who's Responsible? | strata dumped rubbish | `/strata-rubbish-removal` | `commercial/strata-rubbish-removal-sydney`, car park photos |

## Next month (January) backlog

- Scrap metal: what's it worth and who takes it (`/scrap-metal-removal`)
- How to clear a hoarder's home with dignity (`/household-rubbish-removal`, `/deceased-estate-clearance`)
- Retail shop strip-out: a tenant's checklist (`/retail-strip-out-removal`)
- Warehouse clean-out: pallets, racking and packaging (`/warehouse-rubbish-removal`)
- Brick and concrete disposal: costs and options (`/brick-and-concrete-removal`)
- Old timber decking: removal and recycling (`/timber-removal`)
- Regional guides: "Rubbish removal in the Sutherland Shire / Inner West / Western Sydney: council clean-up rules and tips", linking to the suburb pages

## Weekly routine (about 30 minutes, every Monday)

1. Search Console > Performance > filter Page contains `/blog/`: note impressions, clicks and average position per post.
2. Search Console > Queries: any new question we get impressions for but don't answer well becomes a new FAQ or a new post in the backlog.
3. GA4: count `phone_click` and `quote_form_submit` events from blog pages.
4. Pick one existing post to improve (better quick answer, extra FAQ, more internal links from other posts).
5. Run `npm run check:blog -- https://www.nationalrubbishremoval.com.au`.

## Success at day 30

- 20 guides live and indexed
- Every service page linked to at least one guide
- Blog pages showing impressions for 100+ search queries in Search Console
- First leads (calls or quote forms) attributed to blog pages
- All posts passing `npm run check:blog` on the live site
