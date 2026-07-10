"use client";

import { useEffect } from "react";

/**
 * Animates every element marked with `data-reveal` on the current page.
 * Mount once per page. Elements can set `data-reveal-delay` (seconds).
 */
export function GsapReveals() {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    let idleId: number | ReturnType<typeof globalThis.setTimeout> | undefined;
    let usedIdleCallback = false;

    const startReveals = async () => {
      if (cancelled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const aboveFoldCutoff = window.innerHeight * 0.9;

      for (const element of elements) {
        const delay = Number(element.dataset.revealDelay ?? 0);
        const isInitiallyVisible = element.getBoundingClientRect().top < aboveFoldCutoff;

        if (isInitiallyVisible) {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              delay,
              clearProps: "opacity,visibility,transform",
            },
          );
          continue;
        }

        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            delay,
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      window.setTimeout(() => {
        for (const element of elements) {
          if (element.style.opacity === "0" || element.style.visibility === "hidden") {
            gsap.set(element, { clearProps: "opacity,visibility,transform" });
          }
        }
      }, 4500);
    });

      cleanup = () => mm.revert();
    };

    const scheduleIdle = window.requestIdleCallback?.bind(window);

    if (scheduleIdle) {
      usedIdleCallback = true;
      idleId = scheduleIdle(() => {
        void startReveals();
      }, { timeout: 900 });
    } else {
      idleId = globalThis.setTimeout(() => {
        void startReveals();
      }, 250);
    }

    return () => {
      cancelled = true;

      if (idleId !== undefined) {
        if (usedIdleCallback && window.cancelIdleCallback) {
          window.cancelIdleCallback(idleId as number);
        } else {
          globalThis.clearTimeout(idleId);
        }
      }

      cleanup?.();
    };
  }, []);

  return null;
}
