import Image from "next/image";
import { Mascot } from "./Mascot";
import Link from "next/link";
import { ArrowRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { CATEGORIES, servicesIn } from "@/content/services";
import { SUBURBS } from "@/content/suburbs";
import { GOOGLE_RATING, SITE } from "@/content/site";
import { CallLink, EmailLink, WhatsAppLink } from "./ContactLinks";
import { GoogleIcon, Stars, WhatsAppIcon } from "./icons";
import { SocialLinks } from "./SocialLinks";

const MAP_QUERY = encodeURIComponent(SITE.address.full);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export function Footer() {
  return (
    <footer className="bg-ink text-white/65">
      {/* Sign-off */}
      <div className="relative overflow-hidden border-b border-white/10">
        {/* Crew member sweeping up: "rubbish gone". */}
        <div aria-hidden className="pointer-events-none absolute -bottom-3 left-1/2 ml-10 hidden xl:block">
          <Mascot pose="sweeping" decorative sizes="160px" className="h-[236px] w-auto" />
        </div>
        <div className="container-x relative flex flex-col gap-8 py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20 xl:py-24">
          <p className="h-display max-w-2xl text-[36px] leading-[1.08] text-white sm:text-[48px]">
            Rubbish gone, <em className="text-brand">without the fuss.</em>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CallLink location="footer_cta" className="btn-primary text-base">
              <Phone className="h-5 w-5" aria-hidden /> {SITE.phone}
            </CallLink>
            <Link href="/contact#quote-form" className="btn-ghost text-base">
              Get a free quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Image src="/images/brand/nrr-logo.svg" alt={SITE.name} width={180} height={78} className="h-14 w-auto" />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed">
            Sydney owned and operated. Same day rubbish removal for homes, businesses and building sites, with up to {SITE.recycleRate} of
            what we collect recycled or donated.
          </p>
          <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:border-white/25">
            <GoogleIcon className="h-5 w-5" />
            <span className="text-[14px] text-white">{GOOGLE_RATING.score}</span>
            <Stars className="h-3.5 w-3.5" />
            <span className="text-[13px]">{GOOGLE_RATING.count} reviews</span>
          </a>
          <ul className="mt-8 space-y-3 text-[15px]">
            <li>
              <CallLink location="footer" className="flex items-center gap-3 text-white hover:text-brand">
                <Phone className="h-4 w-4 text-brand" aria-hidden /> {SITE.phone}
              </CallLink>
            </li>
            <li>
              <WhatsAppLink location="footer" className="flex items-center gap-3 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 text-brand" /> WhatsApp {SITE.whatsapp}
              </WhatsAppLink>
            </li>
            <li>
              <EmailLink location="footer" className="flex items-center gap-3 break-all hover:text-white">
                <EnvelopeSimple className="h-4 w-4 shrink-0 text-brand" aria-hidden /> {SITE.email}
              </EmailLink>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-brand" aria-hidden /> Servicing the {SITE.areaServed}
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <p className="font-display text-[18px] text-white">{cat.short}</p>
              <ul className="mt-4 space-y-1 border-t border-white/10 pt-3 text-[14px] lg:space-y-2.5 lg:pt-4">
                {servicesIn(cat.id).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="inline-block py-1.5 hover:text-white lg:py-0">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="font-display text-[18px] text-white">Company</p>
            <ul className="mt-4 space-y-1 border-t border-white/10 pt-3 text-[14px] lg:space-y-2.5 lg:pt-4">
              {[
                ["/services", "All services"],
                ["/quote-estimator", "Price estimator"],
                ["/location", "Service areas"],
                ["/about", "About us"],
                ["/contact", "Contact"],
                ["/sitemap", "Sitemap"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-block py-1.5 hover:text-white lg:py-0">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social, hours and location */}
      <div className="border-t border-white/10">
        <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_2fr] lg:items-center lg:gap-14">
          <div>
            <p className="font-display text-[18px] text-white">Follow us</p>
            <p className="mt-3 max-w-xs text-[14px] leading-relaxed">Recent jobs and before-and-after photos from around Sydney.</p>
            <SocialLinks dark className="mt-4" />
          </div>
          <div>
            <p className="font-display text-[18px] text-white">Hours</p>
            <ul className="mt-3 max-w-xs space-y-1.5 border-t border-white/10 pt-3 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-4">
                  <span>{h.label}</span>
                  <span className="tabular-nums text-white/90">{h.display}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-display text-[18px] text-white">Find us</p>
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[14px] font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                Get directions <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
            <address className="mt-3 text-[14px] not-italic">{SITE.address.full}</address>
            <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <iframe
                src={MAP_EMBED}
                title={`Map showing ${SITE.name} at ${SITE.address.full}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[180px] w-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-8">
          <p className="font-display text-[18px] text-white">Rubbish removal near you</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-0 text-[13px] lg:gap-y-2">
            {SUBURBS.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="inline-block py-1.5 hover:text-white lg:py-0">
                  Rubbish removal {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Acknowledgement of Country */}
      <div className="border-t border-white/10">
        <div className="container-x py-8">
          <p className="max-w-3xl text-[13.5px] leading-relaxed text-white/55">
            National Rubbish Removal acknowledges the Traditional Custodians of the lands across Sydney on which we live and work, and pays
            respect to their Elders past and present.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 pb-24 lg:pb-0">
        <div className="container-x flex flex-col gap-4 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/policy" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
