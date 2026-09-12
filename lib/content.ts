export const identity = {
  name: "Mithun Chakladar",
  role: "Backend & Full-Stack Developer",
  location: "New Delhi · India",
  email: "mithunchakladar123@gmail.com",
  phone: "+91 8178958838",
  phoneHref: "tel:+918178958838",
  github: "https://github.com/cookified",
  githubHandle: "@cookified",
  linkedin: "https://linkedin.com/in/mithun-chakladar",
};

export const summary = [
  "Final-year B.Tech CSE student (MDU–SAITM, 2023–2027) building web apps end-to-end in Python and JavaScript. Focused on backend design, security, and reliability — with a quiet care for how things feel.",
  "Four merged open-source PRs across ros-controls, Ember, and Duat. One year of freelance design work taught me that output should be correct and presented cleanly.",
];

export const projects = [
  {
    name: "Toastify",
    blurb:
      "Tactile, developer-first toast notifications for React & Next.js. Built on Motion spring physics with folder-stack animations — copy-paste or install via npm.",
    meta: "@cookified/toastify",
    tags: ["React", "TypeScript", "Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/cookified/toastify" },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@cookified/toastify",
      },
    ],
    demo: true as const,
  },
  {
    name: "Konfide",
    blurb:
      "Peer-to-peer mental-health support — live listener discovery, conversation requests, and permanent encrypted-at-rest chat. Talker and listener roles via Google OAuth and email/password, with production hardening (signed cookies, origin checks, rate limits, security headers).",
    meta: "Next.js · Prisma · PostgreSQL · OAuth",
    tags: ["Next.js", "Prisma", "PostgreSQL", "OAuth"],
    links: [
      { label: "Live", href: "https://konfide-flame.vercel.app" },
      { label: "GitHub", href: "https://github.com/cookified/konfide" },
    ],
    demo: false as const,
  },
];

export const openSource = {
  label: "4 merged",
  note: "Additional PRs to tree-sitter and shadcn/ui are open under review.",
  items: [
    {
      project: "ros-controls / ros2_controllers",
      lang: "C++ / ROS 2",
      detail:
        "1 PR merged — Fixed JointStateBroadcaster warning suppression (#2276)",
      href: "https://github.com/ros-controls/ros2_controllers/pull/2276",
    },
    {
      project: "Ember",
      lang: "Rust",
      detail:
        "2 PRs merged — Added --format to ember chat and --json to ember config show (#35, #42)",
      href: "https://github.com/niklasmarderx/ember",
    },
    {
      project: "Duat",
      lang: "Rust",
      detail: "1 PR merged — Night Owl colorscheme (#51)",
      href: "https://github.com/AhoyISki/duat",
    },
  ],
};

export const experience = {
  label: "1 year",
  role: "Freelance Graphic Designer",
  org: "Extraction Esports",
  alias: "@lichiofheaven",
  detail:
    "Designed brand identities, posters, and tournament graphics. Thumbnails optimized for CTR under the alias",
};

export const education = {
  label: "2023–2027",
  degree: "B.Tech Computer Science & Engineering",
  school: "MDU – SAITM",
  place: "New Delhi",
  coursework:
    "Coursework · DSA · DBMS · Compiler Design · Discrete Mathematics · Probability & Statistics",
};

export const skills = [
  {
    label: "Languages",
    items: [
      { name: "Python", icon: "python" },
      { name: "TypeScript", icon: "typescript" },
      { name: "C++", icon: "cplusplus" },
      { name: "Rust", icon: "rust" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Motion", icon: "motion" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Firebase", icon: "firebase" },
      { name: "Prisma ORM", icon: "prisma" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    label: "Design",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "After Effects", icon: "aftereffects" },
    ],
  },
];

export const achievements = [
  "1st place — SAITM Ideathon",
  "5 hackathons with shipped projects (Ignite Arena IIIT, GITM)",
  "4 merged open-source pull requests",
  "JPMC Advanced Software Engineering (Forage)",
];

export const contactBlurb =
  "Open to thoughtful collaborations, backend work, and quiet product craft. Reach out anytime.";

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
