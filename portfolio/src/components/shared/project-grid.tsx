"use client";

import { useState } from "react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Project } from "@/types/projects";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
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
  gridClassName = "grid-cols-3 auto-rows-[20rem] gap-4" 
}: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={className}>
      <BentoGrid className={gridClassName}>
        {projects.map((project) => {
          // Get the icon component from the mapping
          const IconComponent = iconMap[project.icon as keyof typeof iconMap];
          
          // Create background component from data (supports gradient or image)
          const background = project.background.type === 'image' ? (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url(${(project.background as any).url})` }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br from-${(project.background as any).from} to-${(project.background as any).to}`} />
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
              status={project.status}
              onClick={() => setSelectedProject(project)}
            />
          );
        })}
      </BentoGrid>
      <Modal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)}
        className="w-[680px] h-auto max-w-[95vw]"
      >
        {selectedProject ? (
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{selectedProject.name}</h3>
                <p className="text-muted-foreground mt-1">{selectedProject.description}</p>
              </div>
              {selectedProject.status ? (
                <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                  {selectedProject.status}
                </span>
              ) : null}
            </div>
            <div className="flex justify-end">
              <Button asChild variant="default">
                <a href={selectedProject.href} target="_blank" rel="noopener noreferrer">
                  {selectedProject.cta}
                  <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                </a>
              </Button>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
