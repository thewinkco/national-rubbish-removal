# Blog guidelines: National Rubbish Removal

How to write, illustrate, publish and test a blog post so it ranks on Google (SEO), gets quoted by answer engines and AI assistants (AEO, GEO, AAO), and shows real expertise (E-E-A-T).

The blog lives at `/blog`. Each post is one TypeScript file in `src/content/blog/posts/`. Copy an existing post as your template. [`rubbish-removal-cost-sydney.ts`](../src/content/blog/posts/rubbish-removal-cost-sydney.ts) is the most complete example.

---

## 1. Pick the topic

A post earns its place only if it answers a question people really type into Google or ask ChatGPT, and it leads to a service we sell.

- Start from a real question. Good sources: Google's "People also ask" box, Google autocomplete, the questions customers ask on the phone or WhatsApp, and Search Console queries (Performance > Queries) where we get impressions but few clicks.
- **Never target a service page's keyword.** "Green waste removal sydney" belongs to /green-waste-removal; the post targets "how to get rid of green waste sydney" and links up to the service page with words like "book green waste removal". Two pages chasing the same phrase split the ranking between them.
- One post answers **one main question**. Make that question the primary keyword (`primaryKeyword`), e.g. "how to dispose of a mattress sydney".
- Every post links to at least one service page (`services: [...]`), and that service page then links back to the post automatically ("Helpful guides").
- Check the topic isn't already covered. Two posts on the same question compete against each other. Update the old post instead.

## 2. Write it

### Structure (in this order)

| Part | Field | Rule |
|---|---|---|
| SEO title | `title` | 35–65 characters (aim for 50–60). Main keyword first. Add "Sydney" or the year when it helps. |
| H1 | `h1` | Can be longer and more natural than the title. Only one H1 per page (the template does this). |
| Meta description | `description` | 120–165 characters. Answer the question and give a reason to click. Unique per post. |
| Quick answer | `answer` | **30–75 words (aim for 40–60).** A complete answer on its own, with real numbers. This is the passage Google's AI Overviews, ChatGPT and Perplexity quote. |
| Key takeaways | `takeaways` | 4–6 short bullets. Facts, not fluff. |
| Body | `body` | 900+ words. 4+ H2 sections, each phrased as the question people search for ("Is a skip bin cheaper than…?"). |
| FAQs | `faqs` | 4–6 extra questions with 1–3 sentence answers. They become `FAQPage` schema. |

### Writing rules

- **Answer first, explain second.** The first sentence under every H2 should answer that H2 directly. Answer engines lift single paragraphs, so each one should make sense on its own.
- **Use real numbers.** Prices come from `src/content/site.ts` (import `calculateQuote`, `PRICING`, `formatPrice`). Never type a price by hand: the post updates itself when prices change.
- **Show first-hand experience (the first E in E-E-A-T).** Add at least one `callout` with `tone: "tip"` titled "From the crew: …" with advice only someone who does the job would know.
- **Add a real review.** Use a `review` block with a reviewer's name from `REVIEWS` in `site.ts`. Pick one that matches the topic. Never invent or edit a review.
- **Tables for comparisons and prices.** AI assistants and Google pull tables into answers.
- **"Best rubbish removal" (and "best rubbish removal Sydney") is a phrase people search.** Use it only where a reader is choosing who to hire (comparing quotes, checking a removalist, hidden fees), at most once or twice per post, always about how to pick a good service. Never claim NRR is "the best": let the reviews and facts say that.
- **Sydney-specific.** Mention suburbs, councils, NSW rules and Sydney conditions (terraces with no driveway, strata buildings, summer storms).
- **Be careful with facts.** Rules about councils, asbestos, waste levies and disposal change. Don't quote a fee or rule unless you've checked the official source this month (council website, NSW EPA, SafeWork NSW). When rules vary by council, say so and tell readers to check their council.
- **No legal or financial advice.** Use a `note` callout for anything that needs a professional (see the deceased estate post).
- **Plain Australian English.** Short sentences, "you" and "we", no jargon, no hype words ("ultimate", "game-changer").
- **Internal links: 4 or more** inside the article, to service pages, the price estimator, the quote form or other guides. Use descriptive link text (`[mattress removal](/mattress-removal)`, not "click here").
- **Finish with a `cta` block** that matches the topic.

### Formatting available in the body

`p`, `h2`, `h3`, `list`, `steps` (numbered), `image`, `callout` (`tip`, `note`, `warning`), `table`, `review`, `cta`.
Inside text: `[label](/internal-path)`, `[label](https://external.site)` and `**bold**`.

## 3. Images

Every post has **1 cover image, 1 social image and 2–3 in-article images**, all from our own NRR photo library so they match the quality of the rest of the website. Never use stock photos showing other companies' branding.

1. Choose photos from `public/images/` (the originals are 1200–2048px). Pick ones that show the topic: a mattress post shows a mattress being carried.
2. Add the post to the `MAP` in [`scripts/blog-images.mjs`](../scripts/blog-images.mjs) with a descriptive, keyword-rich file name for each image (`strata-car-park-mattress-pickup`, not `img2`).
3. Run `npm run blog:images`. It creates, in `public/images/blog/<slug>/`:
   - `<slug>-cover.webp`: 16:9, up to 1440×810, never upscaled
   - `<slug>-og.jpg`: 1200×630 for Facebook, LinkedIn and WhatsApp previews
   - each in-article image: 3:2, 1200×800 WebP
