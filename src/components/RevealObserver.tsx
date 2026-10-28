"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds a subtle fade-up to [data-reveal] elements as they enter the viewport.
// Content is fully visible without JavaScript and with reduced motion.
export function RevealObserver() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
      else {
        el.classList.add("reveal-pending");
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
