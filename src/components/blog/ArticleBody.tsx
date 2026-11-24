import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, Lightbulb, Phone, WarningCircle } from "@phosphor-icons/react/ssr";
import { REVIEWS, SITE } from "@/content/site";
import { headingId, type BlogBlock } from "@/content/blog";
import { Inline } from "@/components/Rich";
import { CallLink } from "@/components/ContactLinks";
import { GoogleIcon, Stars } from "@/components/icons";

const CALLOUT = {
  tip: { icon: Lightbulb, box: "border-brand/30 bg-brand-50", iconCls: "text-brand-ink" },
  note: { icon: Info, box: "border-line bg-mist", iconCls: "text-ink-600" },
  warning: { icon: WarningCircle, box: "border-red-200 bg-red-50", iconCls: "text-red-600" },
} as const;

/** Renders a post body. Paragraph and list styling comes from .prose-nrr / .article-body in globals.css. */
export function ArticleBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-nrr article-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}><Inline text={b.text} /></p>;
          case "h2":
            return <h2 key={i} id={headingId(b)}>{b.text}</h2>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "list":
            return <ul key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ul>;
          case "steps":
            return <ol key={i}>{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ol>;
          case "image": {
            return (
              <figure key={i} className="my-10">
                <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-mist">
                  <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 720px, 100vw" className="object-cover" />
                </div>
                {b.caption && <figcaption className="mt-3 text-[14px] leading-relaxed text-muted">{b.caption}</figcaption>}
              </figure>
            );
          }
          case "callout": {
            const c = CALLOUT[b.tone];
            const Icon = c.icon;
            return (
              <aside key={i} className={`my-8 flex gap-4 rounded-2xl border p-5 sm:p-6 ${c.box}`}>
                <Icon className={`mt-0.5 h-6 w-6 shrink-0 ${c.iconCls}`} aria-hidden />
                <div>
                  <p className="!mb-1 font-semibold text-ink-800">{b.title}</p>
                  <p className="!mb-0 text-[16px]"><Inline text={b.text} /></p>
                </div>
              </aside>
            );
          }
          case "table":
            return (
              <div key={i} className="my-8 overflow-x-auto rounded-2xl border border-line bg-white" role="region" aria-label={b.caption ?? "Table"} tabIndex={0}>
                <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                  {b.caption && <caption className="border-b border-line px-4 py-3 text-left text-[13px] text-muted">{b.caption}</caption>}
                  <thead className="bg-mist text-ink-800">
                    <tr>{b.head.map((h, j) => <th key={j} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-line align-top">
                        {r.map((c, k) => (k === 0 ? <th key={k} scope="row" className="px-4 py-3 font-medium text-ink-800">{c}</th> : <td key={k} className="px-4 py-3">{c}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "review": {
            const r = REVIEWS.find((x) => x.name === b.name);
            if (!r) return null;
            return (
              <figure key={i} className="my-10 rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-4 font-display text-[21px] leading-snug text-ink-800">&ldquo;{r.pull ?? r.text}&rdquo;</blockquote>
                <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-muted">
                  <span className="font-semibold text-ink-800">{r.name}</span>
                  <span>{r.tag}</span>
                  <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 !no-underline">
                    <GoogleIcon className="h-4 w-4" /> Google review
                  </a>
                </figcaption>
              </figure>
            );
          }
          case "cta":
            return (
              <aside key={i} className="my-10 rounded-2xl bg-ink-800 p-6 text-white sm:p-8">
                <p className="!mb-2 font-display text-[26px] leading-tight !text-white">{b.title}</p>
                <p className="!mb-6 !text-white/75">{b.text}</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/quote-estimator" className="btn-primary !text-on-brand !no-underline">
                    See your price <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <CallLink location="blog_inline_cta" className="btn-ghost !text-white !no-underline">
                    <Phone className="h-4 w-4" aria-hidden /> {SITE.phone}
                  </CallLink>
                </div>
              </aside>
            );
        }
      })}
    </div>
  );
}
