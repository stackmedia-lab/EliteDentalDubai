import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="container-page mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-foreground text-surface px-8 py-16 md:px-16 md:py-24 text-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 20%, oklch(0.55 0.22 280 / 0.7), transparent 55%), radial-gradient(circle at 80% 80%, oklch(0.75 0.15 320 / 0.5), transparent 55%)",
          }}
        />
        <div className="relative">
          <span className="eyebrow text-surface/70">Book a Visit</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
            Schedule your visit with us today.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-surface/75">
            Our dedicated team is here to provide expert dental care in a comfortable and welcoming environment.
          </p>
          <Link to="/contact" className="btn-primary btn-primary-hover mt-8">
            Schedule an Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
