"use client";

import Link from "next/link";
import * as m from "motion/react-m";
import { FileText, Phone } from "@phosphor-icons/react/ssr";
import { CallLink, WhatsAppLink } from "./ContactLinks";
import { WhatsAppIcon } from "./icons";

// Thumb-zone CTAs on mobile: most rubbish removal bookings start with a phone call.
export function MobileCtaBar() {
  return (
    <m.div
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_-14px_rgba(38,36,33,0.3)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-2">
        <CallLink location="mobile_bar" className="flex items-center justify-center gap-2 rounded-[10px] bg-brand py-3 text-[15px] font-semibold text-on-brand">
          <Phone className="h-4 w-4" aria-hidden /> Call now
        </CallLink>
        <WhatsAppLink location="mobile_bar" className="flex items-center justify-center gap-1.5 rounded-[10px] border border-line bg-white py-3 text-[14px] font-medium text-ink-800">
          <WhatsAppIcon className="h-4 w-4 text-[#1f9d55]" /> Photos
        </WhatsAppLink>
        <Link href="/contact#quote-form" className="flex items-center justify-center gap-1.5 rounded-[10px] bg-ink-800 py-3 text-[14px] font-medium text-white">
          <FileText className="h-4 w-4" aria-hidden /> Quote
        </Link>
      </div>
    </m.div>
  );
}
