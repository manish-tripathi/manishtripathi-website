import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import ProjectsGrid from './components/ProjectsGrid';
import ResumeView from './components/ResumeView';
import AnimateIn from './components/AnimateIn';
import { PROFILE, SOCIAL_LINKS } from './constants';
import { Layers, Briefcase, GraduationCap } from 'lucide-react';
import { getSocialIcon } from './utils/icons';

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem('theme');
  if (stored !== null) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Layout component that wraps pages with Navbar and Footer
const MainLayout: React.FC<{ isDark: boolean, toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Outlet />
      </div>

      <footer className="border-t border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-900/50 transition-colors duration-300">
        {/* Gradient accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Brand */}
            <div className="text-center md:text-left">
              <div className="text-lg font-extrabold mb-1">
                <span className="gradient-text bg-gradient-to-r from-blue-600 to-violet-600">
                  {PROFILE.name}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {PROFILE.role}
              </p>
            </div>

            {/* Center: Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                  aria-label={link.platform}
                >
                  {getSocialIcon(link.platform)}
                </a>
              ))}
            </div>

            {/* Right: Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} {PROFILE.name}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Built with React, TypeScript &amp; Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <div>
      <AnimateIn animation="fade-in" duration={800}>
        <Hero />
      </AnimateIn>
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar - Skills */}
        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
          <AnimateIn animation="fade-up" delay={200}>
            <section id="skills" className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Skills & Expertise</h2>
              </div>
              <Skills />
            </section>
          </AnimateIn>
        </div>

        {/* Right Content - Experience, Education */}
        <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
          <AnimateIn animation="fade-up" delay={100}>
            <section id="experience">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Professional Experience</h2>
              </div>
              <Experience />
            </section>
          </AnimateIn>

          <AnimateIn animation="fade-up" delay={200}>
            <section id="education">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Education</h2>
              </div>
              <Education />
            </section>
          </AnimateIn>
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout isDark={isDark} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsGrid />} />
        </Route>
        <Route path="/resume" element={<ResumeView />} />
      </Routes>
    </Router>
  );
};

export default App;
