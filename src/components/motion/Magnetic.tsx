"use client";

import { useMotionValue, useReducedMotion, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type PointerEvent, type ReactNode } from "react";

/**
 * Pulls its child toward the cursor. Motion values live outside React state, so moving the
 * pointer never re-renders. Disabled for touch input and reduced-motion users.
 */
export function Magnetic({ children, strength = 0.28, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.2 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15, mass: 0.2 });

  const onMove = (e: PointerEvent<HTMLSpanElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.span ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ x, y }} className={`inline-flex ${className ?? ""}`}>
      {children}
    </m.span>
  );
}
