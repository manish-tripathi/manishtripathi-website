import React, { useState } from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animKey, setAnimKey] = useState(0);

  const nextEdu = () => {
    setDirection('right');
    setAnimKey(prev => prev + 1);
    setCurrentIndex((prev) => (prev + 1) % EDUCATION.length);
  };

  const prevEdu = () => {
    setDirection('left');
    setAnimKey(prev => prev + 1);
    setCurrentIndex((prev) => (prev - 1 + EDUCATION.length) % EDUCATION.length);
  };

  const edu = EDUCATION[currentIndex];

  return (
    <div className="relative group">

      <div className="bg-white dark:bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm min-h-[300px] flex flex-col justify-center">

        <div
          key={animKey}
          className={direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'}
        >
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{edu.institution}</h3>
                <div className="text-lg text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                  {edu.degree}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-2 ml-16 md:ml-0">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {edu.year}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Education {currentIndex + 1} / {EDUCATION.length}
              </div>
            </div>
          </div>

          {/* Details List */}
          {edu.details && (
            <ul className="space-y-3 pl-2 md:pl-4 flex-grow">
              {edu.details.map((detail, i) => (
                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  <span className="mt-2 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex justify-between items-center mt-6 md:hidden">
            <button
            onClick={prevEdu}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
            >
            <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {currentIndex + 1} of {EDUCATION.length}
            </span>
            <button
            onClick={nextEdu}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
            >
            <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Desktop Navigation Arrows (Floating) */}
      <button
        onClick={prevEdu}
        className="hidden md:flex absolute top-1/2 -left-5 lg:-left-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all z-10"
        aria-label="Previous Education"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextEdu}
        className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-110 hover:shadow-xl hover:border-emerald-200 dark:hover:border-emerald-800 transition-all z-10"
        aria-label="Next Education"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {EDUCATION.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 'right' : 'left');
              setAnimKey(prev => prev + 1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 w-8'
                : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-slate-400 dark:hover:bg-slate-500'
            }`}
            aria-label={`Go to education ${idx + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Education;
