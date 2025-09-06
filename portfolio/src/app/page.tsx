'use client'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NavigationDock } from "@/components/shared";
import { HyperText } from "@/components/magicui/hyper-text";
import { ComicText } from "@/components/magicui/comic-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PDFModal } from "@/components/ui/pdf-modal";
import { cn } from "@/lib/utils";
import { RecentUpdatesData, colorMap, textColorMap, categoryIconPaths, categoryStyles } from "@/types/updates";
import recentUpdatesData from "@/data/recent-updates.json";
import { useState } from "react";

export default function Home() {
  const updatesData = recentUpdatesData as RecentUpdatesData;
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="relative z-10 container mx-auto px-4 py-0">
          <div className="flex items-center justify-between gap-8">
            
            {/* Left Side - Main Content (60% width) */}
            <div className="w-[60%] text-left">                    
              {/* Hyper Text Name and Title */}
              <div className="mb-4 space-y-4">
                <TextAnimate 
                  className="text-4xl md:text-6xl font-bold text-foreground"
                  animation="blurIn"
                  by="character"
                  duration={0.8}
                  startOnView={true}
                  once={true}
                >
                  Swayam Gupta
                </TextAnimate>
                <TextAnimate 
                  className="text-2xl md:text-3xl font-medium text-muted-foreground"
                  animation="blurInUp"
                  by="character"
                  duration={0.6}
                  startOnView={true}
                  once={true}
                >
                  Engineer
                </TextAnimate>
              </div>
              
              <TextAnimate
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                animation="blurInUp" by="character" once duration={0.5}
              >
                A Full Stack Engineer, Building AI Products
              </TextAnimate>
              <TextAnimate
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
                animation="blurInUp" by="character" once duration={0.5}
              >
                Currently hooked up with voice AI
              </TextAnimate>
              
              {/* Resume Button */}
              <div className="mt-8">
                <InteractiveHoverButton 
                  className="text-lg font-semibold"
                  onClick={() => setIsResumeModalOpen(true)}
                >
                 Current Resume
                </InteractiveHoverButton>
              </div>
            </div>

            {/* Right Side - Recent Updates Section (40% width) */}
            <div className="w-[40%] h-[500px] ml-8">
              <div className="h-full rounded-2xl backdrop-blur-md bg-background/80 border border-border shadow-xl p-6 flex flex-col">
                <TextAnimate
                  className="text-2xl font-semibold text-foreground mb-6 text-center"
                  animation="blurInUp"
                  by="character"
                  duration={0.6}
                  startOnView={true}
                  once={true}
                >
                  What I am upto these days
                </TextAnimate>
                
                <div className="space-y-3 flex-1 overflow-y-auto">
                  {updatesData.updates.map((update) => {
                    const categoryStyle = categoryStyles[update.category];
                    return (
                      <div 
                        key={update.id} 
                        className={cn(
                          "p-4 rounded-lg border border-border/50 hover:bg-muted/50 transition-all duration-200",
                          categoryStyle.borderStyle,
                          categoryStyle.bgGradient
                        )}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <div className={cn("text-current", textColorMap[update.color])}>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d={categoryIconPaths[update.category]} 
                                />
                              </svg>
                            </div>
                            <div className={cn(
                              "w-2 h-2 rounded-full",
                              colorMap[update.color],
                              update.isPulsing && "animate-pulse"
                            )}></div>
                          </div>
                          <div className="flex flex-col">
                            <span className={cn(
                              "text-xs font-semibold uppercase tracking-wide",
                              textColorMap[update.color]
                            )}>
                              {update.type}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(update.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                        </div>
                        <div className="text-sm text-foreground font-medium mb-1">
                          {update.link ? (
                            <a 
                              href={update.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline flex items-center gap-1.5 group"
                            >
                              {update.title}
                              <svg 
                                className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                />
                              </svg>
                            </a>
                          ) : (
                            update.title
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">{update.description}</div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Last Updated */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground text-center">
                    Last updated: {new Date(updatesData.lastUpdated).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />
      
      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">
          Coming soon... This will showcase all the Magic UI components we downloaded!
        </p>
      </div>

      {/* PDF Modal */}
      <PDFModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        pdfUrl="/resume.pdf"
        title="Swayam Gupta - Resume"
      />
    </main>
  )
}
