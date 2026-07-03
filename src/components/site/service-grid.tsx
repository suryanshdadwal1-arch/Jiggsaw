"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { serviceModules } from "@/lib/site-data";

export function ServiceGrid({ limit }: { limit?: number }) {
  const modules = typeof limit === "number" ? serviceModules.slice(0, limit) : serviceModules;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRailCompact, setIsRailCompact] = useState(false);
  const activeService = modules[activeIndex] ?? modules[0];
  const railProgress = modules.length > 1 ? activeIndex / (modules.length - 1) : 0;
  const railStyle = { "--service-progress": `${railProgress}` } as CSSProperties & Record<string, string>;

  useEffect(() => {
    const updateRailState = () => {
      setIsRailCompact(window.scrollY > 320);
    };

    updateRailState();
    window.addEventListener("scroll", updateRailState, { passive: true });
    window.addEventListener("resize", updateRailState);
    return () => {
      window.removeEventListener("scroll", updateRailState);
      window.removeEventListener("resize", updateRailState);
    };
  }, []);

  return (
    <div className="space-y-5">
      <div
        className={`service-system-rail border border-black/10 bg-white p-4 ${isRailCompact ? "is-compact" : ""}`}
        data-reveal
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="service-rail-title font-display text-xs font-black uppercase tracking-[0.2em] text-black/35">Connected service system</p>
          </div>
          <p className="service-rail-readout hidden max-w-sm text-right text-sm font-bold leading-6 text-black/62 md:block" aria-live="polite">
            {activeService.number} / {activeService.title}
          </p>
        </div>
        <div className="service-power-line" style={railStyle}>
          {modules.map((service, index) => {
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;

            return (
              <button
                key={service.slug}
                type="button"
                className={`service-puzzle-step text-left ${isActive ? "is-active" : ""} ${isComplete ? "is-complete" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-label={`${service.number} ${service.title}`}
              >
                <span className="service-puzzle-piece" aria-hidden="true" />
                <span className="min-w-0 text-center">
                  <span className="service-step-number block font-display text-[0.65rem] font-black uppercase tracking-[0.18em] text-black/35">{service.number}</span>
                  <span className="service-step-label mt-1 hidden truncate text-xs font-extrabold text-black/72 md:block">{service.eyebrow}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid border-l border-t border-black/10 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((service, index) => (
          <article
            key={service.slug}
            data-reveal
            tabIndex={0}
            aria-label={`${service.number} ${service.title}`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            className="creative-card group flex min-h-[240px] flex-col justify-between gap-6 border-b border-r border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white hover:shadow-xl focus-visible:-translate-y-1 focus-visible:bg-black focus-visible:text-white focus-visible:shadow-xl"
          >
            <div>
              <div className="flex items-start gap-4">
                <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35 group-hover:text-white/50 group-focus-visible:text-white/50">{service.number}</span>
              </div>
              <h3 className="mt-6 [overflow-wrap:anywhere] font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{service.title}</h3>
            </div>
            <div className="space-y-5">
              <p className="max-w-md text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/70 group-focus-visible:text-white/70">{service.short}</p>
              <div className="service-role-reveal border-t border-black/10 pt-4 transition group-hover:border-white/16 group-focus-visible:border-white/16">
                <p className="font-display text-[0.68rem] font-black uppercase tracking-[0.18em] text-brand-orange group-hover:text-brand-yellow group-focus-visible:text-brand-yellow">Role</p>
                <p className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-black/52 group-hover:text-white/62 group-focus-visible:text-white/62">{service.intro}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
