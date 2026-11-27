import { projects } from "@/lib/content";
import CopyCommand from "@/components/CopyCommand";
import ToastDemo from "@/components/ToastDemo";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <article
          key={project.name}
          className="project-card rounded-[22px] border border-line-soft bg-paper-2/55 p-4 shadow-[0_18px_50px_rgba(91,63,168,0.05)] transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(91,63,168,0.09)]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="flex items-baseline gap-2.5 text-[16px] font-medium tracking-[-0.02em]">
              <span className="mono-num text-faint">{project.n}</span>
              {project.name}
            </h3>
            <div className="flex items-baseline gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link font-mono text-[11px] tracking-[0.03em] text-body"
                >
                  {link.label}
                  {link.label === "live" && (
                    <span
                      className="pulse-dot mb-px ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-live align-middle"
                      aria-hidden
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="project-preview mt-4">
            <Image
              src={project.preview}
              alt={`${project.name} website preview`}
              width={1600}
              height={900}
              className="project-preview-image"
            />
          </div>

          <p className="mt-4 text-[14px] leading-[1.6] text-body">
            {project.blurb}
          </p>

          <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
            {project.command != null && (
              <CopyCommand command={project.command} />
            )}
            <ul className="flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] tracking-[0.03em] text-faint">
              {project.tags.map((tag, index) => (
                <li key={tag}>
                  {index > 0 ? <span aria-hidden>·&nbsp;</span> : null}
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {project.demo && (
            <div className="mt-3">
              <ToastDemo />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
