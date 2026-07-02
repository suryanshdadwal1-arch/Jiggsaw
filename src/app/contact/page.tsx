import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { serviceModules } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Build the right marketing system for your business."
        copy="Tell us what you need: website, search, content, campaigns, visibility, or the full setup. We will structure the next steps clearly."
      />
      <section className="grid border-t border-black/10 lg:grid-cols-[0.46fr_1fr]">
        <div className="bg-[#08090d] p-6 text-white sm:p-10">
          <h2 className="text-5xl font-black uppercase leading-none sm:text-7xl">Start the conversation.</h2>
          <div className="mt-10 space-y-6">
            {[
              [Mail, "Email", "hello@jiggsaw.studio"],
              [Phone, "Phone / WhatsApp", "Share your preferred contact number in the form."],
              [MapPin, "Location", "India-based. Building for North India, Pan India, Canada, US, UK and Australia."],
            ].map(([Icon, label, value]) => {
              const ContactIcon = Icon as typeof Mail;
              return (
                <div key={label as string} className="flex gap-4 border-t border-white/12 pt-5">
                  <ContactIcon className="size-5 text-[#f2ff00]" />
                  <div>
                    <p className="text-xs font-extrabold uppercase text-white/45">{label as string}</p>
                    <p className="mt-2 font-semibold text-white/72">{value as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form className="bg-[#f5f2ec] p-6 sm:p-10">
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            <label className="form-field">
              <span>Name</span>
              <input />
            </label>
            <label className="form-field">
              <span>Business name</span>
              <input />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" />
            </label>
            <label className="form-field">
              <span>Phone</span>
              <input />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Website / social link</span>
              <input />
            </label>
            <label className="form-field sm:col-span-2">
              <span>What do you need help with?</span>
              <select defaultValue="">
                <option value="" disabled>Select a service</option>
                {serviceModules.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="form-field sm:col-span-2">
              <span>Budget range</span>
              <input />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Message</span>
              <textarea rows={7} />
            </label>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-[#ff6b00]" type="button">
              Start the conversation <ArrowRight className="size-4" />
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
