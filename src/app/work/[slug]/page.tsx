import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Jiggsaw Case Study`,
    description: caseStudy.subtitle,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />

      <section className="border-b border-black/10 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1680px]">
          <p data-reveal className="mb-4 font-display text-sm font-black uppercase tracking-[0.26em] text-brand-orange">
            Case Study
          </p>
          <h1 data-reveal className="case-study-hero-title max-w-[1600px] font-display text-[clamp(2.45rem,5.6vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] [text-wrap:balance]">
            {caseStudy.title}
          </h1>
          <p data-reveal data-reveal-delay="0.12" className="case-study-hero-subtitle mt-6 max-w-[1320px] text-[clamp(1.05rem,1.3vw,1.3rem)] font-semibold leading-[1.55] text-black/65 [text-wrap:balance]">
            {caseStudy.subtitle}
          </p>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div
          data-reveal
          className="case-hero-media relative mx-auto max-w-[1680px] overflow-hidden bg-black"
          style={
            {
              "--case-hero-ratio": `${caseStudy.heroWidth} / ${caseStudy.heroHeight}`,
            } as CSSProperties
          }
        >
          <Image
            src={caseStudy.heroImage}
            alt={`${caseStudy.title} case study hero image`}
            fill
            priority
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
        <div className="mx-auto grid max-w-[1680px] gap-10 border-t border-black/10 pt-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <aside data-reveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
                Services
              </p>
              <ul className="mt-4 space-y-2 text-sm font-bold uppercase tracking-[0.04em] text-black/66">
                {caseStudy.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
                Industry
              </p>
              <ul className="mt-4 space-y-2 text-sm font-bold uppercase tracking-[0.04em] text-black/66">
                {caseStudy.industry.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>
            </div>
          </aside>

          <article data-reveal data-reveal-delay="0.1" className="max-w-4xl space-y-6 text-[clamp(1.02rem,1.25vw,1.25rem)] font-medium leading-8 text-black/68">
            {caseStudy.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>

      {caseStudy.highlights?.length ? (
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <div className="mx-auto max-w-[1680px]">
            <h2 data-reveal className="font-display max-w-3xl text-[clamp(1.8rem,3vw,3rem)] font-black uppercase leading-[0.94] tracking-[-0.03em]">
              How the system worked.
            </h2>
            <div className="mt-8 grid border-l border-t border-black/10 md:grid-cols-2 xl:grid-cols-4">
              {caseStudy.highlights.map((highlight, index) => (
                <article key={highlight.title} data-reveal className="border-b border-r border-black/10 bg-white p-6">
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-black uppercase leading-[0.98] tracking-[-0.02em]">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] font-medium leading-7 text-black/62">{highlight.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {caseStudy.collaborations?.length ? (
        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <div className="mx-auto max-w-[1680px] border-t border-black/10 pt-8">
            <p data-reveal className="font-display text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
              Featured Collaborations
            </p>
            <ul data-reveal className="mt-5 flex flex-wrap gap-3">
              {caseStudy.collaborations.map((partner) => (
                <li
                  key={partner}
                  className="rounded-full border border-black/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.04em] text-black/70"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {caseStudy.closingLine ? (
        <section className="border-t border-black bg-black px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-10">
          <div className="mx-auto max-w-[1680px]">
            <p data-reveal className="w-full max-w-[1500px] font-display text-[clamp(1.28rem,2.05vw,2.25rem)] font-black uppercase leading-[1.08] tracking-[-0.02em]">
              {caseStudy.closingLine}
            </p>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}
