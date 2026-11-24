import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { POSTS, formatDate, readingMinutes } from "@/content/blog";
import { JsonLd } from "@/components/JsonLd";
import { PostCard } from "@/components/blog/PostCard";
import { Breadcrumbs, CtaBand, QuoteSection } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { blogSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Rubbish Removal Tips & Guides | NRR Sydney Blog";
const DESCRIPTION =
  "Straight answers from Sydney rubbish removalists: real prices, skip bin comparisons, what can't be thrown out, and step-by-step clear-out guides.";

const base = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/blog" });
export const metadata = { ...base, alternates: { ...base.alternates, types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "NRR Guides & Tips" }] } } };

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/blog", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          blogSchema({ path: "/blog", name: "National Rubbish Removal Blog", description: DESCRIPTION, posts: POSTS }),
          breadcrumbSchema(crumbs),
        )}
      />

      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={crumbs} dark={false} />
          <h1 className="h-display mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Rubbish removal questions, answered by the crew</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-ink-600">
            Real prices, honest comparisons and step-by-step guides from the team that lifts, loads and sorts rubbish across Sydney every day.
          </p>
        </div>
      </section>

      {featured && (
        <section className="bg-white py-14 lg:py-20">
          <div className="container-x">
            <article className="group relative grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-[1.25fr_1fr]">
              <div className="relative aspect-[16/9] bg-mist lg:aspect-auto lg:min-h-[420px]">
                <Image src={featured.cover.src} alt={featured.cover.alt} fill preload sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="eyebrow">Latest guide · {featured.category}</p>
                <h2 className="h-display mt-4 text-[30px] leading-[1.1] text-ink-800 sm:text-[38px]">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0 group-hover:text-brand-ink">{featured.h1}</Link>
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-ink-600">{featured.excerpt}</p>
                <p className="mt-6 flex items-center gap-2 text-[14px] text-muted">
                  <time dateTime={featured.updated}>{formatDate(featured.updated)}</time> · {readingMinutes(featured)} min read
                  <ArrowRight className="ml-auto h-5 w-5 text-brand-ink transition group-hover:translate-x-1" aria-hidden />
                </p>
              </div>
            </article>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="bg-white pb-16 lg:pb-24">
          <div className="container-x">
            <h2 className="h-display border-t border-line pt-10 text-[28px] text-ink-800 sm:text-[34px]">All guides</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <p className="eyebrow">Quick answers</p>
            <h2 className="h-display mt-4 text-[30px] leading-tight text-ink-800 sm:text-[38px]">The questions Sydney asks us most</h2>
          </div>
          <ul className="border-t border-ink-800/15">
            {POSTS.map((p) => (
              <li key={p.slug} className="border-b border-ink-800/15">
                <Link href={`/blog/${p.slug}`} className="group block py-5">
                  <span className="flex items-start justify-between gap-6 font-display text-[20px] leading-snug text-ink-800 group-hover:text-brand-ink">
                    {p.faqs[0]?.q ?? p.h1}
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand-ink" aria-hidden />
                  </span>
                  <span className="mt-1.5 block max-w-[68ch] text-[15px] leading-relaxed text-ink-600">{p.answer.split(". ")[0]}.</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Rather skip the reading and get it gone?" body="One call, a fixed price, and same day pickup when you book before 1pm." />
      <QuoteSection context="Blog" />
    </>
  );
}
