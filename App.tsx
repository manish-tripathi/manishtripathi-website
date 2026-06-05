import React, { useEffect, useRef, useState } from 'react';
import HorizonHero from './components/HorizonHero';
import AboutSection from './components/AboutSection';
import ImpactSection from './components/ImpactSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const SECTIONS = [
  { id: 's1', label: 'Home'       },
  { id: 's2', label: 'About'      },
  { id: 's3', label: 'Impact'     },
  { id: 's4', label: 'Experience' },
  { id: 's5', label: 'Skills'     },
  { id: 's6', label: 'Contact'    },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
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

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio > 0.5) {
          setCurrent(refs.indexOf(e.target as HTMLElement));
        }
      });
    }, { root: sc, threshold: 0.5 });
    refs.forEach(r => r && io.observe(r));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); setCurrent(c => { goTo(c + 1); return c; }); }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); setCurrent(c => { goTo(c - 1); return c; }); }
    };
    window.addEventListener('keydown', onKey);
    return () => { io.disconnect(); window.removeEventListener('keydown', onKey); };
  }, []);

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
        </div>
      </nav>

      {/* SIDE DOTS */}
      <div className="side-nav">
        {SECTIONS.map((s, i) => (
          <button key={s.id} className={`sdot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} title={s.label} />
        ))}
      </div>

      {/* ARROWS */}
      <div className="nav-arrows">
        <button className="arrow-btn" onClick={() => goTo(current - 1)} style={{ opacity: current === 0 ? 0.3 : 1 }}>↑</button>
        <span className="arrow-label">0{current + 1} / 0{SECTIONS.length}</span>
        <button className="arrow-btn" onClick={() => goTo(current + 1)} style={{ opacity: current === SECTIONS.length - 1 ? 0.3 : 1 }}>↓</button>
      </div>

      {/* SCROLL CONTAINER */}
      <div id="sc" ref={scRef}>
        <HorizonHero onSeeWork={() => goTo(2)} />
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
