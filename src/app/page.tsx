import Image from "next/image";
import { Mascot } from "@/components/Mascot";
import Link from "next/link";
import { ArrowRight, CurrencyCircleDollar, MapTrifold, Phone, Recycle, ShieldCheck } from "@phosphor-icons/react/ssr";
import { GOOGLE_RATING, REVIEWS, SITE } from "@/content/site";
import { GENERAL_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { CallLink, WhatsAppLink } from "@/components/ContactLinks";
import { GoogleIcon, Stars, WhatsAppIcon } from "@/components/icons";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { HeroIn } from "@/components/motion/HeroIn";
import { Reveal } from "@/components/motion/Reveal";
import {
  AreasGrid,
  CategoryCards,
  Comparison,
  CtaBand,
  FaqList,
  OfferStack,
  Process,
  QuoteSection,
  Reviews,
  SectionHeading,
} from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Rubbish Removal Sydney | Same Day, We Lift | NRR";
const DESCRIPTION =
  "Same day rubbish removal across Sydney. We lift, load & sweep up. Fixed price before we start, no hidden fees, up to 95% recycled. Call 0489 043 888.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" });

const PERSONAS = [
  { image: "moving-out-rubbish-removal-sydney", alt: "NRR crew loading boxes and furniture into the truck for a move-out rubbish removal in Sydney", who: "Moving out", line: "Bond inspection on Friday and the old couch is still in the lounge.", href: "/household-rubbish-removal" },
  { image: "garage-junk-removal-decluttering-sydney", alt: "NRR crew carrying an old armchair out of a cluttered garage during a garage clean-out", who: "Decluttering", line: "The garage hasn't fit a car in years.", href: "/garage-clean-out" },
  { image: "deceased-estate-furniture-removal-sydney", alt: "NRR crew carefully removing furniture and belongings during a deceased estate clearance", who: "Clearing an estate", line: "A whole house to clear, handled with care and discretion.", href: "/deceased-estate-clearance" },
  { image: "strata-mattress-removal-car-park-sydney", alt: "NRR crew removing dumped mattresses and furniture from a Sydney apartment car park", who: "Managing a building", line: "Dumped mattresses in the car park, again.", href: "/strata-rubbish-removal" },
  { image: "shop-fit-out-removal-commercial-sydney", alt: "NRR crew removing shop shelving and fit-out for a commercial strip-out", who: "Running a business", line: "The lease ends Friday and the shop is still full.", href: "/retail-strip-out-removal" },
  { image: "renovation-rubble-removal-sydney", alt: "NRR crew wheeling renovation rubble and tiles to the truck from a home renovation", who: "Building or renovating", line: "Rubble everywhere and the next trade starts Monday.", href: "/construction-site-clean-up" },
];

const TRUST = [
  { icon: MapTrifold, title: "Sydney owned & operated", body: "Local crews across the metro area" },
  { icon: ShieldCheck, title: "Licensed & fully insured", body: "Your property is covered" },
  { icon: CurrencyCircleDollar, title: "Fixed price, agreed first", body: "Tip fees and labour included" },
  { icon: Recycle, title: "Up to 95% recycled", body: "Sorted at licensed facilities" },
];

