"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";

const JOBS = [
  { key: "garage", file: "garage-clean-out-sydney", labelled: true, label: "Garage", job: "Garage clean-out", note: "Boxes, old shelving and a bike nobody rides, cleared and swept in one visit.", href: "/garage-clean-out" },
  { key: "backyard", file: "green-waste-removal-sydney", labelled: false, label: "Backyard", job: "Green waste removal", note: "Branches, cuttings and old pots gone, ready for the mower.", href: "/green-waste-removal" },
  { key: "estate", file: "deceased-estate-clearance-sydney", labelled: false, label: "Estate", job: "Deceased estate clearance", note: "Whole rooms cleared with care and discretion, at a pace that suits the family.", href: "/deceased-estate-clearance" },
  { key: "office", file: "office-rubbish-removal-sydney", labelled: false, label: "Office", job: "Office rubbish removal", note: "Desks, chairs and e-waste cleared, ready for the next tenant.", href: "/office-rubbish-removal" },
  { key: "shop", file: "retail-strip-out-sydney", labelled: false, label: "Shop", job: "Retail strip-out", note: "Fit-out, fixtures and stock cleared so the lease could be handed back.", href: "/retail-strip-out-removal" },
  { key: "building-site", file: "construction-site-clean-up-sydney", labelled: true, label: "Building site", job: "Construction site clean-up", note: "Rubble, offcuts and packaging cleared before the next trade arrived.", href: "/construction-site-clean-up" },
] as const;

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);
  const job = JOBS[active];

  return (
    <div>
      <div role="tablist" aria-label="Choose a job" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {JOBS.map((j, i) => (
          <button
            key={j.key}
            type="button"
            role="tab"
            id={`ba-tab-${j.key}`}
            aria-selected={i === active}
            aria-controls="ba-panel"
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition duration-300 ease-out-expo ${
              i === active ? "border-ink-800 bg-ink-800 text-white" : "border-line bg-white text-ink-600 hover:border-ink-800/40 hover:text-ink-800"
            }`}
          >
            {j.label}
          </button>
        ))}
      </div>

      <div id="ba-panel" role="tabpanel" aria-labelledby={`ba-tab-${job.key}`} className="mt-8">
        <div key={job.key} className="grid animate-[ba-fade_0.5s_ease-out] gap-3 sm:grid-cols-2 sm:gap-4">
          {(["before", "after"] as const).map((when) => (
            <div key={when} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
              <Image
                src={`/images/home/${job.file}-${when}.webp`}
                alt={`${job.job} Sydney: ${when === "before" ? "the space before" : "the same space after"} National Rubbish Removal cleared it`}
                fill
                sizes="(min-width: 1280px) 600px, (min-width: 640px) 50vw, 100vw"
                // Baked-in labels sit at the bottom-left, so crop from the right on wider photos.
                className={`object-cover ${job.labelled ? "object-left-bottom" : ""}`}
              />
              {!job.labelled && (
                <span className={`absolute bottom-4 left-4 rounded-md px-3 py-1.5 text-[15px] font-semibold capitalize text-white shadow-lift ${when === "before" ? "bg-ink-800/85" : "bg-brand"}`}>
                  {when}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[16px] text-ink-600">
            <span className="font-display text-[20px] text-ink-800">{job.job}.</span> {job.note}
          </p>
          <Link href={job.href} className="group inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-ink-800 underline decoration-ink-800/30 underline-offset-4 hover:decoration-ink-800">
            See how we do it <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
