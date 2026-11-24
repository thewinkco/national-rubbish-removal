import { Check } from "@phosphor-icons/react/ssr";
import { Mascot } from "@/components/Mascot";
import { JOB_TYPES, PRICE_GUIDE, VOLUMES, formatPrice, formatQuote, quoteFor, type JobType, type VolumeId } from "@/content/site";
import { GENERAL_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { QuoteEstimator } from "@/components/QuoteEstimator";
import { Breadcrumbs, Comparison, FaqList, Guarantee, Process, ProofList, QuoteSection, Reviews, SectionHeading } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";

const TITLE = "Rubbish Removal Cost Calculator Sydney | Instant Price";
const from = (job: JobType, vol: VolumeId) => formatPrice(quoteFor(job, vol).low);
const DESCRIPTION = `Sydney rubbish removal prices by load size: household from ${from("residential-rubbish-removal", "single")}, green waste from ${from("green-waste-removal", "1")}, builder waste from ${from("construction-rubbish-removal", "2")}. Plus estate and strip-out prices.`;

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/quote-estimator" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Price Estimator", path: "/quote-estimator" },
];

const PRICE_FAQS = [
  GENERAL_FAQS.find((f) => f.q.startsWith("How much"))!,
  {
    q: "Is the estimate the final price?",
    a: "Household, green waste and builder waste prices are fixed by load size. Commercial loads and bigger jobs show a guide range. We confirm your price (from photos, a call or on arrival) before we lift anything. If the job matches what you described, that's what you pay.",
  },
  {
    q: "What affects the price?",
    a: "Mainly how much space your rubbish takes in the truck and the type of waste. Clean green waste costs less, and mixed light builder waste costs more. Heavy loads like bricks, concrete and soil, and difficult access, are quoted from photos.",
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
            intro="Every price includes labour, loading, sweep-up and disposal. A full truck is 8 m³. You get a fixed price before we start."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-line shadow-card">
            <table className="w-full min-w-[680px] text-left">
              <caption className="sr-only">Rubbish removal prices by load size and type of waste</caption>
              <thead className="bg-mist text-[13px] uppercase tracking-wider text-muted">
                <tr>
                  <th scope="col" className="p-4">Load size</th>
                  {JOB_TYPES.map((p) => <th key={p.id} scope="col" className="p-4">{p.label}</th>)}
                </tr>
              </thead>
              <tbody>
                {VOLUMES.map((l) => (
                  <tr key={l.id} className="border-t border-line">
                    <th scope="row" className="p-4">
                      <span className="block font-bold text-ink-800">{l.label}</span>
                      <span className="block text-[13px] font-normal text-muted">{l.hint}</span>
                    </th>
                    {JOB_TYPES.map((p) => {
                      const t = p.tiers[l.id];
                      return (
                        <td key={p.id} className="p-4 font-semibold tabular-nums text-ink-700">
                          {t ? formatQuote({ low: t[0], high: t[1] ?? t[0] }) : <span className="font-normal text-muted">–</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[14px] text-muted">
            Green waste must be clean: branches, clippings, leaves and palm fronds with no soil, rubbish or timber mixed in. Builder waste prices are for mixed light materials; heavy loads such as bricks, concrete and soil are quoted from photos.
          </p>

          <div id="bigger-jobs" className="mt-16 scroll-mt-32">
            <h2 className="h-display text-[30px] leading-tight text-ink-800 sm:text-[36px]">Bigger jobs: guide prices</h2>
            <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-600">
              Estates, strip-outs and commercial clear-outs depend on what&apos;s inside and how easy it is to get out. These are our usual ranges. Send photos or book a walk-through for a fixed price.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {PRICE_GUIDE.map((g) => (
                <div key={g.title} className="card p-6">
                  <h3 className="font-display text-[22px] text-ink-800">{g.title}</h3>
                  <dl className="mt-4 divide-y divide-line border-t border-line">
                    {g.items.map((it) => (
                      <div key={it.label} className="flex items-baseline justify-between gap-4 py-2.5 text-[15px]">
                        <dt className="text-ink-600">{it.label}</dt>
                        <dd className="whitespace-nowrap font-semibold tabular-nums text-ink-800">{it.price}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
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
