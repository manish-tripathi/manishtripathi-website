import { Job, Education, SkillCategory, Profile, SocialLink, Project } from './types';

export const PROFILE: Profile = {
  name: "Manish Tripathi",
  role: "Product Manager",
  summary: "Enterprise Data & Transformation Leader with global experience building scalable analytics ecosystems across Europe, APAC, and North America. Blends strategic vision with technical fluency in SQL, Python, and cloud analytics (DBT, Databricks, BigQuery) to align data products with business goals.",
  contact: {
    phone: "🇬🇧 +44 7721 910512 | 🇮🇳 +91 9873318106",
    email: "maneeshtripathi@gmail.com",
    location: "Gurugram, India",
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://linkedin.com/in/maneeshtripathi/", icon: "linkedin", label: "linkedin.com/in/maneeshtripathi" },
  { platform: "Email",    url: "mailto:maneeshtripathi@gmail.com",          icon: "mail",     label: "maneeshtripathi@gmail.com" },
  { platform: "GitHub",   url: "https://github.com/manish-tripathi",        icon: "github",   label: "github.com/manish-tripathi" },
  { platform: "Calendly", url: "https://calendly.com/maneeshtripathi/30min", icon: "calendar", label: "Book a meeting" }
];

// Extended Job type with wins + tags (added for V3 design)
export const EXPERIENCE: (Job & { wins?: { n: string; l: string }[]; tags?: string[] })[] = [
  {
    role: "Product Manager",
    company: "Aurora Energy Research",
    companyUrl: "https://auroraer.com/",
    period: "01/2025 – Present",
    wins: [
      { n: "400%", l: "Coverage scaled" },
      { n: "50%",  l: "Faster delivery" },
      { n: "100+", l: "Market sources" },
    ],
    description: [
      "Own <strong>end-to-end product strategy and delivery</strong> for Historical Market Dashboards across Aurora's EOS platform — enterprise power market intelligence spanning Europe, APAC, and Americas.",
      "Lead <strong>product discovery and requirements</strong> with research, commercial, and engineering. Manage external data vendors, define quality standards.",
      "<strong>Scaled coverage 400%+ in 12 months</strong> as APM — EU, Australia, Japan, Korea with day-ahead/intraday pricing, demand, generation, and ancillary services.",
      "<strong>Cut delivery time 50%</strong> (8→4 weeks) by separating data collection, processing, and visualisation with clear ownership and sprint-based cadence.",
      "<strong>Built the India analytics team from scratch</strong> — established QA frameworks, quality standards, and collaboration protocols supporting global product delivery.",
      "Designed infrastructure handling <strong>100+ market sources</strong> via YAML config files, feeding platform APIs and forecasting tools.",
      "Drive ongoing market expansion — Philippines rollout. <strong>Partner with senior leadership on 6–12 month roadmap</strong>, balancing new markets, system improvements, and customer requests.",
    ],
    tags: ["Product Strategy", "Enterprise B2B", "Roadmapping", "Team Building", "Energy Analytics"]
  },
  {
    role: "Business Analyst",
    company: "Amplify Analytix",
    companyUrl: "https://amplifyanalytix.com/",
    period: "09/2023 – 01/2025",
    wins: [
      { n: "25%", l: "Media efficiency" },
      { n: "20%", l: "Conversions" },
      { n: "15%", l: "Retention uplift" },
      { n: "40%", l: "Reporting cut" },
    ],
    description: [
      "Built <strong>DBT + BigQuery pipelines</strong> consolidating Google, Meta, TikTok, and Pinterest ad data for a leading AV manufacturer — <strong>25% media efficiency gain.</strong>",
      "Led multi-phase analytics transformation for a European chemical & consumer goods company — unified marketing, sales, and customer data into a single decision intelligence ecosystem spanning digital and retail channels.",
      "Deployed <strong>K-Means segmentation and LTV modelling</strong> on Databricks, integrating CRM, e-commerce, and media data — <strong>20% higher cross-channel conversions</strong> and 15% retention uplift.",
      "Built executive-ready <strong>Power BI dashboards</strong> consolidating digital and offline campaign KPIs, enabling the marketing team to shift from reporting to decision-driven optimisation.",
      "Established a <strong>real-time P&L intelligence dashboard</strong> integrated with HubSpot — improved executive visibility and reduced manual reporting effort by <strong>40%.</strong>",
    ],
    tags: ["DBT", "BigQuery", "Databricks", "Power BI", "Python"]
  },
  {
    role: "Lead Market Analyst",
    company: "SkillGigs",
    companyUrl: "https://skillgigs.com/",
    period: "02/2022 – 09/2023",
    wins: [
      { n: "20%", l: "Engagement lift" },
      { n: "25%", l: "Conversions" },
      { n: "15%", l: "Retention gain" },
    ],
    description: [
      "Led a team of 3 analysts driving <strong>growth experimentation across marketing and marketplace</strong> functions — 20% engagement lift and 25% higher conversions through heuristic multi-channel strategies (email, SMS, push).",
      "Built <strong>Python + Power BI performance dashboards</strong> integrating behavioural, transactional, and engagement data — <strong>15% improvement in user retention.</strong>",
      "Partnered with engineering to <strong>automate key business levers</strong> (Salary Estimator, Margin Calculator) using optimisation algorithms — faster pricing and placement decisions.",
      "Implemented <strong>MongoDB-driven audience segmentation</strong> pipelines to improve targeting precision and close feedback loops between marketing, product, and operations.",
    ],
    tags: ["Growth Analytics", "Python", "Power BI", "MongoDB"]
  },
  {
    role: "Senior Research Associate",
    company: "S&P Global Market Intelligence",
    companyUrl: "https://www.spglobal.com/en",
    period: "06/2010 – 05/2021",
    wins: [
      { n: "11 yrs", l: "Tenure" },
      { n: "40+",    l: "Global team" },
      { n: "−10%",   l: "Irrelevant data" },
    ],
    description: [
      "Led onboarding and capability-building for <strong>40+ professionals</strong> across Hyderabad, Ahmedabad, Islamabad, and Buenos Aires — ensuring consistency in M&A data collection and quality protocols.",
      "Managed and mentored a team of <strong>5+ researchers</strong>, driving document quality improvements and aligning output with evolving editorial standards.",
      "Delivered high-impact <strong>Power BI visualisation projects</strong> that streamlined M&A research workflows and improved decision-making speed across the team.",
      "Reduced irrelevant data by <strong>10%</strong> through advanced statistical models and hypothesis testing. Led a <strong>Kaizen initiative</strong> cutting advisory process delivery by 2 hours.",
    ],
    tags: ["Financial Research", "Power BI", "Team Leadership", "M&A Analytics"]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Business Analytics | Machine Learning | Advanced Statistics",
    institution: "Indian School of Business, Hyderabad",
    year: "2022",
    details: [
      "Dean's List — Graduated in the top 10% of the class",
      "Capstone: ML model to align FDA audit observations with training documents using NLP."
    ]
  },
  {
    degree: "Management | Human Resource Management | Finance",
    institution: "Institute of Management & Technology, Nagpur",
    year: "2010",
    details: ["Post Graduate Diploma in Management"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Product Management",
    skills: [
      { name: "Product Strategy & Roadmapping", level: "Advanced" },
      { name: "Stakeholder Management",         level: "Advanced" },
      { name: "Requirements Gathering",         level: "Advanced" },
      { name: "Agile / Sprint Planning",        level: "Intermediate" },
      { name: "Cross-functional Leadership",    level: "Advanced" },
    ]
  },
  {
    category: "Analytics & Visualisation",
    skills: [
      { name: "Business Analytics", level: "Advanced" },
      { name: "Power BI",           level: "Intermediate" },
      { name: "Microsoft Excel",    level: "Advanced" },
      { name: "R",                  level: "Intermediate" },
    ]
  },
  {
    category: "Data Engineering & Cloud",
    skills: [
      { name: "SQL",        level: "Intermediate" },
      { name: "Python",     level: "Intermediate" },
      { name: "DBT",        level: "Intermediate" },
      { name: "BigQuery",   level: "Intermediate" },
      { name: "Databricks", level: "Intermediate" },
      { name: "Snowflake",  level: "Basic" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Power Market Intelligence Platform",
    description: "Scaled Aurora's EOS analytics platform from 1 to 5 markets in 12 months — EU, Australia, Japan, Korea, Philippines. Rebuilt delivery process cutting launch time in half.",
    link: "https://auroraer.com/",
    tech: ["Product Strategy", "Roadmapping", "Energy Analytics"],
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Multi-Channel Marketing Data Pipeline",
    description: "DBT + BigQuery pipelines unifying Google, Meta, TikTok, and Pinterest ad data — 25% media efficiency gain.",
    link: "https://amplifyanalytix.com/",
    tech: ["DBT", "BigQuery", "Power BI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Customer Intelligence & LTV Platform",
    description: "K-Means segmentation, LTV modelling on Databricks — 20% higher conversions, 15% retention uplift.",
    link: "https://amplifyanalytix.com/",
    tech: ["Python", "Databricks", "K-Means"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Marketplace Growth & Retention Engine",
    description: "Heuristic-based multi-channel experimentation — 20% engagement lift, 25% higher conversions.",
    link: "https://skillgigs.com/",
    tech: ["Python", "Power BI", "MongoDB"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
  }
];
