import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

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
        <h2 className="mb-3 font-mono text-[11px] tracking-[0.06em] text-accent">
          {label}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}