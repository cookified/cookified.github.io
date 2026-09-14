import { openSource } from "@/lib/content";

export default function OpenSource() {
  return (
    <div className="space-y-4">
      {openSource.repos.map((repo) => (
        <div key={repo.project}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <a
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="link text-[13.5px] font-medium"
            >
              {repo.project}
            </a>
            <span className="font-mono text-[10px] tracking-[0.04em] text-faint">
              {repo.lang}
            </span>
          </div>
          <ul className="mt-1.5 space-y-1">
            {repo.prs.map((pr) => (
              <li key={pr.ref}>
                <a
                  href={pr.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline gap-2.5"
                >
                  <span className="mono-num flex-none text-faint">
                    {pr.ref}
                  </span>
                  <span className="text-[13px] leading-[1.5] text-body transition-colors duration-200 group-hover:text-ink">
                    {pr.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}