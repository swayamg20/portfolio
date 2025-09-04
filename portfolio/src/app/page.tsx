import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { NavigationDock } from "@/components/shared";
import { HyperText } from "@/components/magicui/hyper-text";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavigationDock />

      {/* Introduction Section with Animated Grid Pattern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern 
          width={60}
          height={60}
          numSquares={100}
          maxOpacity={1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-40",
          )}
        />
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-8 text-center">                    
          {/* Hyper Text Name and Title */}
          <div className="mb-8 space-y-4">
            <HyperText 
              className="text-4xl font-bold text-white"
              duration={1200}
              startOnView={true}
            >
              Swayam Gupta
            </HyperText>
            <HyperText 
              className="text-2xl font-medium text-gray-300"
              duration={1000}
              delay={500}
              startOnView={true}
            >
              AI Engineer
            </HyperText>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Full Stack Engineer, Building AI Products <br />
            Currently hooked up with voice AI
          </p>
        </div>
      </section>
      
      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">
          Coming soon... This will showcase all the Magic UI components we downloaded!
        </p>
      </div>
    </main>
  )
}
