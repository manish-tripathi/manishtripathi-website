import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="space-y-8">
      {EXPERIENCE.map((job, index) => (
        <div key={index} className="relative">
          {/* Vertical line connecting timeline items */}
          <div className="absolute left-6 top-12 bottom-[-32px] w-px bg-slate-200 dark:bg-slate-700 -z-10 last:hidden"></div>
          
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800">
             
             <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
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

                <div className="flex-shrink-0 md:text-right ml-16 md:ml-0">
                   <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </div>
                </div>
             </div>

              <ul className="space-y-3 pl-2 md:pl-16">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                    <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;