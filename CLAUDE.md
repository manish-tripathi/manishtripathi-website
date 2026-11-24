# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

```bash
npm run dev       # Astro dev server (http://localhost:4321)
npm run build     # static build to dist/
npm run preview   # preview the build
npm run check     # astro check (TypeScript + .astro diagnostics)
npm run og        # regenerate public/og-image.jpg with sharp
```

## Architecture

Static **Astro 7** site, deployed on Vercel (`vercel.json` pins the Astro preset, `dist/` output and trailing slashes). No backend, no UI framework and no client JS, apart from the print button on `/cv/`.

- `src/data/site.ts` is the single source of truth for profile facts, contact details, proof numbers and CV content. Pages, JSON-LD and `llms.txt` all read from it.
- `src/content.config.ts` defines two collections loaded from markdown: `work` (case studies) and `writing` (articles with a `draft` flag).
- `src/lib/drafts.ts`: drafts build only when `VERCEL_ENV !== 'production'`. Draft pages carry `noindex`.
- `src/lib/schema.ts`: Person, WebSite, ProfilePage and Article JSON-LD.
- `src/layouts/Base.astro`: head (title, description, canonical, og/twitter tags, JSON-LD), header, footer. Every page passes its own title and description.
- Routes: `/`, `/work/`, `/work/[id]/`, `/writing/`, `/writing/[id]/`, `/about/`, `/cv/` (printable A4), `/contact/`, `/llms.txt`, `/llms-full.txt`.

## Conventions

- Design: editorial serif (Newsreader) with Inter for labels, numbered report-style sections, one accent colour. Light and dark follow `prefers-color-scheme`; every colour is a token in `src/styles/global.css`.
- Fonts are self-hosted through Fontsource; never add Google Fonts links.
- Exactly one `h1` per page, and the home page `h1` is the name.
- `/cv/` must stay print-safe: no motion, A4 page rules, nav and footer hidden in print.
- Respect `prefers-reduced-motion` for any animation.
- Content about Aurora Energy Research stays within public limits: no client, vendor or exchange names, no licensing terms or prices, no unreleased products, no revenue.
