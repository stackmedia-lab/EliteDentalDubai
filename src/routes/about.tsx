import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { images, dentists } from "@/data/site";
import { ShieldCheck, HeartPulse, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dental" },
      { name: "description", content: "A modern dental practice committed to exceptional care in a warm, welcoming environment." },
      { property: "og:title", content: "About Dental" },
      { property: "og:description", content: "Meet a team dedicated to your oral health and comfort." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Care that feels personal."
        subtitle="A modern practice committed to exceptional dental care, delivered by people who genuinely listen."
      />

      <section className="container-page mt-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={images.clinic} alt="Inside our clinic" className="rounded-3xl w-full" loading="lazy" width={1280} height={896} />
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built around comfort, trust, and craft.</h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From your first hello at reception to the final polish, every step is designed to feel calm and considered. Our team blends advanced clinical training with a soft-spoken, patient-first approach.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { n: "12+", l: "Years caring" },
              { n: "8k+", l: "Happy smiles" },
              { n: "20+", l: "Specialists" },
            ].map((s) => (
              <div key={s.l} className="card-soft p-5 text-center">
                <div className="text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-24">
        <span className="eyebrow">Our Values</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl">What guides every appointment.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { i: HeartPulse, t: "Patient-Centered", d: "Every plan is tailored to you — your goals, your pace, your comfort." },
            { i: ShieldCheck, t: "Clinical Excellence", d: "Advanced techniques and modern technology, applied with steady hands." },
            { i: Sparkles, t: "Calm Environment", d: "A practice designed to feel less like a clinic and more like a retreat." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="card-soft p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary"><I size={26} /></span>
              <h3 className="mt-6 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Our Team</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">The people behind your smile.</h2>
          </div>
          <Link to="/dentists" className="btn-light">Meet everyone <ArrowRight size={16} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d) => (
            <div key={d.slug}>
              <div className="overflow-hidden rounded-3xl bg-accent aspect-[4/5]">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <h4 className="mt-4 font-bold">{d.name}</h4>
              <p className="text-muted-foreground text-sm">{d.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}
