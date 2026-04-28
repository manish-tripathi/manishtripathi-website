import { Job, Education, SkillCategory, Profile, SocialLink, Project } from './types';

export const PROFILE: Profile = {
  name: "Manish Tripathi",
  role: "Product Manager",
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
  },
  {
    platform: "Calendly",
    url: "https://calendly.com/maneeshtripathi/30min",
    icon: "calendar",
    label: "Book a meeting"
  }
];

export const EXPERIENCE: Job[] = [
  {
    role: "Product Manager",
    company: "Aurora Energy Research",
    companyUrl: "https://auroraer.com/",
    period: "01/2026 - Present",
    description: [
      "Own end-to-end product strategy and delivery for Historical Market Dashboards across Aurora's EOS analytics platform, serving enterprise clients and internal research teams with power market intelligence spanning Europe, APAC, and Americas.",
      "Lead product discovery and requirements gathering with research teams, commercial stakeholders, and engineering. Translate market needs into concrete product specs, manage external data vendors, and define quality standards for outputs.",
      "Drive new market expansion, currently rolling out the Philippines using standardised templates—applying the same approach across different geographies to reduce duplicate work and accelerate launches.",
      "Partner with senior leadership on the 6–12 month product roadmap, balancing new market launches, system improvements, and customer feature requests. Align historical data products with company goals around making data more accessible."
    ]
  },
  {
    role: "Associate Product Manager",
    company: "Aurora Energy Research",
    companyUrl: "https://auroraer.com/",
    period: "01/2025 - 01/2026",
    description: [
      "Scaled product coverage by 400%+ in 12 months, launching dashboards for Europe, Australia, Japan, and Korea. Defined data scope for each market: day-ahead/intraday pricing, demand, generation, and ancillary services (aFRR, mFRR, FCR, replacement reserves)—making historical data a key selling point for client acquisition.",
      "Reduced delivery time by 50% (8 weeks to 4 weeks) by separating data collection, processing, and visualisation into distinct steps with clear ownership. Established sprint-based delivery, enabling faster response to customer requests.",
      "Built India-based product team from 0 to 3 analysts in 6 months, designing onboarding processes, quality standards, and collaboration protocols. Enabled global product delivery across time zones while maintaining quality and speed.",
      "Standardised products across geographies, creating consistent data structures and templates that worked across multiple markets—reducing duplicate work and enabling repeatable launches.",
      "Managed migration from legacy to new data processing system, coordinating with engineering to avoid disruption to live customer dashboards and testing thoroughly before production cutover.",
      "Designed data processing infrastructure handling 100+ market sources, using YAML configuration files to automatically standardise data across different time formats, feeding into platform APIs, research reports, and forecasting tools."
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
    category: "Product Management",
    skills: [
      { name: "Product Strategy & Roadmapping", level: "Advanced" },
      { name: "Stakeholder Management", level: "Advanced" },
      { name: "Requirements Gathering", level: "Advanced" },
      { name: "Agile / Sprint Planning", level: "Intermediate" },
      { name: "User Research & Discovery", level: "Intermediate" },
      { name: "Cross-functional Leadership", level: "Advanced" },
    ]
  },
  {
    category: "Analytics & Visualisation",
    skills: [
      { name: "Business Analytics", level: "Advanced" },
      { name: "Power BI", level: "Intermediate" },
      { name: "Microsoft Excel", level: "Advanced" },
      { name: "R", level: "Intermediate" },
    ]
  },
  {
    category: "Data Engineering & Cloud",
    skills: [
      { name: "SQL", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "DBT", level: "Intermediate" },
      { name: "BigQuery", level: "Intermediate" },
      { name: "Databricks", level: "Intermediate" },
      { name: "Snowflake", level: "Basic" },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Cryptocurrency Market Analysis Dashboard",
    description: "Designed an interactive cryptocurrency dashboard in Power BI monitoring market capitalization, trading volume, and price trends for seven major assets. Implemented time-series analysis and intuitive navigation controls to enhance financial data accessibility.",
    link: "https://github.com/manish-tripathi/Dashboards/blob/58a9add47370dc03e5c2b9dbe8a54cf398ccac1b/Crypto%20Dashboard.pbix",
    tech: ["Power BI", "Data Visualization", "Financial Analysis"],
    video: "https://github.com/manish-tripathi/Dashboards/raw/58a9add47370dc03e5c2b9dbe8a54cf398ccac1b/video.mp4",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sample Superstore Sales & Profitability Dashboard",
    description: "Engineered a strategic sales dashboard utilizing the Sample Superstore dataset to track profitability and regional performance. Visualized key metrics including delivery times and segment contributions, identifying top-performing products and optimization opportunities via interactive maps and KPI cards.",
    link: "https://github.com/manish-tripathi/Dashboards/blob/58a9add47370dc03e5c2b9dbe8a54cf398ccac1b/Sample%20Super%20Stores.pbix",
    tech: ["Power BI", "KPI Dashboard", "Geographic Analysis", "Sales Analytics"],
    image: "https://github.com/manish-tripathi/Dashboards/blob/58a9add47370dc03e5c2b9dbe8a54cf398ccac1b/1646801807935.jpg?raw=true"
  },
  {
    title: "Python Customer Segmentation & Clustering",
    description: "Employed K-Means Clustering and Agglomerative Clustering techniques to segment customer data based on their Annual Income and Spending Score.",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/Python%20Customer%20Segmentation%20%26%20Clustering.ipynb",
    tech: ["Python", "K-Means", "Clustering", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Extracting Data from API",
    description: "Developed a pipeline to fetch and analyze news data using REST APIs from newsapi.org.",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/NewsApi_Manish_Tripathi.ipynb",
    tech: ["Python", "API Integration", "JSON", "REST"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scraping Naukri.com for IT Jobs",
    description: "Scraped Naukri.com to identify companies in Hyderabad hiring for IT roles and analyzed the required skill sets for data science professionals.",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/Naukri_Webscrapper.ipynb",
    tech: ["Python", "Web Scraping", "Data Mining", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Classifying Water Safety with XGBoost",
    description: "Implemented an XGBoost classifier to predict whether water is safe for drinking based on ingredient composition and safety metrics.",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/classifying-unbalanced-dataset-using-xgboost.ipynb",
    tech: ["Python", "XGBoost", "Machine Learning", "Classification"],
    image: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "NLP Using Hugging Face Library",
    description: "Explored Natural Language Processing with Transformers to perform sentiment analysis and translation tasks using the Hugging Face ecosystem.",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/nlp-using-hugging-face-library.ipynb",
    tech: ["Python", "NLP", "Hugging Face", "Transformers"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Creating Custom Datasets from Wikipedia",
    description: "Demonstrated how to create custom datasets for data science projects by scraping tables from Wikipedia using Python and Pandas (read_html).",
    link: "https://nbviewer.org/github/manish-tripathi/Projects/blob/main/create-custom-datasets-from-wikipedia-with-python.ipynb",
    tech: ["Python", "Pandas", "Data Engineering", "Web Scraping"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scraping Euronext for IPOs",
    description: "Developed a Python script to scrape IPO listing data from Euronext, automating pagination to collect dates, company names, and details into a DataFrame.",
    link: "https://nbviewer.org/github/manish-tripathi/Amplify-Analytix-Task/blob/main/scrapping-euronext-for-ipos.ipynb",
    tech: ["Python", "Web Scraping", "Pandas", "Automation"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
  }
];