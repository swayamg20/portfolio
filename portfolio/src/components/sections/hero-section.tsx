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

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-8 bg-transparent">
      <div className="relative group">
        {/* Simple blur card */}
        <div className="bg-transparent rounded-2xl p-6 md:p-8 
                        shadow-2xl shadow-black/50
                        hover:shadow-2xl hover:shadow-black/60 transition-all duration-300">
          
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <TextAnimate
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  animation="slideLeft"
                  by="word"
                  delay={0.1*index}
                //   duration={0.6}
                  startOnView={true}
                  once={true}
                >
                  {experience.role}
                </TextAnimate>
                <TextAnimate
                  className="text-lg md:text-xl font-medium text-underline"
                  animation="slideLeft"
                  by="word"
                //   duration={0.6}
                delay={0.1*index}
                  startOnView={true}
                  once={true}
                >
                  {experience.company}
                </TextAnimate>
              </div>
              <TextAnimate
                className="text-gray-300 font-medium mt-2 md:mt-0"
                animation="slideLeft"
                by="character"
                delay={0.1*index}
                duration={0.4}
                startOnView={true}
                once={true}
              >
                {experience.duration}
              </TextAnimate>
            </div>
            
            <TextAnimate
              className="text-gray-200 leading-relaxed mb-6"
              animation="slideLeft"
              by="text"
              delay={0.2*index}
              duration={0.6}
              startOnView={true}
              once={true}
            >
              {experience.description}
            </TextAnimate>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 
                           rounded-full text-sm text-white font-medium"
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
                       bg-black">       
      {/* Multiple background layers for depth */}
      
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.15}
        flickerChance={0.2}
      />
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 px-4">
        <TextAnimate
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          animation="blurInUp"
          by="word"
          duration={0.8}
          startOnView={true}
          once={true}
        >
          Experience Journey
        </TextAnimate>
        <TextAnimate
          className="text-xl text-gray-300 max-w-2xl mx-auto"
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
      
      {/* Experience Cards */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-16">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={`${experience.company}-${experience.role}`}
            experience={experience} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
