import { identity } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer-wrap mt-10">
      <div
        className="footer-art"
        role="img"
        aria-label="Rainy blue landscape with two figures under an umbrella"
      />
      <p className="mt-4 font-mono text-[10px] tracking-[0.04em] text-faint">
        © 2026 {identity.name}
      </p>
    </footer>
  );
}
