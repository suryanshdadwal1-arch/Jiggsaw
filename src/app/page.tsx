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

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Solutions", href: "#services", menu: true },
  { label: "About", href: "#about", menu: true },
  { label: "Resources", href: "#clients", menu: true },
  { label: "Careers", href: "#contact" },
];

const pillarLabels = ["Strategy", "Culture", "Creative", "Media", "Technology"];

const clients = [
  "BookMyShow",
  "boAt",
  "Forest Hill",
  "Svami",
  "CP67",
  "Homeland",
  "Tarish Entertainment",
  "Varahi Ltd.",
  "Team Innovation",
  "PVR Cinemas",
  "MY FM",
  "Envision",
  "Saregama",
  "24 Seven",
  "T-Series",
  "Speed Records",
  "SmartQ",
  "Times Music",
  "Red FM",
  "realme",
  "ZEE LIVE",
  "Omaxe",
  "Venky's",
  "HSBC",
  "Coca-Cola",
  "Kingfisher",
  "HDFC Bank",
  "Levi's",
  "Daily Post",
  "Tashan",
  "Johnnie Walker",
  "Ishq FM",
  "Spotify",
  "Royal Enfield",
  "Redmi",
  "Tuborg",
  "SBI",
  "Jack & Jones",
  "Vencobb",
  "Holiday Inn",
  "PTC Punjabi",
  "One Vibe",
  "Livasa Hospitals",
  "Dainik Bhaskar",
  "Sheraton",
  "Meghalaya Tourism",
  "Tata Neu",
  "Magic Moments",
  "Haryana Tourism",
  "Virgin Megastore",
  "Big FM",
  "Yeti",
  "Falcon Real Estate",
  "Aryans Group",
  "GB Realty",
  "Soho Delhi",
  "Paytm Insider",
  "Hyundai",
  "The Indian Express",
  "Nicobar",
  "Pitaara Movies",
  "Om Jee's Group",
  "Jal",
  "Chaupal",
  "Sunburn",
  "Dev Bhoomi University",
  "Skillbox",
  "White Hill Studios",
  "Live Nation",
  "Paytm",
  "Zomato Live",
  "Phoenix Citadel",
  "Govt. of Punjab",
  "Chandigarh Administration",
  "Purple Effect Studio",
  "Mirchi One",
  "The Lalit",
  "Hyatt",
  "100 Pipers",
  "Plum",
  "Supersonic",
  "Nexa",
  "AJIO",
  "White Fox",
  "Two Odd Pecs",
  "vivo",
  "JBL",
  "Black & White",
  "Croma",
  "MB Chicken",
  "Marriott",
  "Absolut",
  "Wolf777 News",
  "The Tribune",
  "The Times of India",
  "Zebronics",
];

const services = [
  {
    icon: Sparkles,
    title: "Brand Solution",
    copy: "Strategy, identity systems, design language, social-first campaigns, launches, and brand worlds.",
  },
  {
    icon: Code2,
    title: "Tech Solution",
    copy: "Websites, digital products, commerce, CRM, automation, dashboards, and conversion journeys.",
  },
  {
    icon: Megaphone,
    title: "Media Solution",
    copy: "Paid media, channel planning, creator programs, social calendars, and performance optimization.",
  },
  {
    icon: Search,
    title: "Research Solution",
    copy: "Consumer insight, category mapping, social listening, content audits, and go-to-market planning.",
  },
];

const cultureCards = [
  {
    title: "Gamified web experience for a youth-first brand",
    label: "Brand + Tech",
    tone: "bg-[#ff3bd7]",
  },
  {
    title: "A launch system built across content, creators, and commerce",
    label: "Media + Film",
    tone: "bg-[#ff3f05]",
  },
  {
    title: "A digital platform designed to keep audiences returning",
    label: "Product",
    tone: "bg-[#0874e8]",
  },
];

const stats = [
  ["90+", "client brands mapped"],
  ["06", "solution verticals"],
  ["01", "integrated team"],
];

