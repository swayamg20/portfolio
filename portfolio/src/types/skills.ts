export interface Skill {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface SkillsData {
  coreSkills: Skill[];
  advancedSkills: Skill[];
}
