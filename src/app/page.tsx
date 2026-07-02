"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Code2,
  Megaphone,
  Search,
  Sparkles,
} from "lucide-react";
import { LogoMarquee } from "@/components/site/logo-marquee";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#services", menu: true },
  { label: "Scope", href: "#scope" },
  { label: "About", href: "#about", menu: true },
  { label: "Contact", href: "#contact" },
];

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
    icon: Search,
    title: "Activation Strategy",
    copy: "On-ground ideas, event extensions, launch moments, brand activations, and physical experiences connected back to measurable growth.",
  },
];

const cultureCards = [
  {
    title: "Digital systems that know what happens offline",
    label: "Screens + Streets",
    tone: "bg-[#ff3bd7]",
  },
  {
    title: "Campaigns built for attention, footfall, and follow-through",
    label: "Media + Activation",
    tone: "bg-[#ff3f05]",
  },
  {
    title: "Entertainment lineage shaped into brand growth",
    label: "Scope Network",
    tone: "bg-[#0874e8]",
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
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <header className="sticky top-0 z-50 bg-white">
        <div className="hidden h-8 items-center justify-center border-b border-black/5 text-sm md:flex">
          <span>Jiggsaw connects digital growth with physical brand presence.</span>
          <span className="ml-1 font-semibold text-[#ff4901]">Explore the work.</span>
        </div>
        <div className="grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-3 px-5 md:gap-5 md:px-10 lg:px-[5vw]">
          <a href="#home" className="flex w-[132px] items-center md:w-[168px]">
            <Image
              src="/jiggsaw-logo-2026.png"
              alt="Jiggsaw"
              width={900}
              height={260}
              priority
              className="h-auto w-full object-contain"
            />
          </a>

          <nav className="hidden justify-self-center md:flex md:items-center md:gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-black transition hover:text-[#ff4901]"
              >
                {item.label}
                {item.menu ? <ChevronDown className="size-4 transition group-hover:translate-y-0.5" /> : null}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-full bg-black px-4 text-sm font-bold text-white transition hover:bg-[#ff4901] md:h-12 md:px-6 md:text-base"
          >
            Contact Us
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <section id="home" className="px-5 pb-8 pt-24 md:px-10 md:pb-12 md:pt-32 lg:px-[5vw]">
        <div className="max-w-[1120px]">
          <h1 className="font-display text-[clamp(2.7rem,10.6vw,4rem)] font-black leading-[1.08] tracking-[-0.04em] md:text-[clamp(3.2rem,6.15vw,6.7rem)]">
            We put every piece of your brand&apos;s digital and physical presence together.
          </h1>
          <p className="mt-9 max-w-[1160px] text-[clamp(1.05rem,1.5vw,1.58rem)] font-medium leading-[1.55] tracking-[-0.035em]">
            A premium marketing partner for brands that need strategy, content, media, digital journeys, and on-ground experiences working as one growth system.
          </p>
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

      <section className="px-5 pb-24 md:px-10 lg:px-[5vw]">
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
              <h2 className="max-w-full font-display text-[clamp(1.35rem,7.1vw,6.2rem)] font-black uppercase leading-[0.98] tracking-[-0.025em] [overflow-wrap:anywhere] drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] md:text-[clamp(2.1rem,5.4vw,6.2rem)] md:leading-[0.9] md:tracking-[-0.04em]">
                Digital + Physical + Growth
              </h2>
              <p className="mx-auto mt-3 max-w-[20rem] font-display text-[clamp(0.72rem,3.2vw,2.2rem)] font-black uppercase leading-tight tracking-[-0.01em] text-white/88 md:max-w-none md:text-[clamp(1rem,2.4vw,2.2rem)] md:tracking-[-0.04em]">
                Screens. Streets. Stages. Sales.
              </p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-5 py-24 md:px-10 lg:px-[5vw]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-[#0469e3]">Proof network</p>
            <h2 className="font-display mt-4 max-w-3xl text-[clamp(3.1rem,6vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.04em]">
              Brands in the orbit.
            </h2>
          </div>
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.035em] text-black/62">
            A relationship map shaped by entertainment, events, activations, media, and digital work. It is the context Jiggsaw now turns into connected brand presence.
          </p>
        </div>
      </section>

      <LogoMarquee />

      <section id="about" className="bg-white px-5 py-24 md:px-10 lg:px-[5vw]">
        <div className="mb-12">
          <p className="font-display text-xl font-black tracking-[-0.035em]">The Jiggsaw model</p>
          <div className="mt-4 flex items-center gap-8">
            <div className="font-display text-[clamp(5rem,16vw,15rem)] font-black uppercase leading-none text-transparent outline-word">
              Jiggsaw
            </div>
          </div>
        </div>

        <div className="grid min-h-[560px] md:grid-cols-2">
          <div className="flex items-end bg-[#111] p-8 text-white md:p-12">
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-white/45">Operating idea</p>
              <h3 className="font-display mt-5 max-w-md text-[clamp(2.4rem,4.5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.04em]">
                Strategy for the screen. Execution for the room.
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {cultureCards.map((card) => (
              <article key={card.title} className={`${card.tone} flex min-h-[280px] flex-col justify-between p-7 text-white`}>
                <span className="font-display text-xs font-black uppercase tracking-[0.22em] opacity-70">
                  {card.label}
                </span>
                <h4 className="font-display text-[clamp(2.3rem,3.4vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
                  {card.title}
                </h4>
                <span className="grid size-9 place-items-center rounded-full bg-white text-black">
                  <ArrowRight className="size-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-24 md:px-10 lg:px-[5vw]">
        <div className="mb-12 max-w-5xl">
          <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-[#ff4901]">Solutions</p>
          <h2 className="font-display mt-4 text-[clamp(3rem,6.4vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.04em]">
            One system across digital demand and physical recall.
          </h2>
        </div>
        <div className="grid border-l border-t border-black/10 md:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex min-h-[520px] flex-col justify-between border-b border-r border-black/10 p-7 transition hover:bg-black hover:text-white"
              >
                <div>
                  <div className="mb-16 flex items-center justify-between">
                    <Icon className="size-8 text-[#0469e3] group-hover:text-[#fbff15]" />
                    <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35 group-hover:text-white/50">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-[clamp(2.2rem,3.8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.04em] text-black/15 group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base font-medium leading-7 text-black/62 group-hover:text-white/68">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="scope" className="grid border-y border-black bg-black text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[420px] flex-col justify-between border-b border-white/20 p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-[#fbff15]">Scope association</p>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,5vw,5.7rem)] font-black uppercase leading-[0.9] tracking-[-0.04em]">
              Built with entertainment and activation DNA.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/68">
              Jiggsaw is associated with{" "}
              <a
                href="https://scopeentertainment.in/"
                target="_blank"
                rel="noreferrer"
                className="text-white underline decoration-[#fbff15] decoration-2 underline-offset-4 transition hover:text-[#fbff15]"
              >
                Scope Entertainment
              </a>
              , bringing live experiences, music, content production, and digital activation expertise into a business-first marketing agency model.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={value} className="border-t border-white/25 pt-4">
                <p className="font-display text-5xl font-black">{value}</p>
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
                className="group flex items-center justify-between border-b border-white/20 p-6 transition hover:bg-[#0469e3] last:border-b-0 sm:p-10"
              >
                <div>
                  <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-white/40">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-black uppercase leading-[0.96] tracking-[-0.04em] sm:text-5xl">
                    {line}
                  </h3>
                </div>
                <BadgeCheck className="size-8 shrink-0 text-[#fbff15] transition group-hover:scale-110" />
              </div>
            ),
          )}
        </div>
      </section>

      <footer id="contact" className="border-t border-black bg-white px-5 py-10 text-black md:px-10 lg:px-[5vw]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Image
              src="/jiggsaw-logo-2026.png"
              alt="Jiggsaw"
              width={900}
              height={260}
              className="h-auto w-[158px] object-contain"
            />
            <p className="mt-4 max-w-md text-sm font-semibold text-black/55">
              Digital and physical marketing presence, put together piece by piece.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-black uppercase tracking-[0.16em]">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#ff4901]">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm font-bold text-black/50">
            Copyright {new Date().getFullYear()} Jiggsaw. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
