import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className={`grid h-9 w-9 place-items-center rounded-full ${light ? "bg-surface text-primary" : "bg-primary text-primary-foreground"}`}>
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2c-3 0-5 2-5 4 0 1.5.5 2.5 1 4s.5 3 .5 5 .5 7 1.5 7 1.5-3 2-5 1-2 2 0 1.5 5 2.5 5 1.5-5 1.5-7 0-3.5.5-5S17 7.5 17 6c0-2-2-4-5-4z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className={`text-2xl font-bold tracking-tight ${light ? "text-surface" : "text-foreground"}`}>Dental</span>
    </Link>
  );
}
