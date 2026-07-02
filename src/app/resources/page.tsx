import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { resourceCards } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Working notes for better B2B marketing."
        copy="A focused resource area for teams planning website clarity, search visibility, content proof, paid campaigns and offline-to-digital follow-up."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourceCards.map((title, index) => (
            <article key={title} className="group min-h-[360px] rounded-md border border-black/10 bg-white p-6 transition hover:bg-black hover:text-white">
              <div className="media-slot mb-8 group-hover:border-white/20 group-hover:bg-white/10" aria-hidden="true" />
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">{title}</h2>
              <p className="mt-8 font-semibold leading-7 text-black/62 group-hover:text-white/68">A concise working guide for teams who want the system to be clearer before they spend more time or media budget.</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
