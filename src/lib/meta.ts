import type { Metadata } from "next";
import { SITE } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: SITE.name,
      url: path,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
