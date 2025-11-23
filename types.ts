export interface Job {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: 'Basic' | 'Intermediate' | 'Advanced' }[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
}

export interface Project {
  title: string;
  description: string;
  link: string;
  tech?: string[];
  image: string;
}