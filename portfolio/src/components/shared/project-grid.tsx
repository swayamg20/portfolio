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
                {/* Primary Action Button */}
                <Button asChild variant="default" size="sm">
                  <a href={selectedProject.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {selectedProject.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </Button>
                
                {/* GitHub Link (conditional) */}
                {selectedProject.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </Button>
                )}

                {/* Live Demo Link (conditional) */}
                {selectedProject.liveUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                  </Button>
                )}

                {/* Instagram Link (conditional) */}
                {selectedProject.instagramUrl && (
                  <Button asChild variant="outline" size="sm">
                    <a href={selectedProject.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      @planbyixigo
                    </a>
                  </Button>
                )}

                {/* Share Button (always visible) */}
                <Button asChild variant="outline" size="sm">
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    if (navigator.share) {
                      navigator.share({
                        title: selectedProject.name,
                        text: selectedProject.description,
                        url: window.location.href
                      });
                    } else {
                      // Fallback: copy to clipboard
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }} className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
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

                {/* Key Features */}
                {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProject.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/30">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
