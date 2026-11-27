import { identity, intro } from "@/lib/content";
import { HeroStickerCluster } from "@/components/StickerAccent";

export default function Hero() {
  return (
    <section className="hero-section relative pt-8 pb-5">
      <HeroStickerCluster />
      <div className="hero-copy relative z-[1] max-w-xl space-y-3">
        <p className="hero-hello" aria-hidden="true">
          hello · hola · bonjour
        </p>
        <p className="text-[14.5px] leading-[1.65] text-body">{intro[0]}</p>
        <p className="text-[14.5px] leading-[1.65] text-ink">{intro[1]}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <a
          href={`mailto:${identity.email}`}
          className="link font-mono text-[11px] tracking-[0.04em] text-ink"
        >
          {identity.email}
        </a>
        <a
          href={identity.github}
          target="_blank"
          rel="noreferrer"
          className="link font-mono text-[11px] tracking-[0.04em] text-body"
        >
          github/{identity.githubHandle}
        </a>
        <a
          href={identity.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link font-mono text-[11px] tracking-[0.04em] text-body"
        >
          linkedin
        </a>
      </div>
    </section>
  );
}
