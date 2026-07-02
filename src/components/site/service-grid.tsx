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
          className="creative-card scroll-rise group flex min-h-[330px] flex-col justify-between border-b border-r border-black/10 bg-white p-6 transition duration-300 hover:bg-black hover:text-white"
        >
          <div>
            <div className="flex items-start justify-end gap-4">
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </div>
            <h3 className="mt-8 text-4xl font-black uppercase leading-none sm:text-5xl">{service.title}</h3>
          </div>
          <p className="max-w-md text-base font-semibold leading-7 text-black/62 group-hover:text-white/70">{service.short}</p>
        </Link>
      ))}
    </div>
  );
}
