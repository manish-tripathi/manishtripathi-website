import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';

const ExperienceSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const e = EXPERIENCE[active];

  return (
    <section className="snap" id="s4" data-screen-label="04 Experience" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="s4-hdr">
        <div className="s4-title">Experience</div>
        <div className="s4-count">14 years · 4 companies</div>
      </div>
      <div className="exp-layout" style={{ flex: 1, overflow: 'hidden' }}>
        <div className="exp-tabs">
          {EXPERIENCE.map((ex, i) => (
            <button key={i} className={`exp-tab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
              <div className="exp-tab-co">{ex.company}</div>
              <div className="exp-tab-dates">{ex.period}</div>
              {i === 0 && <div className="exp-tab-badge">Current</div>}
            </button>
          ))}
        </div>
        <div className="exp-panel">
          <div>
            <div className="exp-panel-role">{e.role}</div>
            <div className="exp-panel-co">
              {e.company}
              {active === 0 && <span className="exp-panel-note"> — Promoted from APM · Jan 2026</span>}
            </div>
          </div>
          {e.wins && (
            <div className="exp-wins-row">
              {e.wins.map((w: { n: string; l: string }, i: number) => (
                <div className="ewc" key={i}>
                  <div className="ewc-n">{w.n}</div>
                  <div className="ewc-l">{w.l}</div>
                </div>
              ))}
            </div>
          )}
          <ul className="exp-bullets-list">
            {e.description.map((b: string, i: number) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
          {e.tags && (
            <div className="exp-tag-row">
              {e.tags.map((t: string, i: number) => <span className="etag" key={i}>{t}</span>)}
            </div>
          )}
        </div>
      </div>
      <div className="sec-num dark">04 — Experience</div>
    </section>
  );
};

export default ExperienceSection;
