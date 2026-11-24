import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { SITE } from "@/content/site";

/**
 * Adds a content-based version (?v=abc123) to a local image URL. Images are cached for up to a year under the
 * same address, so without this an edited social-share image keeps showing the old version in link previews.
 */
function versioned(src: string) {
  if (!src.startsWith("/")) return src;
  try {
    const file = readFileSync(path.join(process.cwd(), "public", decodeURI(src)));
    return `${src}?v=${createHash("md5").update(file).digest("hex").slice(0, 8)}`;
  } catch {
    return src;
  }
}

export function pageMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
  imageAlt = SITE.name,
  article,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  /** Blog posts: emits og:type=article with dates, author and section. */
  article?: { published: string; updated: string; author: string; section: string; tags: string[] };
}): Metadata {
  image = versioned(image);
  const og = { locale: "en_AU", siteName: SITE.name, url: path, title, description, images: [{ url: image, width: 1200, height: 630, alt: imageAlt }] };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: article
      ? {
          ...og,
          type: "article",
          publishedTime: `${article.published}T08:00:00+11:00`,
          modifiedTime: `${article.updated}T08:00:00+11:00`,
          authors: [article.author],
          section: article.section,
          tags: article.tags,
        }
      : { ...og, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
