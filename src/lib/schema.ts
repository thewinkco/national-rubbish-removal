import { SITE, PRICING } from "@/content/site";
import { SERVICES, CATEGORIES } from "@/content/services";
import { SUBURBS } from "@/content/suburbs";

const BUSINESS_ID = `${SITE.url}/#business`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const abs = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);

export function businessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: SITE.name,
    alternateName: "NRR",
    url: SITE.url,
    logo: abs("/images/brand/nrr-logo-dark.webp"),
    image: abs("/og-image.jpg"),
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: "AU",
    },
    priceRange: "$$",
    currenciesAccepted: "AUD",
    description:
      "Same day rubbish removal across Sydney. We lift, load and sweep up, with an upfront price before we start and up to 95% of waste recycled or donated.",
    areaServed: [
      { "@type": "AdministrativeArea", name: SITE.areaServed },
      ...SUBURBS.map((s) => ({ "@type": "Place", name: `${s.name} NSW ${s.postcode}` })),
    ],
    sameAs: [SITE.googleMapsCid, SITE.socials.facebook, SITE.socials.instagram, SITE.socials.linkedin],
    openingHoursSpecification: SITE.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rubbish Removal Services",
      itemListElement: CATEGORIES.map((c) => ({
        "@type": "OfferCatalog",
        name: c.name,
        itemListElement: SERVICES.filter((s) => s.category === c.id).map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.summary, url: abs(`/${s.slug}`) },
        })),
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-AU",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; areaName?: string; categoryId?: string }) {
  const pricing = PRICING.find((p) => p.id === opts.categoryId);
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": opts.areaName ? "Place" : "AdministrativeArea", name: opts.areaName ?? SITE.areaServed },
    ...(pricing && {
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: pricing.ratePerM3,
          priceCurrency: "AUD",
          unitText: "cubic metre",
          minPrice: pricing.minCharge,
        },
      },
    }),
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string; type?: string }) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-AU",
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
