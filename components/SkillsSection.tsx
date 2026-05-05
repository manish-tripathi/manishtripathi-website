import React from 'react';

const SKILLS = [
  {
    domain: 'Product Management',
    items: [
      { name: 'Product Strategy & Roadmapping', evSpan: 'Aurora EOS platform · Philippines rollout' },
      { name: 'Stakeholder Management',         evSpan: 'Research, commercial & engineering across 3 time zones' },
      { name: 'Requirements Gathering',         evSpan: '100+ market source specs · vendor quality standards' },
      { name: 'Agile / Sprint Planning',        evSpan: 'Aurora sprint delivery · 50% faster launch cycles' },
      { name: 'Cross-functional Leadership',    evSpan: '0→3 India team build · 40+ person global team at S&P' },
    ]
  },
  {
    domain: 'Analytics & Visualisation',
    items: [
      { name: 'Business Analytics', evSpan: 'S&P Global 11 years · SkillGigs · Amplify' },
      { name: 'Power BI',           evSpan: 'Crypto dashboard · S&P M&A · SkillGigs retention' },
      { name: 'Excel + Statistics', evSpan: "S&P hypothesis testing · ISB Dean's List" },
      { name: 'R',                  evSpan: 'ISB Advanced Statistics coursework' },
    ]
  },
  {
    domain: 'Data Engineering & Cloud',
    items: [
      { name: 'Python',         evSpan: 'Segmentation · NLP · XGBoost · FDA audit model' },
      { name: 'SQL',            evSpan: 'Aurora pipelines · YAML market source ingestion' },
      { name: 'DBT + BigQuery', evSpan: 'Amplify AV pipelines · 25% media efficiency' },
      { name: 'Databricks',     evSpan: 'LTV modelling · K-Means at Amplify Analytix' },
      { name: 'Snowflake',      evSpan: 'Cloud data warehouse implementations' },
    ]
  },
];

const SkillsSection: React.FC = () => (
  <section className="snap" id="s5" data-screen-label="05 Skills" style={{ display: 'flex', flexDirection: 'column' }}>
    <div className="s5-hdr">
      <div className="s5-title">Skills &amp; Tools</div>
      <div className="s5-line" />
      <div className="s5-count">3 domains</div>
    </div>
    <p className="s5-intro">
      Skills aren't just things I know — they're tools I've used to ship real products.{' '}
      <strong>Every item maps to production work or a measurable outcome.</strong>
    </p>
    <div className="skills-3col">
      {SKILLS.map(col => (
        <div className="skill-col" key={col.domain}>
          <div className="skill-col-name">{col.domain}</div>
          <div className="skill-rows">
            {col.items.map(s => (
              <div key={s.name}>
                <div className="skill-r-name">{s.name}</div>
                <div className="skill-r-ev">Used in → <span>{s.evSpan}</span></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="sec-num dark">05 — Skills</div>
  </section>
);

export default SkillsSection;
