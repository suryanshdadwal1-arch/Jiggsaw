import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { workSystems } from "@/lib/site-data";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero
        eyebrow="Work"
        title="Systems Jiggsaw can build and scale."
        copy="The work is organized around practical business situations: proof gaps, search gaps, content inconsistency, lead handoff and offline visibility that needs digital continuity."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {workSystems.map((work, index) => (
            <article key={work.title} className="group min-h-[360px] rounded-md border border-black/10 bg-white p-6 transition hover:bg-black hover:text-white">
              <div className="media-slot mb-8 group-hover:border-white/20 group-hover:bg-white/10" aria-hidden="true" />
              <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">{work.title}</h2>
              <p className="mt-8 font-semibold leading-7 text-black/62 group-hover:text-white/68">{work.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
