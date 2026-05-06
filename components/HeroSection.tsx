import React from 'react';

const HeroSection: React.FC = () => (
  <section className="snap" id="s1" data-screen-label="01 Home">
    <div className="hero-bg">Data.</div>
    <div className="hero-inner">
      <div className="hero-left">
        <div className="hero-eyebrow">Product Manager · Data &amp; Analytics</div>
        <h1 className="hero-hl">
          I turn messy<br />data into products<br />people <em>actually use.</em>
        </h1>
        <p className="hero-sub">
          <strong>14-year career</strong> spanning enterprise research, growth analytics, and product — from 11 years at S&P Global to scaling Aurora's analytics platform 400% in 12 months.
        </p>
        <div className="hero-ctas">
          <button className="btn-p" onClick={() => (window as any).goTo(2)}>See My Impact →</button>
          <a href="https://calendly.com/maneeshtripathi/30min" target="_blank" rel="noreferrer">
            <button className="btn-g">Schedule a Call</button>
          </a>
          <a href="https://linkedin.com/in/maneeshtripathi/" target="_blank" rel="noreferrer">
            <button className="btn-g">LinkedIn</button>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hstat"><div className="hstat-n">14+</div><div className="hstat-l">Years in Product &amp; Analytics</div></div>
        <div className="hstat"><div className="hstat-n">400%</div><div className="hstat-l">Product Coverage Scaled in 12mo</div></div>
        <div className="hstat"><div className="hstat-n">50%</div><div className="hstat-l">Delivery Time Reduction at Aurora</div></div>
      </div>
    </div>
    <div className="hero-bar">
      <div className="hbar-i"><div className="hbar-dot" /><span>Gurugram, India</span> · Open to global roles</div>
      <div className="hbar-i"><div className="hbar-dot" />Currently: <span>Aurora Energy Research</span></div>
      <div className="hbar-i"><div className="hbar-dot" />ISB Hyderabad · IMT Nagpur</div>
      <div className="hbar-i"><div className="hbar-dot" /><span>maneeshtripathi@gmail.com</span></div>
    </div>
    <div className="sec-num">01 — Home</div>
  </section>
);

export default HeroSection;
