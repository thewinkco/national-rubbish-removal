# Local SEO analysis: nationalrubbishremoval.com.au

Checked 24 November 2026 against the live site, Google-style web search, Bing, directory sites and the Australian Business Register. No paid tools (GBP Insights, geo-grid rank tracking, backlink indexes) were available.

## Local SEO score: 53/100

| Dimension | Weight | Score | Why |
|---|---|---|---|
| GBP signals | 25% | 15/25 | Maps embed, Maps link (CID), hours and a reviews link are all on the site. Primary category, posts and photos can't be seen from outside the GBP account. |
| Reviews & reputation | 20% | 12/20 | 5.0 stars from 27 Google reviews, all recent (good). Google is the only platform, and owner replies can't be confirmed. |
| Local on-page | 20% | 13/20 | City + service in titles and H1s, NAP in the footer of every page, `tel:` links, 18 dedicated service pages. Suburb pages lean heavily on shared template blocks (see below). |
| NAP & citations | 15% | 4/15 | NAP is identical on page and schema. No directory or third-party mention of the business, its phone or its domain turned up anywhere. |
| Local schema | 10% | 7/10 | LocalBusiness with address, phone, hours, `geo`, `hasMap`, `areaServed` and price range. The type is generic and the coordinates are street-level, not the exact pin. |
| Links & authority | 10% | 2/10 | No chamber, BBB, press, sponsorship or "best of" list signals found. |

**Business type:** Hybrid / service-area business. The site shows a street address and Maps embed (Condell Park depot) but serves the whole Sydney metro area.
**Vertical:** Home services (rubbish / junk removal). Relevant directories: hipages, Oneflare, Airtasker, ServiceSeeking, Yellow Pages, True Local, Hotfrog, Word of Mouth.

## GBP optimisation checklist

| Signal | Status |
|---|---|
| Maps embed / place link on site | ✅ Footer and contact page embed; schema `hasMap` uses the Maps CID |
| Reviews link on site | ✅ Header, footer and review sections link to the Google reviews |
| Opening hours on site and in schema | ✅ 6am to 9pm weekdays, 7am Saturday, 8am Sunday |
| Primary category "Rubbish removal service" | ❓ Can't see from outside. **Check first: it's the #1 local pack factor.** |
| 4 secondary categories | ❓ Suggested: Waste management service, Junk removal service, Demolition contractor (only if offered), Garbage collection service |
| Service area set (not just the depot) | ❓ Should list the Sydney regions you serve |
| Address shown or hidden | ❓ If customers don't visit the depot, set the GBP as a service-area business with the address hidden. Keep the site's address the same as the GBP's. |
| Weekly posts with photos | ❓ Use each new blog post as a GBP post |
| Products / services with prices | ❓ Add the core services, matching the site |
| Real job photos (not only AI images) | ❓ Upload crew, truck and before/after photos regularly |

## Review health

- **Google:** 5.0 from 27 reviews. The reviews on the site are dated November 2026, so they're recent. Above the 10-review threshold, but far behind marketplaces in the results (Airtasker shows thousands of Sydney rubbish removal reviews).
- **Other platforms:** none found. Customers check about 6 review sites on average, and ChatGPT pulls from Yelp, Bing, Facebook and Reddit rather than Google.
- **Owner responses:** unknown. Reply to every review, mentioning the suburb and service naturally.
- **Velocity:** aim for a steady 4 to 6 a week. Avoid gaps longer than 2 to 3 weeks.
- **Rule:** never pre-screen customers ("happy? leave a review") before sending the review link. Google treats review gating as fake engagement.
- **Schema:** don't add `aggregateRating` to your own LocalBusiness. Google ignores self-served review markup for local businesses.

## NAP consistency

| Source | Name | Address | Phone |
|---|---|---|---|
| Site footer / contact (all pages checked) | National Rubbish Removal | 12/57 Allingham St, Condell Park NSW 2200 | 0489 043 888 (`tel:+61489043888`) |
| LocalBusiness schema | National Rubbish Removal | 12/57 Allingham St, Condell Park NSW 2200 | +61489043888 |
| ABN register | NATIONAL RUBBISH REMOVAL PTY LTD (ABN 63 700 244 659, active) | Postcode **2216** NSW | n/a |
| Google Business Profile | not visible from outside | ❓ | ❓ |

- Page and schema match exactly.
- The ABN entity's postcode (2216, Rockdale area) differs from the site's 2200. That's normal if the company's registered address isn't the depot, but **confirm this ABN is yours** before showing it on the site.
- A second phone (WhatsApp 0418 665 429) appears on the site. Never use it in directory listings: one phone number everywhere.

## Citation presence

| Directory | Status |
|---|---|
| Google search for name, phone or domain | ❌ No results mention the business, the phone number or the domain |
| Bing | ⚠️ No listing found for the name. Bing feeds ChatGPT and Copilot, so claim Bing Places and verify the site in Bing Webmaster Tools. |
| Yellow Pages / True Local / hipages | ❓ Blocked automated checks (HTTP 403). Search manually. |
| Hotfrog | ❌ Not found |
| Oneflare | ❓ Search returned 404 |
| Facebook | ✅ Page exists (linked in schema `sameAs`) |
| Instagram / LinkedIn | ✅ Linked in `sameAs` |
| Apple Business Connect | ❓ Claim it (Apple Maps, Siri) |
| Data aggregators | ❓ Not submitted (Foursquare, Data Axle) |

