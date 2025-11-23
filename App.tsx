import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import ResumeView from './components/ResumeView';
import { Layers, Briefcase, GraduationCap, Sun, Moon, Code } from 'lucide-react';

const MainLayout: React.FC<{ isDark: boolean, toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 relative">
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-yellow-400 hover:scale-110 transition-all duration-300"
        aria-label="Toggle Light Mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <Hero />
      
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar - Skills */}
        <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
           <section id="skills" className="sticky top-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h2>
            </div>
            <Skills />
          </section>
        </div>

        {/* Right Content - Experience, Projects, Education */}
        <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
          <section id="experience">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
            </div>
            <Experience />
          </section>

          <section id="projects">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Projects</h2>
            </div>
            <Projects />
          </section>

          <section id="education">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Education</h2>
            </div>
            <Education />
          </section>
        </div>
      </main>

      <footer className="mt-24 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
        <p>© {new Date().getFullYear()} Manish Tripathi. All rights reserved.</p>
        <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  // Initialize to true for default Dark Mode
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout isDark={isDark} toggleTheme={toggleTheme} />} />
        <Route path="/resume" element={<ResumeView />} />
      </Routes>
    </Router>
  );
};

export default App;