"use client";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Skill } from "@/types/skills";
import {
  Activity,
  Brain,
  Code2,
  Database,
  Globe,
  MessageSquare,
  Mic,
  Smartphone,
  User,
  Users,
  Zap,
} from "lucide-react";

const iconMap = {
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Zap,
  User,
  MessageSquare,
  Mic,
  Users,
  Activity,
};

interface SkillsGridProps {
  coreSkills: Skill[];
  advancedSkills: Skill[];
  className?: string;
}

export function SkillsGrid({ coreSkills, advancedSkills, className = "" }: SkillsGridProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <SkillGroupCard title="Core Skills" skills={coreSkills} shineColors={["#60a5fa22", "#a78bfa22", "#34d39922"]} />
      <SkillGroupCard title="Advanced" skills={advancedSkills} shineColors={["#f59e0b22", "#22d3ee22", "#ef444422"]} />
    </div>
  );
}

function SkillGroupCard({ title, skills, shineColors }: { title: string; skills: Skill[]; shineColors: string[] }) {
  return (
    <div className="relative rounded-xl border bg-background p-6">
      <ShineBorder borderWidth={1} duration={14} shineColor={shineColors} />
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <span className="text-sm text-muted-foreground">{skills.length} items</span>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <li key={skill.id} className="">
              <div className="group flex items-center gap-2 rounded-full border px-3 py-2 transition-colors hover:bg-muted/50">
                <span className={`inline-block h-2 w-2 rounded-full ${skill.color}`} />
                {Icon ? (
                  <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                ) : null}
                <span className="text-sm text-foreground">{skill.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


