import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/dentists", label: "Dentists" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-page flex items-center justify-between py-6">
        <Logo light />
        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-surface/15 backdrop-blur-md px-2 py-2 border border-white/15">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "bg-surface text-foreground" }}
              inactiveProps={{ className: "text-surface/90 hover:bg-surface/10" }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden sm:inline-flex btn-light">Schedule a visit</Link>
        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden text-surface p-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden container-page pb-4">
          <div className="card-soft p-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="px-4 py-2 rounded-full text-sm font-medium"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 btn-primary btn-primary-hover">
              Schedule a visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
