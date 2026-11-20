"use client";

import { useEffect } from "react";

// The GoHighLevel chat widget renders inside a shadow root, so page CSS can't reach it. Below `lg` the
// sticky MobileCtaBar (~64px) sits at the bottom of the screen and the widget's launcher would cover its
// "Quote" button, so lift the launcher, prompt bubble and chat window above the bar.
const CSS = `@media (max-width: 1023.98px) {
  #lc_text-widget, #lc_text-widget--btn { bottom: calc(84px + env(safe-area-inset-bottom)) !important; }
}`;

export function ChatWidgetOffset() {
  useEffect(() => {
    let tries = 0;
    const timer = window.setInterval(() => {
      const root = document.querySelector("chat-widget")?.shadowRoot;
      if (root?.getElementById("lc_text-widget")) {
        if (!root.getElementById("nrr-chat-offset")) {
          const style = document.createElement("style");
          style.id = "nrr-chat-offset";
          style.textContent = CSS;
          root.appendChild(style);
        }
        window.clearInterval(timer);
      } else if (++tries > 120) {
        window.clearInterval(timer); // widget never loaded (blocked or disabled); stop after ~60s
      }
    }, 500);
    return () => window.clearInterval(timer);
  }, []);
  return null;
}
