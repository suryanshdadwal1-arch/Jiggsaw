import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceModules } from "@/lib/site-data";

export function ServiceGrid({ limit }: { limit?: number }) {
  const modules = typeof limit === "number" ? serviceModules.slice(0, limit) : serviceModules;

  return (
    <div className="grid border-l border-t border-black/10 md:grid-cols-2 xl:grid-cols-3">
      {modules.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          data-reveal
          className="creative-card group flex min-h-[240px] flex-col justify-between gap-6 border-b border-r border-black/10 bg-white p-6 transition duration-300 hover:bg-black hover:text-white"
        >
          <div>
            <div className="flex items-start justify-between gap-4">
              <span className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35 group-hover:text-white/50">{service.number}</span>
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </div>
            <h3 className="mt-6 [overflow-wrap:anywhere] font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{service.title}</h3>
          </div>
          <p className="max-w-md text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/70">{service.short}</p>
        </Link>
      ))}
    </div>
  );
}
