import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

// Full markdown text of every published case study and article, for AI assistants.
export const GET: APIRoute = async () => {
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const posts = await getCollection('writing', (p) => !p.data.draft);
  const parts = [`# ${SITE.name}: case studies and writing`, '', `> ${SITE.positioning}`, ''];
  for (const e of [...work, ...posts]) {
    const base = e.collection === 'work' ? 'work' : 'writing';
    parts.push(`## ${e.data.title}`, '', `Source: ${SITE.url}/${base}/${e.id}/`, '', e.data.description, '', (e.body ?? '').trim(), '');
  }
  return new Response(parts.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
