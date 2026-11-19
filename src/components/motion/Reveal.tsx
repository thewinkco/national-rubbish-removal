"use client";

import * as m from "motion/react-m";
import type { CSSProperties, ReactNode } from "react";

const TAGS = { div: m.div, li: m.li, figure: m.figure, article: m.article } as const;

/**
 * Scroll-triggered spring reveal. Staggers by `index`; `lift` adds a springy hover raise.
 * Server components pass static children through, so only this wrapper ships to the client.
 */
export function Reveal({
  as = "div",
  index = 0,
  lift = false,
  y = 24,
  className,
  style,
  children,
}: {
  as?: keyof typeof TAGS;
  index?: number;
  lift?: boolean;
  y?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const Tag = TAGS[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.08 }}
      whileHover={lift ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 22 } } : undefined}
    >
      {children}
    </Tag>
  );
}
