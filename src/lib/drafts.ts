/**
 * Draft writing is visible on local builds and Vercel preview deployments,
 * and never on the production site. Vercel sets VERCEL_ENV at build time.
 */
export const SHOW_DRAFTS = process.env.VERCEL_ENV !== 'production';
