"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

/**
 * On-load hero entrance. Deliberately NOT used on the H1 or hero image, so the
 * Largest Contentful Paint is never held back by an animation.
 */
export function HeroIn({
  children,
  className,
  delay = 0,
  from = "below",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "below" | "right";
}) {
  const offset = from === "right" ? { x: 32, y: 0 } : { x: 0, y: 14 };
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    >
      {children}
    </m.div>
  );
}
