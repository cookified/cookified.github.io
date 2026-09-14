import { education } from "@/lib/content";

export default function Education() {
  return (
    <div>
      <p className="text-[13.5px] font-medium">{education.degree}</p>
      <p className="mt-1 font-mono text-[10px] tracking-[0.04em] text-faint">
        {education.school} · {education.place} · {education.period}
      </p>
    </div>
  );
}