import { identity, summary } from "@/lib/content";

export default function Intro() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-3xl overflow-hidden px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32"
      aria-labelledby="intro-name"
    >
      <div
        className="hero-wash pointer-events-none absolute inset-x-0 -top-12 bottom-0 -z-10"
        aria-hidden
      />
      <div
        className="hero-halo pointer-events-none absolute -top-24 right-[-4rem] -z-10"
        aria-hidden
      />

      <div className="relative">
        <p className="section-label mb-5">{identity.location}</p>

        <h1 id="intro-name" className="text-ink">
          <span className="block text-[clamp(34px,7vw,56px)] font-bold leading-[1.02] tracking-[-0.025em]">
            Mithun <span className="gradient-name">Chakladar</span>
          </span>
          <svg
            className="hero-swoosh mt-2 block h-3 w-full max-w-[300px]"
            viewBox="0 0 320 12"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="swoosh-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#3b558f" />
                <stop offset="0.6" stopColor="#6a7fb3" />
                <stop offset="1" stopColor="#d9a44a" />
              </linearGradient>
            </defs>
            <path
              d="M4 8 C 88 2, 200 11, 316 4"
              stroke="url(#swoosh-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </h1>

        <p className="mt-6 max-w-xl text-[13px] leading-[1.75] text-ink/85">
          {summary[0]}
        </p>
        <p className="mt-3 max-w-xl text-[13px] leading-[1.75] text-muted">
          {summary[1]}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-2.5">
          <li>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="chip px-3 py-1 text-[11px] tracking-[0.04em]"
            >
              github.com/cookified
            </a>
          </li>
          <li>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="chip px-3 py-1 text-[11px] tracking-[0.04em]"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${identity.email}`}
              className="chip px-3 py-1 text-[11px] tracking-[0.04em]"
            >
              {identity.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}