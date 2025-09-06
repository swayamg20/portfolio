"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Project } from "@/types/projects";
import { 
  CodeIcon, 
  GlobeIcon, 
  MobileIcon, 
  RocketIcon, 
  LightningBoltIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleIcon,
  CameraIcon,
  MagicWandIcon
} from "@radix-ui/react-icons";

// Icon mapping for string-based icon references
const iconMap = {
  CodeIcon,
  GlobeIcon,
  MobileIcon,
  RocketIcon,
  LightningBoltIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleIcon,
  CameraIcon,
  MagicWandIcon,
};

interface ProjectGridProps {
  projects: Project[];
  className?: string;
  gridClassName?: string;
}

export function ProjectGrid({ 
  projects, 
  className = "", 
  gridClassName = "grid-cols-5 auto-rows-[20rem] gap-4" 
}: ProjectGridProps) {
  return (
    <div className={className}>
      <BentoGrid className={gridClassName}>
        {projects.map((project) => {
          // Get the icon component from the mapping
          const IconComponent = iconMap[project.icon as keyof typeof iconMap];
          
          // Create background component from data
          const background = (
            <div className={`absolute inset-0 bg-gradient-to-br from-${project.background.from} to-${project.background.to}`} />
          );

          return (
            <BentoCard
              key={project.id}
              name={project.name}
              className={project.className}
              background={background}
              Icon={IconComponent}
              description={project.description}
              href={project.href}
              cta={project.cta}
            />
          );
        })}
      </BentoGrid>
    </div>
  );
}
