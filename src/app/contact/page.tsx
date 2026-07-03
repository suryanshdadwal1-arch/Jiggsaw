"use client";

import type { FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { serviceModules } from "@/lib/site-data";

const CONTACT_EMAIL = "hello@jiggsaw.studio";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = [
    ["Name", data.get("name")],
    ["Business", data.get("business")],
    ["Email", data.get("email")],
    ["Phone", data.get("phone")],
    ["Website / social", data.get("website")],
    ["Needs help with", data.get("service")],
    ["Budget range", data.get("budget")],
    ["Message", data.get("message")],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const subject = `Project enquiry from ${data.get("name") || "the Jiggsaw website"}`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Build the right marketing system for your business."
        copy="Tell us what you need: website, search, content, campaigns, visibility, or the full setup. We will structure the next steps clearly."
      />
      <section className="grid border-t border-black/10 lg:grid-cols-[0.46fr_1fr]">
        <div className="bg-brand-ink p-6 text-white sm:p-10">
          <h2 className="[overflow-wrap:anywhere] font-display text-[2rem] font-black uppercase leading-[0.96] tracking-[-0.02em] sm:text-4xl lg:text-5xl">Start the conversation.</h2>
          <div className="mt-8 space-y-6">
            {[
              [Mail, "Email", CONTACT_EMAIL],
              [Phone, "Phone / WhatsApp", "Share your preferred contact number in the form."],
              [MapPin, "Location", "India-based. Working with brands across India, Canada, the US, the UK and Australia."],
            ].map(([Icon, label, value]) => {
              const ContactIcon = Icon as typeof Mail;
              return (
                <div key={label as string} className="flex gap-4 border-t border-white/12 pt-5">
                  <ContactIcon className="size-5 text-brand-yellow" />
                  <div>
                    <p className="text-xs font-extrabold uppercase text-white/45">{label as string}</p>
                    <p className="mt-2 font-semibold text-white/72">{value as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form className="bg-brand-paper p-6 sm:p-10" onSubmit={handleSubmit}>
          <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
            <label className="form-field">
              <span>Name</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="form-field">
              <span>Business name</span>
              <input name="business" autoComplete="organization" />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="form-field">
              <span>Phone</span>
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Website / social link</span>
              <input name="website" />
            </label>
            <label className="form-field sm:col-span-2">
              <span>What do you need help with?</span>
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                {serviceModules.map((service) => (
                  <option key={service.slug}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="form-field sm:col-span-2">
              <span>Budget range</span>
              <input name="budget" />
            </label>
            <label className="form-field sm:col-span-2">
              <span>Message</span>
              <textarea name="message" rows={7} required />
            </label>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition hover:bg-brand-orange" type="submit">
              Start the conversation <ArrowRight className="size-4" />
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
