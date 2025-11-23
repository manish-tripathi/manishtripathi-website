import { Job, Education, SkillCategory, Profile, SocialLink, Project } from './types';

export const PROFILE: Profile = {
  name: "Manish Tripathi",
  role: "Lead Data Analyst",
  summary: "Enterprise Data & Transformation Leader with global experience building scalable analytics ecosystems across Europe, APAC, and North America. Blends strategic vision with technical fluency in SQL, Python, and cloud analytics (DBT, Databricks, BigQuery) to align data products with business goals. Led transformation programs driving double-digit gains in retention, conversion, and efficiency, embedding analytical rigor and data-driven culture enterprise-wide.",
  contact: {
    phone: "🇬🇧 +44 7721 910512 | 🇮🇳 +91 9873318106",
    email: "maneeshtripathi@gmail.com",
    location: "Gurugram, India",
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/maneeshtripathi/",
    icon: "linkedin",
    label: "linkedin.com/in/maneeshtripathi"
  },
  {
    platform: "Email",
    url: "mailto:maneeshtripathi@gmail.com",
    icon: "mail",
    label: "maneeshtripathi@gmail.com"
  },
  {
    platform: "GitHub",
    url: "https://github.com/manish-tripathi",
    icon: "github",
    label: "github.com/manish-tripathi"
  }
];

