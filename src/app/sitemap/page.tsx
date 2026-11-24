import Link from "next/link";
import { CATEGORIES, servicesIn } from "@/content/services";
import { REGION_ORDER, SUBURBS } from "@/content/suburbs";
import { Breadcrumbs } from "@/components/sections";
import { pageMetadata } from "@/lib/meta";
import { POSTS } from "@/content/blog";

export const metadata = pageMetadata({
  title: "Sitemap | National Rubbish Removal",
  description: "Browse every page on the National Rubbish Removal website: services, Sydney service areas, pricing and contact details.",
  path: "/sitemap",
});

const MAIN = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/location", "Service Areas"],
  ["/quote-estimator", "Quote Estimator"],
  ["/blog", "Guides & Tips"],
  ["/policy", "Privacy Policy"],
  ["/terms", "Terms of Service"],
];

export default function HtmlSitemapPage() {
  return (
    <>
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Sitemap", path: "/sitemap" }]} dark={false} />
          <h1 className="h-display mt-5 text-4xl sm:text-5xl">Sitemap</h1>
          <p className="mt-3 text-lg text-ink-600">Easily navigate to every page on our website.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-lg text-ink-800">Main pages</h2>
            <ul className="mt-3 space-y-2">
              {MAIN.map(([href, label]) => <li key={href}><Link href={href} className="text-ink-600 hover:text-brand-ink">{label}</Link></li>)}
            </ul>
          </div>
          {CATEGORIES.map((c) => (
            <div key={c.id}>
              <h2 className="font-display text-lg text-ink-800">{c.short}</h2>
              <ul className="mt-3 space-y-2">
                {servicesIn(c.id).map((s) => <li key={s.slug}><Link href={`/${s.slug}`} className="text-ink-600 hover:text-brand-ink">{s.name}</Link></li>)}
              </ul>
            </div>
          ))}
          {REGION_ORDER.filter((r) => SUBURBS.some((s) => s.region === r)).map((region) => (
            <div key={region}>
              <h2 className="font-display text-lg text-ink-800">{region}</h2>
              <ul className="mt-3 space-y-2">
                {SUBURBS.filter((s) => s.region === region).map((s) => (
                  <li key={s.slug}><Link href={`/${s.slug}`} className="text-ink-600 hover:text-brand-ink">Rubbish Removal {s.name}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-display text-lg text-ink-800">Guides &amp; tips</h2>
            <ul className="mt-3 space-y-2">
              {POSTS.map((p) => <li key={p.slug}><Link href={`/blog/${p.slug}`} className="text-ink-600 hover:text-brand-ink">{p.h1}</Link></li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