export default function Home() {
  const [activePillar, setActivePillar] = useState(2);
  const [activeClient, setActiveClient] = useState(0);

  useEffect(() => {
    const pillarTimer = window.setInterval(() => {
      setActivePillar((current) => (current + 1) % pillarLabels.length);
    }, 1800);

    return () => window.clearInterval(pillarTimer);
  }, []);

  useEffect(() => {
    const clientTimer = window.setInterval(() => {
      setActiveClient((current) => (current + 1) % clients.length);
    }, 1200);

    return () => window.clearInterval(clientTimer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <header className="sticky top-0 z-50 bg-white">
        <div className="hidden h-8 items-center justify-center border-b border-black/5 text-sm md:flex">
          <span>Jiggsaw is building creative, media and technology systems.</span>
          <span className="ml-1 font-semibold text-[#ff4901]">Explore the work.</span>
        </div>
        <div className="grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-3 px-5 md:gap-5 md:px-10 lg:px-[5vw]">
          <a href="#home" className="flex w-[132px] items-center md:w-[168px]">
            <Image
              src="/jiggsaw-logo.png"
              alt="Jiggsaw"
              width={1183}
              height={415}
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
          <h1 className="font-display text-[clamp(2.7rem,10.6vw,4rem)] font-black leading-[1.08] tracking-[-0.065em] md:text-[clamp(3.2rem,6.15vw,6.7rem)]">
            Your Creative, Media & Technology Transformation Partner
          </h1>
          <p className="mt-9 max-w-[1160px] text-[clamp(1.05rem,1.5vw,1.58rem)] font-medium leading-[1.55] tracking-[-0.035em]">
            We are an integrated team delivering brand, content, media and digital work for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="py-4">
        <div className="marquee">
          <div className="marquee-track items-center gap-10">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} className="inline-flex items-center gap-10">
                <span className="outline-marquee">It&apos;s time to make it click.</span>
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
              <h2 className="font-display text-[clamp(2.1rem,5.4vw,6.2rem)] font-black uppercase leading-[0.9] tracking-[-0.07em] drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)]">
                Creative + Media + Technology
              </h2>
              <p className="mt-3 font-display text-[clamp(1rem,2.4vw,2.2rem)] font-black uppercase tracking-[-0.04em] text-white/88">
                Built for culture, content, and conversion
              </p>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section id="clients" className="bg-white px-5 py-24 md:px-10 lg:px-[5vw]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:items-end">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-[#0469e3]">Clientele</p>
            <h2 className="font-display mt-4 max-w-3xl text-[clamp(3.1rem,6vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.07em]">
              Brands we build with.
            </h2>
          </div>
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.035em] text-black/62">
            Every collaboration gets the full frame: sharp, legible, and never cropped.
          </p>
        </div>

        <div className="grid border-l border-t border-black/20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {clients.map((client, index) => (
            <button
              key={client}
              type="button"
              onMouseEnter={() => setActiveClient(index)}
              onFocus={() => setActiveClient(index)}
              className={`client-grid-cell group flex min-h-[112px] items-center justify-center border-b border-r border-black/20 px-4 py-5 text-center transition duration-200 ${
                activeClient === index ? "is-active bg-black" : "bg-white hover:bg-black focus:bg-black"
              }`}
            >
              <span
                className={`font-display text-[clamp(1.04rem,1.2vw,1.24rem)] font-black uppercase leading-tight tracking-[-0.02em] transition duration-200 group-hover:text-white group-focus:text-white ${
                  activeClient === index ? "scale-[1.04] text-white" : "text-black"
                }`}
              >
                {client}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-24 md:px-10 lg:px-[5vw]">
        <div className="mb-12">
          <p className="font-display text-xl font-black tracking-[-0.05em]">What defines us</p>
          <div className="mt-4 flex items-center gap-8">
            <div className="font-display text-[clamp(5rem,16vw,15rem)] font-black uppercase leading-none text-transparent outline-word">
              Jiggsaw
            </div>
          </div>
        </div>

        <div className="grid min-h-[560px] md:grid-cols-2">
          <div className="flex items-end bg-[#111] p-8 text-white md:p-12">
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-white/45">Culture story</p>
              <h3 className="font-display mt-5 max-w-md text-[clamp(2.4rem,4.5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.065em]">
                Ideas built for motion, memory, and measurable action.
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {cultureCards.map((card) => (
              <article key={card.title} className={`${card.tone} flex min-h-[280px] flex-col justify-between p-7 text-white`}>
                <span className="font-display text-xs font-black uppercase tracking-[0.22em] opacity-70">
                  {card.label}
                </span>
                <h4 className="font-display text-[clamp(2.3rem,3.4vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
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
                  <h3 className="font-display text-[clamp(2.2rem,3.8vw,4.2rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-black/15 group-hover:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-base font-medium leading-7 text-black/62 group-hover:text-white/68">{service.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid border-y border-black bg-black text-white lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-[420px] flex-col justify-between border-b border-white/20 p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <div>
            <p className="font-display text-sm font-black uppercase tracking-[0.26em] text-[#fbff15]">Inside Jiggsaw</p>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,5vw,5.7rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
              Built like one connected team.
            </h2>
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
          {["Strategy that knows the room.", "Creative made for culture.", "Media that learns daily.", "Technology that carries the campaign."].map(
            (line, index) => (
              <div
                key={line}
                className="group flex items-center justify-between border-b border-white/20 p-6 transition hover:bg-[#0469e3] last:border-b-0 sm:p-10"
              >
                <div>
                  <p className="font-display text-sm font-black uppercase tracking-[0.2em] text-white/40">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-black uppercase leading-[0.96] tracking-[-0.05em] sm:text-5xl">
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
              src="/jiggsaw-logo.png"
              alt="Jiggsaw"
              width={1183}
              height={415}
              className="h-auto w-[158px] object-contain"
            />
            <p className="mt-4 max-w-md text-sm font-semibold text-black/55">
              Integrated creative, media, technology, and culture studio.
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
