import { identity } from "@/lib/content";

export default function Masthead() {
  return (
    <header>
      <div>
        <div>
          <h1 className="text-[19px] font-medium tracking-[-0.01em]">
            {identity.name}
          </h1>
          <p className="mt-1 font-mono text-[10.5px] tracking-[0.04em] text-faint">
            {identity.role} · {identity.location}
          </p>
        </div>
      </div>
    </header>
  );
}
