import Image from "next/image";
import Link from "next/link";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { resourceArticles } from "@/lib/articles";

const resourceImages = [
  {
    src: "/resources/resource-launch-content.png",
    alt: "Launch content system visual",
    className: "resource-card-image-launch",
  },
  {
    src: "/resources/resource-ai-discovery.png",
    alt: "AI-led discovery and brand visibility visual",
    className: "resource-card-image-discovery",
  },
  {
    src: "/resources/resource-paid-media-checklist.png",
    alt: "Paid media readiness checklist visual",
    className: "resource-card-image-checklist",
  },
  {
    src: "/resources/resource-events-assets.png",
    alt: "Event capture into long-term digital assets visual",
    className: "resource-card-image-events",
  },
  {
    src: "/resources/resource-landing-page-enquiry.png",
    alt: "Landing page enquiry system visual",
    className: "resource-card-image-landing",
  },
  {
    src: "/resources/resource-social-content-planning.png",
    alt: "Social content planning system visual",
    className: "resource-card-image-social",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Resources"
        title="Working notes for connected brand growth."
        copy="Short, practical reads on making digital and physical marketing work as one system: launches, content, search, campaigns and everything after the event."
        desktopNoWrap
      />
      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto grid max-w-[1520px] gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resourceArticles.map((article, index) => (
            <Link key={article.slug} href={`/resources/${article.slug}`} data-reveal className="group flex min-h-[35rem] flex-col rounded-md border border-black/10 bg-white p-6 transition hover:bg-black hover:text-white sm:min-h-[37rem]">
              <div className="resource-card-media media-slot mb-6 group-hover:border-white/20 group-hover:bg-white/10">
                <Image
                  src={resourceImages[index].src}
                  alt={resourceImages[index].alt}
                  fill
                  sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, 92vw"
                  className={`resource-card-image ${resourceImages[index].className}`}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-orange group-hover:text-brand-orange">{article.category}</p>
                <h2 className="mt-3 min-h-[5.9rem] [overflow-wrap:anywhere] font-display text-2xl font-black uppercase leading-[0.98] tracking-[-0.02em] sm:text-3xl">{article.title}</h2>
                <p className="mt-4 min-h-[5.25rem] text-[0.95rem] font-medium leading-7 text-black/62 group-hover:text-white/68">{article.description}</p>
                <p className="mt-auto pt-8 font-display text-xs font-black uppercase tracking-[0.18em]">Read article</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
