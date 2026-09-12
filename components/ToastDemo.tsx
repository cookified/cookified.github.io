"use client";

import { toast } from "@cookified/toastify";

const demos = [
  {
    label: "Success",
    className:
      "border-[rgba(122,138,106,0.3)] bg-[linear-gradient(180deg,rgba(122,138,106,0.16),rgba(248,245,232,0.95))] text-[#5f6d52]",
    fire: () =>
      toast.success("Merged cleanly.", {
        description: "PR landed without drama.",
        duration: 3200,
      }),
  },
  {
    label: "Note",
    className:
      "border-[rgba(255,241,181,0.9)] bg-[linear-gradient(180deg,rgba(255,241,181,0.6),rgba(248,245,232,0.95))] text-ink/80",
    fire: () =>
      toast("A quiet note.", {
        description: "Something small, worth keeping.",
        duration: 3200,
      }),
  },
  {
    label: "Careful",
    className:
      "border-[rgba(243,198,192,0.75)] bg-[linear-gradient(180deg,rgba(248,215,208,0.75),rgba(248,245,232,0.95))] text-[#7a5c56]",
    fire: () =>
      toast.warning("Take a breath.", {
        description: "Double-check before you ship.",
        duration: 3200,
      }),
  },
] as const;

export default function ToastDemo() {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <span className="mr-1 text-[10px] tracking-[0.1em] text-muted uppercase">
        Try
      </span>
      {demos.map((demo) => (
        <button
          key={demo.label}
          type="button"
          onClick={demo.fire}
          className={`rounded-lg border px-2.5 py-1 text-[10.5px] tracking-[0.04em] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-px hover:opacity-90 ${demo.className}`}
        >
          {demo.label}
        </button>
      ))}
    </div>
  );
}