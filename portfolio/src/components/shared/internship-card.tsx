"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { Internship } from "@/types/internships";
import { ExternalLink, MapPin, Briefcase } from "lucide-react";

interface InternshipCardProps {
  internship: Internship;
  index: number;
}

export function InternshipCard({ internship, index }: InternshipCardProps) {


  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'remote':
        return 'bg-green-500/10 border-green-500/30 text-green-400';
      case 'onsite':
        return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
      case 'hybrid':
        return 'bg-purple-500/10 border-purple-500/30 text-purple-400';
      default:
        return 'bg-gray-500/10 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 
                    shadow-xl shadow-black/5 dark:shadow-black/30
                    hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 
                    hover:bg-card/80 transition-all duration-300
                    hover:scale-[1.02] hover:-translate-y-1">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {/* <span className="text-lg">{getTypeIcon(internship.type)}</span> */}
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getTypeBadgeColor(internship.type)}`}>
              {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
            </span>
          </div>
          
          <TextAnimate
            className="text-lg md:text-xl font-bold text-foreground mb-1"
            animation="fadeIn" 
            by="line"
            delay={0.1 * index}
            startOnView={true}
            once={true}
          >
            {internship.role}
          </TextAnimate>
          
          <div className="flex items-center gap-2">
            <TextAnimate
              className="text-base font-medium text-primary"
              animation="fadeIn" 
              by="line"
              delay={0.15 * index}
              startOnView={true}
              once={true}
            >
              {`@ ${internship.company}`}
            </TextAnimate>
            {internship.companyUrl && (
              <a
                href={internship.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
                aria-label={`Visit ${internship.company} website`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <div className="text-right">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 
                          rounded-full text-sm font-medium text-primary mb-2">
            {internship.duration}
          </div>
          <div className="flex items-center justify-end gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{internship.location}</span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <TextAnimate
        className="text-sm text-foreground/90 mb-4 leading-relaxed"
        animation="fadeIn" 
        by="line"
        delay={0.2 * index}
        startOnView={true}
        once={true}
      >
        {internship.description}
      </TextAnimate>
      
      {/* Achievements */}
      <div className="mb-4">
        <ul className="space-y-2">
          {internship.achievements.map((achievement, achIndex) => (
            <li key={achIndex} className="flex items-start">
              <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
              <TextAnimate
                className="text-foreground/80 leading-relaxed text-xs"
                animation="fadeIn"
                by="line"
                delay={0.2 * index + achIndex * 0.1}
                startOnView={true}
                once={true}
              >
                {achievement}
              </TextAnimate>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {internship.technologies.map((tech, techIndex) => (
          <span
            key={tech}
            className="px-2 py-1 bg-secondary/80 backdrop-blur-sm border border-border 
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
  );
}
