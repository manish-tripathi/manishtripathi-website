import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, ExternalLink, ChevronDown } from 'lucide-react';

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-[1.375rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-transparent pointer-events-none" />

      <div className="space-y-3">
        {EXPERIENCE.map((job, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div key={idx} className="relative pl-14">
              {/* Timeline dot */}
              <div
                className={`absolute left-[0.875rem] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isExpanded
                    ? 'bg-blue-500 border-blue-500 shadow-md shadow-blue-500/40'
                    : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
                }`}
              />

              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                {/* Accordion header — always visible */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                  className="w-full text-left p-5 flex items-start justify-between gap-4"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{job.role}</h3>
                      {idx === 0 && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                        >
                          {job.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-600 dark:text-slate-400 font-medium">{job.company}</span>
                      )}
                      <span className="text-slate-300 dark:text-slate-600" aria-hidden>•</span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expandable bullet points */}
                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-slate-100 dark:border-slate-700/50">
                    <ul className="space-y-2.5 mt-4">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <span className="mt-[0.4rem] w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
