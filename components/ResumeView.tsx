import React, { useEffect } from 'react';
import { EXPERIENCE, PROFILE, EDUCATION, SKILLS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumeView: React.FC = () => {
  
  useEffect(() => {
    document.title = `${PROFILE.name} - Resume`;
    return () => {
      document.title = `${PROFILE.name} | ${PROFILE.role}`;
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 print:p-0 print:bg-white">
      
      {/* Controls - Hidden when printing */}
      <div className="max-w-[21cm] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2">
          ← Back to Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 shadow-sm"
        >
          Download / Print PDF
        </button>
      </div>

      {/* A4 Paper Layout */}
      <div className="max-w-[21cm] mx-auto bg-white shadow-xl print:shadow-none p-[1cm] md:p-[1.5cm] min-h-[29.7cm]">
        
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 print:hidden border border-slate-200">
                <img src="https://github.com/manish-tripathi.png" alt={PROFILE.name} className="w-full h-full object-cover object-top grayscale" />
             </div>
             <div>
                <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">{PROFILE.name}</h1>
                <p className="text-lg text-blue-700 font-medium mt-1">{PROFILE.role}</p>
             </div>
          </div>
          
          <div className="text-sm text-slate-600 space-y-1.5 text-right">
            <div className="flex items-center justify-end gap-2">
               <span>{PROFILE.contact.phone}</span>
               <Phone className="w-3 h-3" />
            </div>
            <div className="flex items-center justify-end gap-2">
               <a href={`mailto:${PROFILE.contact.email}`} className="hover:underline">{PROFILE.contact.email}</a>
               <Mail className="w-3 h-3" />
            </div>
            <div className="flex items-center justify-end gap-2">
               <span>{PROFILE.contact.location}</span>
               <MapPin className="w-3 h-3" />
            </div>
            {SOCIAL_LINKS.map(link => (
              <div key={link.platform} className="flex items-center justify-end gap-2">
                 <a href={link.url} className="hover:underline">{link.label.replace('https://', '')}</a>
                 {link.icon === 'linkedin' ? <Linkedin className="w-3 h-3" /> : <Github className="w-3 h-3" />}
              </div>
            ))}
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-800 text-justify">
            {PROFILE.summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Experience</h2>
          <div className="space-y-6">
            {EXPERIENCE.map((job, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900">{job.role}</h3>
                  <span className="text-xs font-medium text-slate-500">{job.period}</span>
                </div>
                <div className="text-blue-700 font-medium text-sm mb-2">{job.company}</div>
                <ul className="list-disc ml-4 space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i} className="text-xs text-slate-700 pl-1 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 break-inside-avoid">
           <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Skills</h2>
           <div className="flex flex-wrap gap-x-8 gap-y-2">
             {SKILLS.map(cat => (
               cat.skills.map(skill => (
                 <div key={skill.name} className="flex items-center gap-2 text-sm">
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <span className="text-slate-400 text-xs">• {skill.level}</span>
                 </div>
               ))
             ))}
           </div>
        </section>

        {/* Education */}
        <section className="break-inside-avoid">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Education</h2>
          <div className="space-y-4">
            {EDUCATION.map((edu, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                   <h3 className="font-bold text-slate-900 text-sm">{edu.degree}</h3>
                   <span className="text-xs text-slate-500">{edu.year}</span>
                </div>
                <div className="text-slate-600 text-sm">{edu.institution}</div>
                {edu.details && (
                  <div className="text-xs text-slate-500 mt-1 italic">
                    {edu.details.join(' • ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ResumeView;