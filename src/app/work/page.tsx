import { CaseStudyCard } from "@/components/site/case-study-card";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { caseStudies } from "@/lib/case-studies";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Work"
        title="Featured case studies."
        copy="Each project shows how Jiggsaw connects on-ground attention with sponsor visibility, content production and digital amplification — turning real moments into reusable brand proof."
      />
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
