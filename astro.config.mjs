// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manishtripathi.co.in',
  trailingSlash: 'ignore',
  // Inline the (small) stylesheet so it no longer blocks the first render.
  build: { format: 'directory', inlineStylesheets: 'always' },
  // Draft writing is never built for production (src/lib/drafts.ts),
  // so the production sitemap only lists published pages.
  integrations: [sitemap()],
});
