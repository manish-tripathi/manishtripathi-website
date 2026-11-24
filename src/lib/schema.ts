import { SITE, SAME_AS, CONTACT, EDUCATION } from '../data/site';

export const PERSON_ID = `${SITE.url}/#person`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    image: new URL(SITE.photo, SITE.url).href,
    jobTitle: SITE.jobTitle,
    description: SITE.positioning,
    worksFor: { '@type': 'Organization', name: SITE.employer.name, url: SITE.employer.url },
    alumniOf: EDUCATION.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    hasCredential: EDUCATION.map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      name: e.detail,
      recognizedBy: { '@type': 'CollegeOrUniversity', name: e.school },
    })),
    seeks: { '@type': 'Demand', description: 'Senior analytics and data product roles' },
    address: { '@type': 'PostalAddress', addressLocality: 'Gurugram', addressCountry: 'IN' },
    email: `mailto:${CONTACT.email}`,
    knowsAbout: [
      'Data product management',
      'Data licensing',
      'Data governance',
      'Data pipelines',
      'Analytics team leadership',
      'Energy market data',
      'Power markets',
    ],
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    description: SITE.defaultDescription,
    publisher: { '@id': PERSON_ID },
    inLanguage: 'en',
  };
}

export function articleSchema(opts: { url: string; title: string; description: string; date?: Date }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    author: { '@id': PERSON_ID, '@type': 'Person', name: SITE.name, url: `${SITE.url}/` },
    image: `${SITE.url}${SITE.ogImage}`,
    ...(opts.date ? { datePublished: opts.date.toISOString().slice(0, 10) } : {}),
    inLanguage: 'en',
  };
}

export function profilePageSchema(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url,
    mainEntity: { '@id': PERSON_ID },
  };
}
