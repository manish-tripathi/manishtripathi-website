// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manishtripathi.co.in',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Draft writing is never built for production (src/lib/drafts.ts),
  // so the production sitemap only lists published pages.
  integrations: [sitemap()],
});
