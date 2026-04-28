import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {EDUCATION.map((edu, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm flex flex-col"
        >
          {/* Icon + Year */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2.5 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              {edu.year}
            </div>
          </div>

          {/* Institution */}
          <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug mb-1">
            {edu.institution}
          </h3>

          {/* Degree */}
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-4">
            {edu.degree}
          </p>

          {/* Details */}
          {edu.details && (
            <ul className="space-y-2 mt-auto pt-3 border-t border-slate-100 dark:border-slate-700/50">
              {edu.details.map((detail, i) => (
                <li key={i} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <Award className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Education;
