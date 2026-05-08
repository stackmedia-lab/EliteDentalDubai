import { Header } from "./Header";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-foreground text-surface">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.55 0.22 280 / 0.6), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.7 0.18 320 / 0.4), transparent 50%)",
        }}
      />
      <Header />
      <div className="container-page relative pt-40 pb-24 text-center">
        {eyebrow && <span className="eyebrow text-surface/70">{eyebrow}</span>}
        <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-lg text-surface/75">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
