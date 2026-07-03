import Image from "next/image";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { workSystems } from "@/lib/site-data";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Work"
        title="Systems Jiggsaw builds and scales."
        copy="The work is organized around real business situations: launches that need momentum, venues that need footfall, brands that need recall, and campaigns that need to convert."
        desktopNoWrap
      />
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workSystems.map((work) => (
            <article key={work.title} data-reveal className="group rounded-md border border-black/10 bg-white p-6 transition hover:bg-black hover:text-white">
              <div className="work-card-media media-slot mb-6 group-hover:border-white/20 group-hover:bg-white/10">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                  className="object-contain"
                />
              </div>
              <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-blue group-hover:text-brand-yellow">{work.label}</p>
              <h2 className="mt-3 [overflow-wrap:anywhere] font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{work.title}</h2>
              <p className="mt-4 text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/68">{work.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
