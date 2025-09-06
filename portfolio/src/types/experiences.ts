export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ExperiencesData {
  experiences: Experience[];
}