**Use this exact NAP on every listing:**
National Rubbish Removal, 12/57 Allingham St, Condell Park NSW 2200, 0489 043 888, https://www.nationalrubbishremoval.com.au

## Local schema status

Live on every page: `LocalBusiness` with name, URL, logo, image, telephone, email, full `PostalAddress`, `geo` (-33.9198, 151.0014), `hasMap`, `openingHoursSpecification`, `priceRange`, `areaServed` (Sydney metro + 42 suburbs), `sameAs`, `contactPoint` and an offer catalogue of all services. Suburb pages add a `Service` with a suburb-level `areaServed`.

Remaining fixes:
- **Exact coordinates:** the current `geo` is street-level from OpenStreetMap with 4 decimals. Copy the 5-decimal pin from the GBP into `SITE.geo` in `src/content/site.ts`.
- **More specific type (optional):** add a home-services subtype alongside LocalBusiness, for example `"@type": ["LocalBusiness", "HomeAndConstructionBusiness"]`. Update `scripts/check-blog.mjs`, which looks for the plain `LocalBusiness` type.
- **`sameAs`:** add each new directory profile URL to `SITE.socials` / `sameAs` in `src/lib/schema.ts` as it goes live.

## Location page quality (42 suburb pages)

Measured on all 42 live pages: the share of each page's 5-word phrases that appear on no other suburb page, with suburb names masked.

- **Average unique: 27%. All 42 pages are under 60%.** Lowest: Zetland, Alexandria and Glebe (23%). Highest: Chatswood (34%), Brighton-Le-Sands and Mosman (31–32%).
- Each page is about 3,000 words: roughly 800 words of genuine local content (council rules, census facts, local tips) plus about 2,200 words of shared blocks. The shared blocks are the offer stack, comparison table, process, reviews, FAQ and quote form.
- This is a whole-page measure. Google weighs the main content most, so the real doorway risk is lower than 27% suggests. But the swap test partly fails: swap the suburb name and most of the page still reads the same.

Fixes, in order:
1. **Cut the shared blocks on suburb pages.** Keep one short offer strip and the quote form; drop the repeated comparison, process and generic FAQ blocks (they live on the home and service pages already). This alone raises uniqueness sharply without writing anything new.
2. **Add local proof to the top 10 suburbs first:** a real job photo, the matching Google review (reviews already mention Kirrawee, Parramatta, Bexley, Lane Cove, Moorebank, North Sydney, Double Bay and others), and nearest tip / transfer station details.
3. **Filter reviews and FAQs by suburb or region** instead of showing the same set everywhere.
4. Consider merging the thinnest inner-city pages (Zetland, Waterloo, Alexandria) into one stronger area page if they can't be made genuinely different.

## Top 10 actions

| # | Priority | Action | Who | How you'll know it worked |
|---|---|---|---|---|
| 1 | Critical | Confirm the GBP primary category is "Rubbish removal service" and add 4 secondary categories | You (GBP) | More discovery searches in GBP Insights within 2 to 4 weeks |
| 2 | Critical | Claim Bing Places and Apple Business Connect, verify the site in Bing Webmaster Tools and submit the sitemap | You | The business appears in Bing for its name; Bing shows pages indexed |
| 3 | High | Create matching listings on Yellow Pages, True Local, hipages, Oneflare, Hotfrog, ServiceSeeking and Word of Mouth with the exact NAP; send me the URLs for `sameAs` | You, then me | A web search for the name or phone returns the listings |
| 4 | High | Post-job review requests (SMS with the review link, no pre-screening), 4 to 6 a week, and reply to every review | You | Review count climbs steadily with no gaps longer than 3 weeks |
| 5 | High | Trim shared blocks on suburb pages to raise uniqueness | Me (code) | Re-run of the uniqueness check shows a clear jump in the average |
| 6 | High | Confirm ABN 63 700 244 659 is yours; add it, plus the waste licence and insurer, to the footer and About page | You, then me | Trust details visible on every page |
| 7 | Medium | Set the GBP to a service-area business (address hidden if customers don't visit), with the Sydney regions listed | You | GBP shows a service area instead of only a pin |
| 8 | Medium | Add real job photos to the GBP weekly and post each new blog guide there | You | More photo views and GBP post clicks |
| 9 | Medium | Add local proof (photo, matching review, tip site) to the top 10 suburb pages | Both | Those pages gain impressions for "rubbish removal <suburb>" in Search Console |
| 10 | Low | Win 3 to 5 local links: Canterbury-Bankstown business chamber, suppliers, a local sponsorship | You | New referring domains in Search Console's Links report |

## What this analysis could not assess

- Live local pack and Maps positions by suburb (geo-grid): needs BrightLocal, Local Falcon or DataForSEO.
- GBP categories, Insights, posts and photo counts: needs owner access to the GBP.
- Directories that block automated checks (Yellow Pages, True Local, hipages): need a manual search.
- Competitor review counts and velocity in the local pack.
- Backlinks and domain authority: needs Moz, Ahrefs or Semrush.
- The web search tool is US-based, so Australian results may differ.
