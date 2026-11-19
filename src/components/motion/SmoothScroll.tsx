"use client";

import "lenis/dist/lenis.css";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

/** Space kept above a scroll target so it isn't hidden behind the sticky header. */
const headerOffset = () => -((document.querySelector("header")?.offsetHeight ?? 100) + 16);

/**
 * Site-wide smooth scrolling. Lenis honours prefers-reduced-motion by default, smooths in-page
 * anchor links (offset below the sticky header), and lets nested scrollers (mobile menu,
 * comparison table) scroll natively.
 */
export function SmoothScroll() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1,
        allowNestedScroll: true,
        anchors: { offset: -132 },
      }}
    >
      <RouteReset />
    </ReactLenis>
  );
}

// Next.js resets scroll on navigation natively; keep Lenis' internal position in sync with it.
function RouteReset() {
  const lenis = useLenis();
  const pathname = usePathname();
  const lastPath = useRef(pathname);
  useEffect(() => {
    // Skip the first run so a reload keeps the browser's restored scroll position.
    if (!lenis || lastPath.current === pathname) return;
    lastPath.current = pathname;
    if (!window.location.hash) lenis.scrollTo(0, { immediate: true, force: true });
  }, [lenis, pathname]);
  return null;
}

/** Smoothly scroll to an element, via Lenis when it's running, native scroll otherwise. */
export function useScrollToElement() {
  const lenis = useLenis();
  return useCallback(
    (el: Element | null | undefined) => {
      if (!el) return;
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: headerOffset(), duration: 1.1 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [lenis],
  );
}

/** Pause page scrolling (e.g. while the mobile menu is open). */
export function useScrollLock(locked: boolean) {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) {
      document.body.style.overflow = locked ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }
    if (locked) lenis.stop();
    else lenis.start();
    return () => lenis.start();
  }, [lenis, locked]);
}
