"use client";

import { LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("./features").then((mod) => mod.default);

// Spring used across the site: weighty, no linear easing.
export const SPRING = { type: "spring", stiffness: 100, damping: 20 } as const;

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    // strict: only the lightweight `m` components may be used. reducedMotion="user" honours OS settings.
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user" transition={SPRING}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
