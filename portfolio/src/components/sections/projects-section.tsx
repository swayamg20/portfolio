import { ProjectGrid } from "@/components/shared";
import { ProjectsData } from "@/types/projects";
import projectsData from "@/data/projects.json";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function ProjectsSection() {
  const { projects } = projectsData as ProjectsData;

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 opacity-30"
        squareSize={4}
        gridGap={6}
        maxOpacity={0.5}
      />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my latest work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Project Grid with responsive width */}
        <ProjectGrid 
          projects={projects}
          className="w-full sm:w-[95%] lg:w-[85%] mx-auto"
        />
      </div>
    </section>
  );
}
