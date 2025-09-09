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
          
          // Create background component from data (supports solid color or image)
          const background = project.background.type === 'image' ? (
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 opacity-80 group-hover:opacity-100"
                style={{ backgroundImage: `url(${(project.background as any).url})` }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ) : (
            <div className={`absolute inset-0 ${(project.background as any).color}`} />
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
        className="w-[60%] h-[90vh] max-w-[95vw] min-w-[400px]"
      >
        {selectedProject ? (
          <div className="flex flex-col h-full">
            {/* Header Section */}
            <div className="border-b border-border/20 p-8 pb-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3 leading-tight">{selectedProject.name}</h2>
                  {selectedProject.status && (
                    <div className="mb-4">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                        {selectedProject.status}
                      </span>
                    </div>
                  )}
                </div>
                {/* Project Icon */}
                <div className={`p-4 rounded-xl ${(selectedProject.background as any).color} bg-opacity-20`}>
                  {(() => {
                    const IconComponent = iconMap[selectedProject.icon as keyof typeof iconMap];
                    return <IconComponent className="h-8 w-8 text-foreground" />;
                  })()}
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="border-b border-border/20 p-8 py-6">
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="default" size="sm">
                  <a href={selectedProject.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {selectedProject.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href="#" className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Share
                  </a>
                </Button>
              </div>
            </div>

            {/* Main Content Section */}
            <div className="flex-1 p-8 overflow-y-auto">
              <div className="space-y-8">
                {/* Project Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features (placeholder for now) */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="font-medium">Technology Stack</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Modern frameworks and tools</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span className="font-medium">Performance</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <span className="font-medium">User Experience</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Intuitive and accessible design</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/50 border border-border/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <span className="font-medium">Scalability</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Built for growth and expansion</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack (placeholder) */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
