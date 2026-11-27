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
      <nav
        aria-label="Page sections"
        className="masthead-nav mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[18px] border border-line-soft bg-paper-2/65 px-3.5 py-2.5 font-mono text-[10px] tracking-[0.04em] text-faint shadow-[0_10px_30px_rgba(91,63,168,0.04)]"
      >
        <span className="text-accent">index</span>
        <span aria-hidden>/</span>
        <a className="link" href="#oss">
          open source
        </a>
        <a className="link" href="#work">
          work
        </a>
        <a className="link" href="#skills">
          skills
        </a>
        <a className="link" href="#contact">
          contact
        </a>
      </nav>
    </header>
  );
}
