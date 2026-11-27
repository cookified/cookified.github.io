import { identity } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Masthead() {
  return (
    <header>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="masthead-title text-[21px] font-medium tracking-[-0.035em]">
            {identity.name}
          </h1>
          <p className="masthead-meta mt-1 font-mono text-[10.5px] tracking-[0.07em]">
            {identity.role} · {identity.location}
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
