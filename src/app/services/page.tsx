import { PageHero } from "@/components/site/page-hero";
import { ServiceGrid } from "@/components/site/service-grid";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Connected marketing stack, not isolated tasks."
        copy="Each module can stand alone, but the strongest outcome comes when website, discovery, content, media and activation work from the same fact base."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1520px]">
          <ServiceGrid />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
