"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { ServiceGrid } from "@/components/site/service-grid";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { workSystems } from "@/lib/site-data";

const pillarLabels = ["Strategy", "Digital", "Creative", "Media", "Activation"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <SiteHeader />

      <section className="px-5 pb-8 pt-20 md:px-10 md:pb-12 md:pt-28 lg:px-[5vw]">
        <div className="max-w-[1320px]">
          <h1 className="font-display text-[clamp(2.7rem,10.6vw,4rem)] font-black uppercase leading-[1.08] md:text-[clamp(3.3rem,5.8vw,6.35rem)]">
            <span className="block">Digital and physical</span>
            <span className="block">growth system.</span>
          </h1>
          <p className="mt-9 max-w-[980px] text-[clamp(1.05rem,1.5vw,1.58rem)] font-semibold leading-[1.55] text-black/62">
            Jiggsaw sharpens the proof, search paths, content and market moments that help serious buyers understand the business faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-[#ff6b00]">
              Start the conversation <ArrowRight className="size-4" />
            </Link>
            <Link href="/services" className="inline-flex h-12 items-center gap-2 rounded-md border border-black/15 px-5 text-sm font-extrabold text-black transition hover:border-black">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="marquee">
          <div className="marquee-track items-center gap-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="inline-flex items-center gap-10">
                <span className="outline-marquee">Proof, search, content, market.</span>
                <span className="font-display text-5xl font-black leading-none">*</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 lg:px-[5vw]">
        <div
          className="interactive-media relative aspect-video min-h-[260px] overflow-hidden bg-black"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
          }}
        >
          <video
            className="h-full w-full object-cover opacity-90"
            src="/media/jiggsaw-loop.mp4?v=5"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="interactive-media-color" />
          <div className="interactive-media-grid" />
          <div className="interactive-media-glow" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white md:p-10">
            <div className="grid grid-cols-3 gap-4 font-display text-[0.72rem] font-black uppercase md:grid-cols-5 md:text-2xl">
              {pillarLabels.map((label) => (
                <span key={label} className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition duration-300 hover:text-[#f2ff00]">
                  {label}
                </span>
              ))}
            </div>
            <div className="pointer-events-none mx-auto max-w-5xl px-2 text-center">
              <h2 className="font-display text-[1rem] font-black uppercase leading-[0.9] drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] sm:text-[clamp(2.1rem,5.4vw,6.2rem)]">
                <span className="block">Website + Search</span>
                <span className="block">Content + Activation</span>
              </h2>
              <p className="mx-auto mt-3 hidden max-w-3xl font-display font-black uppercase text-white/88 sm:block sm:text-[clamp(1rem,2.4vw,2.2rem)]">
                Designed to carry buyers from trust to enquiry
              </p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section className="scroll-rise px-5 py-20 md:px-10 lg:px-[5vw]">
        <div className="mx-auto max-w-[1520px]">
          <div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center">
            <h2 className="text-[clamp(2.55rem,4.15vw,4.55rem)] font-black uppercase leading-none xl:whitespace-nowrap">
              From credibility to enquiry.
            </h2>
            <Link href="/services" className="group inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-full border border-black/20 bg-white px-4 text-xs font-extrabold uppercase shadow-[3px_3px_0_#111] transition hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-[5px_5px_0_#ff6b00]">
              View all services <ArrowRight className="size-4" />
            </Link>
          </div>
          <ServiceGrid limit={6} />
        </div>
      </section>

      <LogoMarquee />

      <section className="scroll-rise bg-[#f5f2ec] px-5 py-20 md:px-10 lg:px-[5vw]">
        <div className="mx-auto max-w-[1520px]">
          <div className="mb-8 flex flex-col gap-4">
            <h2 className="text-[clamp(2.65rem,4.2vw,5rem)] font-black uppercase leading-none xl:whitespace-nowrap">Work built around proof.</h2>
            <p className="max-w-2xl text-lg font-semibold leading-8 text-black/62">
              The work starts where buyers hesitate: capability, approvals, search clarity, content consistency and follow-up after market activity.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {workSystems.slice(0, 3).map((work) => (
              <article key={work.title} className="creative-card min-h-72 rounded-md border border-black/10 bg-white p-6 shadow-sm transition duration-300">
                <div className="media-slot mb-8" aria-hidden="true" />
                <h3 className="text-4xl font-black uppercase leading-none">{work.title}</h3>
                <p className="mt-6 font-semibold leading-7 text-black/62">{work.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-rise bg-black px-5 py-16 text-white md:px-10 lg:px-[5vw]">
        <div className="mx-auto grid max-w-[1520px] gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
          <h2 className="max-w-5xl text-5xl font-black uppercase leading-none sm:text-7xl">
            Bring the website, content, search and market story into one view.
          </h2>
          <div>
            <p className="text-lg font-semibold leading-8 text-white/68">
              Share the category, markets and current gaps. Jiggsaw will map the first useful moves.
            </p>
            <Link href="/contact" className="mt-6 inline-flex h-12 items-center gap-2 rounded-md bg-white px-5 text-sm font-extrabold text-black transition hover:bg-[#f2ff00]">
              Build the system <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
