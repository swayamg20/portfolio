import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ShineBorder } from "@/components/magicui/shine-border";
import { NavigationDock } from "@/components/shared";
import { HyperText } from "@/components/magicui/hyper-text";
import { ComicText } from "@/components/magicui/comic-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground">
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
            <TextAnimate 
              className="text-4xl font-bold text-white"
              animation="blurInUp"
              by="character"
              duration={0.8}
              startOnView={true}
              once={true}
            >
              Swayam Gupta
            </TextAnimate>
            <TextAnimate 
              className="text-2xl font-medium text-gray-300"
              animation="blurInUp"
              by="character"
              delay={300}
              duration={0.6}
              startOnView={true}
              once={true}
            >
              AI Engineer
            </TextAnimate>
          </div>
          
          <TextAnimate
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            animation="blurInUp" by="character" once duration={0.5}
          >
            A Full Stack Engineer, Building AI Products
          </TextAnimate>
          <TextAnimate
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            animation="blurInUp" by="character" once duration={0.5}
          >
            Currently hooked up with voice AI
          </TextAnimate>
        </div>
      </section>

      {/* Hero Section with Flickering Grid */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Top Shine Border */}
        {/* <div className="absolute top-0 left-0 right-0 h-[2px] z-20">
          <ShineBorder
            borderWidth={2}
            duration={3}
            shineColor="rgba(255, 255, 255, 0.8)"
            className="w-full h-full"
          />
        </div> */}
        
        {/* Bottom Shine Border */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20">
          <ShineBorder
            borderWidth={2}
            duration={3}
            shineColor="rgba(255, 255, 255, 0.8)"
            className="w-full h-full"
          />
        </div> */}
        
        {/* Flickering Grid Background */}
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
        />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <TextAnimate
              className="text-5xl md:text-7xl font-bold text-white"
              animation="blurInUp"
              by="word"
              duration={0.8}
              startOnView={true}
              once={true}
            >
              Building the Future
            </TextAnimate>
            
            <TextAnimate
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              animation="blurInUp"
              by="word"
              delay={500}
              duration={0.6}
              startOnView={true}
              once={true}
            >
              Crafting intelligent solutions that bridge the gap between human creativity and artificial intelligence
            </TextAnimate>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <TextAnimate
                className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer"
                animation="blurInUp"
                by="character"
                delay={1200}
                duration={0.4}
                startOnView={true}
                once={true}
              >
                View My Work
              </TextAnimate>
              
              <TextAnimate
                className="px-8 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors cursor-pointer"
                animation="blurInUp"
                by="character"
                delay={1400}
                duration={0.4}
                startOnView={true}
                once={true}
              >
                Get In Touch
              </TextAnimate>
            </div>
          </div>
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
