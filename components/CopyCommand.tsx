"use client";

import { useState } from "react";
import { toast } from "@cookified/toastify";

export default function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      toast.success("Copied to clipboard.", {
        description: command,
        duration: 2600,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable; the command stays selectable
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy install command: ${command}`}
      className="group inline-flex items-baseline gap-2 font-mono text-[11.5px] text-body transition-colors duration-200 hover:text-ink"
    >
      <span className="text-accent/70">$</span>
      <span>{command}</span>
      <span className="text-[10px] text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}