import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, Phone } from "@phosphor-icons/react/ssr";
import { AUTHORS, POSTS, formatDate, getPost, readingMinutes, relatedPosts, toc, wordCount } from "@/content/blog";
import { getService } from "@/content/services";
import { SITE } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { PostCard } from "@/components/blog/PostCard";
import { CallLink, WhatsAppLink } from "@/components/ContactLinks";
import { WhatsAppIcon } from "@/components/icons";
import { Breadcrumbs, CtaBand, FaqList, QuoteSection } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { plain } from "@/lib/legacy";
import { blogPostingSchema, breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    image: post.ogImage,
    imageAlt: post.cover.alt,
    article: { published: post.published, updated: post.updated, author: AUTHORS[post.author].name, section: post.category, tags: post.keywords },
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${slug}`;
  const author = AUTHORS[post.author];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.h1, path },
  ];
  const contents = toc(post);
  const services = post.services.map(getService).filter((s) => s !== undefined);
  const images = [post.cover.src, ...post.body.flatMap((b) => (b.type === "image" ? [b.src] : []))];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: post.title, description: post.description }),
          blogPostingSchema({
            path,
            headline: post.h1,
            description: post.description,
            images,
            published: post.published,
            updated: post.updated,
            wordCount: wordCount(post),
            keywords: [post.primaryKeyword, ...post.keywords],
            section: post.category,
            author,
            about: services.map((s) => ({ path: `/${s.slug}`, name: s.h1 })),
          }),
          breadcrumbSchema(crumbs),
          faqSchema(post.faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        )}
      />

      <article>
        <header className="grain border-b border-line bg-paper text-ink-800">
          <div className="container-x pb-10 pt-10 lg:pb-14 lg:pt-14">
            <Breadcrumbs items={crumbs} dark={false} />
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <Link href="/blog" className="eyebrow justify-center">{post.category}</Link>
              <h1 className="h-display mt-4 text-[36px] leading-[1.06] sm:text-5xl lg:text-[56px]">{post.h1}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600 sm:text-xl">{post.excerpt}</p>
              <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[14px] text-muted">
                <span>By <span className="font-medium text-ink-800">{author.name}</span></span>
                <span aria-hidden>·</span>
                <span>Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></span>
                <span aria-hidden>·</span>
                <span>{readingMinutes(post)} min read</span>
              </p>
            </div>
            <figure className="relative mx-auto mt-10 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl bg-mist">
              <Image src={post.cover.src} alt={post.cover.alt} fill preload sizes="(min-width: 1100px) 1024px, 100vw" className="object-cover" />
            </figure>
          </div>
        </header>

        <div className="bg-white py-12 lg:py-16">
          <div className="container-x grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="mx-auto w-full min-w-0 max-w-[720px] lg:mx-0 lg:justify-self-end">
              {/* Quick answer: the passage answer engines quote. Keep it 40–60 words and self-contained. */}
              <section aria-labelledby="quick-answer" className="rounded-2xl border border-brand/25 bg-brand-50 p-6 sm:p-7">
                <h2 id="quick-answer" className="text-[13px] font-semibold uppercase tracking-wide text-brand-ink">Quick answer</h2>
                <p data-speakable className="mt-3 text-[18px] leading-relaxed text-ink-800">{post.answer}</p>
              </section>

              <section aria-labelledby="key-takeaways" className="mt-8 rounded-2xl border border-line bg-paper p-6 sm:p-7">
                <h2 id="key-takeaways" className="font-display text-[22px] text-ink-800">Key takeaways</h2>
                <ul data-speakable className="mt-4 space-y-3">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 text-[16px] leading-relaxed text-ink-700">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-good" weight="fill" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Mobile contents */}
              <details className="mt-8 rounded-2xl border border-line lg:hidden">
                <summary className="flex items-center justify-between px-5 py-4 font-medium text-ink-800">
                  In this guide <span className="faq-icon text-xl leading-none text-muted transition-transform">+</span>
                </summary>
                <ol className="space-y-2 border-t border-line px-5 py-4 text-[15px]">
                  {contents.map((c) => <li key={c.id}><a href={`#${c.id}`} className="text-ink-600 hover:text-brand-ink">{c.text}</a></li>)}
                </ol>
              </details>

              <div className="mt-12">
                <ArticleBody blocks={post.body} />
              </div>

              {/* Author box: who wrote this and why they know (E-E-A-T). */}
              <aside className="mt-14 flex gap-5 rounded-2xl border border-line bg-paper p-6 sm:p-7">
                {author.image && (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink-800 p-3">
                    <Image src={author.image} alt="" width={40} height={40} className="h-auto w-full" />
                  </span>
                )}
                <div>
                  <p className="text-[13px] text-muted">Written by</p>
                  <p className="font-display text-[20px] text-ink-800">{author.name}</p>
                  <p className="text-[14px] text-muted">{author.role}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{author.bio}</p>
                  <p className="mt-3 text-[14px] text-muted">
                    Published <time dateTime={post.published}>{formatDate(post.published)}</time> · Last checked <time dateTime={post.updated}>{formatDate(post.updated)}</time> ·{" "}
                    <Link href="/about" className="font-medium text-brand-ink underline decoration-brand/40 underline-offset-4">About our team</Link>
                  </p>
                </div>
              </aside>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <nav aria-label="In this guide" className="rounded-2xl border border-line p-6">
                  <p className="font-display text-[19px] text-ink-800">In this guide</p>
                  <ol className="mt-4 space-y-2.5 border-t border-line pt-4 text-[14.5px] leading-snug">
                    {contents.map((c) => <li key={c.id}><a href={`#${c.id}`} className="text-ink-600 hover:text-brand-ink">{c.text}</a></li>)}
                  </ol>
                </nav>
                <div className="rounded-2xl bg-ink-800 p-6 text-white">
                  <p className="font-display text-[22px] leading-tight">Want it gone today?</p>
                  <p className="mt-2 text-[14px] text-white/70">Fixed price before we lift. Same day pickup when you book before 1pm.</p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <CallLink location="blog_sidebar" className="btn-primary"><Phone className="h-4 w-4" aria-hidden /> {SITE.phone}</CallLink>
                    <WhatsAppLink location="blog_sidebar" className="btn-ghost"><WhatsAppIcon className="h-4 w-4" /> WhatsApp a photo</WhatsAppLink>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {services.length > 0 && (
        <section className="border-t border-line bg-white py-14 lg:py-16">
          <div className="container-x">
            <h2 className="h-display text-[28px] text-ink-800 sm:text-[34px]">Services mentioned in this guide</h2>
            <div className="mt-8 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {services.map((s) => (
                <div key={s.slug} className="group relative flex items-start justify-between gap-4 border-b border-line py-5">
                  <span>
                    <Link href={`/${s.slug}`} className="block font-display text-[20px] text-ink-800 after:absolute after:inset-0 group-hover:text-brand-ink">{s.name}</Link>
                    <span className="mt-1 block text-[14px] leading-relaxed text-muted">{s.summary}</span>
                  </span>
                  <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand-ink" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqList faqs={post.faqs} title="More questions, answered" />

      <section className="bg-white py-16 lg:py-20">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="h-display text-[28px] text-ink-800 sm:text-[34px]">Keep reading</h2>
            <Link href="/blog" className="hidden items-center gap-1.5 text-[15px] font-medium text-brand-ink sm:inline-flex">
              All guides <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts(post).map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to clear it? It could be gone today." body="Send a photo, get a fixed price, and we'll do all the lifting." />
      <QuoteSection context={`Blog: ${post.h1}`} />
    </>
  );
}
