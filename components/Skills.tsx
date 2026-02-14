import React from 'react';
import { SKILLS } from '../constants';
import { useInView } from '../hooks/useInView';

const LevelBar: React.FC<{ level: string; isVisible: boolean }> = ({ level, isVisible }) => {
  let width = '33%';
  let gradient = 'from-blue-400 to-blue-500';

  if (level === 'Intermediate') {
    width = '66%';
    gradient = 'from-blue-500 to-violet-500';
  } else if (level === 'Advanced') {
    width = '100%';
    gradient = 'from-violet-500 to-rose-500';
  }

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-full h-2.5 mt-2 overflow-hidden">
      <div
        className={`bg-gradient-to-r ${gradient} h-2.5 rounded-full transition-all duration-1000 ease-out`}
        style={{ width: isVisible ? width : '0%' }}
      />
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="space-y-6">
      {SKILLS.map((category) => (
        <div key={category.category} className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 hover:shadow-md backdrop-blur-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill, idx) => (
              <div key={skill.name} style={{ transitionDelay: `${idx * 80}ms` }}>
                <div className="flex justify-between items-end mb-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    skill.level === 'Advanced'
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30'
                      : skill.level === 'Intermediate'
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                      : 'text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700'
                  }`}>{skill.level}</span>
                </div>
                <LevelBar level={skill.level} isVisible={isInView} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
