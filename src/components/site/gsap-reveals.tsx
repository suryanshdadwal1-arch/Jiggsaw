"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates every element marked with `data-reveal` on the current page.
 * Mount once per page. Elements can set `data-reveal-delay` (seconds).
 */
export function GsapReveals() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      for (const element of elements) {
        gsap.from(element, {
          autoAlpha: 0,
          y: 28,
          duration: 0.7,
          ease: "power2.out",
          delay: Number(element.dataset.revealDelay ?? 0),
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      }
    });

    return () => mm.revert();
  }, []);

  return null;
}
