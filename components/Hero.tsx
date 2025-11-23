import React, { useState } from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import { MapPin, Mail, Phone, Download, Linkedin, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-8 md:p-12 mb-12 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
             {!imageError ? (
               <img 
                 src="https://github.com/manish-tripathi.png" 
                 alt={PROFILE.name} 
                 className="w-full h-full object-cover object-top"
                 onError={() => setImageError(true)}
               />
             ) : (
               <div className="text-4xl font-bold text-slate-400 dark:text-slate-500">
                 {PROFILE.name.split(' ').map(n => n[0]).join('')}
               </div>
             )}
          </div>
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{PROFILE.name}</h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">{PROFILE.role}</h2>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-sm text-slate-600 dark:text-slate-300">
             <div className="flex items-center gap-1.5">
               <MapPin className="w-4 h-4" />
               {PROFILE.contact.location}
             </div>
             <div className="flex items-center gap-1.5">
               <Phone className="w-4 h-4" />
               {PROFILE.contact.phone}
             </div>
             <div className="flex items-center gap-1.5">
               <Mail className="w-4 h-4" />
               {PROFILE.contact.email}
             </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
             <Link 
               to="/resume" 
               className="inline-flex items-center gap-2 bg-slate-900 dark:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors shadow-sm"
             >
               <Download className="w-4 h-4" />
               <span>Printable Resume</span>
             </Link>
             
             {SOCIAL_LINKS.map((link) => (
               <a 
                 key={link.platform}
                 href={link.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-600 transition-all shadow-sm"
               >
                 {getIcon(link.platform)}
                 <span>{link.platform}</span>
               </a>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;