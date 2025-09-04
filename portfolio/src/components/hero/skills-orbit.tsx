import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

// Tech stack icons - using simple emojis for now, can be replaced with proper icons
const techStack = {
  languages: [
    { name: "TypeScript", icon: "🟦", color: "text-blue-500" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
    { name: "Python", icon: "🐍", color: "text-green-500" },
    { name: "Java", icon: "☕", color: "text-orange-500" },
  ],
  frameworks: [
    { name: "React", icon: "⚛️", color: "text-cyan-500" },
    { name: "Next.js", icon: "▲", color: "text-foreground" },
    { name: "Node.js", icon: "📗", color: "text-green-600" },
    { name: "Express", icon: "🚂", color: "text-gray-600" },
  ],
  tools: [
    { name: "Git", icon: "🌿", color: "text-orange-600" },
    { name: "Docker", icon: "🐳", color: "text-blue-600" },
    { name: "AWS", icon: "☁️", color: "text-yellow-600" },
    { name: "MongoDB", icon: "🍃", color: "text-green-700" },
  ]
};

interface SkillIconProps {
  tech: typeof techStack.languages[0];
}

function SkillIcon({ tech }: SkillIconProps) {
  return (
    <div className="relative group">
      <div className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full",
        "bg-background/80 backdrop-blur-sm border border-border/50",
        "hover:scale-110 transition-transform duration-200",
        "shadow-lg hover:shadow-xl"
      )}>
        <span className="text-2xl" title={tech.name}>
          {tech.icon}
        </span>
      </div>
      {/* Tooltip */}
      <div className={cn(
        "absolute -bottom-8 left-1/2 transform -translate-x-1/2",
        "px-2 py-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-md",
        "text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200",
        "pointer-events-none whitespace-nowrap z-10"
      )}>
        {tech.name}
      </div>
    </div>
  );
}

export interface SkillsOrbitProps {
  className?: string;
}

export function SkillsOrbit({ className = "" }: SkillsOrbitProps) {
  return (
    <div className={cn("relative flex h-[500px] w-full max-w-[500px] items-center justify-center overflow-hidden", className)}>
      {/* Dot Pattern Background */}
      <DotPattern 
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "opacity-30"
        )}
      />
      
      {/* Center Avatar/Icon */}
      <div className="relative z-10 flex items-center justify-center">
        <div className={cn(
          "flex items-center justify-center w-20 h-20 rounded-full",
          "bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm",
          "border-2 border-primary/30 shadow-2xl"
        )}>
          <span className="text-4xl">👨‍💻</span>
        </div>
      </div>

      {/* Inner Orbit - Languages */}
      <OrbitingCircles
        className="border-none"
        radius={80}
        duration={20}
        delay={0}
      >
        {techStack.languages.map((tech, index) => (
          <SkillIcon key={`lang-${index}`} tech={tech} />
        ))}
      </OrbitingCircles>

      {/* Middle Orbit - Frameworks */}
      <OrbitingCircles
        className="border-none"
        radius={140}
        duration={25}
        delay={5}
        reverse
      >
        {techStack.frameworks.map((tech, index) => (
          <SkillIcon key={`framework-${index}`} tech={tech} />
        ))}
      </OrbitingCircles>

      {/* Outer Orbit - Tools */}
      <OrbitingCircles
        className="border-none"
        radius={200}
        duration={30}
        delay={10}
      >
        {techStack.tools.map((tech, index) => (
          <SkillIcon key={`tool-${index}`} tech={tech} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
