export interface Project {
  title: string;
  details: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  description: string;
  achievements?: string[];
  projects?: Project[];
  technologies: string[];
}

export interface ExperiencesData {
  experiences: Experience[];
}
