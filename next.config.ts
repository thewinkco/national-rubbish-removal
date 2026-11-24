import type { NextConfig } from "next";

// Runs as a Node.js server (`next build --webpack` then `next start`) on Hostinger's Node.js hosting.
// Tailwind runs through PostCSS (postcss.config.mjs). Builds use Webpack, which runs PostCSS in-process;
// Turbopack runs it in a separate Node process that limited build hosts can kill
// ("node process exited before we could connect to it").

// URL preservation strategy
// ─────────────────────────
// Every URL in the live sitemap (48) is served at the exact same path by this app,
// so no redirects are needed for indexed pages. The rules below only catch common
// variants/guesses and the apex domain, so nothing that used to resolve now 404s.
const SERVICE_SLUGS = [
  "household-rubbish-removal", "green-waste-removal", "deceased-estate-clearance", "unwanted-furniture-removal",
  "garage-clean-out", "mattress-removal", "strata-rubbish-removal", "office-rubbish-removal", "office-cubicle-removal",
  "retail-strip-out-removal", "warehouse-rubbish-removal", "end-of-lease-rubbish-removal", "building-materials-disposal",
  "construction-site-clean-up", "scrap-metal-removal", "brick-and-concrete-removal", "timber-removal", "skip-bin-alternatives",
];

const ALIASES: [string, string][] = [
  ["/home", "/"],
  ["/index", "/"],
  ["/index.html", "/"],
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/get-a-quote", "/contact"],
  ["/quote", "/contact"],
  ["/free-quote", "/contact"],
  ["/book", "/contact"],
  ["/booking", "/contact"],
  ["/pricing", "/quote-estimator"],
  ["/prices", "/quote-estimator"],
  ["/price", "/quote-estimator"],
  ["/cost", "/quote-estimator"],
  ["/calculator", "/quote-estimator"],
  ["/estimator", "/quote-estimator"],
  ["/locations", "/location"],
  ["/service-areas", "/location"],
  ["/areas", "/location"],
  ["/privacy", "/policy"],
  ["/privacy-policy", "/policy"],
  ["/terms-and-conditions", "/terms"],
  ["/terms-of-service", "/terms"],
  ["/residential-rubbish-removal", "/services#residential-rubbish-removal"],
  ["/commercial-rubbish-removal", "/services#commercial-rubbish-removal"],
  ["/construction-rubbish-removal", "/services#construction-rubbish-removal"],
  ["/skip-bin-alternative", "/skip-bin-alternatives"],
  ["/furniture-removal", "/unwanted-furniture-removal"],
  ["/garage-cleanout", "/garage-clean-out"],
  ["/garage-clean-up", "/garage-clean-out"],
];

const nextConfig: NextConfig = {
  // Pages are still prerendered at build time; [slug] uses dynamicParams = false so unknown slugs 404.
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    // No on-the-fly resizing (saves CPU on shared hosting). Instead, scripts/image-variants.mjs pre-builds
    // 256/640/1080/1600px WebP copies before every build, and this loader points srcset at them.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 828, 1080, 1200, 1600, 1920],
    imageSizes: [96, 128, 256, 384],
  },
  async redirects() {
    return [
      // Apex → www (canonical host on the live site).
      {
        source: "/:path*",
        has: [{ type: "host", value: "nationalrubbishremoval.com.au" }],
        destination: "https://www.nationalrubbishremoval.com.au/:path*",
        permanent: true,
      },
      ...ALIASES.map(([source, destination]) => ({ source, destination, permanent: true })),
      // /services/<slug> → /<slug>
      ...SERVICE_SLUGS.map((slug) => ({ source: `/services/${slug}`, destination: `/${slug}`, permanent: true })),
      // /rubbish-removal-<suburb> → /<suburb>
      { source: "/rubbish-removal-:suburb", destination: "/:suburb", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
      {
        source: "/:all*(webp|jpg|png|svg|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
