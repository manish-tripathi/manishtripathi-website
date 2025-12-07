import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const currentProject = PROJECTS[currentIndex];

  return (
    <div className="relative group">
      <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 transition-colors duration-300">
        <div className="flex flex-col md:flex-row min-h-[340px]">
          
          {/* Image/Video Section - Fixed width on Desktop to prevent stretching */}
          <div className="w-full md:w-80 shrink-0 h-52 md:h-auto relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 bg-black">
             {currentProject.video ? (
               <video 
                 src={currentProject.video}
                 className="absolute inset-0 w-full h-full object-cover"
                 autoPlay
                 loop
                 muted
                 playsInline
               />
             ) : (
               <img 
                 src={currentProject.image} 
                 alt={currentProject.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5 pointer-events-none"></div>
             
             {/* Navigation Overlay on Mobile */}
             <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 md:hidden z-10">
               <button 
                onClick={(e) => { e.stopPropagation(); prevProject(); }}
                className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-all border border-white/10"
               >
                 <ChevronLeft className="w-5 h-5" />
               </button>
               <button 
                onClick={(e) => { e.stopPropagation(); nextProject(); }}
                className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-all border border-white/10"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
             </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                  <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Project {currentIndex + 1} / {PROJECTS.length}
                </div>
             </div>

             <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
               {currentProject.title}
             </h3>

             <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
               {currentProject.description}
             </p>

             {currentProject.tech && (
               <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                 {currentProject.tech.map(t => (
                   <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                     {t}
                   </span>
                 ))}
               </div>
             )}

             <div>
               <a 
                 href={currentProject.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-colors shadow-sm"
               >
                 {currentProject.link.endsWith('.pbix') ? 'Download Dashboard' : 'View on GitHub'} <ArrowRight className="w-4 h-4" />
               </a>
             </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Arrows (Floating) */}
      <button 
        onClick={prevProject}
        className="hidden md:flex absolute top-1/2 -left-5 lg:-left-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all z-10"
        aria-label="Previous Project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={nextProject}
        className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all z-10"
        aria-label="Next Project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {PROJECTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-blue-600 w-8' 
                : 'bg-slate-300 dark:bg-slate-600 w-2 hover:bg-blue-400'
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;