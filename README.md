# National Rubbish Removal — website

Next.js 16 (App Router, TypeScript, Tailwind v4). Fully static: every page is prerendered at build time.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| What | File |
|---|---|
| Business details (phone, WhatsApp, email, hours, socials), pricing model, reviews, excluded items | `src/content/site.ts` |
| 17 service pages (titles, meta, hero hook, pain points, items taken) | `src/content/services.ts` |
| 21 suburb pages (title, meta, council, postcode, nearby suburbs) | `src/content/suburbs.ts` |
| General FAQs | `src/content/faqs.ts` |
| Blog posts (one file per post), authors, helpers | `src/content/blog/` — see `docs/BLOG-GUIDELINES.md` and `docs/BLOG-CONTENT-PLAN.md` |
| Blog images (cover, social card, in-article) | `npm run blog:images` (`scripts/blog-images.mjs`) |
| Blog QA against a running build | `npm run check:blog [base-url]` |
| Unique long-form copy migrated from the old site (local council info, census data, service detail) | `src/content/legacy.json` |
| Page sections (offer stack, comparison, reviews, FAQ, CTA…) | `src/components/sections.tsx` |
| Price estimator / 2-step quote form | `src/components/QuoteEstimator.tsx`, `src/components/QuoteForm.tsx` |
| Structured data (LocalBusiness, Service, FAQPage, Breadcrumb) | `src/lib/schema.ts` |
| Redirects + security headers | `next.config.ts` |

## Leads & tracking

The quote form posts to the **same Google Apps Script** the old site used, with the same field names
(`name, phone, email, services, size, preferredDate, preferredTime, location, message, photos`) plus
`estimate`, `page` and `context`. Photos upload to the same Cloudinary preset. Override with env vars:

```
NEXT_PUBLIC_LEAD_ENDPOINT=
NEXT_PUBLIC_CLOUDINARY_CLOUD=
NEXT_PUBLIC_CLOUDINARY_PRESET=
NEXT_PUBLIC_GTM_ID=          # defaults to the existing container GTM-T2DRQQ74
```

dataLayer events: `quote_form_submit` (unchanged name), `quote_form_start`, `quote_form_step`,
`phone_click`, `whatsapp_click`, `email_click`, `estimate_change`, `estimate_lock_in`.
Mark `quote_form_submit` and `phone_click` as conversions in GTM/GA4.

## SEO migration — why nothing breaks

- **All 48 URLs in the live sitemap are served at the exact same path** (`/bondi`, `/mattress-removal`, `/services`…),
  with the same canonical (`https://www.nationalrubbishremoval.com.au/<slug>`, no trailing slash). No redirects needed.
- Every H1 is kept; the unique long-form copy of each service and suburb page is kept word-for-word, and each page now has more content than before.
- Trailing slashes → 308 to the slashless URL (same as the old site). Apex domain → 308 to `www`.
- Old image URLs (`/web images/...`, `/og-image.jpg`) still resolve — the originals are mirrored in `public/web images/`.
- `/services?tab=…` links still work (scrolls to the category).
- Extra safety redirects for common guesses: `/pricing`, `/privacy-policy`, `/services/<slug>`, `/rubbish-removal-<suburb>`, etc.
- Unknown URLs return a real `404` status.
- `sitemap.xml` lists the same 48 URLs; `robots.txt` points to it.

### Launch checklist

1. Deploy (Vercel recommended), point the domain at it, keep `www` as primary.
2. Spot-check a few old URLs live (200 + correct canonical).
3. Google Search Console: resubmit `sitemap.xml`, request indexing for the home page and top pages, then watch Coverage for 2–4 weeks.
4. Run the Rich Results Test on `/`, `/bondi` and `/mattress-removal`.
5. Send a real test lead and confirm it lands in the Google Sheet.
