import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { serviceList } from "@/data/site";
import { ShieldCheck, Stethoscope, HeartPulse, Smile, Sparkles, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dental" },
      { name: "description", content: "Comprehensive dental services: preventive, cosmetic, orthodontic, surgical and emergency care." },
      { property: "og:title", content: "Our Services — Dental" },
      { property: "og:description", content: "Expert dental treatments for every need." },
    ],
  }),
  component: ServicesPage,
});

const icons = [ShieldCheck, Stethoscope, HeartPulse, Smile, Sparkles, Wrench];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Care for every smile."
        subtitle="Whether for a routine check-up or a complex procedure, we prioritize your oral health to help you feel confident."
      />
      <section className="container-page mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={s.slug} className="card-soft p-8 hover:-translate-y-1 transition-transform">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary"><Icon size={26} /></span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Book consultation <ArrowRight size={14} /></Link>
              </div>
            );
          })}
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
}
