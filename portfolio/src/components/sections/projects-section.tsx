import { ProjectGrid } from "@/components/shared";
import { ProjectsData } from "@/types/projects";
import projectsData from "@/data/projects.json";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function ProjectsSection() {
  const { projects } = projectsData as ProjectsData;

  return (
    <section className="relative py-24 overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 opacity-30"
        squareSize={4}
        gridGap={6}
        color="rgb(147, 51, 234)"
        maxOpacity={0.3}
      />
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Project Grid with 85% width */}
        <ProjectGrid 
          projects={projects}
          className="w-[85%] mx-auto"
        />
      </div>
    </section>
  );
}
