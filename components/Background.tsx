import { experience } from "@/lib/content";

export default function Background() {
  return (
    <div>
      <p className="text-[13.5px] font-medium">
        {experience.role}
        <span className="text-faint"> · </span>
        <span className="text-body">{experience.org}</span>
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-[0.04em] text-faint">
        {experience.period} · shipped as {experience.alias}
      </p>
      <p className="mt-2 max-w-xl text-[13px] leading-[1.55] text-body">
        {experience.detail}
      </p>
    </div>
  );
}