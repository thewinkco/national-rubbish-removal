"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CaretDown, Clock, List, MapPin, Phone, Star, X } from "@phosphor-icons/react/ssr";
import { CATEGORIES, servicesIn } from "@/content/services";
import { REGION_ORDER, SUBURBS } from "@/content/suburbs";
import { GOOGLE_RATING, SITE } from "@/content/site";
import { CallLink } from "./ContactLinks";
import { useScrollLock } from "./motion/SmoothScroll";

const NAV = [
  { href: "/quote-estimator", label: "Pricing" },
  { href: "/blog", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"services" | "areas" | null>(null);

  // Close menus on navigation (state reset during render, per React docs).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMenu(null);
  }

  // Escape closes any open dropdown / mobile menu (keyboard users).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenu(null);
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useScrollLock(open);

  const trigger = (key: "services" | "areas") =>
    `flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] transition hover:text-ink ${menu === key ? "text-ink" : "text-ink-600"}`;

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-ink-800 text-white/75">
        <div className="container-x flex h-9 items-center justify-center gap-6 text-[12.5px] sm:justify-between">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden />
            <span className="sm:hidden">Same day pickup · book before 1pm</span>
            <span className="hidden sm:inline">Locally owned &amp; operated · servicing all of Greater Sydney</span>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="h-3.5 w-3.5" aria-hidden /> Open 7 days, 6am – 9pm
            </span>
            <a href={SITE.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white">
              <Star className="h-3.5 w-3.5 text-[#fbbc05]" weight="fill" aria-hidden /> {GOOGLE_RATING.score} from {GOOGLE_RATING.count} Google reviews
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-line bg-paper/95 text-ink-800 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
        <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[76px]">
          <Link href="/" className="flex shrink-0 items-center" aria-label={`${SITE.name} home`}>
            <Image src="/images/brand/nrr-logo-ink.svg" alt={SITE.name} width={150} height={65} loading="eager" className="h-10 w-auto lg:h-12" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            <div className="relative" onMouseLeave={() => setMenu(null)}>
              <button
                type="button"
                className={trigger("services")}
                aria-expanded={menu === "services"}
                onClick={() => setMenu(menu === "services" ? null : "services")}
                onMouseEnter={() => setMenu("services")}
              >
                Services <CaretDown className={`h-3.5 w-3.5 transition ${menu === "services" ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {menu === "services" && (
                <div className="absolute left-1/2 top-full w-[780px] -translate-x-1/2 pt-3">
                  <div className="grid grid-cols-3 gap-8 rounded-2xl border border-line bg-white p-7 text-ink-800 shadow-lift">
                    {CATEGORIES.map((cat) => (
                      <div key={cat.id}>
                        <Link href={`/services#${cat.id}`} className="font-display text-[19px] text-ink-800 hover:text-brand-ink">
                          {cat.short}
                        </Link>
                        <ul className="mt-3 space-y-0.5 border-t border-line pt-3">
                          {servicesIn(cat.id).map((s) => (
                            <li key={s.slug}>
                              <Link href={`/${s.slug}`} className="block rounded-md px-2 py-1.5 text-[14px] text-ink-600 hover:bg-mist hover:text-ink-800">
                                {s.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href="/services" className="col-span-3 flex items-center justify-between rounded-xl bg-mist px-5 py-3.5 text-sm font-medium text-ink-800 hover:bg-sand">
                      View all rubbish removal services <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseLeave={() => setMenu(null)}>
              <button
                type="button"
                className={trigger("areas")}
                aria-expanded={menu === "areas"}
                onClick={() => setMenu(menu === "areas" ? null : "areas")}
                onMouseEnter={() => setMenu("areas")}
              >
                Areas <CaretDown className={`h-3.5 w-3.5 transition ${menu === "areas" ? "rotate-180" : ""}`} aria-hidden />
              </button>
              {menu === "areas" && (
                <div className="absolute left-1/2 top-full w-[680px] -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-line bg-white p-7 text-ink-800 shadow-lift">
                    <p className="font-display text-[19px]">Sydney service areas</p>
                    <div className="mt-3 grid grid-cols-3 gap-x-6 gap-y-5 border-t border-line pt-4">
                      {REGION_ORDER.map((region) => (
                        <div key={region}>
                          <p className="px-2 text-[12px] font-semibold uppercase tracking-wide text-muted">{region}</p>
                          <ul className="mt-1">
                            {SUBURBS.filter((s) => s.region === region).map((s) => (
                              <li key={s.slug}>
                                <Link href={`/${s.slug}`} className="block rounded-md px-2 py-1 text-[14px] text-ink-600 hover:bg-mist hover:text-ink-800">
                                  {s.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <Link href="/location" className="mt-4 flex items-center justify-between rounded-xl bg-mist px-5 py-3.5 text-sm font-medium hover:bg-sand">
                      All Sydney service areas <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-[15px] transition hover:text-ink ${
                  pathname === item.href ? "text-ink underline decoration-brand decoration-2 underline-offset-[10px]" : "text-ink-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CallLink location="header" className="group hidden items-center gap-3 rounded-lg py-1 pr-2 md:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white transition group-hover:border-ink-600/40">
                <Phone className="h-4 w-4 text-brand-ink" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] text-muted">Call us 7 days</span>
                <span className="block text-[15px] font-semibold tabular-nums text-ink-800">{SITE.phone}</span>
              </span>
            </CallLink>
            <Link href="/contact#quote-form" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Free quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink-800 hover:bg-mist lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div data-lenis-prevent className="fixed inset-x-0 bottom-0 top-[100px] z-40 overflow-y-auto bg-paper px-4 pb-32 pt-6 text-ink-800 lg:hidden">
          <nav aria-label="Mobile" className="space-y-8">
            {CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <Link href={`/services#${cat.id}`} className="font-display text-[22px] text-ink-800">
                  {cat.name}
                </Link>
                <ul className="mt-2 grid grid-cols-2 gap-x-3 border-t border-line pt-2">
                  {servicesIn(cat.id).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}`} className="block py-1.5 text-[15px] text-ink-600">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-2 border-t border-line pt-6">
              {[{ href: "/services", label: "All services" }, { href: "/location", label: "Service areas" }, ...NAV].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg border border-line bg-white px-4 py-3 text-[15px] font-medium">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
