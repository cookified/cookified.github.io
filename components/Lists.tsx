import Section from "@/components/Section";
import SkillIcon from "@/components/SkillIcon";
import {
  achievements,
  education,
  experience,
  openSource,
  skills,
} from "@/lib/content";

export function OpenSource() {
  return (
    <Section title="Open source" label={openSource.label}>
      <ul className="divide-y divide-[var(--hairline)] border-y border-[var(--hairline)]">
        {openSource.items.map((item) => (
          <li key={item.project} className="py-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14.5px] font-medium tracking-tight text-ink transition-opacity hover:opacity-70"
              >
                {item.project}
              </a>
              <span className="text-[10px] tracking-[0.06em] text-muted">
                {item.lang}
              </span>
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        {openSource.note}
      </p>
    </Section>
  );
}

export function Experience() {
  return (
    <Section title="Experience" label={experience.label}>
      <article className="card-butter">
        <div className="card-butter-inner p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
<h3 className="text-[14.5px] font-medium tracking-tight text-ink">
              {experience.role}
            </h3>
            <span className="text-[10px] tracking-[0.06em] text-muted">
              {experience.org}
            </span>
          </div>
          <p className="mt-3 text-[12.5px] leading-[1.7] text-ink/80">
            {experience.detail}{" "}
            <span className="text-ink">{experience.alias}</span>.
          </p>
        </div>
      </article>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="about" title="Education" label={education.label}>
      <div className="border-y border-[var(--hairline)] py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-[14.5px] font-medium tracking-tight text-ink">
            {education.degree}
          </h3>
          <span className="text-[10px] tracking-[0.06em] text-muted">
            {education.place}
          </span>
        </div>
        <p className="mt-1.5 text-[12px] text-muted">{education.school}</p>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section title="Craft" label="Skills">
      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((group) => (
          <li key={group.label} className="skill-chip">
            <p className="mb-2.5 text-[10px] tracking-[0.12em] text-muted uppercase">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li key={item.name} className="skill-item" title={item.name}>
                  <span className="skill-app">
                    <SkillIcon slug={item.icon} />
                  </span>
                  <span className="text-[11.5px] leading-none tracking-[0.01em] text-ink/85">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section title="Notes" label="Highlights">
      <ul className="space-y-2.5">
        {achievements.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[12.5px] leading-relaxed text-ink/80"
          >
            <span
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--sage)]"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
