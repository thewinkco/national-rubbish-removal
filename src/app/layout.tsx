import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/content/site";
import { businessSchema, graph, websiteSchema } from "@/lib/schema";

// Display: Newsreader: a calm, bookish serif. Reads established and trustworthy.
// No optical-size axis (it doubles the file size) and no preload, so the hero image gets the bandwidth first.
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader", display: "swap", preload: false });
// Body/UI: Geist: crisp, neutral grotesk that stays legible at small sizes.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Rubbish Removal Sydney | National Rubbish Removal", template: "%s" },
  description:
    "Same day rubbish removal across Sydney. We lift, load & sweep up. Upfront prices, no hidden fees, up to 95% recycled. Call 0489 043 888.",
  applicationName: SITE.name,
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${geist.variable} ${newsreader.variable}`}>
      <body className="min-h-dvh bg-paper">
        {SITE.gtmId && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtmId}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        )}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold">
          Skip to content
        </a>
        <JsonLd data={graph(businessSchema(), websiteSchema())} />
        <SmoothScroll />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileCtaBar />
        </MotionProvider>
      </body>
    </html>
  );
}
