// Builds blog images from the site's original photos: one 16:9 cover, one 1200x630 social card and
// 3:2 in-article images per post, saved as compressed WebP/JPEG under public/images/blog/.
// Usage: node scripts/blog-images.mjs   (re-run after adding a post to the MAP below)
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SRC = path.join(__dirname, "..", "public", "images");
const OUT = path.join(SRC, "blog");

// slug -> { cover: source, inline: { "output-name": source } }
const MAP = {
  "rubbish-removal-cost-sydney": {
    cover: "home/whatsapp-fixed-price-rubbish-removal-quote.webp",
    inline: {
      "photo-quote-rubbish-pile-sydney": "home/photo-quote-rubbish-removal-sydney.webp",
      "crew-loading-truck-volume-pricing": "home/rubbish-removal-crew-loading-truck-sydney.webp",
      "brick-concrete-rubble-heavy-load": "construction/brick-and-concrete-removal-sydney.webp",
    },
  },
  "skip-bin-vs-rubbish-removal-sydney": {
    cover: "construction/renovation-waste-removal-skip-bin-alternative-sydney.webp",
    inline: {
      "renovation-rubble-wheelbarrow-truck": "home/renovation-rubble-removal-sydney.webp",
      "household-rubbish-loaded-same-visit": "residential/household-rubbish-removal-sydney.webp",
      "construction-waste-loaded-into-truck": "construction/construction-waste-removal-loading-truck-sydney.webp",
    },
  },
  "what-rubbish-removalists-wont-take": {
    cover: "commercial/commercial-rubbish-bag-removal-sydney.webp",
    inline: {
      "renovation-materials-sorted-for-disposal": "construction/building-materials-disposal-renovation-sydney.webp",
      "licensed-insured-crew-checklist": "about/licensed-insured-rubbish-removal-tablet.webp",
    },
  },
  "how-to-dispose-of-a-mattress-sydney": {
    cover: "residential/mattress-removal-sydney.webp",
    inline: {
      "strata-car-park-mattress-pickup": "home/strata-mattress-removal-car-park-sydney.webp",
      "apartment-bulky-item-removal": "commercial/armchair-removal-apartment-car-park-sydney.webp",
    },
  },
  "council-clean-up-vs-private-rubbish-removal": {
    cover: "home/moving-out-rubbish-removal-sydney.webp",
    inline: {
      "crew-carrying-household-items-to-truck": "residential/household-rubbish-removal-sydney.webp",
      "couch-carried-down-front-steps": "residential/furniture-removal-sydney.webp",
      "furniture-removal-crew-harbour": "home/furniture-removal-crew-carrying-couch-sydney.webp",
    },
  },
  "garage-clean-out-checklist": {
    cover: "home/garage-junk-removal-decluttering-sydney.webp",
    inline: {
      "cluttered-garage-before": "home/garage-clean-out-sydney-before.webp",
      "empty-garage-after-clean-out": "home/garage-clean-out-sydney-after.webp",
      "organised-garage-after-declutter": "residential-rubbish-removal-clean-garage.webp",
    },
  },
  "deceased-estate-clearance-guide": {
    cover: "residential/deceased-estate-clearance-sydney.webp",
    inline: {
      "estate-living-room-before-clearance": "home/deceased-estate-clearance-sydney-before.webp",
      "careful-furniture-removal-estate": "home/deceased-estate-furniture-removal-sydney.webp",
      "empty-room-after-estate-clearance": "home/deceased-estate-clearance-sydney-after.webp",
    },
  },
  "where-does-rubbish-go-recycling-sydney": {
    cover: "home/rubbish-recycling-sorting-facility-sydney.webp",
    inline: {
      "sorted-metal-timber-bays-facility": "about/rubbish-recycling-facility-sydney.webp",
      "scrap-metal-separated-for-recycling": "construction/scrap-metal-removal-sydney.png",
      "old-timber-decking-for-recycling": "construction/timber-removal-old-decking-sydney.webp",
    },
  },
};

(async () => {
  for (const [slug, { cover, inline }] of Object.entries(MAP)) {
    const dir = path.join(OUT, slug);
    fs.mkdirSync(dir, { recursive: true });
    const c = path.join(SRC, cover);
    await sharp(c).resize(1440, 810, { fit: "cover", position: "attention", withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(dir, `${slug}-cover.webp`));
    await sharp(c).resize(1200, 630, { fit: "cover", position: "attention" }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(dir, `${slug}-og.jpg`));
    for (const [name, src] of Object.entries(inline)) {
      await sharp(path.join(SRC, src)).resize(1200, 800, { fit: "cover", position: "attention", withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(dir, `${name}.webp`));
    }
    console.log("✓", slug);
  }
})();
