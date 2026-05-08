import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { blogPosts } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Dental" },
      { name: "description", content: "Tips, guides and insights from our dental team for healthier, happier smiles." },
      { property: "og:title", content: "Dental Blog" },
      { property: "og:description", content: "Expert advice from our dentists on oral health and care." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Journal"
        title="Notes from our chair."
        subtitle="Practical guides, tips, and insights from the team."
      />
      <section className="container-page mt-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <article key={p.slug} className="card-soft overflow-hidden flex flex-col">
              <div
                className="aspect-[16/10] bg-accent"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, oklch(0.7 0.18 280 / 0.6), transparent 60%), radial-gradient(circle at 70% 80%, oklch(0.8 0.12 320 / 0.6), transparent 60%)",
                }}
              />
              <div className="p-7 flex-1 flex flex-col">
                <div className="text-sm text-muted-foreground">{p.date} • {p.author}</div>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground flex-1">{p.excerpt}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaSection />
      <Footer />
    </div>
  );
}
