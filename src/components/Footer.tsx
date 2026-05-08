import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-surface">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-surface/70">
            Modern dental care delivered in a calm, welcoming environment. Every smile, expertly cared for.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-surface/60 mb-4">Pages</h4>
          <ul className="space-y-2 text-surface/85">
            <li><Link to="/about" className="hover:text-surface">About</Link></li>
            <li><Link to="/services" className="hover:text-surface">Services</Link></li>
            <li><Link to="/dentists" className="hover:text-surface">Dentists</Link></li>
            <li><Link to="/pricing" className="hover:text-surface">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-surface">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-surface">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-surface/60 mb-4">Contact</h4>
          <ul className="space-y-2 text-surface/85">
            <li>{site.address}</li>
            <li><a href={`tel:${site.phone}`} className="hover:text-surface">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-surface">{site.email}</a></li>
            <li className="text-surface/60">{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 text-sm text-surface/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </div>
    </footer>
  );
}
