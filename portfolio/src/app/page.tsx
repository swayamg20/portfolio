import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NavigationDock } from "@/components/shared";
import { HyperText } from "@/components/magicui/hyper-text";
import { ComicText } from "@/components/magicui/comic-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavigationDock />

      {/* Fixed Full-Screen Animated Grid Pattern Background */}
      <AnimatedGridPattern 
        width={60}
        height={60}
        numSquares={100}
        maxOpacity={1}
        duration={3}
        className={cn(
          "inset-0 w-full h-full z-0",
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "skew-y-12 opacity-40",
        )}
      />

      {/* Introduction Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">{/* Content moved below */}
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-0 text-left">                    
          {/* Hyper Text Name and Title */}
          <div className="mb-4 space-y-4">
            <TextAnimate 
              className="text-6xl md:text-8xl font-bold text-foreground"
              animation="blurIn"
              by="character"
              duration={0.8}
              startOnView={true}
              once={true}
            >
              Swayam Gupta
            </TextAnimate>
            <TextAnimate 
              className="text-3xl md:text-4xl font-medium text-muted-foreground"
              animation="blurInUp"
              by="character"
              // delay={300}
              duration={0.6}
              startOnView={true}
              once={true}
            >
              Engineer
            </TextAnimate>
          </div>
          
          <TextAnimate
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            animation="blurInUp" by="character" once duration={0.5}
          >
            A Full Stack Engineer, Building AI Products
          </TextAnimate>
          <TextAnimate
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
            animation="blurInUp" by="character" once duration={0.5}
          >
            Currently hooked up with voice AI
          </TextAnimate>
          
          {/* Resume Button */}
          <div className="mt-8">
            <InteractiveHoverButton className="text-lg font-semibold">
             Current Resume
            </InteractiveHoverButton>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">
          Coming soon... This will showcase all the Magic UI components we downloaded!
        </p>
      </div>
    </main>
  )
}
