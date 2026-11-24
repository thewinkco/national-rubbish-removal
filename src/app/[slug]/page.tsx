import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prohibit, Check } from "@phosphor-icons/react/ssr";
import { SERVICES, getCategory, getService, type Service } from "@/content/services";
import { SUBURBS, getSuburb, type Region, type Suburb } from "@/content/suburbs";
import { EXCLUDED_ITEMS } from "@/content/site";
import { getSuburbGuide } from "@/content/suburb-guides";
import { GENERAL_FAQS } from "@/content/faqs";
import { postsForService } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import { splitLegacy, plain } from "@/lib/legacy";
import { pageMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Blocks } from "@/components/Rich";
import {
  AreasGrid,
  CategoryCards,
  Comparison,
  CtaBand,
  FaqList,
  LegacyContent,
  OfferStack,
  PageHero,
  PainPoints,
  Process,
  QuoteSection,
  RelatedServices,
  Reviews,
  SectionHeading,
  StickyAside,
} from "@/components/sections";

// Service and suburb pages share the root segment to keep the indexed URLs (/mattress-removal, /bondi) unchanged.
export const dynamicParams = false;

export function generateStaticParams() {
  return [...SERVICES.map((s) => ({ slug: s.slug })), ...SUBURBS.map((s) => ({ slug: s.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return pageMetadata({ title: service.title, description: service.description, path: `/${slug}` });
  const suburb = getSuburb(slug);
  if (suburb) return pageMetadata({ title: suburb.title, description: suburb.description, path: `/${slug}` });
  return {};
}

/** Region-specific photos for suburb pages: truck for the hero thumbnail, crew at work for "Sound familiar?". */
const REGION_IMAGES: Partial<Record<Region, { truck: string; job?: string; label: string; caption: string }>> = {
  "Eastern Sydney": {
    truck: "/images/suburb/rubbish-removal-eastern-suburbs-truck.webp",
    // job photo pending: re-add "/images/suburb/rubbish-removal-eastern-suburbs-job.webp" once supplied
    label: "Sydney's Eastern Suburbs",
    caption: "Terraces, stairs and tight streets are no problem",
  },
  "Northern Sydney": {
    truck: "/images/suburb/rubbish-removal-north-shore-truck.webp",
    job: "/images/suburb/rubbish-removal-north-shore-job.webp",
    label: "Sydney's North Shore",
    caption: "Garages, granny flats and whole-house clear-outs",
  },
  "Southern Sydney": {
    truck: "/images/suburb/rubbish-removal-southern-sydney-truck.webp",
    job: "/images/suburb/rubbish-removal-southern-sydney-job.webp",
    label: "Southern Sydney",
    caption: "Furniture, rugs and junk carried straight to the truck",
  },
};

export default async function Page({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <ServicePage service={service} />;
  const suburb = getSuburb(slug);
  if (suburb) return <SuburbPage suburb={suburb} />;
  notFound();
}

function ServicePage({ service }: { service: Service }) {
  const category = getCategory(service.category);
  const { body } = splitLegacy(service.slug);
  const path = `/${service.slug}`;
  // Service-specific questions first, then the two general ones (how it works, same day).
  const faqs = service.faqs ? [...service.faqs, ...GENERAL_FAQS.slice(0, 2)] : GENERAL_FAQS;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: service.title, description: service.description }),
          serviceSchema({ name: service.h1, description: service.description, path, categoryId: service.category }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        )}
      />
      <PageHero
        h1={service.h1}
        hook={service.hook}
        breadcrumbs={crumbs}
        image={service.image ?? category.image}
        imageAlt={service.imageAlt ?? category.imageAlt}
        defaultService={service.category}
        defaultLoad={service.defaultLoad}
      />

      <PainPoints
        title={`Why ${service.name.toLowerCase()} gets put off, and why it shouldn't.`}
        pains={service.pains}
        intro={`${service.summary} One call, one visit, one fixed price. Our crew does the lifting, loading and sweep-up, so the only thing you do is decide what goes.`}
        image={service.image ?? category.beforeAfter}
        imageAlt={service.imageAlt ?? `${service.name} before and after in Sydney`}
        {...(service.image && { caption: service.imageCaption, captionNote: "Sydney · 7 days" })}
      />

      {/* What we take */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-6 sm:p-8">
            <h2 className="h-display text-2xl text-ink-800 sm:text-3xl">What we take</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.takes.map((t) => (
                <li key={t} className="flex items-center gap-3 text-[16px] font-medium text-ink-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-good">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-muted">Mixed load? No problem. We take it all in the same trip and you pay once.</p>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="font-display text-xl text-ink-800">What we can&apos;t take</h2>
            <ul className="mt-4 space-y-2">
              {EXCLUDED_ITEMS.map((t) => (
                <li key={t} className="flex items-center gap-2 text-[14px] text-ink-600">
                  <Prohibit className="h-4 w-4 shrink-0 text-red-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] text-muted">Not sure? WhatsApp us a photo and we&apos;ll tell you straight.</p>
          </div>
        </div>
      </section>

      {body.length > 0 && (
        <LegacyContent
          aside={<StickyAside title={`${service.name}: included`} items={["Fixed price before we start", "Two-person crew does the lifting", "Loading, transport & tip fees", "Swept-clean finish", "Recycling & donation where possible"]} />}
        >
          <div className="prose-nrr max-w-3xl">
            {body.map((s) => (
              <div key={s.heading} className="mb-12 last:mb-0">
                <h2 className="h-display !mt-0 mb-4 text-2xl text-ink-800 sm:text-3xl">{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </div>
        </LegacyContent>
      )}

      <OfferStack />
      <Comparison />
      <Process dark title={`${service.name} in 4 simple steps`} />
      <Reviews />
      <RelatedServices category={category} exclude={service.slug} />
      <RelatedGuides serviceSlug={service.slug} serviceName={service.name} />
      <CtaBand title={`Ready for ${service.name.toLowerCase()}? It could be gone today.`} body="Book before 1pm for same day pickup. Price locked before we lift a thing." />
      <AreasGrid title={`${service.name} across Sydney`} />
      <FaqList faqs={faqs} title={service.faqs ? `${service.name}: your questions answered` : undefined} />
      <QuoteSection defaultService={service.category} context={service.name} title={`Get your ${service.name.toLowerCase()} price`} />
    </>
  );
}

function SuburbPage({ suburb }: { suburb: Suburb }) {
  const legacy = splitLegacy(suburb.slug);
  // Migrated pages keep their indexed copy; newer suburbs use their written local guide.
  const { body, faqs: localFaqs, faqHeading } = legacy.body.length ? legacy : (getSuburbGuide(suburb) ?? legacy);
  const path = `/${suburb.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/location" },
    { name: `Rubbish Removal ${suburb.name}`, path },
  ];
  const faqs = [...localFaqs.map((f) => ({ q: f.q, a: f.a })), ...GENERAL_FAQS.slice(0, 4)];
  const area = `${suburb.name} NSW ${suburb.postcode}`;
  const regionImages = REGION_IMAGES[suburb.region];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: suburb.title, description: suburb.description }),
          serviceSchema({ name: `Rubbish Removal ${suburb.name}`, description: suburb.description, path, areaName: area }),
          breadcrumbSchema(crumbs),
          faqSchema(faqs.map((f) => ({ q: f.q, a: plain(f.a) }))),
        )}
      />
      <PageHero
        h1={`Rubbish Removal ${suburb.name}`}
        hook={suburb.hook}
        breadcrumbs={crumbs}
        image={regionImages?.truck ?? "/images/same-day-rubbish-removal-sydney-truck.webp"}
        imageAlt={
          regionImages
            ? `National Rubbish Removal truck parked on a residential street in ${regionImages.label}, servicing ${suburb.name}`
            : `National Rubbish Removal truck servicing ${suburb.name}`
        }
      />

      <PainPoints
        title={`Rubbish piling up in ${suburb.name}? You're not the only one.`}
        pains={[
          `${suburb.council} clean-ups come with booking waits, volume caps and a list of items they won't take.`,
          `There's rarely room for a skip bin on a ${suburb.name} street, and permits cost extra.`,
          "Stairs, tight halls and no spare weekend make it a job you keep putting off.",
        ]}
        intro={`We cover ${suburb.name} ${suburb.postcode} and surrounds 7 days a week. Tell us what's going, lock in your price and we'll lift, load and sweep, often the same day.`}
        image={regionImages?.job ?? "/images/residential-rubbish-removal-near-me.webp"}
        imageAlt={
          regionImages?.job
            ? `NRR crew carrying furniture from a home to the truck on a rubbish removal job in ${regionImages.label}`
            : `Garage in ${suburb.name} before and after rubbish removal`
        }
        {...(regionImages?.job && { caption: regionImages.caption, captionNote: `${suburb.name} · 7 days` })}
      />

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow={`Rubbish removal services in ${suburb.name}`}
            title="Homes, units, shops and building sites"
            intro={`Hard rubbish collection for residential, commercial and construction properties in ${suburb.name}.`}
          />
          <div className="mt-12">
            <CategoryCards />
          </div>
        </div>
      </section>

      {body.length > 0 && (
        <LegacyContent
          aside={<StickyAside title={`${suburb.name} at a glance`} items={[`Covering ${suburb.name} ${suburb.postcode}`, `All of ${suburb.council}`, "Same day when booked before 1pm", "Fixed price before we lift", "Licensed & insured crew"]} />}
        >
          <div className="prose-nrr max-w-3xl">
            {body.map((s) => (
              <div key={s.heading} className="mb-12 last:mb-0">
                <h2 className="h-display !mt-0 mb-4 text-2xl text-ink-800 sm:text-3xl">{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </div>
        </LegacyContent>
      )}

      <OfferStack title={`Why ${suburb.name} locals choose NRR`} />
      <Comparison councilName={`${suburb.council.split(" / ")[0]} clean-up`} />
      <Process dark />
      <Reviews />
      <CtaBand title={`Want it gone from your ${suburb.name} place today?`} body="Call before 1pm and we can usually be there the same day." />
      <FaqList faqs={faqs} title={faqHeading ?? `Quick answers about ${suburb.name} rubbish removal`} />
      <AreasGrid current={suburb} />
      <QuoteSection context={suburb.name} title={`Get your ${suburb.name} rubbish removal price`} />
    </>
  );
}

/** Blog guides that support this service: internal links from money pages to answers, and back. */
function RelatedGuides({ serviceSlug, serviceName }: { serviceSlug: string; serviceName: string }) {
  const guides = postsForService(serviceSlug);
  if (!guides.length) return null;
  return (
    <section className="border-t border-line bg-white py-16 lg:py-20">
      <div className="container-x">
        <SectionHeading eyebrow="Helpful guides" title={`Before you book ${serviceName.toLowerCase()}`} intro="Straight answers to the questions we get asked most, from the crew that does the job." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </div>
    </section>
  );
}
