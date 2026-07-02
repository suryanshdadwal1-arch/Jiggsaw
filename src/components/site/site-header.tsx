"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/94 backdrop-blur">
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/5">
        <div className="h-full bg-[#ff6b00] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="mx-auto flex min-h-20 max-w-[1520px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex w-32 items-center sm:w-40">
          <Image
            src="/jiggsaw-logo-2026.png"
            alt="Jiggsaw"
            width={900}
            height={260}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-black px-4 text-sm font-extrabold text-white transition hover:bg-[#ff6b00]"
          >
            Start
            <ArrowRight className="size-4" />
          </Link>
          <button className="inline-flex size-11 items-center justify-center rounded-md border border-black/15 lg:hidden" aria-label="Open navigation">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
