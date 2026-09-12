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

      <div className="relative">
        <p className="section-label mb-5">{identity.location}</p>

        <h1
          id="intro-name"
          className="block text-[clamp(34px,7vw,56px)] font-bold leading-[1.02] tracking-[-0.025em] text-ink"
        >
          {identity.name}
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