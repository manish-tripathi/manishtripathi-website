import React from 'react';
import { MapPin } from 'lucide-react';

const AboutSection: React.FC = () => (
  <section className="snap" id="s2" data-screen-label="02 About">
    <div className="about-left">
      <div className="about-photo">
        <img src="https://github.com/manish-tripathi.png" alt="Manish Tripathi" />
      </div>
      <div className="about-loc"><MapPin size={12} />Gurugram, India</div>
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
        For years, I thought my job was to find insights.<br />
        Then I realised <em>insights only matter when they change a decision.</em>
      </div>
      <div className="about-body">
        14 years across research, analytics, and product — from answering complex business questions to{' '}
        <strong>building teams, shaping products, and partnering with leaders on outcomes.</strong>
        <br /><br />
        That journey taught me the hardest problems aren't technical.
        They're about <strong>alignment</strong> — connecting business goals, data, and people
        around the same decision. Today, I operate at that intersection.
      </div>
      <div className="about-values">
        <div className="about-values-bridge">14 years distilled into three beliefs:</div>
        <div className="about-value-item">
          <span className="about-value-n">01</span>
          <span className="about-value-t">Understand the decision before solving the problem.</span>
        </div>
        <div className="about-value-item">
          <span className="about-value-n">02</span>
          <span className="about-value-t">Measure outcomes, not activity.</span>
        </div>
        <div className="about-value-item">
          <span className="about-value-n">03</span>
          <span className="about-value-t">Build for adoption — unused solutions create no value.</span>
        </div>
      </div>
    </div>
    <div className="sec-num">02 — About</div>
  </section>
);

export default AboutSection;
