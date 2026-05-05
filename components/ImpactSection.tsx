import React from 'react';

const WINS = [
  { n: '400%', d: <><strong>Product coverage scaled</strong> in 12 months — EU, Australia, Japan, Korea.</>, src: 'Aurora · APM' },
  { n: '50%',  d: <><strong>Delivery time cut</strong> from 8 weeks to 4 by restructuring process ownership.</>, src: 'Aurora Energy Research' },
  { n: '25%',  d: <><strong>Media efficiency gain</strong> via DBT + BigQuery pipelines unifying 4 ad channels.</>, src: 'Amplify Analytix' },
  { n: '40%',  d: <><strong>Manual reporting reduced</strong> via real-time P&L dashboard integrated with HubSpot.</>, src: 'Amplify Analytix' },
];

const PROJECTS = [
  { idx: '01', chip: 'Aurora · Product',        chipClass: 'chip-p', name: 'Power Market Intelligence Platform',    metric: '400%', label: 'Coverage growth' },
  { idx: '02', chip: 'Amplify · DBT · BigQuery', chipClass: 'chip-d', name: 'Multi-Channel Marketing Data Pipeline', metric: '25%',  label: 'Media efficiency' },
  { idx: '03', chip: 'Amplify · Databricks · ML',chipClass: 'chip-m', name: 'Customer Intelligence & LTV Platform',  metric: '20%',  label: 'Conversions' },
  { idx: '04', chip: 'SkillGigs · Growth',       chipClass: 'chip-p', name: 'Marketplace Growth & Retention Engine', metric: '25%',  label: 'Higher conversions' },
];

const ImpactSection: React.FC = () => (
  <section className="snap" id="s3" data-screen-label="03 Impact">
    <div className="s3-top">
      {WINS.map(w => (
        <div className="win-cell" key={w.n + w.src}>
          <div className="win-n">{w.n}</div>
          <div className="win-d">{w.d}</div>
          <div className="win-src">{w.src}</div>
        </div>
      ))}
    </div>
    <div className="s3-bottom">
      <div className="s3-hdr">
        <div className="s3-hdr-title">Featured Projects</div>
        <div className="s3-hdr-sub">04 impact stories</div>
      </div>
      <div className="proj-rows">
        {PROJECTS.map(p => (
          <div className="proj-r" key={p.idx}>
            <div className="proj-r-idx">{p.idx}</div>
            <div>
              <div className={`proj-r-chip ${p.chipClass}`}>{p.chip}</div>
              <div className="proj-r-name">{p.name}</div>
            </div>
            <div className="proj-r-right">
              <div className="proj-r-metric">{p.metric}</div>
              <div className="proj-r-label">{p.label}</div>
              <div className="proj-r-arrow">↗</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="sec-num">03 — Impact</div>
  </section>
);

export default ImpactSection;
