import Image from "next/image";
import { Mascot } from "@/components/Mascot";
import { Barbell, Leaf, Recycle, ShieldCheck, Sparkle, Timer, Truck, CurrencyCircleDollar } from "@phosphor-icons/react/ssr";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, OfferStack, ProofList, QuoteSection, Reviews, SectionHeading } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "About Us | National Rubbish Removal Sydney";
const DESCRIPTION =
  "Meet National Rubbish Removal: Sydney's licensed, insured rubbish removalists. Same day service, upfront pricing and up to 95% of waste recycled.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/about" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

const MISSION = [
  { icon: Timer, title: "Rapid response", body: "No waiting around. Fast turnaround times and reliable arrival windows." },
  { icon: Recycle, title: "Sustainable disposal", body: "Every collection is sorted, keeping up to 95% of waste out of landfill." },
  { icon: CurrencyCircleDollar, title: "Straightforward pricing", body: "Honest service with a clear upfront quote before a single item is loaded." },
  { icon: ShieldCheck, title: "Safe execution", body: "Careful, licensed and safe practices that protect your property." },
];

const ECO = [
  { icon: Recycle, title: "95% recycling rate", body: "We sort and recycle the majority of collected waste, diverting it from landfill." },
  { icon: Leaf, title: "Eco-friendly disposal", body: "Partnerships with certified recycling facilities and donation centres." },
  { icon: Truck, title: "Efficient fleet", body: "Modern, fuel-efficient vehicles and route optimisation to minimise emissions." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/about", name: TITLE, description: DESCRIPTION, type: "AboutPage" }), breadcrumbSchema(crumbs))} />
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x grid items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <Breadcrumbs items={crumbs} dark={false} />
            <h1 className="h-display mt-5 text-4xl leading-[1.05] sm:text-5xl">
              Meet National Rubbish Removal | Your Local Rubbish Removalists in Sydney
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-ink-600">
              We started with one simple belief: getting rid of rubbish shouldn&apos;t cost you a weekend, your back or a surprise bill.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              We&apos;ve spent years serving the Sydney community, and now bring that same care to rubbish removal. We&apos;re fully licensed and insured, expanding across
              Sydney metro, and obsessed with three things: turning up when we say, charging what we quote, and leaving your place cleaner than we found it.
            </p>
            <div className="mt-8"><ProofList dark={false} /></div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/about/sydney-rubbish-removalist-nrr-truck.webp" alt="Friendly Sydney rubbish removalist in NRR uniform standing in front of a National Rubbish Removal truck" fill preload sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[55%_center]" />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <dl className="container-x grid grid-cols-2 gap-6 py-10 text-center lg:grid-cols-4">
          {[["100%", "Client-focused approach"], ["50+", "Suburbs covered"], ["7 days", "Customer support"], ["Same day", "Service available"]].map(([a, b]) => (
            <div key={a}><dt className="font-display text-[44px] leading-none text-ink-800">{a}</dt><dd className="mt-1 text-sm text-muted">{b}</dd></div>
          ))}
        </dl>
      </section>

      <section className="bg-white pt-20 lg:pt-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our team" title="The crew behind the truck" intro="Sydney locals in NRR uniform: the same friendly faces you'll see on your driveway." />
          <figure className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[3/2] lg:aspect-[21/10]">
            <Image src="/images/about/national-rubbish-removal-team.webp" alt="The National Rubbish Removal team of Sydney rubbish removalists in uniform in front of an NRR truck" fill sizes="(min-width: 1240px) 1180px, 100vw" className="object-cover object-[center_40%]" />
          </figure>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our mission" title="Our Hard Rubbish Collection Mission" intro="What drives every rubbish removal job we do across Sydney." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MISSION.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <Icon className="h-8 w-8 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg text-ink-800">{title}</h3>
                <p className="mt-2 text-[15px] text-ink-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="How we work" title="Why Choose Our Rubbish Removalists" align="left" />
            <ul className="mt-8 space-y-5">
              {[
                { icon: ShieldCheck, t: "Fully licensed & insured", d: "Full EPA compliance and comprehensive public liability insurance for total protection on your property." },
                { icon: Barbell, t: "Zero heavy lifting", d: "Leave everything where it stands. Our team handles all the carrying, loading and haulage." },
                { icon: Timer, t: "Same day availability", d: "Flexible booking including same day service, early mornings and weekend slots." },
                { icon: Sparkle, t: "Swept clean finish", d: "We don't just haul your junk away. We sweep your driveway, garage or room clean before leaving." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-card"><Icon className="h-5 w-5" aria-hidden /></span>
                  <span><span className="block font-bold text-ink-800">{t}</span><span className="text-[15px] text-ink-600">{d}</span></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/about/licensed-insured-rubbish-removal-tablet.webp" alt="NRR crew member holding a tablet showing licensed and insured rubbish removal service badges" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
        <Image src="/images/about/rubbish-recycling-facility-sydney.webp" alt="NRR truck at a Sydney recycling facility with sorted scrap metal, timber and green waste bays" fill sizes="100vw" className="object-cover object-[65%_center] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/80" aria-hidden />
        <div className="container-x relative">
          <SectionHeading eyebrow="Sustainability" title="Eco-Friendly Hard Waste Collection" intro="Your junk shouldn't become Sydney's landfill problem." dark />
          <div className="mt-12 grid gap-5 md:grid-cols-3 xl:grid-cols-[1fr_1fr_1fr_230px]">
            {ECO.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur">
                <Icon className="h-8 w-8 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-2 text-[15px] text-white/75">{body}</p>
              </div>
            ))}
            {/* Black card matches the illustration's own background, so the glow reads as a spotlight. */}
            <div aria-hidden className="relative hidden overflow-hidden rounded-2xl border border-white/10 bg-black xl:block">
              <Mascot pose="recycling" decorative sizes="230px" className="absolute left-1/2 top-0 h-auto w-[250px] -translate-x-1/2" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <OfferStack />
      <Reviews />
      <CtaBand title="Let us show you what 'easy' rubbish removal looks like." body="One call. Fixed price. Gone today." />
      <QuoteSection />
    </>
  );
}
