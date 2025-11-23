import React from 'react';
import { SKILLS } from '../constants';

const LevelBar: React.FC<{ level: string }> = ({ level }) => {
  let width = '33%';
  let color = 'bg-blue-300 dark:bg-blue-700';
  
  if (level === 'Intermediate') {
    width = '66%';
    color = 'bg-blue-500 dark:bg-blue-500';
  } else if (level === 'Advanced') {
    width = '100%';
    color = 'bg-blue-700 dark:bg-blue-400';
  }

  return (
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-2">
      <div className={`${color} h-1.5 rounded-full transition-all duration-500`} style={{ width }}></div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="space-y-6">
      {SKILLS.map((category) => (
        <div key={category.category} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors duration-300">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">{skill.level}</span>
                </div>
                <LevelBar level={skill.level} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;