import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { SectionSticker } from "@/components/StickerAccent";

const sectionAccents = {
  work: "work",
  skills: "skills",
  contact: "contact",
} as const;

export default function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-4 pt-6 pb-6">
      <Reveal>
        <div className="section-label-row mb-3">
          <h2 className="font-mono text-[11px] tracking-[0.06em] text-accent">
            {label}
          </h2>
          {id in sectionAccents ? (
            <SectionSticker
              name={sectionAccents[id as keyof typeof sectionAccents]}
            />
          ) : null}
        </div>
        {children}
      </Reveal>
    </section>
  );
}
