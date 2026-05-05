import React from 'react';

const AboutSection: React.FC = () => (
  <section className="snap" id="s2" data-screen-label="02 About">
    <div className="about-left">
      <div className="about-photo">
        <img src="https://github.com/manish-tripathi.png" alt="Manish Tripathi" />
      </div>
      <div className="about-loc">📍 Gurugram, India</div>
      <div className="about-diffs">
        <div className="diff-item">
          <div className="diff-title">I speak <em>both languages.</em></div>
          <div className="diff-body">Technical enough for data models. Strategic enough for C-suite.</div>
        </div>
        <div className="diff-item">
          <div className="diff-title">Evidence over <em>opinion.</em></div>
          <div className="diff-body">Every roadmap decision backed by signal, not gut feel.</div>
        </div>
        <div className="diff-item">
          <div className="diff-title"><em>Global</em> by default.</div>
          <div className="diff-body">Products shipped across EU, APAC, Americas simultaneously.</div>
        </div>
      </div>
    </div>
    <div className="about-right">
      <div className="about-eyebrow">The person</div>
      <div className="about-pull">
        I spent 11 years finding insights.<br />Then I learned to <em>ship them.</em>
      </div>
      <div className="about-body">
        After 11 years at S&P Global leading research teams across four continents, I realised the gap wasn't in the analysis — it was in{' '}
        <strong>getting it into the right hands, at the right time, in a form people could act on.</strong>
        <br /><br />
        That obsession took me through growth analytics at SkillGigs and Amplify Analytix before landing in product at Aurora. As APM, I{' '}
        <strong>scaled coverage 400%, halved delivery time, and built a team from zero.</strong> Now I own the full roadmap.
      </div>
      <div className="about-tags">
        {['Product Strategy','Enterprise SaaS','Data Engineering','Market Intelligence','ML / Analytics','Team Building'].map(t => (
          <span key={t} className="atag">{t}</span>
        ))}
      </div>
    </div>
    <div className="sec-num dark">02 — About</div>
  </section>
);

export default AboutSection;
