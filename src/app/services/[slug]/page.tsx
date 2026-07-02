import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { serviceModules } from "@/lib/site-data";

export function generateStaticParams() {
  return serviceModules.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceModules.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero eyebrow={`${service.number} / ${service.eyebrow}`} title={service.title} copy={service.intro} />
      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-6 lg:grid-cols-[0.36fr_1fr]">
          <aside className="rounded-md bg-black p-6 text-white lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-extrabold uppercase text-[#f2ff00]">Expected outcomes</p>
            <div className="mt-8 space-y-4">
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 border-t border-white/12 pt-4">
                  <Check className="size-5 text-[#f2ff00]" />
                  <p className="font-extrabold uppercase">{outcome}</p>
                </div>
              ))}
            </div>
          </aside>
          <div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.deliverables.map((deliverable) => (
                <div key={deliverable} className="min-h-40 rounded-md border border-black/10 bg-[#f5f2ec] p-6">
                  <h2 className="text-3xl font-black uppercase leading-none">{deliverable}</h2>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-black/10 pt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-extrabold uppercase">
                <ArrowLeft className="size-4" /> All services
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white">
                Discuss this module <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
