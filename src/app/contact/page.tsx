"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { GsapReveals } from "@/components/site/gsap-reveals";
import { PageHero } from "@/components/site/page-hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { serviceModules } from "@/lib/site-data";

const CONTACT_EMAIL = "hello@jiggsaw.co";

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
  const contactPanelRef = useRef<HTMLDivElement>(null);
  const [hasContactLineDrawn, setHasContactLineDrawn] = useState(false);

  useEffect(() => {
    const panel = contactPanelRef.current;

    if (!panel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasContactLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(panel);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <GsapReveals />
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Build the right marketing system for your business."
        copy="Tell us what you need: website, search, content, campaigns, visibility, or the full setup. We will structure the next steps clearly."
        desktopNoWrap
      />
      <section className={`contact-split-section grid border-t border-black/10 lg:grid-cols-2 ${hasContactLineDrawn ? "is-visible" : ""}`}>
        <div ref={contactPanelRef} className="contact-left-panel relative overflow-hidden bg-brand-ink p-6 text-white sm:p-10">
          <svg
            className={`contact-jigsaw-line hidden lg:block ${hasContactLineDrawn ? "is-drawn" : ""}`}
            viewBox="0 0 1000 560"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="contact-jigsaw-path"
              pathLength="1"
              vectorEffect="non-scaling-stroke"
              d="M55 410
       H205
       C240 410 258 374 228 350
       C197 326 220 278 266 278
       C312 278 336 326 304 350
       C274 374 292 410 328 410
       H455
       V305
       C455 270 492 258 518 284
       C553 318 620 298 620 244
       C620 196 676 172 716 210
       C756 248 735 312 682 314
       C650 315 632 300 620 282
       V410
       H760
       C792 410 810 438 792 462
       C768 495 798 536 842 536
       C888 536 914 492 886 462
       C866 440 878 410 912 410
       H955"
            />
            {hasContactLineDrawn ? (
              <circle className="contact-jigsaw-signal" r="4.5">
                <animateMotion
                  dur="1.45s"
                  begin="0.2s"
                  fill="freeze"
                  path="M55 410 H205 C240 410 258 374 228 350 C197 326 220 278 266 278 C312 278 336 326 304 350 C274 374 292 410 328 410 H455"
                />
              </circle>
            ) : null}
          </svg>
          <div className="contact-left-content relative z-10">
            <h2 className="[overflow-wrap:anywhere] font-display text-[2rem] font-black uppercase leading-[0.96] tracking-[-0.02em] sm:text-4xl lg:text-5xl">Let&apos;s build the next move.</h2>
            <div className="mt-8 space-y-6">
              {[
                [Mail, "Email", CONTACT_EMAIL],
                [Phone, "Phone / WhatsApp", "+91 836 044 2310"],
                [MapPin, "Location", "India-based. Working with brands across India, Canada, US, UK and Australia."],
              ].map(([Icon, label, value]) => {
                const ContactIcon = Icon as typeof Mail;
                return (
                  <div key={label as string} className="contact-detail-row flex gap-4 border-t border-white/12 pt-5">
                    <ContactIcon className="contact-detail-icon size-5 text-brand-yellow" />
                    <div>
                      <p className="text-xs font-extrabold uppercase text-white/45">{label as string}</p>
                      <p className="mt-2 font-semibold text-white/72">{value as string}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <form className="contact-form bg-brand-paper p-6 sm:p-10" onSubmit={handleSubmit}>
          <div className="contact-form-grid grid w-full gap-5 sm:grid-cols-2">
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
              <textarea name="message" rows={5} required />
            </label>
            <button className="contact-submit-button inline-flex h-12 items-center justify-center gap-2 rounded-md bg-black px-5 text-sm font-extrabold text-white transition" type="submit">
              Start the conversation <ArrowRight className="contact-submit-arrow size-4" />
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </main>
  );
}