export const EXPERIENCE: Job[] = [
  {
    role: "Lead Data Analyst",
    company: "Aurora Energy Research",
    companyUrl: "https://auroraer.com/",
    period: "01/2025 - Present",
    description: [
      "Spearheaded the global standardization and rollout of historical market dashboards, enabling enterprise-wide comparability across European power markets. Reduced dashboard delivery cycles from ~2 months to under a week, cutting overall development costs by 70% and accelerating insights delivery.",
      "Built and led a cross-regional analytics center of excellence in India, scaling from zero to three analysts within six months. Established a repeatable delivery model spanning data ingestion, modeling, QA, and stakeholder alignment—boosting analyst throughput by 3x.",
      "Partnered with product and engineering teams to harmonize data schemas and time-series models across Japan, the Philippines, Australia, and Europe, improving cross-market interpretability and driving a 25% reduction in redundant analysis efforts.",
      "Owned the product lifecycle for Aurora’s EOS analytics platform, translating market research objectives into product roadmaps. Leveraged user telemetry to inform development priorities, driving 40% higher stakeholder adoption.",
      "Acted as a strategic bridge between business leadership, researchers, and engineering, aligning analytical investments with corporate objectives of data democratization and faster decision cycles.",
      "Drove the integration of analytics workflows into Aurora’s product strategy, positioning the dashboards as a commercial differentiator for client-facing insights."
    ]
  },
  {
    role: "Business Analyst",
    company: "Amplify Analytix",
    companyUrl: "https://amplifyanalytix.com/",
    period: "09/2023 - 01/2025",
    description: [
      "Directed the development of cloud-based analytics pipelines (DBT + BigQuery) for a leading AV products manufacturer that consolidated marketing and sales data across Google, Meta, TikTok, and Pinterest, resulting in a 25% improvement in media efficiency.",
      "Led a multi-phase analytics transformation program for a leading European chemical and consumer goods company, unifying marketing, sales, and customer data into a single decision intelligence ecosystem.",
      "Marketing Transformation: Designed comprehensive KPI frameworks and built executive-ready Power BI dashboards. Enabled the marketing team to shift from reporting to decision-driven optimization, resulting in a 15% uplift in customer retention.",
      "Customer Intelligence & Advanced Modeling: Partnered with Data Science teams to deploy customer segmentation (K-Means), LTV modeling, and cross-channel sales pipelines on Databricks. Delivered 20% higher cross-channel conversions.",
      "Behavioral Insights & Retention Strategy: Conducted in-depth behavioral and cart abandonment analyses to identify repeat purchase triggers. Developed heuristic-based retention strategies that strengthened engagement among high-value segments.",
      "Established a real-time P&L intelligence dashboard integrated with HubSpot, improving executive visibility and reducing manual reporting effort by 40%."
    ]
  },
  {
    role: "Lead Market Analyst",
    company: "SkillGigs",
    companyUrl: "https://skillgigs.com/",
    period: "02/2022 - 09/2023",
    description: [
      "Led a team of three analysts driving data experimentation and growth optimization across marketing and marketplace functions—creating measurable improvements in engagement and monetization.",
      "Designed and implemented heuristic-based experimentation strategies for multi-channel engagement (email, SMS, push), achieving a 20% lift in engagement and 25% higher conversions.",
      "Transformed platform intelligence through Power BI and Python-driven performance dashboards integrating behavioral, transactional, and engagement data—resulting in a 15% improvement in user retention.",
      "Partnered with engineering to automate key business levers (Salary Estimator, Margin Calculator) using optimization algorithms, enabling faster pricing decisions.",
      "Implemented MongoDB-driven audience segmentation pipelines to improve targeting precision and close feedback loops between marketing, product, and operations.",
      "Acted as the analytics voice in product and growth strategy, translating behavioral insights into prioritization decisions."
    ]
  },
  {
    role: "Senior Research Associate - I",
    company: "S&P Global Market Intelligence",
    companyUrl: "https://www.spglobal.com/en",
    period: "06/2010 - 05/2021",
    description: [
      "Delivered transformative operational improvements by leading multiple high-impact data visualization projects using Power BI, resulting in streamlined processes and faster decision-making across M&A research workflows.",
      "Managed and mentored a team of 5+ researchers, driving initiatives that significantly improved document quality and analytical output.",
      "Led onboarding and capability-building for a globally distributed team of 40+ professionals across Hyderabad, Ahmedabad, Islamabad, and Buenos Aires.",
      "Improved data collection quality by developing advanced statistical models and conducting hypothesis tests using MS Excel.",
      "Initiated projects that enhanced document sourcing precision, reduced irrelevant data by 10%, and improved operational efficiencies equivalent to 1 FTE."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Business Analytics | Machine Learning | Advanced Statistics",
    institution: "Indian School of Business, Hyderabad",
    year: "2022",
    details: [
      "Dean's List (Graduated in the top 10% of the class)",
      "Developed a machine learning model to align FDA audit observations with training documents using NLP."
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
    category: "Technical & Tools",
    skills: [
      { name: "Business Analytics", level: "Advanced" },
      { name: "Microsoft Excel", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "Power BI", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "R", level: "Intermediate" },
      { name: "Databricks", level: "Intermediate" },
      { name: "DBT", level: "Intermediate" },
      { name: "BigQuery", level: "Intermediate" },
      { name: "Snowflake", level: "Basic" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Python Customer Segmentation & Clustering",
    description: "Employed K-Means Clustering and Agglomerative Clustering techniques to segment customer data based on their Annual Income and Spending Score.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "K-Means", "Clustering", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Extracting Data from API",
    description: "Developed a pipeline to fetch and analyze news data using REST APIs from newsapi.org.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "API Integration", "JSON", "REST"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scraping Naukri.com for IT Jobs",
    description: "Scraped Naukri.com to identify companies in Hyderabad hiring for IT roles and analyzed the required skill sets for data science professionals.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "Web Scraping", "Data Mining", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Classifying Water Safety with XGBoost",
    description: "Implemented an XGBoost classifier to predict whether water is safe for drinking based on ingredient composition and safety metrics.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "XGBoost", "Machine Learning", "Classification"],
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "NLP Using Hugging Face Library",
    description: "Explored Natural Language Processing with Transformers to perform sentiment analysis and translation tasks using the Hugging Face ecosystem.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "NLP", "Hugging Face", "Transformers"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Creating Custom Datasets from Wikipedia",
    description: "Demonstrated how to create custom datasets for data science projects by scraping tables from Wikipedia using Python and Pandas (read_html).",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "Pandas", "Data Engineering", "Web Scraping"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scraping Euronext for IPOs",
    description: "Developed a Python script to scrape IPO listing data from Euronext, automating pagination to collect dates, company names, and details into a DataFrame.",
    link: "https://github.com/manish-tripathi/Projects",
    tech: ["Python", "Web Scraping", "Pandas", "Automation"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  }
];