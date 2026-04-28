import React from 'react';
import { Linkedin, Github, Mail, Calendar, Globe } from 'lucide-react';

export const getSocialIcon = (platform: string, className = 'w-4 h-4'): React.ReactElement => {
  switch (platform.toLowerCase()) {
    case 'linkedin': return <Linkedin className={className} />;
    case 'github': return <Github className={className} />;
    case 'email': return <Mail className={className} />;
    case 'calendly': return <Calendar className={className} />;
    default: return <Globe className={className} />;
  }
};
