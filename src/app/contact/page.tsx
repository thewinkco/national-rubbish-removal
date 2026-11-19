import { Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { Mascot, PointDownCue } from "@/components/Mascot";
import { SITE } from "@/content/site";
import { GENERAL_FAQS } from "@/content/faqs";
import { JsonLd } from "@/components/JsonLd";
import { CallLink, EmailLink, WhatsAppLink } from "@/components/ContactLinks";
import { WhatsAppIcon } from "@/components/icons";
import { QuoteForm } from "@/components/QuoteForm";
import { Breadcrumbs, FaqList, GoogleBadge, Process, Reviews } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { SocialLinks } from "@/components/SocialLinks";

const TITLE = "Contact Us | National Rubbish Removal Sydney";
const DESCRIPTION =
  "Call 0489 043 888, WhatsApp photos or send your job details for a fixed rubbish removal price. Open 7 days across Sydney metro.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/contact" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/contact", name: TITLE, description: DESCRIPTION, type: "ContactPage" }), breadcrumbSchema(crumbs), faqSchema(GENERAL_FAQS))} />
      <section className="grain relative overflow-hidden border-b border-line bg-paper pb-40 pt-12 text-ink-800 lg:pt-16">
        <div className="container-x relative">
          {/* Crew member presenting the contact options; the cards below overlap his legs. */}
          <div aria-hidden className="pointer-events-none absolute -bottom-40 right-6 hidden lg:block xl:right-16">
            <span className="absolute bottom-6 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-brand-50" />
            <Mascot pose="presenting" decorative sizes="240px" className="relative h-[490px] w-auto" />
          </div>
          <Breadcrumbs items={crumbs} dark={false} />
          <h1 className="h-display mt-5 max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">Contact Our Rubbish Removal Team in Sydney</h1>
          <p className="mt-5 max-w-2xl text-xl text-ink-600">
            Three ways to get a price. Pick the fastest one for you. We answer 7 days a week.
          </p>
          <div className="mt-6"><GoogleBadge dark={false} /></div>
        </div>
      </section>

      <section className="relative z-10 -mt-28 pb-20">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <CallLink location="contact_card" className="card group p-6 transition hover:-translate-y-1 hover:shadow-lift">
            <Phone className="h-8 w-8 text-brand" aria-hidden />
            <h2 className="mt-4 font-display text-xl text-ink-800">Call us</h2>
            <p className="mt-1 text-sm text-muted">Fastest. Speak to the team directly.</p>
            <p className="mt-4 text-2xl font-semibold text-ink-800 group-hover:text-brand-ink">{SITE.phone}</p>
          </CallLink>
          <WhatsAppLink location="contact_card" className="card group p-6 transition hover:-translate-y-1 hover:shadow-lift">
            <WhatsAppIcon className="h-8 w-8 text-[#25D366]" />
            <h2 className="mt-4 font-display text-xl text-ink-800">WhatsApp</h2>
            <p className="mt-1 text-sm text-muted">Snap a photo, get a price back.</p>
            <p className="mt-4 text-2xl font-semibold text-ink-800 group-hover:text-brand-ink">{SITE.whatsapp}</p>
          </WhatsAppLink>
          <EmailLink location="contact_card" className="card group p-6 transition hover:-translate-y-1 hover:shadow-lift">
            <EnvelopeSimple className="h-8 w-8 text-brand" aria-hidden />
            <h2 className="mt-4 font-display text-xl text-ink-800">Email</h2>
            <p className="mt-1 text-sm text-muted">Send photos and details for an accurate quote.</p>
            <p className="mt-4 break-all text-lg font-semibold text-ink-800 group-hover:text-brand-ink">{SITE.email}</p>
          </EmailLink>
        </div>

        <div id="quote-form" className="container-x mt-16 grid scroll-mt-28 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <PointDownCue text="Fill this in and we'll send your fixed price." />
            <QuoteForm heading="Get a free quote" context="Contact page" />
          </div>
          <div className="space-y-5">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 font-display text-lg text-ink-800"><Clock className="h-5 w-5 text-brand" aria-hidden /> Our opening hours</h2>
              <ul className="mt-4 space-y-2 text-[15px]">
                {SITE.hours.map((h) => (
                  <li key={h.label} className="flex justify-between gap-4 border-b border-line pb-2 last:border-0">
                    <span className="text-ink-600">{h.label}</span>
                    <span className="font-semibold text-ink-800">{h.display}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl bg-brand-50 p-3 text-sm text-ink-700">
                <strong>Emergency service available:</strong> contact us for urgent rubbish removal outside regular hours.
              </p>
            </div>
            <div className="card p-6">
              <h2 className="flex items-center gap-2 font-display text-lg text-ink-800"><MapPin className="h-5 w-5 text-brand" aria-hidden /> Service area</h2>
              <p className="mt-2 text-[15px] text-ink-600">{SITE.areaServed}: Eastern Suburbs, North Shore, Northern Beaches, Inner West, St George, Sutherland Shire and Western Sydney.</p>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-lg text-ink-800">Follow us</h2>
              <p className="mt-2 text-[15px] text-ink-600">See recent jobs and before-and-after photos from around Sydney.</p>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      <Process dark title="What happens after you get in touch" />
      <Reviews />
      <FaqList faqs={GENERAL_FAQS} />
    </>
  );
}
