import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dental" },
      { name: "description", content: "Reach out to book an appointment or ask any dental question. We're here to help." },
      { property: "og:title", content: "Contact Dental" },
      { property: "og:description", content: "Book an appointment or get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="We're here for you."
        subtitle="Reach out for appointments or any dental concerns. Your healthier smile starts with a simple message."
      />
      <section className="container-page mt-20 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">We're committed to providing care and support.</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you have questions about our services, need to schedule an appointment, or want to learn more about your oral health, we're a message or call away.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { i: MapPin, t: site.address },
              { i: Phone, t: site.phone },
              { i: Mail, t: site.email },
              { i: Clock, t: site.hours },
            ].map(({ i: I, t }) => (
              <div key={t} className="flex items-center gap-4 card-soft p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary"><I size={20} /></span>
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-soft p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold">Book a visit</h3>
          <p className="text-muted-foreground mt-1">Fill the form and we'll get back to you shortly.</p>
          <div className="mt-6 grid gap-4">
            <input required placeholder="Full name" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-colors" />
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="email" placeholder="Email" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-colors" />
              <input placeholder="Phone" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-colors" />
            </div>
            <select className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-colors">
              <option>Choose a service</option>
              <option>Preventive Care</option>
              <option>Cosmetic Dentistry</option>
              <option>Orthodontics</option>
              <option>Emergency Care</option>
              <option>Other</option>
            </select>
            <textarea rows={4} placeholder="How can we help?" className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary transition-colors" />
            <button type="submit" className="btn-primary btn-primary-hover mt-2">
              {sent ? "Thanks — we'll be in touch!" : "Send Message"}
            </button>
          </div>
        </form>
      </section>
      <section className="container-page mt-20">
        <div className="aspect-[16/7] rounded-3xl overflow-hidden border border-border">
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=14%20Tottenham%20Road%20London&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
