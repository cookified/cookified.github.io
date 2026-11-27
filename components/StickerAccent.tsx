"use client";

import {
  BlackCatSticker,
  FlameSticker,
  NoriLaptopSticker,
  PeaceHandSticker,
  SparklesSticker,
} from "stick-it-up";

const sectionAccents = {
  work: FlameSticker,
  skills: NoriLaptopSticker,
  contact: PeaceHandSticker,
} as const;

type SectionAccent = keyof typeof sectionAccents;

export function HeroStickerCluster() {
  return (
    <div className="hero-sticker-cluster" aria-hidden="true">
      <SparklesSticker
        size={52}
        peel
        className="hero-sticker hero-sticker-sparkles"
      />
      <BlackCatSticker
        size={58}
        peel
        className="hero-sticker hero-sticker-cat"
      />
      <FlameSticker
        size={42}
        peel
        className="hero-sticker hero-sticker-flame"
      />
    </div>
  );
}

export function SectionSticker({ name }: { name: SectionAccent }) {
  const Sticker = sectionAccents[name];

  return <Sticker size={30} peel className="section-sticker" aria-hidden="true" />;
}
