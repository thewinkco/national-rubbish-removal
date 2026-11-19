import { Check } from "@phosphor-icons/react/ssr";
import { Mascot } from "@/components/Mascot";
import { LOAD_SIZES, PRICING, calculateQuote, formatPrice } from "@/content/site";
import { GENERAL_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { Breadcrumbs, Comparison, FaqList, Guarantee, Process, ProofList, QuoteSection, Reviews, SectionHeading } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Rubbish Removal Cost Calculator Sydney | Instant Price";
const DESCRIPTION =
  "Get an instant rubbish removal price for Sydney. Pick your service and load size to see a live estimate. No personal details needed.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/quote-estimator" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Price Estimator", path: "/quote-estimator" },
];

const PRICE_FAQS = [
  GENERAL_FAQS.find((f) => f.q.startsWith("How much"))!,
  {
    q: "Is the estimate the final price?",
    a: "The estimator gives you an honest range based on volume. We confirm a fixed price (from photos, a call or on arrival) before we lift anything. If the job matches what you described, that's what you pay.",
  },
  {
    q: "What affects the price?",
    a: "Three things: how much space your rubbish takes in the truck, access (stairs, distance from the truck) and the type of waste. Heavy materials like bricks and concrete are priced at the construction rate.",
  },
  GENERAL_FAQS.find((f) => f.q.startsWith("Is it cheaper"))!,
  GENERAL_FAQS.find((f) => f.q.startsWith("Do you have a price match"))!,
];

export default function QuoteEstimatorPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/quote-estimator", name: TITLE, description: DESCRIPTION }), breadcrumbSchema(crumbs), faqSchema(PRICE_FAQS))} />
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <div>
            <Breadcrumbs items={crumbs} dark={false} />
            <h1 className="h-display mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Calculate Your Rubbish Removal Cost</h1>
            <p className="mt-5 max-w-lg text-xl leading-relaxed text-ink-600">
              Most companies make you call, wait for a callback and still won&apos;t give you a number. We put ours on the page. Two clicks and that&apos;s your price.
            </p>
            <div className="mt-8"><ProofList dark={false} /></div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* Crew member with the checklist, standing just behind the estimator (wide screens only). */}
            <div aria-hidden className="pointer-events-none absolute bottom-0 right-full -mr-7 hidden xl:block">
              <Mascot pose="checklist" decorative sizes="200px" className="h-[370px] w-auto" />
            </div>
            <div className="relative">
              <QuoteEstimator />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Price guide"
            title="Sydney rubbish removal prices at a glance"
            intro="Every price below includes labour, loading, sweep-up and disposal. Prices shown are estimates. You'll get a fixed price before we start."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line shadow-card">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">Estimated rubbish removal prices by load size and job type</caption>
              <thead className="bg-mist text-[13px] uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="p-4">Load size</th>
                  {PRICING.map((p) => <th key={p.id} scope="col" className="p-4">{p.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {LOAD_SIZES.map((l) => (
                  <tr key={l.id} className="border-t border-line">
                    <th scope="row" className="p-4">
                      <span className="block font-bold text-ink-800">{l.label} <span className="font-normal text-muted">(≈ {l.m3} m³)</span></span>
                      <span className="block text-[13px] font-normal text-muted">{l.hint}</span>
                    </th>
                    {PRICING.map((p) => {
                      const q = calculateQuote(p.id, l.id);
                      return <td key={p.id} className="p-4 font-semibold text-ink-700">{formatPrice(q.low)} – {formatPrice(q.high)}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {["No hidden fees, ever", "Up to 30% less than a skip once permits are counted", "Beat any written like-for-like quote by 10%"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-[15px] font-medium text-ink-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-good" aria-hidden /> {t}</li>
            ))}
          </ul>
          <Guarantee />
        </div>
      </section>

      <Process dark title="From estimate to empty in four steps" />
      <Comparison />
      <Reviews />
      <FaqList faqs={PRICE_FAQS} title="Pricing questions, answered" />
      <QuoteSection />
    </>
  );
}
