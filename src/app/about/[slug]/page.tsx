import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { aboutArticles, getAboutArticle } from "@/lib/articles";

type AboutArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return aboutArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: AboutArticlePageProps): Promise<Metadata> {
  const article = getAboutArticle((await params).slug);
  return article ? { title: `${article.title} | About Jiggsaw`, description: article.description } : {};
}

export default async function AboutArticlePage({ params }: AboutArticlePageProps) {
  const article = getAboutArticle((await params).slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <article>
        <header className="border-b border-black/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-[1280px]">
            <Link href="/about" className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-orange hover:text-black">About Jiggsaw</Link>
            <p data-reveal className="mt-8 font-display text-sm font-black uppercase tracking-[0.26em] text-brand-orange">{article.category}</p>
            <h1 data-reveal data-reveal-delay="0.08" className="mt-4 max-w-5xl font-display text-[clamp(2.45rem,5.4vw,6rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">{article.title}</h1>
            <p data-reveal data-reveal-delay="0.16" className="mt-6 max-w-3xl text-[clamp(1.05rem,1.35vw,1.32rem)] font-semibold leading-8 text-black/65">{article.description}</p>
          </div>
        </header>
        <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
          <div data-reveal className="relative mx-auto aspect-[16/8] max-w-[1280px] overflow-hidden bg-brand-ink">
            <Image src={article.image} alt={article.imageAlt} fill priority className="object-cover" sizes="(min-width: 1280px) 1280px, 100vw" />
          </div>
        </div>
        <div className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
          <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.28fr_0.72fr]">
            <aside data-reveal className="border-t border-black/10 pt-5">
              <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-orange">Our approach</p>
              <ul className="mt-5 space-y-3 font-display text-sm font-black uppercase leading-5">
                {article.sections.map((section) => <li key={section.title}>{section.title}</li>)}
              </ul>
            </aside>
            <div className="space-y-12">
              <p data-reveal className="text-xl font-semibold leading-9 text-black/75 sm:text-2xl sm:leading-10">{article.intro}</p>
              {article.sections.map((section, index) => (
                <section key={section.title} data-reveal data-reveal-delay={`${Math.min(index * 0.04, 0.12)}`} className="border-t border-black/10 pt-7">
                  <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-orange">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[0.96] tracking-[-0.025em] sm:text-4xl">{section.title}</h2>
                  <div className="mt-5 space-y-5 text-[1.04rem] font-medium leading-8 text-black/68">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
              <section data-reveal className="border-t border-black pt-7">
                <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-brand-orange">The principle</p>
                <ul className="mt-5 space-y-3 font-display text-xl font-black uppercase leading-[1.04] sm:text-2xl">
                  {article.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
      <section className="bg-black px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl font-display text-3xl font-black uppercase leading-[0.96] tracking-[-0.025em] sm:text-4xl">Bring the pieces into one working system.</h2>
          <Link href="/contact" className="shrink-0 border border-white px-5 py-3 font-display text-xs font-black uppercase tracking-[0.18em] transition hover:bg-white hover:text-black">Talk to Jiggsaw</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
