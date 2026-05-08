import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { pricingPlans } from "@/data/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Dental" },
      { name: "description", content: "Transparent yearly dental care plans for prevention, restoration and comprehensive care." },
      { property: "og:title", content: "Dental Pricing Plans" },
      { property: "og:description", content: "Choose the plan that matches the care you need." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div>
      <PageHero
        eyebrow="Pricing"
        title="Plans that fit your needs."
        subtitle="Simple, transparent yearly memberships with no surprises."
      />
      <section className="container-page mt-20">
        <div className="grid md:grid-cols-3 gap-6">
          {pricingPlans.map((p) => (
            <div
              key={p.name}
              className={`card-soft p-8 flex flex-col ${p.highlight ? "ring-2 ring-primary -translate-y-2" : ""}`}
            >
              {p.highlight && <span className="chip mb-4 self-start">Most popular</span>}
              <h3 className="text-2xl font-bold">{p.name} Plan</h3>
              <p className="text-muted-foreground mt-2">{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-muted-foreground text-2xl">$</span>
                <span className="text-6xl font-bold">{p.price}</span>
                <span className="text-muted-foreground mb-2">/year</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start text-sm">
                    <Check size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary btn-primary-hover mt-8">Buy Now</Link>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
}
