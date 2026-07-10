"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({
  caseStudy,
  className = "",
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  caseStudy: CaseStudy;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      aria-label={`View case study: ${caseStudy.title}`}
      className={`portfolio-card group relative overflow-hidden bg-brand-ink text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow ${className}`}
      style={
        {
          "--portfolio-overlay": caseStudy.overlay,
          "--portfolio-highlight": caseStudy.highlight,
          "--cover-ratio": `${caseStudy.coverWidth} / ${caseStudy.coverHeight}`,
          aspectRatio: `${caseStudy.coverWidth} / ${caseStudy.coverHeight}`,
        } as CSSProperties
      }
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
    >
      <Image
        src={caseStudy.coverImage}
        alt={`${caseStudy.title} cover image`}
        fill
        sizes={sizes}
        className="portfolio-card-image object-contain"
        loading="lazy"
      />
      <div className="portfolio-card-shade" aria-hidden="true" />
      <div className="portfolio-card-content">
        <p className="font-display text-[0.8rem] font-black uppercase tracking-[0.2em] text-white/70">
          {caseStudy.category}
        </p>
        <h4 className="mt-4 max-w-[23rem] font-display text-[clamp(1.75rem,2.15vw,2.45rem)] font-black uppercase leading-[0.94] tracking-[-0.02em]">
          {caseStudy.title}
        </h4>
        <p className="mt-4 max-w-[23rem] text-[1rem] font-semibold leading-7 text-white/78">
          {caseStudy.cardDescription}
        </p>
        <span className="mt-7 grid size-10 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1 group-focus-visible:translate-x-1">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
