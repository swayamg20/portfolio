"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Timeline } from "@/components/shared";
import { ExperiencesData } from "@/types/experiences";
import experiencesData from "@/data/experiences.json";


export function ExperienceSection() {
  const { experiences } = experiencesData as ExperiencesData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 mt-8 px-4">
        <TextAnimate
          className="text-4xl md:text-6xl font-bold text-foreground mb-4"
          animation="blurInUp"
          by="word"
          duration={0.8}
          startOnView={true}
          once={true}
        >
          Experience Journey
        </TextAnimate>
        <TextAnimate
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
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
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-16">
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}
