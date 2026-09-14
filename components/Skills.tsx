import type { ComponentType } from "react";
import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiRust,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
} from "react-icons/si";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeAfterEffect,
} from "react-icons/tb";
import { skills } from "@/lib/content";

const logos: Record<string, ComponentType<{ size?: number }>> = {
  Python: SiPython,
  TypeScript: SiTypescript,
  "C++": SiCplusplus,
  Rust: SiRust,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Motion: SiFramer,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  "Prisma ORM": SiPrisma,
  Git: SiGit,
  Docker: SiDocker,
  Linux: SiLinux,
  Figma: SiFigma,
  Photoshop: TbBrandAdobePhotoshop,
  "After Effects": TbBrandAdobeAfterEffect,
};

const brandColors: Record<string, string> = {
  Python: "#3776ab",
  TypeScript: "#3178c6",
  "C++": "#00599c",
  Rust: "#ce422b",
  "Node.js": "#5fa04e",
  Express: "#111111",
  React: "#087ea4",
  "Next.js": "#111111",
  "Tailwind CSS": "#06b6d4",
  Motion: "#0055ff",
  PostgreSQL: "#4169e1",
  Firebase: "#f0a93b",
  "Prisma ORM": "#2d3748",
  Git: "#f05032",
  Docker: "#2496ed",
  Linux: "#333333",
  Figma: "#f24e1e",
  Photoshop: "#31a8ff",
  "After Effects": "#9999ff",
};

export default function Skills() {
  return (
    <div className="space-y-2.5">
      {skills.map((group) => (
        <div
          key={group.label}
          className="grid grid-cols-[76px_minmax(0,1fr)] items-baseline gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.04em] text-faint">
            {group.label}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {group.items.map((item) => {
              const Logo = logos[item];
              const color = brandColors[item];
              return (
                <li
                  key={item}
                  className="chip inline-flex items-center gap-1.5"
                  style={color ? ({ "--brand": color } as React.CSSProperties) : undefined}
                >
                  {Logo ? <Logo size={12} /> : null}
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}