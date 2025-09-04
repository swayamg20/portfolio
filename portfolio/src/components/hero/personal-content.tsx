import { cn } from "@/lib/utils";

export interface PersonalContentProps {
  className?: string;
}

export function PersonalContent({ className = "" }: PersonalContentProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Greeting */}
      <div className="space-y-2">
        <p className="text-lg text-muted-foreground font-medium">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Swayam Gupta
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground">
          Full Stack Developer
        </h2>
      </div>

      {/* Description */}
      <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm a passionate full-stack developer who loves creating beautiful, 
          functional, and user-centered digital experiences. With expertise in 
          modern web technologies, I bring ideas to life through clean code and 
          thoughtful design.
        </p>
        <p>
          Specializing in <span className="text-foreground font-medium">React</span>, 
          <span className="text-foreground font-medium"> Next.js</span>, and 
          <span className="text-foreground font-medium"> TypeScript</span>, I build 
          scalable applications that solve real-world problems.
        </p>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className={cn(
          "px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium",
          "hover:bg-primary/90 transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}>
          View My Work
        </button>
        <button className={cn(
          "px-6 py-3 border border-border rounded-lg font-medium",
          "hover:bg-muted transition-colors duration-200",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}>
          Get In Touch
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">3+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">20+</div>
          <div className="text-sm text-muted-foreground">Projects Built</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground">10+</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
      </div>
    </div>
  );
}
