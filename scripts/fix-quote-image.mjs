// One-off: updates the price shown on the WhatsApp quote photo to match the current price list.
// The original (showing the old "$295 incl. GST") is kept in images-originals/home/.
//   node scripts/fix-quote-image.mjs
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const FILE = "public/images/home/whatsapp-fixed-price-rubbish-removal-quote.webp";
const ORIGINAL = "images-originals/home/whatsapp-fixed-price-rubbish-removal-quote.webp";
// ¼ truck (2 m³) of household rubbish: matches "Sofa, boxes & household waste" in the chat.
const PRICE = "$360";

if (!fs.existsSync(ORIGINAL)) {
  fs.mkdirSync(path.dirname(ORIGINAL), { recursive: true });
  fs.copyFileSync(FILE, ORIGINAL);
}

const img = sharp(ORIGINAL);
const { width, height } = await img.metadata();

// Card background behind the old "$295 (incl. GST)" line, then the new price in a matching bold sans.
const patch = { left: 634, top: 411, width: 186, height: 37 };
const bg = "#e6e5e8";
const svg = Buffer.from(`<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs><filter id="soft"><feGaussianBlur stdDeviation="0.35"/></filter></defs>
  <rect x="${patch.left}" y="${patch.top}" width="${patch.width}" height="${patch.height}" rx="4" fill="${bg}"/>
  <text x="640" y="437" filter="url(#soft)" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="33" fill="#2f2f33">${PRICE}</text>
</svg>`);

const out = await sharp(ORIGINAL).composite([{ input: svg, left: 0, top: 0 }]).webp({ quality: 88 }).toBuffer();
fs.writeFileSync(FILE, out);
console.log(`Updated ${FILE} to show ${PRICE}`);
