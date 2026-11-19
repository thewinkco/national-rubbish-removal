import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Mascot, MascotBadge, PointDownCue } from "./Mascot";
import { ArrowRight, ArrowUpRight, CurrencyCircleDollar, Prohibit, Check, CaretRight, Clock, Barbell, Broom, Leaf, MapPin, Phone, Plus, Recycle, ShieldCheck, X } from "@phosphor-icons/react/ssr";
import { CATEGORIES, servicesIn, type Category } from "@/content/services";
import { SUBURBS, type Suburb } from "@/content/suburbs";
import { GOOGLE_RATING, PRICING, REVIEWS, SITE, formatPrice } from "@/content/site";
import type { Faq } from "@/content/faqs";
import { Inline } from "./Rich";
import { CallLink, WhatsAppLink } from "./ContactLinks";
import { GoogleIcon, Stars, WhatsAppIcon } from "./icons";
import { QuoteEstimator } from "./QuoteEstimator";
import { QuoteForm } from "./QuoteForm";
import { ReviewWall } from "./ReviewWall";
import { Reveal } from "./motion/Reveal";
import { HeroIn } from "./motion/HeroIn";
import type { CategoryId } from "@/content/site";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "split",
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** split = title left, intro right on desktop (default); left = stacked; center = centred. */
  align?: "split" | "left" | "center";
  dark?: boolean;
}) {
  const heading = (
    <>
      {eyebrow && <p className={`eyebrow ${dark ? "!text-brand" : ""}`}>{eyebrow}</p>}
      <h2 className={`h-display mt-4 text-[34px] leading-[1.06] sm:text-[42px] lg:text-[50px] ${dark ? "text-white" : "text-ink-800"}`}>{title}</h2>
    </>
  );
  const introEl = intro && (
    <p className={`max-w-[54ch] text-[17px] leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{intro}</p>
  );
  if (align === "split" && intro) {
    return (
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
        <div className="max-w-2xl">{heading}</div>
        <div className="lg:pb-2">{introEl}</div>
      </div>
    );
  }
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      {heading}
      {introEl && <div className={`mt-5 ${align === "center" ? "mx-auto" : ""}`}>{introEl}</div>}
    </div>
  );
}

/** `dark` = for use on charcoal backgrounds (default, legacy); `dark={false}` for paper backgrounds. */
export function Breadcrumbs({ items, dark = true }: { items: { name: string; path: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[13px] ${dark ? "text-white/60" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1">
            {i > 0 && <CaretRight className="h-3 w-3 opacity-60" aria-hidden />}
            {i === items.length - 1 ? (
              <span aria-current="page" className={dark ? "text-white/90" : "text-ink-800"}>{it.name}</span>
            ) : (
              <Link href={it.path} className={dark ? "hover:text-white" : "hover:text-ink-800"}>{it.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const PROOF = [
  { icon: Clock, label: "Same day pickup" },
  { icon: Barbell, label: "We do all the lifting" },
  { icon: CurrencyCircleDollar, label: "Fixed price upfront" },
  { icon: Recycle, label: "Up to 95% recycled" },
  { icon: ShieldCheck, label: "Fully insured" },
];

export function ProofList({ dark = true }: { dark?: boolean }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2.5 text-[14px] ${dark ? "text-white/80" : "text-ink-600"}`}>
      {PROOF.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2">
          <Icon className={`h-[18px] w-[18px] ${dark ? "text-brand" : "text-brand-ink"}`} aria-hidden /> {label}
        </li>
      ))}
    </ul>
  );
}

/** Live Google rating. Links to the real Google review listing. */
export function GoogleBadge({ dark = true }: { dark?: boolean }) {
  return (
    <a
      href={SITE.googleReviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-xl border py-2 pl-2 pr-4 transition ${
        dark ? "border-white/15 bg-white/[0.04] text-white hover:border-white/30" : "border-line bg-white text-ink-800 hover:border-ink-600/40"
      }`}
    >
      <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${dark ? "bg-white" : "bg-mist"}`}>
        <GoogleIcon className="h-[18px] w-[18px]" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="flex items-center gap-1.5">
          <span className="text-[15px] font-semibold tabular-nums">{GOOGLE_RATING.score}</span>
          <Stars className="h-3.5 w-3.5" />
        </span>
        <span className={`text-[12.5px] ${dark ? "text-white/65" : "text-muted"}`}>
          {GOOGLE_RATING.count} Google reviews
        </span>
      </span>
    </a>
  );
}

