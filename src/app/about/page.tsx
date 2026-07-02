import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

const beliefs = [
  "A website without proof underperforms.",
  "Content without a journey loses momentum.",
  "Campaigns without follow-up waste attention.",
  "Offline visibility without digital continuity gets forgotten.",
  "Jiggsaw connects the entire system.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero
        eyebrow="About Jiggsaw"
        title="Connecting the pieces businesses treat separately."
        copy="Jiggsaw works across strategy, website, search, content, campaigns and activation so the brand story stays consistent from first impression to enquiry."
      />
      <section className="grid border-b border-black/10 lg:grid-cols-[0.42fr_1fr]">
        <div className="min-h-[420px] bg-[#08090d] p-6 text-white sm:p-10">
          <h2 className="mt-6 text-5xl font-black uppercase leading-none sm:text-7xl">
            Marketing works better when the pieces click together.
          </h2>
        </div>
        <div>
          {beliefs.map((belief, index) => (
            <div key={belief} className="flex gap-6 border-b border-black/10 p-6 last:border-b-0 sm:p-10">
              <p className="text-xs font-extrabold text-black/35">0{index + 1}</p>
              <h3 className="text-3xl font-black uppercase leading-none sm:text-5xl">{belief}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-3">
          {[
            ["System-first thinking", "We look at the whole buyer journey, not just isolated assets."],
            ["Execution-led approach", "We build, launch, measure and refine with practical constraints in mind."],
            ["Digital to physical continuity", "We help market movement travel across screen, space and sales follow-up."],
          ].map(([title, copy], index) => (
            <article key={title} className="rounded-md border border-black/10 bg-white p-6 shadow-sm">
              <div className="media-slot mb-8" aria-hidden="true" />
              <p className="text-xs font-extrabold uppercase text-black/35">0{index + 1}</p>
              <h2 className="mt-8 text-4xl font-black uppercase leading-none">{title}</h2>
              <p className="mt-8 font-semibold leading-7 text-black/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
