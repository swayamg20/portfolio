"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { TextAnimate } from "@/components/magicui/text-animate";

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "ixigo",
    role: "Software Engineer II",
    duration: "2024 - Present",
    description: "Leading AI product development and implementing cutting-edge machine learning solutions for enterprise clients. Specializing in voice AI and natural language processing systems.",
    technologies: ["Python", "TensorFlow", "AWS", "Docker", "React"]
  },
  {
    company: "overlayy AI",
    role: "Founding Engineer",
    duration: "2022 - 2023",
    description: "Built scalable web applications and AI-powered features from ground up. Collaborated with cross-functional teams to deliver high-impact products.",
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "OpenAI API"]
  },
  {
    company: "Digital Solutions Inc",
    role: "Software Engineer",
    duration: "2021 - 2022",
    description: "Developed responsive web applications and integrated AI capabilities. Focused on performance optimization and user experience enhancement.",
    technologies: ["JavaScript", "React", "Python", "FastAPI", "MongoDB"]
  },
  {
    company: "Code Academy",
    role: "Junior Developer",
    duration: "2020 - 2021",
    description: "Started my journey in software development, learning modern web technologies and contributing to open-source projects.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "Firebase"]
  }
];

function TimelineItem({ experience, index, isLast }: { experience: Experience; index: number; isLast: boolean }) {
  return (
    <div className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-primary/60 to-primary/20 
                        group-hover:from-primary group-hover:to-primary/40 transition-all duration-500" />
      )}
      
      {/* Timeline dot */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-background border-4 border-primary 
                      rounded-full flex items-center justify-center shadow-lg
                      group-hover:scale-110 group-hover:border-primary/80 transition-all duration-300">
        <div className="w-3 h-3 bg-primary rounded-full group-hover:bg-primary/80 transition-colors" />
      </div>
      
      {/* Content card */}
      <div className="flex-1 ml-6 mb-12">
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 
                        shadow-xl shadow-black/5 dark:shadow-black/30
                        hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 
                        hover:bg-card/70 transition-all duration-300
                        group-hover:translate-x-2 group-hover:-translate-y-1">
          
          {/* Duration badge */}
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 
                          rounded-full text-sm font-medium text-primary mb-4">
            <TextAnimate
              animation="slideLeft"
              by="character"
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
              animation="slideLeft"
              by="word"
              delay={0.1 * index}
              startOnView={true}
              once={true}
            >
              {experience.role}
            </TextAnimate>
            <TextAnimate
              className="text-lg md:text-xl font-medium text-primary"
              animation="slideLeft"
              by="word"
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
            animation="slideLeft"
            by="text"
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

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
                       bg-background">       
      {/* Multiple background layers for depth */}
      
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="hsl(var(--muted-foreground))"
        maxOpacity={0.15}
        flickerChance={0.2}
      />
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 px-4">
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
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem 
              key={`${experience.company}-${experience.role}`}
              experience={experience} 
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
