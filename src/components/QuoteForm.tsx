"use client";

import { Mascot } from "./Mascot";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import * as m from "motion/react-m";
import { ArrowLeft, ArrowRight, Calculator, CheckCircle, Camera, CircleNotch, Lock, X } from "@phosphor-icons/react/ssr";
import { LOAD_SIZES, PRICING, SITE, calculateQuote, formatPrice, type CategoryId, type LoadId } from "@/content/site";
import { track } from "@/lib/track";
import { ESTIMATE_EVENT, type EstimateDetail } from "./QuoteEstimator";
import { CallLink } from "./ContactLinks";
import { useScrollToElement } from "./motion/SmoothScroll";

type Photo = { url: string; name: string; type: "image" | "video" };

const TIMES = ["ASAP / Flexible", "Morning (6am – 12pm)", "Afternoon (12pm – 5pm)", "Evening (5pm – 9pm)"];

const sydneyToday = () =>
  new Intl.DateTimeFormat("en-CA", { timeZone: "Australia/Sydney", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());

async function uploadToCloudinary(file: File): Promise<Photo> {
  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", SITE.cloudinaryPreset);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${SITE.cloudinaryCloud}/auto/upload`, { method: "POST", body });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error?.message || "Upload failed. Please try again.");
  return { url: json.secure_url, name: file.name, type: json.resource_type === "video" ? "video" : "image" };
}

/**
 * Two-step lead form. Step 1 is low-commitment (what + how much, with a live price),
 * step 2 asks for contact details. Payload keys match the existing Google Apps Script
 * so leads land in the same sheet as before.
 */
export function QuoteForm({ defaultService, heading = "Get your fixed price", context }: { defaultService?: CategoryId; heading?: string; context?: string }) {
  const pathname = usePathname();
  const [step, setStep] = useState<1 | 2>(1);
  const [services, setServices] = useState<CategoryId[]>(defaultService ? [defaultService] : []);
  const [size, setSize] = useState<LoadId | "">("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [today, setToday] = useState("");
  const started = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollToElement();

  useEffect(() => {
    setToday(sydneyToday());
    const params = new URLSearchParams(window.location.search);
    const qService = params.get("service") as CategoryId | null;
    const qSize = params.get("size") as LoadId | null;
    if (qService && PRICING.some((p) => p.id === qService)) setServices([qService]);
    if (qSize && LOAD_SIZES.some((l) => l.id === qSize)) setSize(qSize);

    const onEstimate = (e: Event) => {
      const { service, size } = (e as CustomEvent<EstimateDetail>).detail;
      setServices([service]);
      setSize(size);
      setStep(1);
    };
    window.addEventListener(ESTIMATE_EVENT, onEstimate);
    return () => window.removeEventListener(ESTIMATE_EVENT, onEstimate);
  }, []);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    track("quote_form_start", { page: pathname });
  };

  const estimate = services[0] && size ? calculateQuote(services[0], size) : null;

  // Single choice: picking a job type replaces the previous one (the estimate prices one type).
  const selectService = (id: CategoryId) => {
    markStarted();
    setServices([id]);
    setErrors((e) => ({ ...e, services: "" }));
  };

  const next = () => {
    if (!services.length) {
      setErrors({ services: "Pick the type of job. It helps us send the right truck." });
      return;
    }
    setErrors({});
    setStep(2);
    track("quote_form_step", { step: 2, services: services.join(","), size });
    scrollTo(root.current);
  };

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setErrors((e) => ({ ...e, photos: "" }));
    try {
      const uploaded = await Promise.all(Array.from(files).slice(0, 6).map(uploadToCloudinary));
      setPhotos((p) => [...p, ...uploaded].slice(0, 6));
    } catch (err) {
      setErrors((e) => ({ ...e, photos: err instanceof Error ? err.message : "Upload failed." }));
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const data = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      location: get("location"),
      preferredDate: get("preferredDate"),
      preferredTime: get("preferredTime"),
      message: get("message"),
    };

    const errs: Record<string, string> = {};
    if (!data.name) errs.name = "What should we call you?";
    if (data.phone.replace(/\D/g, "").length < 8) errs.phone = "We need a phone number to confirm your pickup.";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "That email doesn't look right.";
    if (!data.location) errs.location = "Which suburb are we coming to?";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("loading");
    const sizeLabel = LOAD_SIZES.find((l) => l.id === size)?.label ?? "";
    const payload = {
      ...data,
      services: services.map((id) => ({ id, label: PRICING.find((p) => p.id === id)?.label ?? id })),
      size: sizeLabel,
      photos,
      estimate: estimate ? `${formatPrice(estimate.low)} – ${formatPrice(estimate.high)}` : "",
      page: pathname,
      context: context ?? "",
    };

    try {
      // Google Sheet (existing backup) and GoHighLevel run side by side; either landing counts as success.
      const [sheet, crm] = await Promise.allSettled([
        fetch(SITE.leadEndpoint, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=UTF-8" },
          body: JSON.stringify(payload),
        }),
        fetch(SITE.crmEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, company: get("company") }),
          keepalive: true,
        }).then((r) => {
          if (!r.ok) throw new Error(`CRM ${r.status}`);
        }),
      ]);
      if (sheet.status === "rejected" && crm.status === "rejected") throw new Error("Lead not delivered");
      track("quote_form_submit", { form_name: "quote_form", services: services.join(","), size: sizeLabel, page: pathname });
      setStatus("success");
      scrollTo(root.current);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <m.div
        ref={root}
        className="card p-8 text-center sm:p-10"
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <div className="relative mx-auto h-[150px] w-[150px]">
          <span className="absolute inset-x-3 bottom-0 top-6 rounded-full bg-brand-50" aria-hidden />
          <m.div
            className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_72%,transparent)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 170, damping: 18, delay: 0.05 }}
          >
            <Mascot pose="thumbs-up" sizes="150px" className="mx-auto h-auto w-[130px]" />
          </m.div>
          <m.span
            className="absolute -right-1 bottom-2 flex rounded-full bg-white"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.3 }}
          >
            <CheckCircle className="h-10 w-10 text-good" weight="fill" aria-hidden />
          </m.span>
        </div>
        <h3 className="h-display mt-4 text-2xl text-ink-800">Done. You&apos;re in the queue.</h3>
        <p className="mx-auto mt-2 max-w-md text-ink-600">
          We&apos;ll call you shortly to confirm your price and pickup time. Want it sorted even faster?
        </p>
        <CallLink location="form_success" className="btn-primary mt-6">
          Call {SITE.phone} now
        </CallLink>
        <button type="button" onClick={() => { setStatus("idle"); setStep(1); setPhotos([]); }} className="mt-4 block w-full text-sm text-muted underline">
          Send another request
        </button>
      </m.div>
    );
  }

  return (
    <div ref={root} className="card overflow-hidden scroll-mt-28">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-7">
        <div>
          <p className="font-display text-xl text-ink-800">{heading}</p>
          <p className="text-sm text-muted">Takes 30 seconds. No obligation.</p>
        </div>
        <p className="shrink-0 rounded-full bg-mist px-3 py-1 text-xs font-bold text-ink-600">Step {step} of 2</p>
      </div>
      <div className="h-1 bg-mist">
        <m.div className="h-full origin-left bg-brand" initial={false} animate={{ scaleX: step === 1 ? 0.5 : 1 }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
      </div>

      <form onSubmit={onSubmit} onFocus={markStarted} noValidate className="p-5 sm:p-7">
        {/* Honeypot: hidden from people, filled by bots; the GHL endpoint drops those submissions. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-px w-px opacity-0" />
        {/* Step 1 */}
        <m.div className={step === 1 ? "space-y-6" : "hidden"} initial={false} animate={step === 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}>
          <fieldset>
            <legend className="label">What needs to go? <span className="font-normal text-muted">(pick one)</span></legend>
            <div role="radiogroup" aria-label="Type of job" className="grid gap-2 sm:grid-cols-3">
              {PRICING.map((p) => {
                const active = services[0] === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => selectService(p.id)}
                    className={`rounded-2xl border p-3 text-left transition ${active ? "border-brand bg-brand-50 ring-2 ring-brand/20" : "border-line hover:border-ink-600/30"}`}
                  >
                    <span className="block text-[15px] font-bold text-ink-800">{p.label}</span>
                    <span className="block text-[12px] leading-snug text-muted">{p.blurb}</span>
                  </button>
                );
              })}
            </div>
            {errors.services && <p role="alert" className="mt-2 text-sm text-red-600">{errors.services}</p>}
          </fieldset>

          <fieldset>
            <legend className="label">How much is there? <span className="font-normal text-muted">(best guess is fine)</span></legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
              {LOAD_SIZES.map((l) => {
                const active = size === l.id;
                return (
                  <button
                    key={l.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => { markStarted(); setSize(active ? "" : l.id); }}
                    className={`rounded-xl border px-2 py-2.5 text-left transition ${active ? "border-brand bg-brand text-on-brand" : "border-line hover:border-ink-600/30"}`}
                  >
                    <span className="block text-[14px] font-bold">{l.label}</span>
                    <span className={`block text-[12.5px] leading-snug sm:text-[12px] ${active ? "text-on-brand/75" : "text-muted"}`}>{l.hint}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div aria-live="polite">
            {estimate ? (
              <div className="flex min-h-[76px] items-center justify-between gap-4 rounded-2xl bg-ink-800 px-5 py-4 text-white">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Your estimate</p>
                  <p className="font-display text-2xl">{formatPrice(estimate.low)} – {formatPrice(estimate.high)}</p>
                </div>
                <p className="max-w-[12rem] text-right text-[12px] text-white/70">Confirmed as a fixed price before we lift anything.</p>
              </div>
            ) : (
              <div className="flex min-h-[76px] items-center gap-3 rounded-2xl border border-dashed border-ink-800/20 bg-mist/60 px-5 py-4">
                <Calculator className="h-6 w-6 shrink-0 text-muted" weight="light" aria-hidden />
                <p className="text-[14px] leading-snug text-muted">
                  Pick the job type and roughly how much there is, and your price estimate appears here.
                </p>
              </div>
            )}
          </div>

          <button type="button" onClick={next} className="btn-primary w-full">
            Next: Where &amp; when <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </m.div>

        {/* Step 2 */}
        <m.div className={step === 2 ? "space-y-4" : "hidden"} initial={false} animate={step === 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="qf-name" className="label">Your name *</label>
              <input id="qf-name" name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} />
              {errors.name && <p role="alert" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="qf-phone" className="label">Phone *</label>
              <input id="qf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" aria-invalid={!!errors.phone} />
              {errors.phone && <p role="alert" className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="qf-location" className="label">Suburb / address *</label>
              <input id="qf-location" name="location" autoComplete="street-address" placeholder="e.g. Bondi 2026" className="field" aria-invalid={!!errors.location} />
              {errors.location && <p role="alert" className="mt-1 text-sm text-red-600">{errors.location}</p>}
            </div>
            <div>
              <label htmlFor="qf-email" className="label">Email <span className="font-normal text-muted">(for your written quote)</span></label>
              <input id="qf-email" name="email" type="email" autoComplete="email" className="field" aria-invalid={!!errors.email} />
              {errors.email && <p role="alert" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="qf-date" className="label">Preferred date</label>
              <input id="qf-date" name="preferredDate" type="date" min={today || undefined} defaultValue={today} key={today} className="field" />
            </div>
            <div>
              <label htmlFor="qf-time" className="label">Preferred time</label>
              <select id="qf-time" name="preferredTime" className="field" defaultValue={TIMES[0]}>
                {TIMES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div>
            <span className="label">Photos or a quick video <span className="font-normal text-muted">(gets you the most accurate price)</span></span>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line px-4 py-5 text-sm font-semibold text-ink-600 hover:border-brand hover:text-brand-ink">
              {uploading ? <CircleNotch className="h-5 w-5 animate-spin" aria-hidden /> : <Camera className="h-5 w-5" aria-hidden />}
              {uploading ? "Uploading…" : "Add photos / video"}
              <input type="file" accept="image/*,video/*" multiple className="sr-only" onChange={(e) => onFiles(e.target.files)} disabled={uploading} />
            </label>
            {errors.photos && <p role="alert" className="mt-1 text-sm text-red-600">{errors.photos}</p>}
            {photos.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-2">
                {photos.map((p, i) => (
                  <li key={p.url} className="flex items-center gap-1 rounded-full bg-mist py-1 pl-3 pr-1 text-xs">
                    <span className="max-w-[10rem] truncate">{p.name}</span>
                    <button type="button" aria-label={`Remove ${p.name}`} onClick={() => setPhotos((ph) => ph.filter((_, j) => j !== i))} className="rounded-full p-1 hover:bg-line">
                      <X className="h-3 w-3" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label htmlFor="qf-message" className="label">Anything we should know?</label>
            <textarea id="qf-message" name="message" rows={3} maxLength={1000} placeholder="Stairs, parking, access, specific items…" className="field" />
          </div>

          {status === "error" && (
            <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              Something went wrong sending your request. Please call {SITE.phone} and we&apos;ll sort it straight away.
            </p>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className="btn-outline sm:w-auto">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Back
            </button>
            <button type="submit" disabled={status === "loading" || uploading} className="btn-primary flex-1">
              {status === "loading" ? <CircleNotch className="h-4 w-4 animate-spin" aria-hidden /> : null}
              Get My Fixed Price
            </button>
          </div>
          <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted">
            <Lock className="h-3.5 w-3.5" aria-hidden /> We never share your details. No spam, no sales calls.
          </p>
        </m.div>
      </form>
      <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-line bg-paper/60 px-5 py-3.5 text-[12.5px] text-muted sm:px-7">
        <span>Free, no obligation</span>
        <span aria-hidden>·</span>
        <span>Price agreed before we lift</span>
        <span aria-hidden>·</span>
        <span>Licensed &amp; insured</span>
      </p>
    </div>
  );
}
