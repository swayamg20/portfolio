export interface ProjectBackground {
  type: 'gradient';
  from: string;
  to: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ProjectBackground;
  icon: string;
}

export interface ProjectsData {
  projects: Project[];
}
