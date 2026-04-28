import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';
import AnimateIn from './AnimateIn';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="py-8">
      <AnimateIn animation="fade-up" duration={800}>
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold mb-4">
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 dark:from-blue-400 dark:via-violet-400 dark:to-blue-400">
              Projects Portfolio
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of data analytics, machine learning, and visualization projects demonstrating my expertise in SQL, Python, Power BI, and more.
          </p>
        </div>
      </AnimateIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <AnimateIn key={project.title} animation="fade-up" delay={Math.min(idx * 100, 400)} className="flex">
            <div
              className="group flex flex-col bg-white dark:bg-slate-800/50 rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300/50 dark:hover:border-blue-700/50 hover:-translate-y-1.5 transition-all duration-300 w-full"
            >
              {/* Image/Video Container */}
              <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 relative border-b border-slate-100 dark:border-slate-700">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-4"
                >
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    View Project
                  </span>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2" title={project.title}>
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-grow" title={project.description}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech?.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                      {t}
                    </span>
                  ))}
                  {project.tech && project.tech.length > 3 && (
                     <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto group/link"
                >
                  {project.link.endsWith('.pbix') ? 'Download Project' : 'View Project'} <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
