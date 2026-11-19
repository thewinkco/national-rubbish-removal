"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/ssr";
import type { Review } from "@/content/site";
import { GoogleIcon, Stars } from "./icons";

// Muted versions of the Google avatar palette, so cards feel native to Google reviews without shouting.
const AVATAR = ["bg-[#e8eefb] text-[#2b5cb8]", "bg-[#fbeceb] text-[#b4372c]", "bg-[#e6f2ea] text-[#25724a]", "bg-[#fdf3dc] text-[#8a6410]", "bg-[#efe9f7] text-[#6a3fa0]"];

function hash(s: string) {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

export function ReviewCard({ review }: { review: Review }) {
  const initial = review.name.trim()[0]?.toUpperCase() ?? "?";
  return (
    <figure className="break-inside-avoid rounded-2xl border border-line bg-white p-6">
      <div className="flex items-center justify-between">
        <Stars className="h-4 w-4" />
        <GoogleIcon className="h-4 w-4" />
      </div>
      <blockquote className="mt-4 text-[15px] leading-[1.65] text-ink-700">{review.text}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${AVATAR[hash(review.name) % AVATAR.length]}`} aria-hidden>
          {initial}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-ink-800">{review.name}</span>
          <span className="block truncate text-[12.5px] text-muted">{review.tag}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Masonry wall of real Google reviews. Shows a first batch, the rest on request. */
export function ReviewWall({ reviews, initial = 9 }: { reviews: Review[]; initial?: number }) {
  const [all, setAll] = useState(false);
  const shown = all ? reviews : reviews.slice(0, initial);
  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {shown.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>
      {!all && reviews.length > initial && (
        <div className="mt-6 flex justify-center">
          <button type="button" onClick={() => setAll(true)} className="btn-outline">
            Show {reviews.length - initial} more reviews <CaretDown className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}
    </>
  );
}
