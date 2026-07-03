"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  MapPin,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const pillarLabels = ["Digital", "Physical", "Creative", "Media", "Growth"];

const services = [
  {
    icon: Sparkles,
    title: "Brand Systems",
    copy: "Positioning, campaign worlds, launch language, identity direction, and the strategy that keeps every touchpoint aligned.",
  },
  {
    icon: Code2,
    title: "Digital Growth",
    copy: "Websites, funnels, social systems, commerce journeys, CRM flows, and performance paths built to turn attention into action.",
  },
  {
    icon: Megaphone,
    title: "Media Engine",
    copy: "Paid media, creator programs, channel planning, content calendars, and campaign learning loops that improve every month.",
  },
  {
    icon: MapPin,
    title: "Activation Strategy",
    copy: "On-ground ideas, event extensions, launch moments, brand activations, and physical experiences connected back to measurable growth.",
  },
];

const cultureCards = [
  {
    title: "Digital systems that know what happens offline",
    label: "Screens + Streets",
    tone: "bg-brand-magenta",
  },
  {
    title: "Campaigns built for attention, footfall, and follow-through",
    label: "Media + Activation",
    tone: "bg-brand-orange",
  },
  {
    title: "Entertainment lineage shaped into brand growth",
    label: "Scope Network",
    tone: "bg-brand-blue",
  },
];

const stats = [
  ["500+", "experiences through Scope"],
  ["10M+", "audiences reached"],
  ["80+", "brand collaborations"],
];

