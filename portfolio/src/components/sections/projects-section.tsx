import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { 
  CodeIcon, 
  GlobeIcon, 
  MobileIcon, 
  RocketIcon, 
  LightningBoltIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleIcon,
  CameraIcon,
  MagicWandIcon
} from "@radix-ui/react-icons";

const projects = [
  {
    name: "AI Voice Assistant",
    description: "Real-time voice AI with natural language processing and speech synthesis",
    href: "#",
    cta: "View Project",
    className: "col-span-2 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    ),
    Icon: ChatBubbleIcon,
  },
  {
    name: "E-Commerce Platform",
    description: "Full-stack marketplace with payment integration and real-time inventory",
    href: "#",
    cta: "Live Demo",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
    ),
    Icon: GlobeIcon,
  },
  {
    name: "Mobile Fitness App",
    description: "React Native app with workout tracking and social features",
    href: "#",
    cta: "Download",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20" />
    ),
    Icon: MobileIcon,
  },
  {
    name: "DevOps Pipeline",
    description: "Automated CI/CD with Docker, Kubernetes, and monitoring",
    href: "#",
    cta: "GitHub",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-slate-500/20" />
    ),
    Icon: RocketIcon,
  },
  {
    name: "Real-time Analytics",
    description: "Dashboard with live data visualization and machine learning insights",
    href: "#",
    cta: "Explore",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-amber-500/20" />
    ),
    Icon: LightningBoltIcon,
  },
  {
    name: "Social Media Tool",
    description: "Content scheduling and analytics platform for creators",
    href: "#",
    cta: "Try Now",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20" />
    ),
    Icon: HeartIcon,
  },
  {
    name: "Open Source Library",
    description: "Popular React component library with 10k+ GitHub stars",
    href: "#",
    cta: "Star on GitHub",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-violet-500/20" />
    ),
    Icon: StarIcon,
  },
  {
    name: "AI Image Generator",
    description: "Text-to-image generation with custom style transfer",
    href: "#",
    cta: "Generate",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20" />
    ),
    Icon: CameraIcon,
  },
  {
    name: "Code Automation",
    description: "AI-powered code generation and refactoring tools",
    href: "#",
    cta: "Learn More",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20" />
    ),
    Icon: MagicWandIcon,
  },
  {
    name: "Blockchain DApp",
    description: "Decentralized application with smart contracts and Web3 integration",
    href: "#",
    cta: "Connect Wallet",
    className: "col-span-1 row-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20" />
    ),
    Icon: CodeIcon,
  },
];

export function ProjectsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in AI, web development, and innovative solutions
          </p>
        </div>

        {/* Bento Grid with 85% width */}
        <div className="w-[85%] mx-auto">
          <BentoGrid className="grid-cols-5 auto-rows-[20rem] gap-4">
            {projects.map((project) => (
              <BentoCard
                key={project.name}
                name={project.name}
                className={project.className}
                background={project.background}
                Icon={project.Icon}
                description={project.description}
                href={project.href}
                cta={project.cta}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
