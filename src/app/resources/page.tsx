import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { resourceCards } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Working notes for connected brand growth."
        copy="Short, practical reads on making digital and physical marketing work as one system: launches, content, search, campaigns and everything after the event."
      />
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourceCards.map((title) => (
            <article key={title} data-reveal className="group rounded-md border border-black/10 bg-white p-6 transition hover:bg-black hover:text-white">
              <div className="media-slot mb-6 group-hover:border-white/20 group-hover:bg-white/10" aria-hidden="true" />
              <h2 className="[overflow-wrap:anywhere] font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{title}</h2>
              <p className="mt-4 text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/68">A concise working guide for teams who want the system to be clearer before they spend more time or media budget.</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
