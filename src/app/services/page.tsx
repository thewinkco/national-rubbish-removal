import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Leaf, ShieldWarning } from "@phosphor-icons/react/ssr";
import { CATEGORIES, servicesIn } from "@/content/services";
import { JOB_TYPES, formatPrice, formatQuote, fromPrice, quoteFor, volumesFor } from "@/content/site";
import { GENERAL_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { TabAnchor } from "@/components/TabAnchor";
import { Comparison, CtaBand, FaqList, Guarantee, PageHero, Process, QuoteSection, Reviews, SectionHeading } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { abs, breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Rubbish Removal Services Sydney | National Rubbish Removal";
const DESCRIPTION =
  "Residential, commercial & construction rubbish removal across Sydney. Same day pickup, we do the lifting, fixed upfront prices. Call 0489 043 888.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/services" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <TabAnchor />
      <JsonLd
        data={graph(
          webPageSchema({ path: "/services", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          breadcrumbSchema(crumbs),
          {
            "@type": "ItemList",
            itemListElement: CATEGORIES.flatMap((c) => servicesIn(c.id)).map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.name,
              url: abs(`/${s.slug}`),
            })),
          },
          faqSchema(GENERAL_FAQS),
        )}
      />
      <PageHero
        h1="Professional Rubbish Removal Services Sydney"
        hook="From one mattress to a whole warehouse: if it's non-hazardous and it needs to go, we lift it, load it and take it. Same day, fixed price."
        breadcrumbs={crumbs}
        image="/images/nrr-rubbish-removal-truck.webp"
        imageAlt="National Rubbish Removal branded truck"
      />

      {/* Category jump nav */}
      <nav aria-label="Service categories" className="sticky top-[100px] z-30 border-b border-line bg-white/95 backdrop-blur lg:top-[116px]">
        <div className="container-x flex gap-2 overflow-x-auto py-3">
          {CATEGORIES.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="shrink-0 rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-ink-600/40 hover:text-ink-800">
              {c.name}
            </a>
          ))}
          <a href="#pricing" className="shrink-0 rounded-lg bg-ink-800 px-4 py-2 text-sm font-medium text-white">Pricing</a>
        </div>
      </nav>

      {CATEGORIES.map((cat, idx) => {
        return (
          <section key={cat.id} id={cat.id} className={`scroll-mt-44 py-20 lg:py-24 ${idx % 2 ? "bg-mist" : "bg-white"}`}>
            <div className="container-x grid items-start gap-12 lg:grid-cols-2">
              <div className={idx % 2 ? "lg:order-2" : ""}>
                <p className="eyebrow">{cat.audience}</p>
                <h2 className="h-display mt-3 text-3xl text-ink-800 sm:text-4xl">{cat.name}</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{cat.pitch}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg bg-mist px-4 py-2 text-sm font-medium text-ink-800">
                  From {formatPrice(fromPrice(cat.id))} · fixed price before we start
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {servicesIn(cat.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="card group flex h-full flex-col p-4 transition hover:-translate-y-0.5 hover:shadow-lift">
                        <h3 className="flex items-center justify-between gap-2 font-bold text-ink-800 group-hover:text-brand-ink">
                          {s.name} <ArrowRight className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                        </h3>
                        <span className="mt-1 text-[14px] leading-snug text-muted">{s.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/services?tab=${cat.id}#quote-form`} className="btn-primary mt-8">Get a {cat.short.toLowerCase()} quote</Link>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lift">
                <Image src={cat.image} alt={cat.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
          </section>
        );
      })}

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-44 bg-ink-800 py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Transparent pricing"
            title="You pay for the space your rubbish takes. That's it."
            intro="Fixed prices by load size. No labour surcharges, no tip-fee surprises, no 'that'll be extra' on the day. Your price covers labour, loading, sweep-up and disposal."
            dark
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {JOB_TYPES.map((p) => {
              const sizes = volumesFor(p.id);
              const first = quoteFor(p.id, sizes[0].id);
              const full = quoteFor(p.id, sizes[sizes.length - 1].id);
              return (
              <div key={p.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <p className="font-display text-xl">{p.label}</p>
                <p className="mt-1 text-sm text-white/60">{p.blurb}</p>
                <p className="mt-6 text-sm text-white/60">From</p>
                <p className="font-display text-5xl text-brand">{formatPrice(first.low)}</p>
                <p className="mt-2 text-sm text-white/70">{first.volume.label} · full truck (8 m³) {formatQuote(full)}</p>
                <ul className="mt-6 space-y-2 text-[14px] text-white/80">
                  {["Labour & loading", "Disposal & tip fees", "Swept-clean finish"].map((t) => (
                    <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" aria-hidden /> {t}</li>
                  ))}
                </ul>
              </div>
              );
            })}
          </div>
          <p className="mt-6 text-[15px] text-white/70">
            See every load size and our guide prices for estates, strip-outs and factory clear-outs on the{" "}
            <Link href="/quote-estimator" className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">price guide</Link>.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: Clock, t: "Same day service", d: "Urgent removals available when you book before 1pm." },
              { icon: ShieldWarning, t: "Unusual or hazardous items", d: "Ask us before booking and we'll tell you straight what we can arrange." },
              { icon: Leaf, t: "Eco-friendly disposal", d: "Up to 95% of waste recycled responsibly." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4 rounded-2xl bg-white/[0.04] p-5">
                <Icon className="h-6 w-6 shrink-0 text-brand" aria-hidden />
                <div><h3 className="font-bold">{t}</h3><p className="text-sm text-white/65">{d}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/quote-estimator" className="btn-primary">Calculate my price <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
          <Guarantee />
        </div>
      </section>

      <Comparison />
      <Process />
      <Reviews />
      <CtaBand title="Not sure which service you need? Just tell us what's there." body="Send a photo on WhatsApp and we'll come back with a fixed price." />
      <FaqList faqs={GENERAL_FAQS} />
      <QuoteSection />
    </>
  );
}
