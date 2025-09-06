"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { Skill } from "@/types/skills";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Zap,
  User
} from "lucide-react";

// Icon mapping for string-based icon references
const iconMap = {
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Zap,
  User,
};

interface SkillsOrbitProps {
  coreSkills: Skill[];
  advancedSkills: Skill[];
  className?: string;
  centerIcon?: keyof typeof iconMap;
  innerRadius?: number;
  outerRadius?: number;
  innerDuration?: number;
  outerDuration?: number;
}

export function SkillsOrbit({ 
  coreSkills, 
  advancedSkills, 
  className = "",
  centerIcon = "User",
  innerRadius = 80,
  outerRadius = 140,
  innerDuration = 15,
  outerDuration = 20
}: SkillsOrbitProps) {
  const CenterIcon = iconMap[centerIcon];

  return (
    <div className={`relative flex items-center justify-center h-[400px] w-full ${className}`}>
      {/* Center Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <CenterIcon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Inner Orbit - Core Skills */}
      <OrbitingCircles
        duration={innerDuration}
        radius={innerRadius}
        path={true}
      >
        {coreSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <div
              key={skill.id}
              className={`flex items-center justify-center w-12 h-12 rounded-full ${skill.color} shadow-lg hover:scale-110 transition-transform duration-200`}
              title={skill.name}
            >
              {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
            </div>
          );
        })}
      </OrbitingCircles>

      {/* Outer Orbit - Advanced Skills */}
      <OrbitingCircles
        duration={outerDuration}
        radius={outerRadius}
        path={true}
        reverse
      >
        {advancedSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <div
              key={skill.id}
              className={`flex items-center justify-center w-12 h-12 rounded-full ${skill.color} shadow-lg hover:scale-110 transition-transform duration-200`}
              title={skill.name}
            >
              {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
            </div>
          );
        })}
      </OrbitingCircles>
    </div>
  );
}

interface SkillsLegendProps {
  coreSkills: Skill[];
  advancedSkills: Skill[];
  className?: string;
}

export function SkillsLegend({ coreSkills, advancedSkills, className = "" }: SkillsLegendProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 text-sm ${className}`}>
      <div>
        <h4 className="font-semibold text-foreground mb-2">Core Skills</h4>
        <ul className="space-y-1 text-muted-foreground">
          {coreSkills.map((skill) => (
            <li key={skill.id} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
        <ul className="space-y-1 text-muted-foreground">
          {advancedSkills.map((skill) => (
            <li key={skill.id} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
