import { GsapReveals } from "@/components/site/gsap-reveals";
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
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="About Jiggsaw"
        title="Connecting the pieces businesses treat separately."
        copy="Jiggsaw works across strategy, website, search, content, campaigns and activation so the brand story stays consistent from first impression to enquiry."
      />
      <section className="grid border-b border-black/10 lg:grid-cols-[0.42fr_1fr]">
        <div className="flex min-h-[320px] items-end bg-brand-ink p-6 text-white sm:p-8">
          <h2 className="break-words font-display text-3xl font-black uppercase leading-[0.96] tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Marketing works better when the pieces click together.
          </h2>
        </div>
        <div>
          {beliefs.map((belief, index) => (
            <div key={belief} className="flex items-baseline gap-5 border-b border-black/10 p-6 last:border-b-0 sm:px-8 sm:py-7">
              <p className="font-display text-xs font-black text-black/35">0{index + 1}</p>
              <h3 className="min-w-0 [overflow-wrap:anywhere] font-display text-xl font-black uppercase leading-[1.02] tracking-[-0.02em] sm:text-3xl">{belief}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-3">
          {[
            ["System-first thinking", "We look at the whole buyer journey, not just isolated assets."],
            ["Execution-led approach", "We build, launch, measure and refine with practical constraints in mind."],
            ["Digital to physical continuity", "We help market movement travel across screen, space and sales follow-up."],
          ].map(([title, copy], index) => (
            <article key={title} data-reveal data-reveal-delay={`${index * 0.06}`} className="rounded-md border border-black/10 bg-white p-6 shadow-sm">
              <div className="media-slot mb-6" aria-hidden="true" />
              <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35">0{index + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{title}</h2>
              <p className="mt-4 text-[0.95rem] font-medium leading-7 text-black/62">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
