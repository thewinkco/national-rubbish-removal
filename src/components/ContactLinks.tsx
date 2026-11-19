"use client";

import type { ReactNode } from "react";
import { SITE } from "@/content/site";
import { track } from "@/lib/track";

// Click-tracked contact links (phone / WhatsApp / email): the main conversion events for a call-driven business.

export function CallLink({ className, children, location = "inline" }: { className?: string; children?: ReactNode; location?: string }) {
  return (
    <a href={SITE.phoneHref} className={className} onClick={() => track("phone_click", { location })}>
      {children ?? SITE.phone}
    </a>
  );
}

export function WhatsAppLink({ className, children, location = "inline" }: { className?: string; children?: ReactNode; location?: string }) {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track("whatsapp_click", { location })}
    >
      {children ?? "WhatsApp us"}
    </a>
  );
}

export function EmailLink({ className, children, location = "inline" }: { className?: string; children?: ReactNode; location?: string }) {
  return (
    <a href={SITE.emailHref} className={className} onClick={() => track("email_click", { location })}>
      {children ?? SITE.email}
    </a>
  );
}
