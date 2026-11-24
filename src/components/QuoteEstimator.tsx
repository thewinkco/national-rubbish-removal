"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { ArrowRight, BuildingOffice, HardHat, House, Leaf, Phone } from "@phosphor-icons/react/ssr";
import { JOB_TYPES, FULL_LOAD_M3, quoteFor, volumesFor, formatPrice, formatQuote, SITE, type JobType, type VolumeId } from "@/content/site";
import { track } from "@/lib/track";
import { CallLink } from "./ContactLinks";
import { useScrollToElement } from "./motion/SmoothScroll";

const ICONS = { "residential-rubbish-removal": House, "green-waste-removal": Leaf, "commercial-rubbish-removal": BuildingOffice, "construction-rubbish-removal": HardHat } as const;

/** Price that springs between values instead of snapping. */
function SpringPrice({ value }: { value: number }) {
  const mv = useSpring(value, { stiffness: 120, damping: 20 });
  const text = useTransform(mv, (v) => formatPrice(Math.round(v / 10) * 10));
  useEffect(() => mv.set(value), [mv, value]);
  return <m.span>{text}</m.span>;
}

export const ESTIMATE_EVENT = "nrr:estimate";
export type EstimateDetail = { service: JobType; size: VolumeId };

/**
 * Instant price estimator. "Lock in" hands the selection to the quote form on the
 * same page (custom event) or carries it to /contact via query string.
 */
export function QuoteEstimator({
  defaultService = "residential-rubbish-removal",
  defaultLoad = "2",
  variant = "full",
  formOnPage = true,
}: {
  defaultService?: JobType;
  /** Load size the estimator opens on (moves to the nearest priced size for the job type). */
  defaultLoad?: VolumeId;
  variant?: "full" | "compact";
  formOnPage?: boolean;
}) {
  const [service, setService] = useState<JobType>(defaultService);
  const [size, setSize] = useState<VolumeId>(() => quoteFor(defaultService, defaultLoad).volume.id);
  const quote = quoteFor(service, size);
  const volumes = volumesFor(service);
  const fill = Math.min((quote.volume.m3 / FULL_LOAD_M3) * 100, 100);
  const compact = variant === "compact";
  const scrollTo = useScrollToElement();

  const lockIn = () => {
    track("estimate_lock_in", { service, size, low: quote.low, high: quote.high, price: formatQuote(quote) });
    if (formOnPage) {
      window.dispatchEvent(new CustomEvent<EstimateDetail>(ESTIMATE_EVENT, { detail: { service, size } }));
      scrollTo(document.getElementById("quote-form"));
    }
  };

  return (
    <div className={`card overflow-hidden ${compact ? "" : "shadow-lift"}`}>
      <div className="flex items-end justify-between gap-4 border-b border-line px-5 pb-4 pt-5 sm:px-6">
        <div>
          <p className="font-display text-[24px] leading-tight text-ink-800">Instant price estimate</p>
          <p className="mt-1 text-[13.5px] text-muted">No sign-up, no phone call, no obligation.</p>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <fieldset>
          <legend className="label">1. What kind of job?</legend>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {JOB_TYPES.map((p) => {
              const Icon = ICONS[p.id];
              const active = p.id === service;
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setService(p.id);
                    // Keep roughly the same amount when switching job type (each type is priced for different sizes).
                    setSize(quoteFor(p.id, size).volume.id);
                    track("estimate_change", { field: "service", value: p.id });
                  }}
                  className={`relative flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-[13px] font-medium transition-colors ${
                    active ? "border-ink-800 text-ink-800" : "border-line text-ink-600 hover:border-ink-600/40"
                  }`}
                >
                  <span className={`absolute inset-0 rounded-[11px] bg-mist transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`} aria-hidden />
                  <Icon className={`relative h-5 w-5 ${active ? "text-brand-ink" : "text-muted"}`} weight={active ? "duotone" : "light"} aria-hidden />
                  <span className="relative">{p.label}</span>
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="label">2. Roughly how much?</legend>
          <div className="grid grid-cols-3 gap-1.5">
            {volumes.map((l) => {
              const active = l.id === size;
              return (
                <button
                  key={l.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setSize(l.id);
                    track("estimate_change", { field: "size", value: l.id });
                  }}
                  className={`relative min-h-11 rounded-lg border px-1 py-2.5 text-[12px] font-medium leading-tight transition-colors sm:text-[13px] ${
                    active ? "border-ink-800 text-white" : "border-line text-ink-600 hover:border-ink-600/40"
                  }`}
                >
                  <span className={`absolute inset-0 rounded-[7px] bg-ink-800 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0"}`} aria-hidden />
                  <span className="relative">{l.short}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[13px] text-muted">
            {quote.volume.id === "single" ? quote.volume.hint : `${quote.volume.label} · ${quote.volume.hint}`}
          </p>
          <div className="mt-3" aria-hidden>
            <div className="flex justify-between text-[12px] text-muted">
              <span>Truck space used</span>
              <span>{Math.round(fill)}%</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-mist">
              <m.div
                className="h-full origin-left rounded-full bg-brand"
                initial={false}
                animate={{ scaleX: fill / 100 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>
          </div>
        </fieldset>

        <div className="rounded-xl bg-paper p-5 text-center ring-1 ring-line" aria-live="polite">
          <p className="text-[13px] text-muted">Estimated price</p>
          <p className="sr-only">{quote.isRange ? `${formatPrice(quote.low)} to ${formatPrice(quote.high)}` : formatPrice(quote.low)}</p>
          <p className="mt-1 font-display text-[42px] leading-none tabular-nums text-ink-800" aria-hidden>
            <SpringPrice value={quote.low} />
            {quote.isRange && (
              <>
                {" "}<span className="text-2xl text-muted">–</span> <SpringPrice value={quote.high} />
              </>
            )}
          </p>
          <p className="mt-2 text-[13px] text-muted">
            {quote.job.label} · {quote.volume.label}. Includes labour, loading, sweep-up & disposal.
          </p>
        </div>

        {formOnPage ? (
          <button type="button" onClick={lockIn} className="btn-primary w-full">
            Lock in this price <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        ) : (
          <Link
            href={`/contact?service=${service}&size=${size}#quote-form`}
            onClick={() => track("estimate_lock_in", { service, size, low: quote.low, high: quote.high, price: formatQuote(quote) })}
            className="btn-primary w-full"
          >
            Lock in this price <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
        <CallLink location="estimator" className="flex items-center justify-center gap-2 text-sm text-ink-600 hover:text-ink-800">
          <Phone className="h-4 w-4" aria-hidden /> Or call {SITE.phone} for an exact price
        </CallLink>
      </div>
    </div>
  );
}
