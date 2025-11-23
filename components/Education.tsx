import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {EDUCATION.map((edu, index) => (
        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex gap-4 items-start hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-300">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
            <div className="text-slate-600 dark:text-slate-300 font-medium mb-2">{edu.institution}</div>
            <div className="text-sm text-slate-400 dark:text-slate-500 mb-2">{edu.year}</div>
            {edu.details && (
              <ul className="list-disc ml-4 space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-slate-500 dark:text-slate-400 text-sm">{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;