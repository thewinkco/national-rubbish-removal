import { getLegacy } from "@/lib/legacy";
import { Blocks } from "./Rich";
import { Breadcrumbs } from "./sections";

export function LegalPage({ slug, title }: { slug: string; title: string }) {
  const page = getLegacy(slug);
  return (
    <>
      <section className="grain border-b border-line bg-paper text-ink-800">
        <div className="container-x py-12 lg:py-16">
          <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: title, path: `/${slug}` }]} dark={false} />
          <h1 className="h-display mt-5 text-4xl sm:text-5xl">{page?.h1 ?? title}</h1>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-x">
          <div className="prose-nrr max-w-3xl">
            {page?.sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="font-display mb-3 text-2xl text-ink-800">{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
