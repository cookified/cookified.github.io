import { identity } from "@/lib/content";

export default function Footer() {
  return (
    <footer>
      <p className="font-mono text-[10px] tracking-[0.04em] text-faint">
        © 2026 {identity.name}
      </p>
    </footer>
  );
}