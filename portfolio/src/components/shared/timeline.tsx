"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Experience } from "@/types/experiences";
import { ExternalLink } from "lucide-react";

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
      <div className="flex-1 ml-4 sm:ml-6 mb-8 sm:mb-12 w-full sm:w-[80%] lg:w-[60%]">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 
                        shadow-xl shadow-black/5 dark:shadow-black/30
                        hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 
                        hover:bg-card/70 transition-all duration-300
                        group-hover:translate-x-1 sm:group-hover:translate-x-2 group-hover:-translate-y-1">
          
          {/* Duration badge */}
          <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-primary/10 border border-primary/20 
                          rounded-full text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
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
          <div className="mb-3 sm:mb-4">
            <TextAnimate
              className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2"
              animation="fadeIn" 
            by="line"
              // by="word"
              delay={0.1 * index}
              startOnView={true}
              once={true}
            >
              {experience.role}
            </TextAnimate>
            <div className="flex items-center gap-2">
              <TextAnimate
                className="text-sm sm:text-base md:text-lg font-medium text-primary"
                animation="fadeIn" 
                by="line"
                delay={0.15 * index}
                startOnView={true}
                once={true}
              >
                {`@ ${experience.company}`}
              </TextAnimate>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                  aria-label={`Visit ${experience.company} website`}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
            </div>
          </div>
          
          {/* Description/Project Name */}
          {experience.description && (
            <TextAnimate
              className="text-sm sm:text-base font-semibold text-primary/90 mb-3 sm:mb-4"
              animation="fadeIn" 
              by="line"
              delay={0.2 * index}
              duration={0.6}
              startOnView={true}
              once={true}
            >
              {experience.description}
            </TextAnimate>
          )}

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <ul className="space-y-2 sm:space-y-3">
                {experience.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0 text-sm">•</span>
                    <TextAnimate
                      className="text-foreground/80 leading-relaxed text-xs sm:text-sm"
                      animation="fadeIn"
                      by="line"
                      delay={0.2 * index + achIndex * 0.1}
                      duration={0.6}
                      startOnView={true}
                      once={true}
                    >
                      {achievement}
                    </TextAnimate>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects */}
          {experience.projects && experience.projects.length > 0 && (
            <div className="mb-4 sm:mb-6">
              {experience.projects.map((project, projIndex) => (
                <div key={projIndex} className="mb-3 sm:mb-4 last:mb-0">
                  <TextAnimate
                    className="text-xs sm:text-sm font-semibold text-foreground mb-2"
                    animation="fadeIn"
                    by="line"
                    delay={0.3 * index + projIndex * 0.1}
                    duration={0.6}
                    startOnView={true}
                    once={true}
                  >
                    {project.title}
                  </TextAnimate>
                  <ul className="space-y-1 sm:space-y-2 ml-3 sm:ml-4">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-primary/70 mr-2 sm:mr-3 mt-1 flex-shrink-0 text-xs">◦</span>
                        <TextAnimate
                          className="text-foreground/70 leading-relaxed text-xs sm:text-sm"
                          animation="fadeIn"
                          by="line"
                          delay={0.3 * index + projIndex * 0.1 + detailIndex * 0.05}
                          duration={0.6}
                          startOnView={true}
                          once={true}
                        >
                          {detail}
                        </TextAnimate>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary/80 backdrop-blur-sm border border-border 
                           rounded-full text-xs text-secondary-foreground font-medium
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
