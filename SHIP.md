# Mithun Portfolio — Ship Notes

Compact editorial portfolio for **Mithun Chakladar** (`@cookified`), positioned as a design engineer.
Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS v4 · Motion springs · static export.

## Design notes

- Concept: one narrow document column, hairline rules, small section labels. Everything in lowercase except real product and technology names (React, TypeScript, PostgreSQL).
- Palette, light: warm paper (`#F4F2ED`), ink (`#1A1A19`), body grey (`#5C5B56`), faint grey (`#A1A09A`), accent midnight purple (`#5B3FA8`).
- Palette, dark: paper (`#0C0B0A`), ink (`#F2EFE9`), body grey (`#A9A49C`), faint grey (`#6B665F`), accent lavender (`#B39DFF`).
- Colour comes from three places: the purple accent on section labels, a soft purple radial wash behind the page (`.page-wash`), and the brand colours of the skill logos.
- Skill logos use the real brand colour: each chip sets `--brand` inline (`components/Skills.tsx`), `.chip svg` paints from it, and dark mode lightens it with `color-mix(in srgb, var(--brand) 62%, #ffffff)` so dark marks like Next.js and Express stay visible.
- The live indicator dot uses `--live` (green), the only other hue on the page.
- Dark mode is class based: `ThemeToggle` in the masthead flips `.dark` on `<html>` and stores the choice in `localStorage` under `theme`. A blocking script in `app/layout.tsx` re-applies it before paint, so there is no flash.
- Colour discipline: the accent is used for section labels, hover states and focus rings only. Body copy stays grey.
- Typography: a local system sans stack for text and a local monospace stack for numbers, metadata and commands. Body copy sits at 13–13.5px.
- Length is a design constraint: the whole page is roughly one and a half viewport heights (≈1150px at desktop width). Adding a section should mean cutting something else.
- Section order: intro, education, open source, selected work, background, skills, contact.
- Motion: `components/Reveal.tsx` wraps each section in a small spring fade-in; `prefers-reduced-motion` turns it off. The live Toastify demo on the work section is the only interactive flourish.
- All copy lives in `lib/content.ts`. Edit that file, not the components.

## Build

```bash
npm install
npm run dev     # local
npm run build   # writes out/
npm run lint    # eslint
```

`next.config.ts` sets `output: "export"`, `images.unoptimized: true`, `trailingSlash: true` for GitHub Pages.

## Deploy to GitHub Pages

1. Push to `cookified/cookified.github.io`.
2. In GitHub → Settings → Pages → Source: GitHub Actions (recommended) or deploy the `out/` folder.
3. This repo publishes at the `username.github.io` root, so no `basePath` is needed.

## Toastify

- Mounted once in `app/layout.tsx` (`ToasterHost`), `theme="light"`, `animation="fade"`, bottom-right.
- Toasts only fire from the selected work section (`ToastDemo` on the toastify card).

## Key files

| path | role |
|------|------|
| `app/page.tsx` | Single-column composition and section order |
| `app/layout.tsx` | Fonts (Inter Tight + DM Mono), metadata, no-flash theme script, ToasterHost |
| `app/globals.css` | Paper theme tokens for light and dark, `.link`, `.marker`, `.chip`, `.mono-num` |
| `lib/content.ts` | All copy and links — single source of truth |
| `components/Masthead.tsx` | Name, role line, theme toggle |
| `components/ThemeToggle.tsx` | Light/dark switch, writes `theme` to `localStorage` |
| `components/Hero.tsx` | Intro paragraphs and contact links |
| `components/Education.tsx` | Degree, school, dates |
| `components/OpenSource.tsx` | Merged PR list with linked refs |
| `components/Projects.tsx` | selected work cards, install command, live demo |
| `components/Background.tsx` | Experience and markers |
| `components/Skills.tsx` | Skill groups as chips |
| `components/Contact.tsx`, `Footer.tsx` | Email and colophon |
