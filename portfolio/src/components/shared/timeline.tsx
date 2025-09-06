"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Experience } from "@/types/experiences";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 top-12 w-0.5 h-full bg-gradient-to-b from-primary/60 to-primary/20 
                        group-hover:from-primary group-hover:to-primary/40 transition-all duration-500" />
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-background border-4 border-primary 
                      rounded-full flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:border-primary/80 transition-all duration-300">
        <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-primary/80 transition-colors" />
      </div>
      
      {/* Content card */}
      <div className="flex-1 ml-6 mb-12 w-[60%]">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 
                        shadow-xl shadow-black/5 dark:shadow-black/30
                        hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 
                        hover:bg-card/70 transition-all duration-300
                        group-hover:translate-x-2 group-hover:-translate-y-1">
          
          {/* Duration badge */}
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 
                          rounded-full text-sm font-medium text-primary mb-4">
            <TextAnimate
              animation="fadeIn" 
            by="line"
              delay={0.1 * index}
              duration={0.4}
              startOnView={true}
              once={true}
            >
              {experience.duration}
            </TextAnimate>
          </div>
          
          {/* Role and Company */}
          <div className="mb-4">
            <TextAnimate
              className="text-2xl md:text-3xl font-bold text-foreground mb-2"
              animation="fadeIn" 
            by="line"
              // by="word"
              delay={0.1 * index}
              startOnView={true}
              once={true}
            >
              {experience.role}
            </TextAnimate>
            <TextAnimate
              className="text-lg md:text-xl font-medium text-primary"
              animation="fadeIn" 
            by="line"
              delay={0.15 * index}
              startOnView={true}
              once={true}
            >
              {`@ ${experience.company}`}
            </TextAnimate>
          </div>
          
          {/* Description */}
          <TextAnimate
            className="text-foreground/80 leading-relaxed mb-6"
            animation="fadeIn" 
            by="line"
            // by="text"
            delay={0.2 * index}
            duration={0.6}
            startOnView={true}
            once={true}
          >
            {experience.description}
          </TextAnimate>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary/80 backdrop-blur-sm border border-border 
                           rounded-full text-sm text-secondary-foreground font-medium
                           hover:bg-secondary hover:scale-105 transition-all duration-200"
                style={{
                  animationDelay: `${index * 200 + 400 + techIndex * 50}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface TimelineProps {
  experiences: Experience[];
  className?: string;
}

export function Timeline({ experiences, className = "" }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {experiences.map((experience, index) => (
        <TimelineItem 
          key={experience.id}
          experience={experience} 
          index={index}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
}
