import Section from "@/components/Section";
import ToastDemo from "@/components/ToastDemo";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <Section id="work" title="Selected work" label="Projects" className="sm:py-16">
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.name} className="card-butter group">
            <div className="card-butter-inner p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[16px] font-semibold tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="text-[10px] tracking-[0.06em] text-muted">
                  {project.meta}
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-[12.5px] leading-[1.7] text-ink/80">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <ul className="flex flex-wrap gap-1.5" aria-label="Tech">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="chip px-2 py-0.5 text-[10px] tracking-[0.04em]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ul className="flex gap-3">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] tracking-[0.06em] text-muted underline decoration-[var(--hairline-strong)] underline-offset-4 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {project.demo ? <ToastDemo /> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
