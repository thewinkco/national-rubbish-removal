"use client";

import { useEffect } from "react";
import { useScrollToElement } from "./motion/SmoothScroll";

// The old site linked to /services?tab=<category>. Keep those links working by scrolling to the matching section.
export function TabAnchor() {
  const scrollTo = useScrollToElement();
  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    if (tab) scrollTo(document.getElementById(tab));
  }, [scrollTo]);
  return null;
}
