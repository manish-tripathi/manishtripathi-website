import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Job } from '../types';
import { Calendar, ExternalLink, ChevronDown, Building2 } from 'lucide-react';

type JobWithIdx = Job & { globalIdx: number };
type JobGroup = { company: string; companyUrl?: string; jobs: JobWithIdx[] };

const buildGroups = (): JobGroup[] => {
  const groups: JobGroup[] = [];
  let globalIdx = 0;
  EXPERIENCE.forEach(job => {
    const last = groups[groups.length - 1];
    if (last && last.company === job.company) {
      last.jobs.push({ ...job, globalIdx: globalIdx++ });
    } else {
      groups.push({ company: job.company, companyUrl: job.companyUrl, jobs: [{ ...job, globalIdx: globalIdx++ }] });
    }
  });
  return groups;
};

const groupTenure = (jobs: JobWithIdx[]) => {
  const start = jobs[jobs.length - 1].period.split(' - ')[0];
  const end = jobs[0].period.split(' - ')[1];
  return `${start} – ${end}`;
};

const Experience: React.FC = () => {
  const groups = buildGroups();
  const [expandedRoles, setExpandedRoles] = useState<Set<number>>(new Set([0]));

  const toggleRole = (idx: number) =>
    setExpandedRoles(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });

  return (
    <div className="relative">
      <div className="absolute left-[1.375rem] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-transparent pointer-events-none" />

      <div className="space-y-3">
        {groups.map((group, groupIdx) => {
          const isMultiRole = group.jobs.length > 1;
          const timelineDotActive = group.jobs.some(j => expandedRoles.has(j.globalIdx)) || isMultiRole;

          return (
            <div key={groupIdx} className="relative pl-14">
              {/* Timeline dot */}
              <div className={`absolute left-[0.875rem] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                timelineDotActive
                  ? 'bg-blue-500 border-blue-500 shadow-md shadow-blue-500/40'
                  : 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600'
              }`} />

              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

                {isMultiRole ? (
                  <>
                    {/* Company header for grouped roles */}
                    <div className="px-5 pt-4 pb-3 border-b border-slate-100 dark:border-slate-700/50">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            {group.companyUrl ? (
                              <a
                                href={group.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1 transition-colors"
                              >
                                {group.company}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <span className="text-base font-bold text-slate-900 dark:text-white">{group.company}</span>
                            )}
                            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <Calendar className="w-3 h-3" />
                              {groupTenure(group.jobs)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-roles */}
                    <div className="divide-y divide-slate-100 dark:divide-slate-700/30">
                      {group.jobs.map((job, roleIdx) => {
                        const isExpanded = expandedRoles.has(job.globalIdx);
                        const isCurrent = job.globalIdx === 0;
                        return (
                          <div key={roleIdx}>
                            <button
                              onClick={() => toggleRole(job.globalIdx)}
                              aria-expanded={isExpanded}
                              className="w-full text-left px-5 py-3.5 flex items-start justify-between gap-3 hover:bg-slate-50/80 dark:hover:bg-slate-700/20 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className={`mt-1.5 w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 ${
                                  isCurrent
                                    ? 'bg-blue-400 border-blue-400'
                                    : 'bg-slate-300 dark:bg-slate-600 border-slate-300 dark:border-slate-600'
                                }`} />
                                <div>
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{job.role}</span>
                                    {isCurrent && (
                                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                                        Current
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {job.period}
                                  </div>
                                </div>
                              </div>
                              <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 mt-1.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            {isExpanded && (
                              <div className="px-5 pb-4 bg-slate-50/40 dark:bg-slate-900/20">
                                <ul className="space-y-2.5 pt-2 pl-5">
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
                        );
                      })}
                    </div>
                  </>
                ) : (
                  /* Single role — standard accordion */
                  (() => {
                    const job = group.jobs[0];
                    const isExpanded = expandedRoles.has(job.globalIdx);
                    const isCurrent = job.globalIdx === 0;
                    return (
                      <>
                        <button
                          onClick={() => toggleRole(job.globalIdx)}
                          aria-expanded={isExpanded}
                          className="w-full text-left p-5 flex items-start justify-between gap-4"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-base font-bold text-slate-900 dark:text-white">{job.role}</h3>
                              {isCurrent && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
                                  Current
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm">
                              {group.companyUrl ? (
                                <a
                                  href={group.companyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
                                >
                                  {group.company}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                <span className="text-slate-600 dark:text-slate-400 font-medium">{group.company}</span>
                              )}
                              <span className="text-slate-300 dark:text-slate-600" aria-hidden>•</span>
                              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                <Calendar className="w-3 h-3" />
                                {job.period}
                              </span>
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

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
                      </>
                    );
                  })()
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
