import { SITE, fromPrice, type CategoryId } from "@/content/site";
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
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
    hasMap: SITE.googleMapsCid,
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
  const from = opts.categoryId ? fromPrice(opts.categoryId as CategoryId) : null;
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: abs(opts.path),
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": opts.areaName ? "Place" : "AdministrativeArea", name: opts.areaName ?? SITE.areaServed },
    ...(from && {
      offers: {
        "@type": "Offer",
        url: abs(opts.path),
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
        priceSpecification: { "@type": "PriceSpecification", minPrice: from, priceCurrency: "AUD" },
      },
    }),
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string; type?: string }) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${opts.path === "/" ? `${SITE.url}/` : abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    inLanguage: "en-AU",
  };
}

export function blogSchema(opts: { path: string; name: string; description: string; posts: { slug: string; h1: string; published: string }[] }) {
  return {
    "@type": "Blog",
    "@id": `${abs(opts.path)}#blog`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en-AU",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": BUSINESS_ID },
    blogPost: opts.posts.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${abs(`/blog/${p.slug}`)}#article`,
      headline: p.h1,
      url: abs(`/blog/${p.slug}`),
      datePublished: p.published,
    })),
  };
}

export function blogPostingSchema(opts: {
  path: string;
  headline: string;
  description: string;
  images: string[];
  published: string;
  updated: string;
  wordCount: number;
  keywords: string[];
  section: string;
  author: { name: string; kind: "Organization" | "Person"; role: string; image?: string };
  /** Services the article is about, linked to each service page's Service node so search engines connect the guide to the offer. */
  about: { path: string; name: string }[];
}) {
  const url = abs(opts.path);
  const author =
    opts.author.kind === "Person"
      ? { "@type": "Person", name: opts.author.name, jobTitle: opts.author.role, worksFor: { "@id": BUSINESS_ID }, ...(opts.author.image && { image: abs(opts.author.image) }) }
      : { "@type": "Organization", name: opts.author.name, url: abs("/about"), parentOrganization: { "@id": BUSINESS_ID } };
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    url,
    headline: opts.headline,
    description: opts.description,
    image: opts.images.map(abs),
    datePublished: `${opts.published}T08:00:00+11:00`,
    dateModified: `${opts.updated}T08:00:00+11:00`,
    author,
    publisher: { "@id": BUSINESS_ID },
    isPartOf: { "@id": `${abs("/blog")}#blog` },
    articleSection: opts.section,
    keywords: opts.keywords.join(", "),
    wordCount: opts.wordCount,
    inLanguage: "en-AU",
    about: opts.about.map((s) => ({ "@type": "Service", "@id": `${abs(s.path)}#service`, name: s.name, url: abs(s.path) })),
    // Marks the quick answer and key takeaways as the parts voice assistants should read aloud.
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-speakable]"] },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
