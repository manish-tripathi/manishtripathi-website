import React from 'react';
import { Calendar, Mail, Linkedin, Github } from 'lucide-react';
import { EDUCATION } from '../constants';

const LINKS = [
  { icon: Calendar, label: 'Schedule via Calendly', sub: 'Book a 30-minute call',            href: 'https://calendly.com/maneeshtripathi/30min' },
  { icon: Mail,     label: 'maneeshtripathi@gmail.com', sub: 'Email directly',               href: 'mailto:maneeshtripathi@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn',                  sub: 'linkedin.com/in/maneeshtripathi', href: 'https://linkedin.com/in/maneeshtripathi/' },
  { icon: Github,   label: 'GitHub',                    sub: 'github.com/manish-tripathi',   href: 'https://github.com/manish-tripathi' },
];

const ContactSection: React.FC = () => (
  <section className="snap" id="s6" data-screen-label="06 Contact">
    <div className="s6-left">
      <div className="s6-eyebrow">Let's connect</div>
      <div className="s6-hl">Have a hard problem?<br /><em>Let's solve it.</em></div>
      <p className="s6-sub">
        Open to senior product and data leadership roles, advisory conversations, and consulting — particularly at the intersection of analytics and enterprise software.
      </p>
      <div className="s6-links">
        {LINKS.map(l => {
          const Icon = l.icon;
          return (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <div className="s6-link">
                <div className="s6-link-icon"><Icon size={15} strokeWidth={2} /></div>
                <div>
                  <div className="s6-link-label">{l.label}</div>
                  <div className="s6-link-sub">{l.sub}</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
    <div className="s6-right">
      <div>
        <div className="s6-edu-title">Education</div>
        <div className="edu-cards">
          {EDUCATION.map(ed => (
            <div className="edu-c" key={ed.institution}>
              <div className="edu-c-year">{ed.year}</div>
              <div className="edu-c-badge">{ed.institution.split(',')[0]} · {ed.year}</div>
              <div className="edu-c-deg">{ed.degree}</div>
              <div className="edu-c-school">{ed.institution}</div>
              {ed.details && ed.details.map((d, i) => i === 0
                ? <div className="edu-c-highlight" key={i}><strong>{d.split('(')[0].trim()}</strong>{d.includes('(') ? ` (${d.split('(')[1]}` : ''}</div>
                : <div className="edu-c-detail" key={i}>{d}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="s6-footer">© 2026 Manish Tripathi · Gurugram, India</div>
    </div>
    <div className="sec-num">06 — Contact</div>
  </section>
);

export default ContactSection;
