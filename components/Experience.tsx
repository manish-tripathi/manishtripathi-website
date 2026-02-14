import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animKey, setAnimKey] = useState(0);

  const nextJob = () => {
    setDirection('right');
    setAnimKey(prev => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCE.length);
  };

  const prevJob = () => {
    setDirection('left');
    setAnimKey(prev => prev + 1);
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCE.length) % EXPERIENCE.length);
  };

  const job = EXPERIENCE[currentIndex];

  return (
    <div className="relative group">

      <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm min-h-[450px] flex flex-col">

        <div
          key={animKey}
          className={direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{job.role}</h3>
                <div className="flex items-center gap-2 mt-1">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      {job.company}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <h4 className="text-lg text-slate-600 dark:text-slate-300 font-medium">{job.company}</h4>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-2 ml-16 md:ml-0">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {job.period}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Role {currentIndex + 1} / {EXPERIENCE.length}
              </div>
            </div>
          </div>

          {/* Description List */}
          <ul className="space-y-3 pl-2 md:pl-4 flex-grow">
            {job.description.map((desc, i) => (
              <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-between items-center mt-6 md:hidden">
            <button
            onClick={prevJob}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
            >
            <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {currentIndex + 1} of {EXPERIENCE.length}
            </span>
            <button
            onClick={nextJob}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
            >
            <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Desktop Navigation Arrows (Floating) */}
      <button
        onClick={prevJob}
        className="hidden md:flex absolute top-1/2 -left-5 lg:-left-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all z-10"
        aria-label="Previous Role"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextJob}
        className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all z-10"
        aria-label="Next Role"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {EXPERIENCE.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 'right' : 'left');
              setAnimKey(prev => prev + 1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-gradient-to-r from-blue-500 to-violet-500 w-8'
                : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
            aria-label={`Go to role ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Experience;
