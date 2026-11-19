import type { NextConfig } from "next";

// Static HTML export: `next build` writes the whole site to `out/`, ready to upload to any static host.
// A static export can't run Next's redirects(), headers() or image optimizer, so:
//   - URL redirects (apex → www, aliases, old service/suburb paths) and security/cache headers
//     live in public/.htaccess (copied into out/), for Apache-based hosts such as Hostinger or cPanel.
//   - Images are served as-is; the files in public/images are already compressed WebP.
const nextConfig: NextConfig = {
  output: "export",
  // Fully static marketing site: dynamicParams = false means unknown slugs fall through to 404.html.
  poweredByHeader: false,
  trailingSlash: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
