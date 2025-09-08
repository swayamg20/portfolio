export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface SkillsData {
  skills: Skill[];
}
