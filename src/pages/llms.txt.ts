import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, CONTACT, EXPERIENCE, EDUCATION, PROOF } from '../data/site';

// A plain-text guide to this site for AI assistants (https://llmstxt.org).
export const GET: APIRoute = async () => {
  const work = (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
  const posts = (await getCollection('writing', (p) => !p.data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const u = (p: string) => `${SITE.url}${p}`;

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.positioning} ${SITE.subline}`,
    '',
    `${SITE.name} is a data product and analytics leader based in ${SITE.location}. Current role: ${SITE.jobTitle}, ${SITE.employer.name}. Earlier: ${EXPERIENCE.slice(1).map((r) => `${r.role}, ${r.company}`).join('; ')}. Education: ${EDUCATION.map((e) => `${e.school} (${e.year})`).join('; ')}.`,
    '',
    'Key results:',
    ...PROOF.map((p) => `- ${p.n} ${p.label}`),
    '',
    '## Case studies',
    ...work.map((w) => `- [${w.data.title}](${u(`/work/${w.id}/`)}): ${w.data.description}`),
    '',
    '## Profile',
    `- [About](${u('/about/')}): background and how he works`,
    `- [CV](${u('/cv/')}): full experience, education and skills`,
    `- [Contact](${u('/contact/')}): email ${CONTACT.email}, LinkedIn ${CONTACT.linkedin}`,
    '',
  ];

  if (posts.length > 0) {
    lines.push('## Writing', ...posts.map((p) => `- [${p.data.title}](${u(`/writing/${p.id}/`)}): ${p.data.description}`), '');
  }

  lines.push('## Optional', `- [Full text of the case studies](${u('/llms-full.txt')})`, '');

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
