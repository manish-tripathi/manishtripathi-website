import React, { useState } from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import { MapPin, Mail, Phone, Download, Linkedin, Github, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'github': return <Github className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'calendly': return <Calendar className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative overflow-hidden rounded-2xl p-8 md:p-12 mb-12 bg-gradient-to-br from-slate-50 via-blue-50/50 to-violet-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/50 border border-slate-200/50 dark:border-slate-700/50 shadow-lg dark:shadow-2xl dark:shadow-blue-500/5 transition-colors duration-300">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative flex flex-col md:flex-row gap-8 items-start">
        {/* Profile image with gradient ring */}
        <div className="relative flex-shrink-0 mx-auto md:mx-0">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-violet-500 to-rose-500 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900">
              {!imageError ? (
                <img
                  src="https://github.com/manish-tripathi.png"
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-slate-400 dark:text-slate-500">
                  {PROFILE.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
          </div>
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900" />
        </div>

        <div className="flex-grow text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            <span className="gradient-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-blue-100 dark:to-violet-200">
              {PROFILE.name}
            </span>
          </h1>
          <h2 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6 flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {PROFILE.role}
          </h2>

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
               className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
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
                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
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
