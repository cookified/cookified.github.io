# Mithun Portfolio — Ship Notes

Quiet cream portfolio for **Mithun Chakladar** (`@cookified`).
Next.js 15 App Router · React 19 · TypeScript · Tailwind CSS v4 · static export.

## Design notes

- Palette: warm cream canvas (`#FFFFE8`), soft surface (`#F8F5E8` / `#F3EEDC`), warm charcoal ink (`#1A1914`), sage-olive muted (`#6B6758`), butter accent (`#FFF1B5`) used sparingly.
- Typography is minimal and set entirely in DM Sans (300–700) — name/titles/body alike. Small sizes: body ~12–13px, labels ~10–11px, section titles ≤17px.
- Feel: quiet, modern, minimal — gradient mesh background with hairline borders, generous whitespace, no serif, no icons/logos, no glass-heavy cards.
- Content is resume-accurate: two projects only (Toastify, Konfide), plus Open Source, Experience, Education, Craft, Notes, Contact.

## Build

```bash
cd mithun-portfolio
npm install
npm run build   # produces out/
```

`next.config.ts` sets `output: "export"`, `images.unoptimized: true`, `trailingSlash: true` for GitHub Pages.

## Deploy to GitHub Pages

1. Push this repo (or the `out/` folder via Actions).
2. In GitHub → Settings → Pages → Source: GitHub Actions (recommended) or Deploy from branch.
3. If publishing to `https://cookified.github.io/<repo>/`, set `basePath` and `assetPrefix` in `next.config.ts` to `"/<repo>"` before building.
4. If publishing to a custom domain or `username.github.io` root, leave `basePath` unset.
5. Point Pages at the `out/` directory (or use an Action that runs `npm run build` and uploads `out/`).

Example minimal workflow idea: checkout → `npm ci` → `npm run build` → upload-pages-artifact from `./out` → deploy-pages.

## Contribution calendar

- Client component (`components/ContributionCalendar.tsx`) fetches  
  `https://github-contributions-api.jogruber.de/v4/cookified` at runtime.
- Styled with a buttery five-step theme for `react-activity-calendar`.
- Caveat: depends on a third-party public API; if it is down or rate-limited, the section shows a soft fallback linking to GitHub. No secrets required. Static export cannot bake live contributions at build without a network fetch during CI — client fetch keeps the export simple.

## Key files

| Path | Role |
|------|------|
| `app/page.tsx` | Single-page composition |
| `app/layout.tsx` | Fonts, metadata |
| `app/globals.css` | Cream theme tokens + Tailwind v4 |
| `next.config.ts` | Static export / Pages settings |
| `components/Nav.tsx` | Minimal floating pill dock, text links only |
| `components/Intro.tsx` | Clean-sans intro over a sunrise gradient wash |
| `components/Projects.tsx` | Toastify + Konfide only, live Toastify demo |
| `components/ContributionCalendar.tsx` | GitHub activity map (client) |
| `components/Lists.tsx` | OpenSource, Experience, Education, Skills, Achievements |
| `components/Contact.tsx` | Email, GitHub, LinkedIn, phone |
| `components/Footer.tsx` | Gradient divider + © 2026 |

## Toastify

- Mounted once in `app/layout.tsx` (`ToasterHost`), `animation="fade"`, themed
  as big cream pills.
- Toasts only fire from the Projects section (`ToastDemo` on the Toastify card)
  — no global welcome toast, no header ping, no copy-to-clipboard toast.
