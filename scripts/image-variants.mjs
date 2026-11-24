// Pre-builds resized WebP copies of every photo in public/images, so phones download a phone-sized image.
// Runs automatically before `next build` (npm "prebuild"), locally, on Hostinger and in the blog routine.
// Output: public/_img/w<width>/images/... (git-ignored). src/lib/image-loader.ts points next/image at these files.
//
// Never fails the build: if an image can't be resized, the original is copied into its variant paths instead,
// so every URL the loader produces always exists.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "public", "images");
const OUT = path.join(ROOT, "public", "_img");
// Keep in sync with VARIANT_WIDTHS in src/lib/image-loader.ts.
const WIDTHS = [256, 640, 1080, 1600];
const PHOTO = /\.(webp|png|jpe?g)$/i;

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("image-variants: sharp unavailable, copying originals instead of resizing");
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : PHOTO.test(e.name) ? [p] : [];
  });
}

const files = walk(SRC);
let made = 0;
let skipped = 0;
let copied = 0;

async function one(file) {
  const rel = path.relative(path.join(ROOT, "public"), file).replace(PHOTO, ".webp");
  const srcTime = fs.statSync(file).mtimeMs;
  for (const w of WIDTHS) {
    const out = path.join(OUT, `w${w}`, rel);
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= srcTime) {
      skipped++;
      continue;
    }
    fs.mkdirSync(path.dirname(out), { recursive: true });
    try {
      if (!sharp) throw new Error("no sharp");
      // Photos are lazy-loaded below the fold; quality 72 keeps them sharp on screen at a fraction of the size.
      await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: w <= 640 ? 70 : 72 }).toFile(out);
      made++;
    } catch {
      fs.copyFileSync(file, out);
      copied++;
    }
  }
}

const started = Date.now();
const queue = [...files];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) await one(queue.shift());
  }),
);
console.log(
  `image-variants: ${files.length} images, ${made} variants made, ${skipped} up to date, ${copied} copied as-is (${((Date.now() - started) / 1000).toFixed(1)}s)`,
);