export default function Home() {
  const [activePillar, setActivePillar] = useState(2);

  useEffect(() => {
    const pillarTimer = window.setInterval(() => {
      setActivePillar((current) => (current + 1) % pillarLabels.length);
    }, 1800);

    return () => window.clearInterval(pillarTimer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <div className="hidden h-8 items-center justify-center border-b border-black/5 bg-white text-sm md:flex">
        <span>Jiggsaw connects digital growth with physical brand presence.</span>
        <Link href="/work" className="ml-1 font-semibold text-brand-orange hover:underline">
          Explore the work.
        </Link>
      </div>
      <SiteHeader />

      <section id="home" className="px-4 pb-10 pt-12 sm:px-6 md:pt-16 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div className="max-w-[1000px]">
            <h1 data-reveal className="font-display text-[clamp(2.4rem,8.5vw,3.4rem)] font-black leading-[1.06] tracking-[-0.03em] md:text-[clamp(3rem,4.8vw,5.2rem)]">
              We put every piece of your brand&apos;s digital and physical presence together.
            </h1>
            <p data-reveal data-reveal-delay="0.15" className="mt-6 max-w-[820px] text-[clamp(1.02rem,1.3vw,1.3rem)] font-medium leading-[1.6] text-black/70">
              A premium marketing partner for brands that need strategy, content, media, digital journeys, and on-ground experiences working as one growth system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="marquee">
          <div className="marquee-track items-center gap-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="inline-flex items-center gap-10">
                <span className="outline-marquee">Every piece in place.</span>
                <span className="font-display text-5xl font-black leading-none">*</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-10">
        <div
          data-reveal
          className="interactive-media relative mx-auto h-[300px] max-w-[1520px] overflow-hidden bg-black sm:aspect-video sm:h-auto"
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
            <div className="grid grid-cols-3 gap-4 font-display text-[0.72rem] font-black uppercase tracking-[-0.02em] md:grid-cols-5 md:text-2xl">
              {pillarLabels.map((label, index) => (
                <span
                  key={label}
                  className={`transition duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] ${
                    activePillar === index ? "text-white" : "text-white/62"
                  }`}
                  onMouseEnter={() => setActivePillar(index)}
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="pointer-events-none mx-auto max-w-5xl text-center">
              <h2 className="max-w-full font-display text-[clamp(1.35rem,7.1vw,4.6rem)] font-black uppercase leading-[0.98] tracking-[-0.025em] [overflow-wrap:anywhere] drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] md:text-[clamp(2.1rem,4.2vw,4.6rem)] md:leading-[0.9] md:tracking-[-0.03em]">
                Digital + Physical + Growth
              </h2>
              <p className="mx-auto mt-3 max-w-[20rem] font-display text-[clamp(0.72rem,3.2vw,1.7rem)] font-black uppercase leading-tight tracking-[-0.01em] text-white/88 md:max-w-none md:text-[clamp(1rem,1.9vw,1.7rem)] md:tracking-[-0.03em]">
                Screens. Streets. Stages. Sales.
              </p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-4 pb-6 pt-14 sm:px-6 lg:px-10">
        <div data-reveal className="mx-auto mb-2 grid max-w-[1520px] gap-6 lg:grid-cols-[0.5fr_1fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-brand-blue">Proof network</p>
            <h2 className="font-display mt-3 max-w-3xl text-[clamp(2.1rem,4vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
              Brands in the orbit.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-black/62">
            A relationship map shaped by entertainment, events, activations, media, and digital work. It is the context Jiggsaw now turns into connected brand presence.
          </p>
        </div>
      </section>

      <LogoMarquee />

      <section id="about" className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div data-reveal className="mb-8">
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-brand-magenta">The Jiggsaw model</p>
            <div className="mt-3 flex items-center gap-8">
              <div className="outline-word font-display text-[clamp(3rem,10.5vw,9rem)] font-black uppercase leading-none text-transparent">
                Jiggsaw
              </div>
            </div>
          </div>

          <div data-reveal className="grid min-h-[460px] md:grid-cols-2">
            <div className="flex items-end bg-brand-ink p-8 text-white md:p-10">
              <div>
                <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-white/45">Operating idea</p>
                <h3 className="font-display mt-4 max-w-md text-[clamp(1.9rem,3.2vw,3.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
                  Strategy for the screen. Execution for the room.
                </h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              {cultureCards.map((card) => (
                <article key={card.title} className={`${card.tone} flex min-h-[230px] flex-col justify-between gap-6 p-6 text-white`}>
                  <span className="font-display text-xs font-black uppercase tracking-[0.22em] opacity-70">
                    {card.label}
                  </span>
                  <h4 className="hyphens-auto break-words font-display text-[clamp(1.4rem,1.9vw,1.9rem)] font-black uppercase leading-[1.02] tracking-[-0.02em]">
                    {card.title}
                  </h4>
                  <span className="grid size-9 place-items-center rounded-full bg-white text-black">
                    <ArrowRight className="size-4" />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div data-reveal className="mb-10 max-w-4xl">
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-brand-orange">Solutions</p>
            <h2 className="font-display mt-3 text-[clamp(2.1rem,4vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
              One system across digital demand and physical recall.
            </h2>
          </div>
          <div className="grid border-l border-t border-black/10 md:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  data-reveal
                  data-reveal-delay={`${index * 0.06}`}
                  className="group flex min-h-[340px] flex-col justify-between gap-8 border-b border-r border-black/10 p-6 transition hover:bg-black hover:text-white"
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="size-7 text-brand-blue group-hover:text-brand-yellow" />
                      <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35 group-hover:text-white/50">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase leading-[0.95] tracking-[-0.02em] lg:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/68">{service.copy}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              href="/services"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-brand-orange"
            >
              Explore all services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="scope" className="grid border-y border-black bg-black text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[360px] flex-col justify-between gap-10 border-b border-white/20 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div data-reveal>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-brand-yellow">Scope association</p>
            <h2 className="break-words font-display mt-4 text-[clamp(1.9rem,3.4vw,3.6rem)] font-black uppercase leading-[0.94] tracking-[-0.03em]">
              Built with entertainment and activation DNA.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/68">
              Jiggsaw is associated with{" "}
              <a
                href="https://scopeentertainment.in/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-brand-yellow decoration-2 underline-offset-4 transition hover:text-brand-yellow"
              >
                Scope Entertainment
              </a>
              , bringing live experiences, music, content production, and digital activation expertise into a business-first marketing agency model.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={value} className="border-t border-white/25 pt-4">
                <p className="font-display text-4xl font-black">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid content-stretch">
          {["Digital presence built to convert.", "Physical moments built to be remembered.", "Media plans tied to momentum.", "Creative systems that hold it together."].map(
            (line, index) => (
              <div
                key={line}
                className="group flex items-center justify-between border-b border-white/20 p-6 transition hover:bg-brand-blue last:border-b-0 sm:p-8"
              >
                <div>
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-white/40">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">
                    {line}
                  </h3>
                </div>
                <BadgeCheck className="size-8 shrink-0 text-brand-yellow transition group-hover:scale-110" />
              </div>
            ),
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
