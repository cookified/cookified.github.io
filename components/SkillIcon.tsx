import type { ComponentType, SVGProps } from "react";
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
  SiPostgresql,
  SiFirebase,
  SiPrisma,
  SiGit,
  SiDocker,
  SiLinux,
  SiFigma,
} from "react-icons/si";
import { PsMark, AeMark, MotionMark } from "@/components/BrandMarks";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconType> = {
  python: SiPython,
  typescript: SiTypescript,
  cplusplus: SiCplusplus,
  rust: SiRust,
  node: SiNodedotjs,
  express: SiExpress,
  react: SiReact,
  next: SiNextdotjs,
  tailwind: SiTailwindcss,
  motion: MotionMark,
  postgres: SiPostgresql,
  firebase: SiFirebase,
  prisma: SiPrisma,
  git: SiGit,
  docker: SiDocker,
  linux: SiLinux,
  figma: SiFigma,
  photoshop: PsMark,
  aftereffects: AeMark,
};

/* Brand tints tuned for contrast on the cream canvas. */
const brandTints: Record<string, string> = {
  python: "#3776ab",
  typescript: "#3178c6",
  cplusplus: "#00599c",
  rust: "#c4572f",
  node: "#5fa04e",
  express: "#4b4b4b",
  react: "#0fa3c5",
  next: "#222222",
  tailwind: "#0eabcf",
  postgres: "#4169e1",
  firebase: "#e69200",
  prisma: "#4f46a5",
  git: "#f05032",
  docker: "#2496ed",
  linux: "#c58f00",
  figma: "#f24e1e",
};

export default function SkillIcon({ slug }: { slug: string }) {
  const Icon = icons[slug] ?? SiGit;
  const tint = brandTints[slug];
  return tint ? (
    <Icon color={tint} className="h-full w-full" />
  ) : (
    <Icon className="h-full w-full" />
  );
}