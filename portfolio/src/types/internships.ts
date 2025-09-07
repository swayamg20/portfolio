export interface Internship {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'remote' | 'onsite' | 'hybrid';
}

export interface InternshipsData {
  internships: Internship[];
}
