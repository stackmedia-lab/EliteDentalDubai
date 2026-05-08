import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { dentists } from "@/data/site";

export const Route = createFileRoute("/dentists")({
  head: () => ({
    meta: [
      { title: "Dentists — Dental" },
      { name: "description", content: "Meet the dentists, hygienists and team members behind your care." },
      { property: "og:title", content: "Our Dentists" },
      { property: "og:description", content: "A team committed to top-quality, patient-focused dental care." },
    ],
  }),
  component: DentistsPage,
});

function DentistsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Dentists"
        title="Meet the team behind your smile."
        subtitle="A shared commitment to excellence, innovation and the people we care for."
      />
      <section className="container-page mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dentists.concat(dentists.slice(0, 2)).map((d, i) => (
            <div key={d.slug + i}>
              <div className="overflow-hidden rounded-3xl bg-accent aspect-[4/5]">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{d.name}</h3>
              <p className="text-muted-foreground">{d.role}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
}
