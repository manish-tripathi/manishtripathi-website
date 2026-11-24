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
  // Web copy of Manish's GitHub profile photo (460 x 460).
  photo: '/manish-tripathi.jpg',
  ogImage: '/og-image.jpg',
  defaultDescription:
    'Manish Tripathi leads data from source to decision: data sourcing and licensing, pipelines and governance, and the analytics teams behind them. Product Manager at Aurora Energy Research.',
} as const;

// About text approved by Manish on 24 Nov 2026, used on the home and About pages.
export const ABOUT = [
  'I’m a data product leader with close to 15 years in market data. I’m a Product Manager at Aurora Energy Research, where I own the historical power-market data behind its dashboards across Europe, Asia Pacific, Australia and North America. Before that, I spent eleven years at S&P Global Market Intelligence, then moved into analytics and product after the Advanced Management Programme in Business Analytics at the Indian School of Business.',
  'I own the whole path from source to decision: sourcing and licensing more than 40 data sources, setting usage terms and entitlements with the legal team, building the pipelines that harmonise the data, and leading the India analytics team that keeps it accurate. I stay hands-on in SQL, Python and dbt, and I give every step a clear owner and a check, so the data ships on time and people trust it.',
  'I’m open to senior analytics and data product roles, where I can own a data strategy end to end and build the team that delivers it.',
] as const;

export const AVAILABILITY = 'Open to senior analytics and data product roles, advisory conversations and consulting.';

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

export interface Role {
  role: string;
  company: string;
  url: string;
  period: string;
  location?: string;
  /** One line for the compact timeline on the home and About pages. */
  summary: string;
  points: string[];
}

export const EXPERIENCE: Role[] = [
  {
    role: 'Product Manager',
    company: 'Aurora Energy Research',
    url: 'https://auroraer.com/',
    period: 'Jan 2025 – present',
    summary: 'Own the historical power-market data behind Aurora’s dashboards: sourcing, licensing, governance, pipelines and the India analytics team.',
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
    summary: 'Built marketing data pipelines and customer models in dbt, BigQuery and Databricks for consumer brands.',
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
    summary: 'Led a team of 3 analysts running growth experiments, with Python and Power BI performance dashboards.',
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
    summary: 'Eleven years on M&A data, training more than 40 researchers across four offices on collection and quality standards.',
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
    detail: 'Advanced Management Programme in Business Analytics',
    year: '2022',
    honours: 'Dean’s List, top 10%',
    note: 'Capstone: an NLP model matching FDA audit observations to training documents.',
  },
  {
    school: 'Institute of Management Technology, Nagpur',
    detail: 'Post Graduate Diploma in Management (HR and Finance)',
    year: '2010',
    honours: '',
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
