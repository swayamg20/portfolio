import { SkillsOrbit } from "./skills-orbit";
import { PersonalContent } from "./personal-content";

export interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-8 ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Skills Orbit Section - 40% */}
          <div className="lg:col-span-2 flex justify-center">
            <SkillsOrbit />
          </div>
          
          {/* Personal Content Section - 60% */}
          <div className="lg:col-span-3">
            <PersonalContent />
          </div>
        </div>
      </div>
    </section>
  );
}
