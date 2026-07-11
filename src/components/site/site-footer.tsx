import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-brand-paper px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1520px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Image src="/jiggsaw-logo-final.png" alt="Jiggsaw" width={900} height={260} className="h-auto w-36 object-contain" />
          <p className="mt-3 max-w-sm text-sm font-semibold leading-6 text-black/58">
            Digital setup to physical activation, built to work as one practical marketing system.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-3 gap-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center px-2 text-xs font-extrabold uppercase text-black/70 hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm font-semibold text-black/45">Copyright {new Date().getFullYear()} Jiggsaw. All rights reserved.</p>
      </div>
    </footer>
  );
}