/** Inner-page hero: H1 + hook + CTAs, estimator on the right. */
export function PageHero({
  h1,
  hook,
  sub,
  breadcrumbs,
  image,
  imageAlt,
  defaultService,
  formOnPage = true,
}: {
  h1: string;
  hook: string;
  sub?: string | null;
  breadcrumbs: { name: string; path: string }[];
  image: string;
  imageAlt: string;
  defaultService?: CategoryId;
  formOnPage?: boolean;
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-line bg-paper">
      <div className="container-x relative grid items-start gap-12 py-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <Breadcrumbs items={breadcrumbs} dark={false} />
          <h1 className="h-display mt-6 text-[40px] leading-[1.02] text-ink-800 sm:text-[52px] lg:text-[60px]">{h1}</h1>
          <p className="mt-6 max-w-xl text-[19px] leading-relaxed text-ink-700">{hook}</p>
          {sub && <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-muted">{sub}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallLink location="hero" className="btn-primary w-full text-base sm:w-auto">
              <Phone className="h-5 w-5" aria-hidden /> Call {SITE.phone}
            </CallLink>
            <WhatsAppLink location="hero" className="btn-outline text-base">
              <WhatsAppIcon className="h-5 w-5 text-[#1f9d55]" /> Send photos for a price
            </WhatsAppLink>
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8">
            <ProofList dark={false} />
            <div className="flex flex-wrap items-center gap-5">
              <GoogleBadge dark={false} />
              <div className="relative hidden h-[60px] w-[96px] overflow-hidden rounded-xl sm:block">
                <Image src={image} alt={imageAlt} fill sizes="96px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <HeroIn from="right" delay={0.1} className="mx-auto w-full max-w-md lg:ml-auto">
          <QuoteEstimator defaultService={defaultService} formOnPage={formOnPage} />
        </HeroIn>
      </div>
    </section>
  );
}

export function PainPoints({
  title,
  intro,
  pains,
  image,
  imageAlt,
  caption = <>Before &nbsp;→&nbsp; after one NRR visit</>,
  captionNote = "Real Sydney job",
}: {
  title: string;
  intro: string;
  pains: string[];
  image: string;
  imageAlt: string;
  caption?: ReactNode;
  captionNote?: ReactNode;
}) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <p className="eyebrow">Sound familiar?</p>
          <h2 className="h-display mt-4 text-[32px] leading-[1.08] text-ink-800 sm:text-[42px]">{title}</h2>
          <ol className="mt-10 border-t border-line">
            {pains.map((p, i) => (
              <Reveal as="li" key={p} index={i} y={12} className="flex gap-5 border-b border-line py-5">
                <span className="w-6 shrink-0 pt-0.5 font-display text-lg italic text-brand-ink tabular-nums">{i + 1}.</span>
                <span className="text-[16px] leading-relaxed text-ink-700">{p}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-8 max-w-[56ch] text-[17px] leading-relaxed text-ink-600">{intro}</p>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
            <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between text-[13px] text-muted">
            <span>{caption}</span>
            {captionNote && <span className="font-display italic">{captionNote}</span>}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

const STACK = [
  { icon: Clock, title: "Same day pickup", body: "Call before 1pm and we're usually there today. No waiting weeks for a council date." },
  { icon: CurrencyCircleDollar, title: "Price agreed before we lift", body: "You approve the price first. What we quote is what you pay, with labour, loading and tip fees included." },
  { icon: Barbell, title: "We do all the lifting", body: "Upstairs, downstairs, backyard or basement. A two-person crew carries everything out." },
  { icon: Prohibit, title: "No skip, no permit", body: "No bin blocking your driveway for a week, no council permit, no neighbours topping it up." },
  { icon: Broom, title: "Swept clean when we leave", body: "We don't just haul it away. The garage, room or driveway gets a sweep before we go." },
  { icon: Leaf, title: "Up to 95% recycled", body: "Loads are sorted at licensed facilities. Metal, timber, green waste and appliances get a second life." },
];

export function OfferStack({ title = "What you can expect from us" }: { title?: string }) {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="The NRR standard"
          title={title}
          intro="Plenty of operators have a ute and a vague price. Here's what we commit to on every job, big or small."
        />
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} index={i % 3} className="border-t border-ink-800/15 pt-6">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-brand-ink" aria-hidden />
                <span className="text-[12px] tabular-nums text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-[26px] leading-tight text-ink-800">{title}</h3>
              <p className="mt-3 max-w-[40ch] text-[15.5px] leading-relaxed text-ink-600">{body}</p>
            </Reveal>
          ))}
        </div>
        <Guarantee />
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <div className="mt-16 grid items-center gap-6 rounded-2xl border border-line bg-white p-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:p-9">
      <MascotBadge pose="arms-crossed" size={92} className="mt-4 sm:mt-2" />
      <div>
        <p className="font-display text-[26px] leading-tight text-ink-800">Our price-beat promise</p>
        <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-600">
          Have a cheaper written quote for the same job from a licensed operator in your area? Send it through and we&apos;ll{" "}
          <strong className="font-semibold text-ink-800">beat it by 10%</strong>. No haggling.
        </p>
      </div>
      <CallLink location="guarantee" className="btn-dark shrink-0">
        Talk to us <ArrowRight className="h-4 w-4" aria-hidden />
      </CallLink>
    </div>
  );
}

