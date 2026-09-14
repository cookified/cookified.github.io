"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    const root = document.documentElement;

    const apply = () => {
      root.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {
        // storage unavailable; the choice still applies for this session
      }
    };

    const button = buttonRef.current;
    if (button) {
      const rect = button.getBoundingClientRect();
      root.style.setProperty("--theme-x", `${rect.left + rect.width / 2}px`);
      root.style.setProperty("--theme-y", `${rect.top + rect.height / 2}px`);
    }

    const doc = document as DocumentWithViewTransition;
    if (!reduce && typeof doc.startViewTransition === "function") {
      doc.startViewTransition(apply);
    } else {
      apply();
    }

    setDark(next);
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-label={dark ? "switch to light mode" : "switch to dark mode"}
      className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-body transition-colors duration-200 hover:border-accent hover:text-accent"
    >
      {mounted && dark ? (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M4.4 12H2.2M21.8 12h-2.2M5.7 5.7 4.2 4.2M19.8 19.8l-1.5-1.5M18.3 5.7l1.5-1.5M4.2 19.8l1.5-1.5" />
        </svg>
      ) : (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z" />
        </svg>
      )}
    </button>
  );
}