import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { GsapReveals } from "@/components/site/gsap-reveals";
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
      <GsapReveals />
      <SiteHeader />
      <PageHero eyebrow={`${service.number} / ${service.eyebrow}`} title={service.title} copy={service.intro} />
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-6 lg:grid-cols-[0.36fr_1fr]">
          <aside className="rounded-md bg-brand-ink p-6 text-white lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-yellow">Expected outcomes</p>
            <div className="mt-6 space-y-4">
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3 border-t border-white/12 pt-4">
                  <Check className="size-5 shrink-0 text-brand-yellow" />
                  <p className="font-display text-sm font-black uppercase tracking-[0.04em]">{outcome}</p>
                </div>
              ))}
            </div>
          </aside>
          <div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.deliverables.map((deliverable, index) => (
                <div key={deliverable} data-reveal className="rounded-md border border-black/10 bg-brand-paper p-6">
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35">0{index + 1}</p>
                  <h2 className="mt-3 [overflow-wrap:anywhere] font-display text-xl font-black uppercase leading-[1.02] tracking-[-0.02em] sm:text-2xl">{deliverable}</h2>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-black/10 pt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-extrabold uppercase">
                <ArrowLeft className="size-4" /> All services
              </Link>
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-brand-orange">
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
