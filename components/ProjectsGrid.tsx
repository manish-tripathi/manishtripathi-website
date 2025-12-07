import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectsGrid: React.FC = () => {
  return (
    <div className="py-8 animate-fade-in">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Projects Portfolio</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A collection of data analytics, machine learning, and visualization projects demonstrating my expertise in SQL, Python, Power BI, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
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
              {/* Overlay link icon */}
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg">
                  <ExternalLink className="w-5 h-5 text-slate-900 dark:text-white" />
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
                  <span key={t} className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                    {t}
                  </span>
                ))}
                {project.tech && project.tech.length > 3 && (
                   <span className="text-[10px] font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-auto"
              >
                {project.link.endsWith('.pbix') ? 'Download Project' : 'View Project'} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;