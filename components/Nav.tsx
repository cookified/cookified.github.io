"use client";

import { toast } from "@cookified/toastify";
import { navLinks } from "@/lib/content";

function Flame({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="flame-brand" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#9a4f46" />
          <stop offset="0.55" stopColor="#df9b74" />
          <stop offset="1" stopColor="#e6b896" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5c.8 3.9-1.7 5.9-3 8.2-1.3 2.4-2.2 4.6-2.2 6.8 0 3 2.4 5.5 5.2 5.5s5.2-2.5 5.2-5.5c0-2.2-.9-4.4-2.2-6.8-1.3-2.3-3.8-4.3-3-8.2z"
        fill="url(#flame-brand)"
      />
      <path
        d="M11.7 13.3c-.9 1.3-1.4 2.3-1.4 3.2 0 1.2.8 2 1.7 2s1.7-.8 1.7-2c0-.9-.5-1.9-1.4-3.2z"
        fill="#fff1b5"
      />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="relative z-10 w-full">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-8 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2"
          aria-label="Back to top — cookified"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[rgba(229,210,183,0.6)] bg-[linear-gradient(180deg,rgba(255,253,244,0.9),rgba(248,245,232,0.8))] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <Flame className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
          </span>
          <span className="hidden font-serif text-[15px] italic tracking-tight text-ink sm:inline">
            cookified
          </span>
        </a>

        <ul className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[0.08em] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() =>
                toast("Quiet hello.", {
                  description: "Toastify is live on this page.",
                  duration: 2800,
                })
              }
              className="btn-butter ml-1 hidden shrink-0 px-3 py-1 text-[10px] tracking-[0.08em] text-ink/70 hover:text-ink sm:inline-flex"
              aria-label="Ping a sample toast"
            >
              ping
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}