4. Write the `alt` text: describe what's in the photo and where, naturally including the topic. 25+ characters. Never start with "image of".
5. Add a `caption` that adds information (captions are read more than body text).

### Generating new photos with Hermes

When the library has no photo for a topic, generate one with Hermes (the same AI API the Omniwink and Wopie blog routines use). It is given the NRR crew and truck photos from the live site as references, so uniforms, the truck livery and the bright Sydney look match the rest of the website.

```
npm run blog:image:hermes -- <slug> cover "<scene>"
npm run blog:image:hermes -- <slug> <descriptive-file-name> "<scene>"
```

- Needs `AI_API_URL` and `AI_API_KEY` (in `.env.local` locally; already set in the cloud environment the routines run in). Each image takes 2–8 minutes.
- **Generate one image at a time** (cover first, then the others). Requests sent to Hermes in parallel time out.
- Describe one concrete scene: who, doing what, where in Sydney, with which rubbish (e.g. "two crew loading palm fronds and branches into the truck in a leafy Sutherland Shire backyard").
- It saves the same sizes as the library script, with the file names you give it. If Hermes fails, fall back to a library photo.
- Look at every generated image before publishing: hands, faces, the truck's stripes and anything that looks fake. Regenerate if anything is off. Never generate fake "before and after" shots of real jobs, fake reviews or fake team members.

When the crew takes real photos on a job (with the customer's permission and no house numbers or faces visible without consent), use them. Real job photos are the strongest experience signal we have.

## 4. Technical SEO, AEO, GEO and AAO (handled by the template)

You don't need to do these by hand, but don't break them:

- **Schema (JSON-LD):** `BlogPosting` (headline, dates, author, publisher, images, word count, the services it's about, `speakable`), `FAQPage`, `BreadcrumbList`, plus the site-wide `LocalBusiness`. `/blog` has `Blog` and `CollectionPage` schema.
- **Meta:** canonical URL, Open Graph `article` tags with published and modified times, Twitter card, per-post social image.
- **Discovery:** every post is added automatically to `/sitemap.xml` (with `lastModified` and the cover image), the HTML `/sitemap`, the RSS feed `/blog/rss.xml`, and `/llms.txt` (the quick answer of every post, for AI assistants).
- **AEO/GEO:** the quick answer box and takeaways are marked `data-speakable`. H2s are questions. The table of contents gives every section an anchor link that AI answers can cite.
- **AAO (AI agents):** semantic HTML (one `<article>`, real `<table>`, `<nav>` for contents), descriptive links, and a clear path to act (phone, WhatsApp, quote form) on every post.
- **Speed:** cover image preloaded, everything else lazy-loaded, all WebP.

## 5. Publish

1. Create `src/content/blog/posts/<slug>.ts`. The slug is the primary keyword in lowercase with hyphens (keep it short, no dates).
2. Import it in [`src/content/blog/index.ts`](../src/content/blog/index.ts) and add it to `ALL`.
3. Set `published` and `updated` to the publish date (YYYY-MM-DD). **Posts with a future date stay hidden** until the site is rebuilt on or after that date, so you can write ahead and schedule.
4. `npm run blog:images`
5. `npm run build`, then `npm start` and in a second terminal `npm run check:blog`. Fix everything it reports.
6. Open the post on a phone-sized window and check the table and images (no sideways scrolling).
7. Deploy. Then in Google Search Console: URL Inspection > paste the post URL > **Request indexing**.
8. Share it: a Google Business Profile post (photo + first two sentences + link), Facebook, Instagram story and LinkedIn.

## 6. Test: what `npm run check:blog` verifies

The check loads every post from a running build (local or live) and fails if any rule is broken:

- Page returns 200, has exactly one H1, a canonical URL, `og:type=article` and a social image that exists
- Title 35–65 characters, meta description 120–165 characters, no duplicates across posts
- `BlogPosting`, `FAQPage`, `BreadcrumbList` and `LocalBusiness` schema present and valid JSON, 4+ FAQs
- Article is 900+ words with 4+ H2 sections and a 30–75 word quick answer
- 3+ blog images (cover + 2 in the article), each with real alt text and a file that loads
- 4+ internal links in the article, and every one of them returns 200
- Every post is in `/sitemap.xml`, `/blog/rss.xml` and `/llms.txt`, and `/robots.txt` doesn't block the blog

After deploying, run it against the live site: `npm run check:blog -- https://www.nationalrubbishremoval.com.au`

Also test each new post once in Google's [Rich Results Test](https://search.google.com/test/rich-results) and check the social preview by pasting the link into WhatsApp.

## 7. Measure and improve

Check weekly in Google Search Console (Performance, filter by page containing `/blog/`) and GA4:

| Metric | Where | What good looks like |
|---|---|---|
| Indexed posts | Search Console > Pages | All posts indexed within 1–2 weeks |
| Impressions per post | Search Console > Performance | Growing week on week |
| Average position | Search Console > Performance | Moving into the top 20, then top 10 |
| Click-through rate | Search Console > Performance | Below 2% at a top-10 position means the title or description needs work |
| Calls and quotes from the blog | GA4 events `phone_click` (locations `blog_sidebar`, `blog_inline_cta`) and `quote_form_submit` (event parameter `page` starts with `/blog/`) | The real goal: leads |

**Refresh rule:** every post is reviewed at least every 6 months, and immediately when prices or rules change. Update the facts, add anything new customers are asking, and bump `updated`. A post with high impressions but a low position usually needs a better quick answer, more depth on the H2 people search for, or more internal links pointing to it.
