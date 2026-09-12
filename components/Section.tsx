import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  label?: ReactNode;
  children: ReactNode;
  className?: string;
  headingId?: string;
};

export default function Section({
  id,
  title,
  label,
  children,
  className = "",
  headingId,
}: SectionProps) {
  const hid =
    headingId ??
    `${(id ?? title).toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <section
      id={id}
      className={`mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-14 ${className}`}
      aria-labelledby={hid}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2
          id={hid}
          className="flex items-center gap-3 text-[17px] font-semibold tracking-tight text-ink"
        >
          <span className="section-tick" aria-hidden />
          {title}
        </h2>
        {label != null && label !== "" ? (
          <span className="section-label">{label}</span>
        ) : null}
      </div>
      {children}
    </section>
  );
}
