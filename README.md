# manishtripathi.co.in

Personal site of Manish Tripathi, built with [Astro](https://astro.build) as a static site and hosted on Vercel.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build to dist/
npm run preview   # serve the built site
npm run check     # Astro and TypeScript checks
npm run og        # rebuild public/og-image.jpg (1200x630 share image)
```

Node 22.23.4 or newer is required by Astro 7.

## Where things live

- `src/data/site.ts`: profile, positioning line, contact details, CV content.
- `src/content/work/`: the case studies, one markdown file each.
- `src/content/writing/`: articles. `draft: true` shows a piece only on local and preview builds; production builds (`VERCEL_ENV=production`) leave it out.
- `src/pages/`: routes, plus `llms.txt` and `llms-full.txt` for AI assistants.
- `public/robots.txt`: allows search engines and AI crawlers and points to the sitemap.
