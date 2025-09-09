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
  skills: Skill[];
  className?: string;
}

export function SkillsGrid({ skills, className = "" }: SkillsGridProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <SkillGroupCard title="Technologies & Expertise" skills={skills} shineColors={["#60a5fa22", "#a78bfa22", "#34d39922", "#f59e0b22", "#22d3ee22", "#ef444422"]} />
    </div>
  );
}

function SkillGroupCard({ title, skills, shineColors }: { title: string; skills: Skill[]; shineColors: string[] }) {
  return (
    <div className="relative rounded-xl border bg-background p-4 sm:p-6">
      <ShineBorder borderWidth={1} duration={14} shineColor={shineColors} />
      <div className="mb-3 sm:mb-4 flex items-center justify-between">
        <h4 className="text-base sm:text-lg font-semibold text-foreground">{title}</h4>
        <span className="text-xs sm:text-sm text-muted-foreground">{skills.length} items</span>
      </div>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-3">
        {skills.map((skill) => {
          const Icon = iconMap[skill.icon as keyof typeof iconMap];
          return (
            <li key={skill.id} className="">
              <div className="group flex items-center gap-2 rounded-full border px-2.5 sm:px-3 py-1.5 sm:py-2 transition-colors hover:bg-muted/50">
                <span className={`inline-block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full ${skill.color}`} />
                {Icon ? (
                  <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                ) : null}
                <span className="text-xs sm:text-sm text-foreground truncate">{skill.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


