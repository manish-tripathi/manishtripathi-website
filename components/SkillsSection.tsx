import React from 'react';

const SKILLS = [
  {
    domain: 'Product Management',
    items: [
      { name: 'Product Strategy & Roadmapping', evSpan: 'Aurora EOS platform · Philippines rollout',                level: 'Advanced' },
      { name: 'Stakeholder Management',         evSpan: 'Research, commercial & engineering across 3 time zones',  level: 'Advanced' },
      { name: 'Requirements Gathering',         evSpan: '100+ market source specs · vendor quality standards',     level: 'Advanced' },
      { name: 'Agile / Sprint Planning',        evSpan: 'Aurora sprint delivery · 50% faster launch cycles',      level: 'Intermediate' },
      { name: 'Cross-functional Leadership',    evSpan: '0→3 India team build · 40+ person global team at S&P',   level: 'Advanced' },
    ]
  },
  {
    domain: 'Analytics & Visualisation',
    items: [
      { name: 'Business Analytics', evSpan: 'S&P Global 11 years · SkillGigs · Amplify',          level: 'Advanced' },
      { name: 'Power BI',           evSpan: 'Crypto dashboard · S&P M&A · SkillGigs retention',   level: 'Intermediate' },
      { name: 'Excel + Statistics', evSpan: "S&P hypothesis testing · ISB Dean's List",            level: 'Advanced' },
      { name: 'R',                  evSpan: 'ISB Advanced Statistics coursework',                  level: 'Intermediate' },
    ]
  },
  {
    domain: 'Data Engineering & Cloud',
    items: [
      { name: 'Python',         evSpan: 'Segmentation · NLP · XGBoost · FDA audit model',       level: 'Intermediate' },
      { name: 'SQL',            evSpan: 'Aurora pipelines · YAML market source ingestion',       level: 'Intermediate' },
      { name: 'DBT + BigQuery', evSpan: 'Amplify AV pipelines · 25% media efficiency',          level: 'Intermediate' },
      { name: 'Databricks',     evSpan: 'LTV modelling · K-Means at Amplify Analytix',          level: 'Intermediate' },
      { name: 'Snowflake',      evSpan: 'Cloud data warehouse implementations',                  level: 'Familiar' },
    ]
  },
];

const levelClass: Record<string, string> = {
  'Advanced':     'lvl-adv',
  'Intermediate': 'lvl-mid',
  'Familiar':     'lvl-fam',
};

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
              <div className="skill-item" key={s.name}>
                <div className="skill-r-header">
                  <div className="skill-r-name">{s.name}</div>
                  <span className={`skill-lvl ${levelClass[s.level]}`}>{s.level}</span>
                </div>
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
