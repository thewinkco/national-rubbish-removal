"use client";

// next/image loader: serves the pre-built WebP sizes from scripts/image-variants.mjs instead of resizing on the
// server (Hostinger shared hosting), so a phone downloads a ~640px image rather than the full-size original.
// Keep VARIANT_WIDTHS in sync with WIDTHS in scripts/image-variants.mjs.
const VARIANT_WIDTHS = [256, 640, 1080, 1600];
const PHOTO = /\.(webp|png|jpe?g)$/i;

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  // SVGs, remote images and anything outside /images are served unchanged.
  if (!src.startsWith("/images/") || !PHOTO.test(src)) return src;
  const w = VARIANT_WIDTHS.find((v) => v >= width) ?? VARIANT_WIDTHS[VARIANT_WIDTHS.length - 1];
  return `/_img/w${w}${src.replace(PHOTO, ".webp")}`;
}
