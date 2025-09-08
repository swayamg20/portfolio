export type ProjectBackground =
  | {
      type: 'gradient';
      from: string;
      to: string;
    }
  | {
      type: 'image';
      url: string;
    };

export interface Project {
  id: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ProjectBackground;
  icon: string;
  status?: string;
}

export interface ProjectsData {
  projects: Project[];
}
