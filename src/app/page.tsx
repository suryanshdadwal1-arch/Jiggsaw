"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  MapPin,
  Megaphone,
  PenTool,
  Search,
  Share2,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { caseStudies } from "@/lib/case-studies";

const pillarLabels = ["Digital", "Physical", "Creative", "Media", "Growth"];

const solutionCards = [
  {
    number: "01",
    icon: Sparkles,
    title: "Brand Systems",
    copy: "Positioning, campaign worlds, launch language and identity direction that keep every touchpoint aligned.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Website Experience",
    copy: "Websites, landing pages and digital journeys built to make credibility easier to understand and act on.",
  },
  {
    number: "03",
    icon: Search,
    title: "SEO + EEO Discovery",
    copy: "Search, AI discovery, FAQs, schema and content structures built around how buyers actually research.",
  },
  {
    number: "04",
    icon: Share2,
    title: "SMM + SMO",
    copy: "Social platforms planned around consistency, proof, profile clarity and audience engagement.",
  },
  {
    number: "05",
    icon: PenTool,
    title: "Content Creation",
    copy: "Reels, photos, graphics, copy and campaign assets that make the brand look active and trusted.",
  },
  {
    number: "06",
    icon: Video,
    title: "Creative Production",
    copy: "Shoots, brand films, product visuals, interviews and edits shaped with clear campaign direction.",
  },
  {
    number: "07",
    icon: Megaphone,
    title: "Media + Funnels",
    copy: "Paid media, retargeting, landing pages, WhatsApp flows and enquiry paths built for follow-up.",
  },
  {
    number: "08",
    icon: Users,
    title: "Influencer + Celebrity",
    copy: "Creator partnerships, influencer campaigns and ambassador onboarding planned around campaign fit.",
  },
  {
    number: "09",
    icon: MapPin,
    title: "Events + Activation",
    copy: "Dealer meets, builder meets, launches and physical brand moments connected back to digital visibility.",
  },
];

type SolutionSlot = {
  current: number;
  previous?: number;
};

const stats = [
  ["500+", "experiences through Scope"],
  ["10M+", "audiences reached"],
  ["80+", "brand collaborations"],
];

