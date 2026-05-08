import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import { ArrowRight, ShieldCheck, Sparkles, HeartPulse, Stethoscope, Smile, Wrench } from "lucide-react";
import { images, serviceList, dentists, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dental — Exceptional dental care, expertly delivered" },
      { name: "description", content: "Modern dental practice offering preventive, cosmetic, and emergency care in a comfortable, welcoming environment." },
      { property: "og:title", content: "Dental — Exceptional dental care" },
      { property: "og:description", content: "Compassionate, expert dental treatments tailored to your needs." },
    ],
  }),
  component: HomePage,
});

const serviceIcons = [ShieldCheck, Stethoscope, HeartPulse, Smile, Sparkles, Wrench];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden text-surface">
        <img
          src={images.hero}
          alt="Dentist examining a smiling patient"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1024}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-foreground/40" />
        <Header />
        <div className="container-page relative pt-40 pb-32 grid md:grid-cols-12 gap-10 items-end min-h-[100svh]">
          <div className="md:col-span-7">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Exceptional<br />dental care.
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-4">
            <p className="text-lg text-surface/85 max-w-md">
              Our team is committed to delivering top-quality, compassionate treatments in a comfortable environment.
            </p>
            <Link to="/contact" className="btn-light mt-6">
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TAILORED CARE + SERVICES CARD */}
      <section className="container-page -mt-16 relative z-10 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-soft p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
            We provide expert dental care tailored to your needs.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {serviceList.map((s) => (
              <Link key={s.slug} to="/services" className="chip hover:bg-accent">{s.title}</Link>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-8 items-start">
            <h3 className="text-2xl font-bold">Why Dental?</h3>
            <p className="text-muted-foreground">
              Whether you're visiting for a routine check-up or a more advanced procedure, we ensure your oral health is in the best hands.
            </p>
          </div>
        </div>
        <Link to="/services" className="relative overflow-hidden rounded-3xl bg-foreground text-surface min-h-[380px] group">
          <img src={images.services} alt="Dental services" className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />
          <div className="relative h-full p-8 flex flex-col justify-between">
            <h3 className="text-3xl font-bold">Services</h3>
            <div>
              <p className="text-surface/85 mb-4">We offer a comprehensive range of dental services designed to meet the needs of every patient.</p>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-foreground"><ArrowRight size={18} /></span>
            </div>
          </div>
        </Link>
      </section>

      {/* ABOUT CLINIC */}
      <section className="container-page mt-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={images.clinic} alt="Modern dental clinic" className="rounded-3xl w-full" loading="lazy" width={1280} height={896} />
        <div>
          <span className="eyebrow">About Clinic</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Dental is a modern practice dedicated to exceptional care in a welcoming environment.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Our clinic is equipped with the latest technology and staffed by highly trained professionals who prioritize your comfort and well-being.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {[
              { icon: HeartPulse, t: "Patient-Centered Care", d: "Personalized treatments and a supportive environment for every visit." },
              { icon: ShieldCheck, t: "Highest Standard", d: "Advanced techniques and state-of-the-art technology." },
            ].map(({ icon: I, t, d }) => (
              <div key={t} className="card-soft p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary"><I size={22} /></span>
                <h4 className="mt-4 font-semibold">{t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-primary btn-primary-hover mt-8">About Our Clinic <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold max-w-2xl">
              We are committed to providing a range of dental services.
            </h2>
          </div>
          <Link to="/services" className="btn-light">All Services <ArrowRight size={16} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Link key={s.slug} to="/services" className="card-soft p-8 hover:-translate-y-1 transition-transform">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary"><Icon size={26} /></span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn More <ArrowRight size={14} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHITENING */}
      <section className="container-page mt-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Achieve a Brighter Smile</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            We offer effective teeth whitening solutions.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Whether you're looking to enhance your smile for a special occasion or simply want to improve your everyday appearance.
          </p>
          <div className="mt-8 space-y-4">
            {[
              ["In-Office Professional Whitening", "Advanced technology, expert techniques, and quality products to deliver results."],
              ["Take-Home Whitening Kits", "Custom trays and professional-grade gel — whiten comfortably at your own pace."],
              ["Stain Removal & Polishing", "Cleaning and polishing eliminate stains and bring back your teeth's natural shine."],
            ].map(([t, d]) => (
              <div key={t} className="flex gap-4 card-soft p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-primary shrink-0"><Sparkles size={18} /></span>
                <div>
                  <h4 className="font-semibold">{t}</h4>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-primary btn-primary-hover mt-8">Make Your Teeth Whiter</Link>
        </div>
        <img src={images.whitening} alt="Bright white smile" className="order-1 lg:order-2 rounded-3xl w-full" loading="lazy" width={1280} height={896} />
      </section>

      {/* TEAM */}
      <section className="container-page mt-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Our Team</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Meet the team behind your smile.</h2>
          </div>
          <Link to="/dentists" className="btn-light">About Team <ArrowRight size={16} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d) => (
            <Link key={d.slug} to="/dentists" className="group">
              <div className="overflow-hidden rounded-3xl bg-accent aspect-[4/5]">
                <img src={d.img} alt={d.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <h4 className="mt-4 font-bold text-lg">{d.name}</h4>
              <p className="text-muted-foreground text-sm">{d.role}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page mt-24">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold mb-12">What our patients say.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-soft p-8">
              <h3 className="text-xl font-bold">"{t.title}"</h3>
              <p className="mt-4 text-muted-foreground">{t.text}</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}