const COMPARE_ROWS: { label: string; nrr: string | true; skip: string | boolean; council: string | boolean; diy: string | boolean }[] = [
  { label: "Gone the same day", nrr: true, skip: "Days on site", council: "Weeks away", diy: "If you have a ute" },
  { label: "Someone else does the lifting", nrr: true, skip: false, council: false, diy: false },
  { label: "No council permit", nrr: true, skip: "Needed on the street", council: true, diy: true },
  { label: "Takes heavy & bulky items", nrr: true, skip: "Overweight fees", council: "2 m³ cap, no 2-person lifts", diy: "Your back" },
  { label: "Takes bricks, tiles & reno waste", nrr: true, skip: true, council: false, diy: "Tip fees" },
  { label: "Swept clean when done", nrr: true, skip: false, council: false, diy: false },
  { label: "Price known upfront", nrr: true, skip: "Plus extras", council: "Free, limited", diy: "Fuel + tip + time" },
];

function Cell({ v, highlight = false }: { v: string | boolean; highlight?: boolean }) {
  if (v === true)
    return (
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${highlight ? "bg-ink-800 text-white" : "bg-[#e5efe8] text-good"}`}>
        <Check className="h-3.5 w-3.5" weight="bold" aria-label="Yes" />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-mist text-muted">
        <X className="h-3.5 w-3.5" aria-label="No" />
      </span>
    );
  return <span className="text-[13px] text-muted">{v}</span>;
}

export function Comparison({ councilName = "Council clean-up" }: { councilName?: string }) {
  return (
    <section className="border-t border-line bg-paper py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Compare your options"
          title="Skip bin, council pickup, do it yourself, or done for you?"
          intro="Each option costs something: money, time, a weekend or your back. Here's an honest side-by-side."
        />
        <p className="mt-10 text-center text-[13px] text-muted md:hidden" aria-hidden>
          Swipe to compare →
        </p>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-white md:mt-14" tabIndex={0} role="region" aria-label="Comparison of rubbish removal options">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="text-[13px] text-muted">
                <th scope="col" className="sticky left-0 z-10 bg-white p-5 font-medium"><span className="sr-only">Feature</span></th>
                <th scope="col" className="bg-ink-800 p-5 text-center font-display text-[17px] font-normal text-white">National Rubbish Removal</th>
                <th scope="col" className="p-5 text-center font-medium">Skip bin</th>
                <th scope="col" className="p-5 text-center font-medium">{councilName}</th>
                <th scope="col" className="p-5 text-center font-medium">Do it yourself</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.label} className="border-t border-line">
                  <th scope="row" className="sticky left-0 z-10 max-w-[9.5rem] bg-white p-5 text-[14px] font-medium text-ink-800 shadow-[6px_0_8px_-6px_rgba(38,36,33,0.12)] sm:max-w-none sm:text-[15px] md:shadow-none">{r.label}</th>
                  <td className="bg-brand-50/70 p-5 text-center"><Cell v={r.nrr} highlight /></td>
                  <td className="p-5 text-center"><Cell v={r.skip} /></td>
                  <td className="p-5 text-center"><Cell v={r.council} /></td>
                  <td className="p-5 text-center"><Cell v={r.diy} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[14.5px] leading-relaxed text-muted">
          Rubbish left on the kerb without a council booking counts as illegal dumping, and fines can run into the thousands.{" "}
          <Link href="/skip-bin-alternatives" className="font-medium text-ink-800 underline decoration-ink-800/30 underline-offset-4 hover:decoration-ink-800">Why Sydney is moving away from skip bins</Link>
        </p>
      </div>
    </section>
  );
}

const STEPS = [
  { title: "Show us what's going", body: "Call, WhatsApp a few photos or use the online estimator. It takes about two minutes.", image: "/images/home/photo-quote-rubbish-removal-sydney.webp", alt: "Sydney homeowner taking a phone photo of household rubbish on the driveway for a rubbish removal quote" },
  { title: "Agree on a fixed price", body: "You get a firm price before anything moves. Pick a time, same day if you book early.", image: "/images/home/whatsapp-fixed-price-rubbish-removal-quote.webp", alt: "WhatsApp chat showing a fixed-price rubbish removal quote and same day pickup booking in Sydney" },
  { title: "We lift, load & sweep", body: "Our crew carries everything out, loads the truck and sweeps up. You put the kettle on.", image: "/images/home/rubbish-removal-crew-loading-truck-sydney.webp", alt: "NRR rubbish removal crew loading a fridge and old furniture into the truck" },
  { title: "Sorted and recycled", body: "Up to 95% is recycled or donated. You get your space (and your weekend) back.", image: "/images/home/rubbish-recycling-sorting-facility-sydney.webp", alt: "NRR team sorting cardboard, timber and metal into recycling bins at a Sydney facility" },
];

export function Process({ title = "Four steps from cluttered to clear", dark = false }: { title?: string; dark?: boolean }) {
  return (
    <section className={`relative overflow-hidden py-20 lg:py-28 ${dark ? "bg-ink-800 text-white" : "bg-paper"}`}>
      {dark && (
        <>
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
        </>
      )}
      <div className="container-x relative">
        <SectionHeading eyebrow="How it works" title={title} intro="You handle the first step. We take care of everything after that." dark={dark} />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} index={i}>
              <div className={`group relative aspect-[4/3] overflow-hidden rounded-2xl ${dark ? "bg-white/5" : "bg-mist"}`}>
                <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition duration-700 ease-out-expo group-hover:scale-[1.04]" />
              </div>
              <div className={`mt-6 border-t pt-6 ${dark ? "border-white/15" : "border-ink-800/15"}`}>
              <span className={`font-display text-[56px] leading-none ${dark ? "text-brand" : "text-brand-ink/90"}`}>{i + 1}</span>
              <h3 className={`mt-6 font-display text-[24px] leading-tight ${dark ? "text-white" : "text-ink-800"}`}>{s.title}</h3>
              <p className={`mt-3 max-w-[34ch] text-[15.5px] leading-relaxed ${dark ? "text-white/70" : "text-ink-600"}`}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
        {dark && (
          <div aria-hidden className="pointer-events-none absolute -bottom-28 right-0 hidden xl:block">
            <Mascot pose="carrying-box" decorative sizes="170px" className="h-[250px] w-auto" />
          </div>
        )}
        <div className={`mt-14 flex flex-col gap-3 sm:flex-row sm:items-center ${dark ? "xl:mt-24" : ""}`}>
          <CallLink location="process" className="btn-primary">
            <Phone className="h-5 w-5" aria-hidden /> Start with a quick call
          </CallLink>
          <Link href="#quote-form" className={dark ? "btn-ghost" : "btn-outline"}>Get a price online</Link>
        </div>
      </div>
    </section>
  );
}

/** Real Google reviews: rating summary, one featured quote, then a masonry wall. */
export function Reviews({ title = "What Sydney locals say about us" }: { title?: string }) {
  const featured = REVIEWS[0];
  const rest = REVIEWS.slice(1);
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
          <SectionHeading eyebrow="Google reviews" title={title} align="left" />
          <div className="flex items-center gap-6 rounded-2xl border border-line bg-paper p-6">
            <div>
              <p className="font-display text-[64px] leading-none text-ink-800 tabular-nums">{GOOGLE_RATING.score}</p>
            </div>
            <div className="min-w-0">
              <Stars className="h-5 w-5" />
              <p className="mt-1.5 flex items-center gap-1.5 text-[14px] text-ink-600">
                <GoogleIcon className="h-4 w-4" /> {GOOGLE_RATING.count} reviews on Google
              </p>
              <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-[14px] font-medium text-ink-800 underline decoration-ink-800/30 underline-offset-4 hover:decoration-ink-800">
                Read them on Google <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <Reveal as="figure" className="mt-14 grid overflow-hidden rounded-2xl bg-ink-800 text-white lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col justify-between p-8 sm:p-12">
            <div>
              <Stars className="h-5 w-5" />
              <blockquote className="mt-8 font-display text-[28px] leading-[1.2] tracking-[-0.01em] sm:text-[36px]">
                &ldquo;{featured.pull ?? featured.text}&rdquo;
              </blockquote>
            </div>
            <figcaption className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px]">
              <span className="font-semibold">{featured.name}</span>
              <span className="text-white/55">{featured.tag}</span>
              <span className="inline-flex items-center gap-1.5 text-white/55"><GoogleIcon className="h-3.5 w-3.5" /> Google review</span>
            </figcaption>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[440px]">
            <Image src="/images/home/furniture-removal-crew-carrying-couch-sydney.webp" alt="Two NRR rubbish removalists carrying an old couch from a Sydney home to the truck, Harbour Bridge behind" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[center_35%]" />
          </div>
        </Reveal>

        <div className="mt-4">
          <ReviewWall reviews={rest} />
        </div>
      </div>
    </section>
  );
}

export function FaqList({ faqs, title = "Questions, answered plainly", eyebrow = "FAQ" }: { faqs: Faq[]; title?: string; eyebrow?: string }) {
  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute right-0 top-24 hidden 2xl:block">
        <Mascot pose="peeking" decorative sizes="170px" className="h-auto w-[170px]" />
      </div>
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
          <p className="mt-5 text-[17px] text-ink-600">Can&apos;t see your question? Give us a call. A real person answers.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <CallLink location="faq" className="btn-dark"><Phone className="h-4 w-4" aria-hidden /> {SITE.phone}</CallLink>
            <WhatsAppLink location="faq" className="btn-outline"><WhatsAppIcon className="h-4 w-4 text-[#1f9d55]" /> WhatsApp us</WhatsAppLink>
          </div>
        </div>
        <div className="border-t border-ink-800/15">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-ink-800/15" open={i === 0}>
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-6 text-left">
                <h3 className="font-display text-[21px] leading-snug text-ink-800">{f.q}</h3>
                <Plus className="faq-icon mt-1.5 h-5 w-5 shrink-0 text-ink-600 transition-transform duration-300" aria-hidden />
              </summary>
              <div className="prose-nrr max-w-[62ch] pb-6 !text-[16px]">
                <p className="!mb-0"><Inline text={f.a} /></p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryCards({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  // Three equal cards: image, who it's for, pitch, then the full service list pinned to the bottom so lists line up.
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((cat, i) => {
        const price = PRICING.find((p) => p.id === cat.id);
        return (
          <Reveal
            as="article"
            key={cat.id}
            index={i}
            className={`card group flex flex-col overflow-hidden transition duration-500 ease-out-expo hover:shadow-lift ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className={`relative aspect-[3/2] overflow-hidden bg-mist ${i === 2 ? "md:aspect-[21/9] lg:aspect-[3/2]" : ""}`}>
              <Image
                src={cat.beforeAfter}
                alt={`${cat.name} before and after`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-bottom transition duration-700 ease-out-expo group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-800/70 via-ink-800/0 to-transparent" aria-hidden />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[12px] font-medium tabular-nums text-ink-800 shadow-card">
                0{i + 1} · {cat.short}
              </span>
              {price && (
                <span className="absolute bottom-4 left-4 flex items-baseline gap-1.5 text-white">
                  <span className="text-[12.5px] text-white/80">From</span>
                  <span className="font-display text-[26px] leading-none tabular-nums">{formatPrice(price.minCharge)}</span>
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <p className="text-[13px] text-muted">{cat.audience}</p>
              <H className="mt-1.5 font-display text-[26px] leading-tight text-ink-800">
                <Link href={`/services#${cat.id}`} className="hover:text-brand-ink">{cat.name}</Link>
              </H>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{cat.pitch}</p>
              <div className="mt-auto pt-6">
                <ul className="border-t border-line">
                  {servicesIn(cat.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="group/l flex items-center justify-between gap-3 border-b border-line/70 py-2.5 text-[14.5px] text-ink-700 transition hover:pl-1 hover:text-ink-800">
                        {s.name}
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted transition group-hover/l:translate-x-0.5 group-hover/l:text-brand-ink" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${cat.id}`} className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-ink-800 underline decoration-ink-800/25 underline-offset-4 hover:decoration-ink-800">
                  All {cat.short.toLowerCase()} services <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

export function RelatedServices({ category, exclude }: { category: Category; exclude?: string }) {
  const list = servicesIn(category.id).filter((s) => s.slug !== exclude);
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x">
        <h2 className="h-display max-w-3xl text-[30px] leading-tight text-ink-800 sm:text-[36px]">More than one thing to clear? We take it all in one trip.</h2>
        <div className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {list.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="group flex items-start justify-between gap-4 border-b border-line py-5">
              <span>
                <span className="block font-display text-[20px] text-ink-800 group-hover:text-brand-ink">{s.name}</span>
                <span className="mt-1 block text-[14px] leading-relaxed text-muted">{s.summary}</span>
              </span>
              <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-brand-ink" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasGrid({ current, title = "Same day rubbish removal across Sydney" }: { current?: Suburb; title?: string }) {
  const list = current ? SUBURBS.filter((s) => s.slug !== current.slug) : SUBURBS;
  const nearby = current ? current.nearby.map((slug) => SUBURBS.find((s) => s.slug === slug)!).filter(Boolean) : [];
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <p className="eyebrow">Service areas</p>
        <h2 className="h-display mt-4 text-[30px] leading-tight text-ink-800 sm:text-[38px]">{current ? `Also near ${current.name}` : title}</h2>
        {current && (
          <p className="mt-3 max-w-3xl text-ink-600">
            We also cover {current.alsoCovers.join(", ")} and the rest of {current.council}.
          </p>
        )}
        {nearby.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {nearby.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="inline-flex items-center gap-1.5 rounded-lg bg-ink-800 px-4 py-2 text-sm font-medium text-white hover:bg-ink">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden /> Rubbish removal {s.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-6 flex flex-wrap gap-2">
          {list
            .filter((s) => !current?.nearby.includes(s.slug))
            .map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="inline-flex items-center rounded-lg border border-line bg-paper px-3.5 py-2 text-sm text-ink-700 transition hover:border-ink-600/40 hover:text-ink-800">
                  {s.name}
                </Link>
              </li>
            ))}
          <li>
            <Link href="/location" className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-ink-800 underline decoration-ink-800/30 underline-offset-4 hover:decoration-ink-800">
              All areas <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

/** Estimator + 2-step form, anchored at #quote-form. */
export function QuoteSection({
  title = "Get a fixed price in under a minute",
  intro = "Tell us what's going and roughly how much. We'll confirm a price before we lift a thing.",
  defaultService,
  context,
}: {
  title?: string;
  intro?: string;
  defaultService?: CategoryId;
  context?: string;
}) {
  return (
    <section id="quote-form" className="scroll-mt-28 bg-mist py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading eyebrow="Free quote" title={title} intro={intro} align="left" />
          <ul className="mt-10 border-t border-ink-800/15">
            {[
              "Fixed price before we start, no surprise fees",
              "Same day pickup when you book before 1pm",
              "Two-person crew does all of the lifting",
              "We'll beat any written like-for-like quote by 10%",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 border-b border-ink-800/15 py-4 text-[15.5px] text-ink-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-good" weight="bold" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-white p-6 pr-[112px] sm:overflow-visible sm:pr-[200px]">
            <p className="font-display text-[22px] text-ink-800">Rather talk to someone?</p>
            <p className="mt-1 text-sm text-muted">Open 7 days · 6am – 9pm weekdays</p>
            {/* Phones: crew member peeking in from the card's bottom-right corner. */}
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 sm:hidden">
              <Mascot pose="peeking" decorative sizes="108px" className="h-auto w-[108px]" />
            </div>
            {/* Tablet and up: crew member waving from behind the card edge. */}
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-5 hidden h-[calc(100%+44px)] w-[172px] overflow-hidden sm:block">
              <Mascot pose="waving" decorative sizes="172px" className="h-auto w-full" />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <CallLink location="quote_section" className="btn-primary flex-1"><Phone className="h-4 w-4" aria-hidden /> {SITE.phone}</CallLink>
              <WhatsAppLink location="quote_section" className="btn-outline flex-1"><WhatsAppIcon className="h-4 w-4 text-[#1f9d55]" /> WhatsApp photos</WhatsAppLink>
            </div>
          </div>
        </div>
        <div>
          <PointDownCue text="Two quick steps and your fixed price is on its way." />
          <QuoteForm defaultService={defaultService} context={context} />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, body }: { title: string; body?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink-800 text-white">
      <Image src="/images/same-day-rubbish-removal-sydney-truck.webp" alt="" fill sizes="100vw" className="object-cover object-[75%_center] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-800 via-ink-800/90 to-ink-800/40" aria-hidden />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 ml-2 hidden xl:block">
        {/* Solid backing so the photo doesn't show through the blended figure. */}
        <span className="absolute inset-x-[-30%] bottom-0 top-[-10%] bg-[radial-gradient(closest-side,var(--color-ink-800)_65%,transparent)]" />
        <Mascot pose="on-the-phone" decorative sizes="240px" className="h-[340px] w-auto" />
      </div>
      <div className="container-x relative flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
        <div className="max-w-2xl">
          <h2 className="h-display text-[34px] leading-[1.08] sm:text-[46px]">{title}</h2>
          {body && <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/75">{body}</p>}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <CallLink location="cta_band" className="btn-primary text-base">
            <Phone className="h-5 w-5" aria-hidden /> {SITE.phone}
          </CallLink>
          <Link href="#quote-form" className="btn-ghost text-base">
            Get a free quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Wrapper for migrated long-form content. */
export function LegacyContent({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">{children}</div>
        {aside && <aside className="hidden lg:block"><div className="sticky top-36 space-y-5">{aside}</div></aside>}
      </div>
    </section>
  );
}

export function StickyAside({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <div className="rounded-2xl border border-line bg-paper p-6">
        <p className="font-display text-[20px] text-ink-800">{title}</p>
        <ul className="mt-4 space-y-2.5">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-[14px] text-ink-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-good" weight="bold" aria-hidden /> {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl bg-ink-800 p-6 text-white">
        <p className="font-display text-[22px]">Want it gone today?</p>
        <p className="mt-1 text-sm text-white/70">Book before 1pm for same day pickup.</p>
        <CallLink location="aside" className="btn-primary mt-5 w-full"><Phone className="h-4 w-4" aria-hidden /> {SITE.phone}</CallLink>
        <Link href="#quote-form" className="btn-ghost mt-2 w-full">Get a price online</Link>
      </div>
    </>
  );
}

/** Quiet band of suburbs. Decorative only: real suburb links live in AreasGrid and the footer. */
export function AreaMarquee() {
  const names = SUBURBS.map((s) => s.name);
  const run = (copy: number) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={copy > 0}>
      {names.map((n) => (
        <li key={`${copy}-${n}`} className="flex items-center gap-8 whitespace-nowrap font-display text-[19px] italic text-ink-600">
          {n}
          <span className="h-1 w-1 rounded-full bg-brand" aria-hidden />
        </li>
      ))}
    </ul>
  );
  return (
    <div aria-hidden className="overflow-hidden border-y border-line bg-paper py-5">
      <div className="marquee-track flex w-max animate-marquee">
        {run(0)}
        {run(1)}
      </div>
    </div>
  );
}