export default function HomePage() {
  const hero = REVIEWS.find((r) => r.name === "Ali Hijazi") ?? REVIEWS[0];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/", name: TITLE, description: DESCRIPTION }), faqSchema(GENERAL_FAQS))} />

      {/* Hero */}
      <section className="grain relative overflow-hidden bg-paper">
        <div className="container-x grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:pb-24 lg:pt-16">
          <div>
            <p className="eyebrow">Sydney rubbish removal · Open 7 days</p>
            <h1 className="h-display mt-5 text-[36px] leading-[1.06] text-ink-800 sm:text-[46px] lg:text-[54px]">
              Rubbish removal Sydney, <em className="text-brand-ink">gone today</em>, without lifting a finger.
            </h1>
            <p className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-ink-600">
              Our two-person crew carries it out, loads the truck and sweeps up after. You&apos;ll have a fixed price before anything
              moves. No skip bin, no permit, no surprises on the invoice.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CallLink location="home_hero" className="btn-primary text-base">
                <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
              </CallLink>
              <Link href="#quote-form" className="btn-outline text-base">
                Get a free quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <WhatsAppLink location="home_hero" className="mt-5 inline-flex items-center gap-2 text-[15px] text-ink-600 underline decoration-ink-600/30 underline-offset-4 hover:text-ink-800 hover:decoration-ink-800">
              <WhatsAppIcon className="h-4 w-4 text-[#1f9d55]" /> Or WhatsApp us a few photos for a price
            </WhatsAppLink>

            <HeroIn delay={0.2} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-8">
              <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                <GoogleIcon className="h-7 w-7" />
                <span className="leading-tight">
                  <span className="flex items-center gap-2">
                    <span className="text-[17px] font-semibold tabular-nums text-ink-800">{GOOGLE_RATING.score}</span>
                    <Stars className="h-4 w-4" />
                  </span>
                  <span className="text-[13px] text-muted group-hover:text-ink-800">{GOOGLE_RATING.count} reviews on Google</span>
                </span>
              </a>
              <span className="hidden h-9 w-px bg-line sm:block" aria-hidden />
              <span className="flex items-center gap-3 text-[14px] leading-tight text-ink-600">
                <ShieldCheck className="h-7 w-7 text-ink-800" weight="light" aria-hidden />
                <span>Licensed &amp; fully insured<br /><span className="text-muted">Sydney owned &amp; operated</span></span>
              </span>
            </HeroIn>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist lg:aspect-[6/5]">
              <Image
                src="/images/home/same-day-rubbish-removal-sydney-truck.webp"
                alt="NRR crew loading a couch and rubbish into a National Rubbish Removal truck with the Harbour Bridge and Opera House behind"
                fill
                preload
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
            <HeroIn delay={0.35} className="relative -mt-16 ml-4 mr-4 sm:absolute sm:-bottom-8 sm:-left-8 sm:mt-0 sm:mr-0 sm:max-w-sm">
              <figure className="rounded-2xl border border-line bg-white p-6 shadow-lift">
                <div className="flex items-center justify-between">
                  <Stars className="h-4 w-4" />
                  <GoogleIcon className="h-4 w-4" />
                </div>
                <blockquote className="mt-4 font-display text-[21px] leading-snug text-ink-800">&ldquo;{hero.pull}&rdquo;</blockquote>
                <figcaption className="mt-4 text-[13px] text-muted">
                  <span className="font-medium text-ink-800">{hero.name}</span> · {hero.tag}
                </figcaption>
              </figure>
            </HeroIn>
          </div>
        </div>
      </section>

      {/* Trust row */}
      <section className="border-y border-line bg-white">
        <ul className="container-x grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {TRUST.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} index={i} className="flex items-center gap-4 py-6 lg:px-8 lg:first:pl-0">
              <Icon className="h-7 w-7 shrink-0 text-brand-ink" weight="light" aria-hidden />
              <span className="leading-tight">
                <span className="block text-[15px] font-medium text-ink-800">{title}</span>
                <span className="mt-1 block text-[13.5px] text-muted">{body}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Who we help */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who we help"
            title="Whatever brought you here, we've cleared it before."
            intro="Choose the one that sounds like you to see exactly how we handle it."
          />
          <ul className="mt-14 grid border-t border-line md:grid-cols-2 md:gap-x-16">
            {PERSONAS.map(({ image, alt, who, line, href }, i) => (
              <Reveal as="li" key={who} index={i % 2} className="border-b border-line">
                <Link href={href} className="group flex items-center gap-5 py-6">
                  <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-mist sm:h-24 sm:w-24">
                    <Image src={`/images/home/${image}.webp`} alt={alt} fill sizes="96px" className="object-cover transition duration-500 ease-out-expo group-hover:scale-[1.06]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[22px] leading-tight text-ink-800">{who}</span>
                    <span className="mt-1 block text-[15px] text-muted">{line}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted transition duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-ink-800" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our services"
            title="Homes, businesses and building sites. One crew, one call."
            intro="Hard rubbish collection for residential, commercial and construction properties right across Sydney."
          />
          <div className="mt-14">
            <CategoryCards />
          </div>
        </div>
      </section>

      {/* Before & after */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Before & after"
            title={<>From cluttered to <em>clear</em> in an afternoon.</>}
            intro="Pick a job to see the space before our crew arrived and after we drove away."
          />
          <div className="mt-12">
            <BeforeAfterGallery />
          </div>
        </div>
      </section>

      <OfferStack title="Why Sydney chooses National Rubbish Removal" />
      <Reviews />

      {/* Instant estimate */}
      <section className="bg-paper py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Instant estimate"
              title={<>Know the price <em>before</em> we pull up.</>}
              intro="Pick the type of job and roughly how much there is. You'll see an honest price range straight away. No sign-up, no phone call needed."
              align="left"
            />
            <dl className="mt-10 grid grid-cols-3 border-t border-line">
              {[
                ["Same day", "when you book before 1pm"],
                ["$0", "hidden fees or extras"],
                ["7 days", "6am – 9pm"],
              ].map(([big, small]) => (
                <div key={big} className="border-r border-line py-5 pr-4 last:border-r-0 [&:not(:first-child)]:pl-4">
                  <dt className="font-display text-[28px] leading-none text-ink-800 sm:text-[34px]">{big}</dt>
                  <dd className="mt-2 text-[13px] leading-snug text-muted">{small}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:mr-0">
            {/* Crew member with the checklist, standing just behind the estimator (wide screens only). */}
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-full -mr-7 hidden xl:block">
              <Mascot pose="checklist" decorative sizes="200px" className="h-[400px] w-auto" />
            </div>
            <div className="relative">
              <QuoteEstimator />
            </div>
          </div>
        </div>
      </section>

      <Process dark />
      <Comparison />
      <CtaBand title="Still looking at that pile? It could be gone this afternoon." body="Book before 1pm for same day pickup. Your price is agreed before we lift a thing." />
      <FaqList faqs={GENERAL_FAQS} />
      <AreasGrid />
      <QuoteSection />
    </>
  );
}
