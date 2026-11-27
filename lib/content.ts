export const identity = {
  name: "mithun chakladar",
  role: "design engineer",
  location: "new delhi · india",
  email: "mithunchakladar123@gmail.com",
  github: "https://github.com/cookified",
  githubHandle: "cookified",
  linkedin: "https://linkedin.com/in/mithun-chakladar",
};

export const intro = [
  "I'm a design engineer based in New Delhi. I spent a year designing branding and thumbnails for esports before moving into software, and I bring the same attention to how things look and feel to the interfaces I build now.",
  "Most of my work is the quiet part of a product: the motion, the feedback, and the small details you only notice when they are wrong.",
];

export const openSource = {
  repos: [
    {
      project: "ros-controls/ros2_controllers",
      lang: "C++ · ROS 2",
      href: "https://github.com/ros-controls/ros2_controllers",
      prs: [
        {
          ref: "#2276",
          title:
            "Fix JointStateBroadcaster warning suppression so standard controller configurations compile cleanly",
          href: "https://github.com/ros-controls/ros2_controllers/pull/2276",
        },
      ],
    },
    {
      project: "niklasmarderx/ember",
      lang: "Rust",
      href: "https://github.com/niklasmarderx/ember",
      prs: [
        {
          ref: "#35",
          title: "Add --format to ember chat for scriptable CLI output",
          href: "https://github.com/niklasmarderx/ember/pull/35",
        },
        {
          ref: "#42",
          title: "Add --json to ember config show for structured output",
          href: "https://github.com/niklasmarderx/ember/pull/42",
        },
      ],
    },
    {
      project: "AhoyISki/duat",
      lang: "Rust",
      href: "https://github.com/AhoyISki/duat",
      prs: [
        {
          ref: "#51",
          title:
            "Add Night Owl colorscheme for low-contrast dark editing, configurable per theme option",
          href: "https://github.com/AhoyISki/duat/pull/51",
        },
      ],
    },
  ],
};

export const projects = [
  {
    name: "toastify",
    n: "01",
    blurb:
      "Tactile toast notifications for React, built on Motion spring physics with folder-stack animations and micro-beveled surfaces. A small lab for the physics of feel — and the toaster running on this page.",
    command: "npm i @cookified/toastify",
    tags: ["React", "TypeScript", "Motion"],
    links: [
      { label: "github", href: "https://github.com/cookified/toastify" },
      { label: "npm", href: "https://www.npmjs.com/package/@cookified/toastify" },
    ],
    demo: true as const,
  },
  {
    name: "konfide",
    n: "02",
    blurb:
      "Peer-to-peer mental-health support, designed so that asking for help feels normal: a request–accept–chat flow with permanent history and distinct talker and listener roles.",
    command: null,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "OAuth"],
    links: [
      { label: "live", href: "https://konfide-nu.vercel.app" },
      { label: "github", href: "https://github.com/cookified/konfide" },
    ],
    demo: false as const,
  },
  {
    name: "versatile",
    n: "03",
    blurb:
      "A gig marketplace for gamers and esports organizations, with milestone-based contracts, IPFS-pinned deliverables, and escrow-aware workflows for short-term opportunities.",
    command: null,
    tags: ["React", "Vite", "IPFS", "Escrow"],
    links: [
      { label: "live", href: "https://versatile-frontend-tan.vercel.app" },
      { label: "github", href: "https://github.com/cookified/versatile-frontend" },
    ],
    demo: false as const,
  },
];

export const skills = [
  { label: "languages", items: ["Python", "TypeScript", "C++", "Rust"] },
  { label: "backend", items: ["Node.js", "Express"] },
  { label: "frontend", items: ["React", "Next.js", "Tailwind CSS", "Motion"] },
  { label: "data", items: ["PostgreSQL", "Firebase", "Prisma ORM"] },
  { label: "tools", items: ["Git", "Docker", "Linux"] },
  { label: "design", items: ["Figma", "Photoshop", "After Effects"] },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "MDU – SAITM",
  place: "New Delhi",
  period: "2023 – 2027",
};

export const experience = {
  role: "Freelance Graphic Designer",
  org: "Extraction Esports",
  period: "1 year",
  alias: "@lichiofheaven",
  instagram: "https://www.instagram.com/midtwttr/",
  detail:
    "Brand identities, posters, and tournament graphics for esports — thumbnails tuned for click-through without losing the taste.",
};

export const certifications = [
  {
    name: "Advanced Software Engineering Job Simulation",
    issuer: "J.P. Morgan · Forage",
  },
];

export const achievements = [
  "1st place — SAITM Ideathon",
  "5 hackathons with shipped projects (Ignite Arena IIIT, GITM)",
  "4 merged open-source pull requests",
];

export const contactBlurb =
  "Building something that should feel better than it does? My inbox is open.";
