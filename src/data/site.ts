// Single source of truth for profile facts used across pages, schema and llms.txt.

export const SITE = {
  url: 'https://manishtripathi.co.in',
  name: 'Manish Tripathi',
  // Option 2 positioning line, chosen by Manish on 24 Nov 2026.
  positioning:
    'I lead data from source to decision: sourcing and licensing it, building the pipelines, and running the teams behind them.',
  subline:
    'Product Manager at Aurora Energy Research, leading historical power-market data across Europe, Asia Pacific, Australia and North America.',
  jobTitle: 'Product Manager',
  employer: { name: 'Aurora Energy Research', url: 'https://auroraer.com/' },
  location: 'Gurugram, India',
  // Hotlinked until a web-sized copy of Manish's photo is committed to public/.
  photo: 'https://github.com/manish-tripathi.png',
  ogImage: '/og-image.jpg',
  defaultDescription:
    'Manish Tripathi leads data from source to decision: data sourcing and licensing, pipelines and governance, and the analytics teams behind them. Product Manager at Aurora Energy Research.',
} as const;

export const CONTACT = {
  email: 'maneeshtripathi@gmail.com',
  phones: [
    { label: 'UK', display: '+44 7721 910512', tel: '+447721910512' },
    { label: 'India', display: '+91 98733 18106', tel: '+919873318106' },
  ],
  linkedin: 'https://www.linkedin.com/in/maneeshtripathi/',
  github: 'https://github.com/manish-tripathi',
  calendly: 'https://calendly.com/maneeshtripathi/30min',
} as const;

export const SAME_AS = [CONTACT.linkedin, CONTACT.github];

export const PROOF = [
  { n: '400%+', label: 'growth in market dashboard coverage, across four continents' },
  { n: '40+', label: 'licensed data sources, each with clear usage terms and an owner' },
] as const;

export const BELIEFS = [
  'Understand the decision before solving the problem.',
  'Measure outcomes, not activity.',
  'Build for adoption. Unused solutions create no value.',
] as const;

export interface Role {
  role: string;
  company: string;
  url: string;
  period: string;
  location?: string;
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    role: 'Product Manager',
    company: 'Aurora Energy Research',
    url: 'https://auroraer.com/',
    period: 'Jan 2025 – present',
    points: [
      'Own the historical market dashboards on Aurora’s power-market intelligence platform, from data sourcing to release.',
      'Grew dashboard coverage by more than 400%: more European countries and ancillary markets, Australia, Korea, the Philippines, and North American nodal markets.',
      'Own acquisition, licensing and entitlements for more than 40 licensed data sources alongside open data.',
      'Led a governance review that gave every table a named owner, and co-designed monitoring that now covers over 80% of tables.',
      'Built the India analytics team from scratch and moved quality checks on new data into the data team.',
    ],
  },
  {
    role: 'Business Analyst',
    company: 'Amplify Analytix',
    url: 'https://amplifyanalytix.com/',
    period: 'Sep 2023 – Jan 2025',
    points: [
      'Built dbt and BigQuery pipelines that combined Google, Meta, TikTok and Pinterest ad data for a consumer electronics client, improving media efficiency by 25%.',
      'Led a multi-phase analytics programme that unified marketing, sales and customer data for a European consumer goods company.',
      'Deployed K-Means segmentation and lifetime-value models on Databricks: 20% higher cross-channel conversions and a 15% retention uplift.',
      'Built a P&L dashboard connected to HubSpot that cut manual reporting by 40%.',
    ],
  },
  {
    role: 'Lead Market Analyst',
    company: 'SkillGigs',
    url: 'https://skillgigs.com/',
    period: 'Feb 2022 – Sep 2023',
    points: [
      'Led a team of 3 analysts running growth experiments across email, SMS and push: 20% higher engagement and 25% higher conversions.',
      'Built Python and Power BI performance dashboards that helped improve user retention by 15%.',
      'Worked with engineering to automate pricing tools such as a salary estimator and margin calculator.',
      'Set up MongoDB audience segmentation pipelines to sharpen targeting.',
    ],
  },
  {
    role: 'Senior Research Associate',
    company: 'S&P Global Market Intelligence',
    url: 'https://www.spglobal.com/marketintelligence/',
    period: 'Jun 2010 – May 2021',
    points: [
      'Onboarded and trained more than 40 researchers across four offices on M&A data collection and quality standards.',
      'Managed and mentored a team of 5 or more researchers.',
      'Cut irrelevant data by 10% using statistical models and hypothesis testing, and led a Kaizen initiative that saved 2 hours per advisory deliverable.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'Indian School of Business, Hyderabad',
    detail: 'Business Analytics, Machine Learning and Advanced Statistics',
    year: '2022',
    note: 'Dean’s List, top 10% of the class. Capstone: an NLP model matching FDA audit observations to training documents.',
  },
  {
    school: 'Institute of Management Technology, Nagpur',
    detail: 'Post Graduate Diploma in Management (HR and Finance)',
    year: '2010',
    note: '',
  },
] as const;

export const SKILLS = [
  { group: 'Data product', items: ['Product strategy and roadmaps', 'Data acquisition and licensing', 'Data governance and entitlements', 'Stakeholder management'] },
  { group: 'Data and analytics', items: ['SQL', 'Python', 'dbt', 'Snowflake', 'BigQuery', 'Databricks', 'Power BI', 'R'] },
  { group: 'Leadership', items: ['Building teams from scratch', 'QA frameworks', 'Cross-time-zone delivery', 'Mentoring'] },
] as const;

export const NAV = [
  { href: '/work/', label: 'Work' },
  { href: '/writing/', label: 'Writing' },
  { href: '/about/', label: 'About' },
  { href: '/cv/', label: 'CV' },
  { href: '/contact/', label: 'Contact' },
] as const;
