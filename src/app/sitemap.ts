import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { SUBURBS } from "@/content/suburbs";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

// Every indexable URL: core pages, all service pages and all suburb pages (generated from content).
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => (path === "/" ? SITE.url : `${SITE.url}${path}`);
  const core: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
    ["/", 1, "weekly"],
    ["/services", 0.9, "monthly"],
    ["/quote-estimator", 0.8, "monthly"],
    ["/location", 0.8, "monthly"],
    ["/contact", 0.7, "yearly"],
    ["/about", 0.6, "yearly"],
    ["/sitemap", 0.3, "yearly"],
    ["/policy", 0.2, "yearly"],
    ["/terms", 0.2, "yearly"],
  ];
  return [
    ...core.map(([path, priority, changeFrequency]) => ({ url: url(path), priority, changeFrequency })),
    ...SERVICES.map((s) => ({ url: url(`/${s.slug}`), priority: 0.9, changeFrequency: "monthly" as const })),
    ...SUBURBS.map((s) => ({ url: url(`/${s.slug}`), priority: 0.8, changeFrequency: "monthly" as const })),
  ];
}