export default function Home() {
  const [activePillar, setActivePillar] = useState(2);
  const [solutionSlots, setSolutionSlots] = useState<SolutionSlot[]>([
    { current: 0 },
    { current: 1 },
    { current: 2 },
    { current: 3 },
  ]);
  const pausedSolutionSlots = useRef(new Set<number>());
  const nextSolutionIndex = useRef(4);
  const solutionSlotCursor = useRef(0);
  const solutionClearTimers = useRef<Array<number | undefined>>([]);

  useEffect(() => {
    const pillarTimer = window.setInterval(() => {
      setActivePillar((current) => (current + 1) % pillarLabels.length);
    }, 1800);

    return () => window.clearInterval(pillarTimer);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const rotateSolution = () => {
      let targetSlot = solutionSlotCursor.current;
      let attempts = 0;

      while (attempts < 4 && pausedSolutionSlots.current.has(targetSlot)) {
        targetSlot = (targetSlot + 1) % 4;
        attempts += 1;
      }

      solutionSlotCursor.current = (targetSlot + 1) % 4;

      if (attempts >= 4) {
        return;
      }

      const nextCard = nextSolutionIndex.current;
      nextSolutionIndex.current = (nextSolutionIndex.current + 1) % solutionCards.length;

      if (solutionClearTimers.current[targetSlot]) {
        window.clearTimeout(solutionClearTimers.current[targetSlot]);
      }

      setSolutionSlots((currentSlots) => {
        const updatedSlots = [...currentSlots];
        updatedSlots[targetSlot] = {
          current: nextCard,
          previous: currentSlots[targetSlot].current,
        };
        return updatedSlots;
      });

      solutionClearTimers.current[targetSlot] = window.setTimeout(() => {
        setSolutionSlots((currentSlots) => {
          const updatedSlots = [...currentSlots];
          updatedSlots[targetSlot] = { current: currentSlots[targetSlot].current };
          return updatedSlots;
        });
      }, 650);
    };

    const solutionTimer = window.setInterval(rotateSolution, 2100);

    return () => {
      window.clearInterval(solutionTimer);
      solutionClearTimers.current.forEach((timer) => {
        if (timer) {
          window.clearTimeout(timer);
        }
      });
    };
  }, []);

  const renderSolutionContent = (solutionIndex: number) => {
    const service = solutionCards[solutionIndex];
    const Icon = service.icon;

    return (
      <>
        <div>
          <div className="mb-8 flex items-center justify-between">
            <Icon className="solution-card-icon size-7 text-brand-blue transition group-hover:text-brand-orange" />
            <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35">
              {service.number}
            </span>
          </div>
          <h3 className="font-display text-2xl font-black uppercase leading-[0.95] tracking-[-0.02em] lg:text-3xl">
            {service.title}
          </h3>
        </div>
        <p className="text-[0.95rem] font-medium leading-7 text-black/62">{service.copy}</p>
      </>
    );
  };

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
        <div className="max-w-[1520px]">
          <div className="max-w-[1520px]">
            <h1 data-reveal className="font-display text-[clamp(2.4rem,8.5vw,3.4rem)] font-black leading-[1.06] tracking-[-0.03em] md:text-[clamp(3rem,4.8vw,5.2rem)]">
              We put every piece of your brand&apos;s digital and physical presence together.
            </h1>
            <p data-reveal data-reveal-delay="0.15" className="mt-6 max-w-[1180px] text-[clamp(1.02rem,1.3vw,1.3rem)] font-medium leading-[1.6] text-black/70">
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
            <h2 className="font-display max-w-3xl text-[clamp(2.1rem,4vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
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
            <div className="flex items-center gap-8">
              <div className="outline-word font-display text-[clamp(3rem,10.5vw,9rem)] font-black uppercase leading-none text-transparent">
                Jiggsaw
              </div>
            </div>
          </div>

          <div data-reveal className="grid min-h-[460px] md:grid-cols-2">
            <div className="flex items-end bg-brand-ink p-8 text-white md:p-10">
              <div className="max-w-xl">
                <p className="mb-5 font-display text-xs font-black uppercase tracking-[0.24em] text-white/55">
                  Work / Case Studies
                </p>
                <h3 className="font-display max-w-md text-[clamp(1.9rem,3.2vw,3.4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
                  Selected work in motion.
                </h3>
                <p className="mt-5 max-w-md text-[0.98rem] font-semibold leading-7 text-white/62">
                  Campaigns, activations and digital systems built across screens, stages and real-world brand moments.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              {caseStudies.map((card) => (
                <Link
                  key={card.slug}
                  href={`/work/${card.slug}`}
                  aria-label={`View case study: ${card.title}`}
                  className="portfolio-card group relative min-h-[260px] overflow-hidden bg-brand-ink text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow"
                  style={
                    {
                      "--portfolio-overlay": card.overlay,
                      "--portfolio-highlight": card.highlight,
                    } as CSSProperties
                  }
                  onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
                  }}
                >
                  <Image
                    src={card.coverImage}
                    alt={`${card.title} cover image`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="portfolio-card-image object-cover"
                    loading="lazy"
                  />
                  <div className="portfolio-card-shade" aria-hidden="true" />
                  <div className="portfolio-card-content">
                    <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-white/70">
                      {card.category}
                    </p>
                    <h4 className="mt-4 max-w-[20rem] font-display text-[clamp(1.35rem,2vw,2rem)] font-black uppercase leading-[0.98] tracking-[-0.02em]">
                      {card.title}
                    </h4>
                    <p className="mt-4 max-w-[21rem] text-[0.9rem] font-semibold leading-6 text-white/76">
                      {card.cardDescription}
                    </p>
                    <span className="mt-7 grid size-10 place-items-center rounded-full bg-white text-black transition group-hover:translate-x-1 group-focus-visible:translate-x-1">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <div data-reveal className="mb-10 max-w-4xl">
            <h2 className="font-display text-[clamp(2.1rem,4vw,4rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]">
              One system across digital demand and physical recall.
            </h2>
          </div>
          <div className="grid border-l border-t border-black/10 md:grid-cols-4">
            {solutionSlots.map((slot, index) => (
              <article
                key={index}
                data-reveal
                data-reveal-delay={`${index * 0.06}`}
                className={`solution-card group relative min-h-[340px] overflow-hidden border-b border-r border-black/10 bg-white transition hover:border-brand-orange/35 hover:bg-brand-paper/45 ${typeof slot.previous === "number" ? "is-swapping" : ""}`}
                onMouseEnter={() => pausedSolutionSlots.current.add(index)}
                onMouseLeave={() => pausedSolutionSlots.current.delete(index)}
                onFocus={() => pausedSolutionSlots.current.add(index)}
                onBlur={() => pausedSolutionSlots.current.delete(index)}
                tabIndex={0}
                aria-label={`${solutionCards[slot.current].number} ${solutionCards[slot.current].title}`}
              >
                {typeof slot.previous === "number" ? (
                  <div className="solution-card-layer solution-card-previous" aria-hidden="true">
                    {renderSolutionContent(slot.previous)}
                  </div>
                ) : null}
                <div className="solution-card-layer solution-card-current">
                  {renderSolutionContent(slot.current)}
                </div>
              </article>
            ))}
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
            <h2 className="break-words font-display text-[clamp(1.9rem,3.4vw,3.6rem)] font-black uppercase leading-[0.94] tracking-[-0.03em]">
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
