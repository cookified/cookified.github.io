import { navLinks } from "@/lib/content";

export default function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 flex justify-center px-4 pt-5">
      <nav className="dock flex items-center gap-0.5" aria-label="Primary">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className="dock-link">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}