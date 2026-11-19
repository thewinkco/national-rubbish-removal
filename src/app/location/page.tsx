import Image from "next/image";
import Link from "next/link";
import { MapPin, Timer, CalendarCheck, Check } from "@phosphor-icons/react/ssr";
import { EXTRA_AREAS, REGION_ORDER, SUBURBS } from "@/content/suburbs";
import { JsonLd } from "@/components/JsonLd";
import { CallLink } from "@/components/ContactLinks";
import { Breadcrumbs, CtaBand, ProofList, QuoteSection, Reviews, SectionHeading } from "@/components/sections";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/meta";
import { abs, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Sydney Rubbish Removal Service Areas | 42 Suburbs | NRR";
const DESCRIPTION =
  "Rubbish removal service areas across Sydney metro. Same day service available in most suburbs, 2–4 hour response. Call 0489 043 888 for a free quote.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/location" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/location" },
];

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/location", name: TITLE, description: DESCRIPTION, type: "CollectionPage" }),
          breadcrumbSchema(crumbs),
          { "@type": "ItemList", itemListElement: SUBURBS.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: `Rubbish Removal ${s.name}`, url: abs(`/${s.slug}`) })) },
        )}
      />
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <div>
          <Breadcrumbs items={crumbs} dark={false} />
          <h1 className="h-display mt-5 max-w-4xl text-4xl leading-[1.05] sm:text-5xl">Rubbish Removal Sydney Service Areas</h1>
          <p className="mt-5 max-w-2xl text-xl text-ink-600">
            Beaches, the North Shore, the Shire or the CBD. If you&apos;re in Sydney metro, we&apos;re probably already working near you today.
          </p>
          <div className="mt-8"><ProofList dark={false} /></div>
          <dl className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: CalendarCheck, a: "Same day", b: "Available in most areas" },
              { icon: Timer, a: "2–4 hours", b: "Average response" },
              { icon: MapPin, a: "7 days", b: "Booking available" },
            ].map(({ icon: Icon, a, b }) => (
              <div key={a} className="flex items-center gap-3 rounded-xl border border-line bg-white p-4">
                <Icon className="h-6 w-6 text-brand-ink" aria-hidden />
                <div><dt className="font-display text-lg">{a}</dt><dd className="text-sm text-muted">{b}</dd></div>
              </div>
            ))}
          </dl>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-mist lg:aspect-[4/3]">
            <Image
              src="/images/location/rubbish-removal-sydney-service-areas-truck.webp"
              alt="National Rubbish Removal truck on a Sydney street with the Harbour Bridge, CBD skyline and harbour behind"
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Where we work" title="Hard Rubbish Collection Areas in Sydney" intro="Professional rubbish removal across Sydney's neighbourhoods. Tap your suburb for local info, council rules and prices." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGION_ORDER.map((region) => {
              const pages = SUBURBS.filter((s) => s.region === region);
              const extras = EXTRA_AREAS.find((e) => e.region === region)?.names ?? [];
              return (
                <div key={region} className="card p-6">
                  <h2 className="font-display text-xl text-ink-800">{region}</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {pages.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/${s.slug}`} className="inline-flex items-center gap-1 rounded-lg bg-ink-800 px-3 py-1.5 text-sm font-medium text-white hover:bg-ink">
                          <MapPin className="h-3.5 w-3.5" aria-hidden /> {s.name}
                        </Link>
                      </li>
                    ))}
                    {extras.map((n) => (
                      <li key={n} className="rounded-lg border border-line bg-white px-3 py-1.5 text-sm text-ink-600">{n}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-800 py-20 text-white lg:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl" aria-hidden />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Coverage"
            title="Homes, businesses and sites, wherever you are in Sydney."
            intro="One crew, one fixed price, whether it's a beachside unit, a CBD office or a building site out west."
            dark
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              { t: "Residential areas", d: "From beachside suburbs to inner-city apartments, we service all residential areas across Sydney metro." },
              { t: "Commercial districts", d: "CBD, business parks and commercial areas. We handle all types of commercial rubbish removal." },
              { t: "Extended coverage", d: "We also service select areas beyond metro Sydney. Area not listed? Call us, as service may still be available." },
            ].map((c, i) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="text-[12px] tabular-nums text-white/50">0{i + 1}</span>
                <h2 className="mt-4 font-display text-[24px] leading-tight">{c.t}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-brand/30 bg-brand/[0.08] p-7 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-9">
            <div>
              <h2 className="font-display text-[28px] leading-tight">Our service guarantee</h2>
              <ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                {["Same day rubbish removal in most areas", "2–4 hour response time", "No hidden travel fees", "Fully insured & licensed"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-white/85"><Check className="h-4 w-4 text-brand" aria-hidden /> {t}</li>
                ))}
              </ul>
            </div>
            <CallLink location="location_guarantee" className="btn-primary mt-7 shrink-0 lg:mt-0">Check my area: {SITE.phone}</CallLink>
          </div>
        </div>
      </section>

      <Reviews />
      <CtaBand title="Don't see your suburb? Ask anyway." body="We service select areas beyond metro Sydney. One call and you'll know." />
      <QuoteSection />
    </>
  );
}
