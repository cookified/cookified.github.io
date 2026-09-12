export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-14 pt-4 sm:px-8 sm:pb-16">
      <div className="section-divider" aria-hidden />
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
        <p className="text-[10px] tracking-[0.08em] text-muted">
          © 2026 Mithun Chakladar
        </p>
        <p className="text-[10px] tracking-[0.08em] text-muted">
          brewed with <span className="text-[rgba(223,155,116,1)]">Next.js</span>{" "}
          · toasts by{" "}
          <a
            href="https://www.npmjs.com/package/@cookified/toastify"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--hairline-strong)] underline-offset-4 transition-colors hover:text-ink"
          >
            Toastify
          </a>
        </p>
      </div>
    </footer>
  );
}