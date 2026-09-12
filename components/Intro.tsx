import Image from "next/image";
import { identity, summary } from "@/lib/content";

export default function Intro() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-3xl overflow-hidden px-6 pb-16 pt-2 sm:px-8 sm:pb-20 sm:pt-4"
      aria-labelledby="intro-name"
    >
      <div
        className="hero-wash pointer-events-none absolute inset-x-0 -top-8 bottom-0 -z-10"
        aria-hidden
      />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
        <div className="relative shrink-0">
          <div className="avatar-glow">
            <Image
              src={identity.avatar}
              alt="Sage flame doodle mark"
              width={64}
              height={64}
              priority
              className="h-14 w-14 rounded-[18px] border border-[rgba(230,184,150,0.35)] object-cover shadow-[0_14px_30px_-16px_rgba(46,48,78,0.6)] sm:h-16 sm:w-16"
            />
          </div>
          <span
            className="absolute -right-1.5 -top-1.5 h-3.5 w-3.5 rounded-full border-2 border-canvas bg-[linear-gradient(135deg,#df9b74,#9a4f46)]"
            aria-hidden
          />
        </div>

        <div className="min-w-0">
          <p className="section-label mb-4">
            {identity.location}
            <span className="mx-2 text-[rgba(107,103,88,0.5)]">·</span>
            <span className="inline-flex items-center gap-1.5 text-[rgba(127,138,114,1)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7f8a72]" aria-hidden />
              open to work
            </span>
          </p>
          <h1
            id="intro-name"
            className="font-serif text-[20px] leading-snug tracking-tight text-ink sm:text-[24px]"
          >
            Mithun <span className="gradient-text">Chakladar</span>
          </h1>
          <p className="mt-1.5 text-[12px] text-muted">{identity.role}</p>
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
      </div>
    </section>
  );
}