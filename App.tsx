import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const SECTIONS = [
  { id: 's1', label: 'Home',       darkBg: true  },
  { id: 's2', label: 'About',      darkBg: false },
  { id: 's3', label: 'Impact',     darkBg: true  },
  { id: 's4', label: 'Experience', darkBg: false },
  { id: 's5', label: 'Skills',     darkBg: false },
  { id: 's6', label: 'Contact',    darkBg: true  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLElement[]>([]);

  const goTo = (idx: number) => {
    if (idx < 0 || idx >= SECTIONS.length) return;
    sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };
  (window as any).goTo = goTo;

  useEffect(() => {
    const sc = scRef.current;
    if (!sc) return;
    const refs = SECTIONS.map(s => document.getElementById(s.id) as HTMLElement);
    sectionRefs.current = refs;

    const onScroll = () => {
      const idx = Math.round(sc.scrollTop / sc.clientHeight);
      setCurrent(Math.max(0, Math.min(idx, SECTIONS.length - 1)));
    };
    sc.addEventListener('scroll', onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); setCurrent(c => { goTo(c + 1); return c; }); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); setCurrent(c => { goTo(c - 1); return c; }); }
    };
    window.addEventListener('keydown', onKey);
    return () => { sc.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);

  const isDark = SECTIONS[current]?.darkBg ?? true;

  return (
    <>
      {/* NAV */}
      <nav className={`main-nav${current > 0 ? ' scrolled' : ''}`}>
        <div className="nav-logo">M<span>.</span>T</div>
        <div className="nav-links">
          {SECTIONS.map((s, i) => (
            <button key={s.id} className={`nav-btn${i === current ? ' active' : ''}${s.id === 's6' ? ' nav-hire' : ''}`} onClick={() => goTo(i)}>
              {s.label}
            </button>
          ))}
          <button className="nav-btn nav-resume" onClick={() => navigate('/resume')}>Resume ↗</button>
        </div>
        <button className={`hamburger${menuOpen ? ' open' : ''}${current > 0 ? ' scrolled' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU DRAWER */}
      {menuOpen && (
        <div className="mobile-drawer" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer-inner" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-logo">M<span>.</span>T</div>
            {SECTIONS.map((s, i) => (
              <button key={s.id} className={`mobile-nav-btn${i === current ? ' active' : ''}${s.id === 's6' ? ' mobile-hire' : ''}`}
                onClick={() => { goTo(i); setMenuOpen(false); }}>
                <span className="mobile-nav-num">0{i + 1}</span>
                {s.label}
              </button>
            ))}
            <button className="mobile-nav-btn mobile-resume" onClick={() => { navigate('/resume'); setMenuOpen(false); }}>
              <span className="mobile-nav-num">↗</span>
              Resume
            </button>
          </div>
        </div>
      )}

      {/* SIDE DOTS */}
      <div className="side-nav">
        {SECTIONS.map((s, i) => (
          <button key={s.id} className={`sdot${i === current ? ' active' : ''}${!isDark ? ' dark-dot' : ''}`} onClick={() => goTo(i)} title={s.label} />
        ))}
      </div>

      {/* ARROWS */}
      <div className="nav-arrows">
        <button className={`arrow-btn${!isDark ? ' dark-arrow' : ''}`} onClick={() => goTo(current - 1)} style={{ opacity: current === 0 ? 0.3 : 1 }}>↑</button>
        <span className={`arrow-label${!isDark ? ' dark-label' : ''}`}>0{current + 1} / 0{SECTIONS.length}</span>
        <button className={`arrow-btn${!isDark ? ' dark-arrow' : ''}`} onClick={() => goTo(current + 1)} style={{ opacity: current === SECTIONS.length - 1 ? 0.3 : 1 }}>↓</button>
      </div>

      {/* SCROLL CONTAINER */}
      <div id="sc" ref={scRef}>
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default App;
