"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Timeline } from "@/components/shared";
import { ExperiencesData } from "@/types/experiences";
import { InternshipsData } from "@/types/internships";
import { InternshipsModal } from "@/components/ui/internships-modal";
import experiencesData from "@/data/experiences.json";
import internshipsData from "@/data/internships.json";
import { History } from "lucide-react";


export function ExperienceSection() {
  const { experiences } = experiencesData as ExperiencesData;
  const { internships } = internshipsData as InternshipsData;
  const [isInternshipsModalOpen, setIsInternshipsModalOpen] = React.useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 mt-6 sm:mt-8 px-4">
        <TextAnimate
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          animation="blurInUp"
          by="word"
          duration={0.8}
          startOnView={true}
          once={true}
        >
          Experience Journey
        </TextAnimate>
        <TextAnimate
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
          animation="blurInUp"
          by="word"
          delay={300}
          duration={0.6}
          startOnView={true}
          once={true}
        >
          Building innovative solutions across different domains and technologies
        </TextAnimate>
      </div>
      
      {/* Timeline */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-8">
        <Timeline experiences={experiences} />
      </div>
      
      {/* Internships Button */}
      <div className="relative z-10 mb-8 sm:mb-16">
        <button
          onClick={() => setIsInternshipsModalOpen(true)}
          className="group relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 
                     bg-card/60 backdrop-blur-sm border border-border rounded-2xl
                     shadow-xl shadow-black/5 dark:shadow-black/30
                     hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 
                     hover:bg-card/80 hover:scale-105 transition-all duration-300
                     text-foreground font-medium"
        >
          <History className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <TextAnimate
            className="text-sm sm:text-base"
            animation="fadeIn"
            by="line"
            startOnView={true}
            once={true}
          >
            View Previous Internships
          </TextAnimate>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
      
      {/* Internships Modal */}
      <InternshipsModal 
        isOpen={isInternshipsModalOpen}
        onClose={() => setIsInternshipsModalOpen(false)}
        internships={internships}
      />
    </section>
  );
}
