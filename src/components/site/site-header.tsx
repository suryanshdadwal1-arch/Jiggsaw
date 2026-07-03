"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/94 backdrop-blur">
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-black/5">
        <div className="h-full bg-brand-orange transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="mx-auto flex min-h-20 max-w-[1520px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex w-32 items-center sm:w-40">
          <Image
            src="/jiggsaw-logo-final.png"
            alt="Jiggsaw"
            width={900}
            height={260}
            priority
            className="h-auto w-full object-contain"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-black px-4 text-sm font-extrabold text-white transition hover:bg-brand-orange"
          >
            Start
            <ArrowRight className="size-4" />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex size-11 items-center justify-center rounded-md border border-black/15 lg:hidden" aria-label="Open navigation">
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white text-black">
              <SheetTitle className="px-6 pt-6 text-xs font-black uppercase tracking-[0.26em] text-black/45">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-1 px-6 pt-2">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`border-b border-black/10 py-4 font-display text-2xl font-black uppercase tracking-[-0.02em] transition hover:text-brand-orange ${
                        isActive(item.href) ? "text-brand-orange" : "text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-brand-orange"
                  >
                    Start a project
                    <ArrowRight className="size-4" />
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
