"use client";

import { toast } from "@cookified/toastify";

const demos = [
  {
    label: "success",
    fire: () =>
      toast.success("Merged cleanly.", {
        description: "PR landed without drama.",
        duration: 3200,
      }),
  },
  {
    label: "note",
    fire: () =>
      toast("A quiet note.", {
        description: "Something small, worth keeping.",
        duration: 3200,
      }),
  },
  {
    label: "careful",
    fire: () =>
      toast.warning("Take a breath.", {
        description: "Double-check before you ship.",
        duration: 3200,
      }),
  },
] as const;

export default function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      {demos.map((demo) => (
        <button
          key={demo.label}
          type="button"
          onClick={demo.fire}
          className="rounded-[14px] border border-line bg-paper-2 px-3.5 py-1.5 font-mono text-[10.5px] tracking-[0.04em] text-body transition-all duration-200 hover:-translate-y-px hover:border-accent hover:text-accent"
        >
          {demo.label}
        </button>
      ))}
    </div>
  );
}
