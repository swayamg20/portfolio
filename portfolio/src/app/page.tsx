"use client";

import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { NavigationDock } from "@/components/shared";
import { HyperText } from "@/components/magicui/hyper-text";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedCircularProgressBar } from "@/components/magicui/animated-circular-progress-bar";
import { Meteors } from "@/components/magicui/meteors";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Particles } from "@/components/magicui/particles";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { BorderBeam } from "@/components/magicui/border-beam";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { WarpBackground } from "@/components/magicui/warp-background";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const timelineData = [
    {
      time: "2023",
      steps: [
        { icon: <span>🎓</span>, content: "Started AI Engineering Journey" },
        { icon: <span>💻</span>, content: "Built first AI-powered applications" },
      ],
    },
    {
      time: "2024",
      steps: [
        { icon: <span>🤖</span>, content: "Deep dive into Voice AI & LLMs" },
        { icon: <span>🚀</span>, content: "Launched multiple AI products" },
        { icon: <span>🌟</span>, content: "Gained expertise in RAG systems" },
      ],
    },
    {
      time: "2025",
      steps: [
        { icon: <span>🎯</span>, content: "Focus on scalable AI solutions" },
        { icon: <span>🔮</span>, content: "Exploring multimodal AI applications" },
      ],
    },
  ];

  const techIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  ];

  const projects = [
    {
      title: "Voice AI Assistant",
      description: "Advanced conversational AI with natural language processing and real-time voice synthesis. Built with state-of-the-art LLMs and WebRTC for seamless real-time communication.",
      tech: ["Python", "OpenAI", "WebRTC", "FastAPI", "PostgreSQL"],
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      features: ["Real-time speech synthesis", "Context-aware responses", "Multi-language support"]
    },
    {
      title: "AI Document Analyzer",
      description: "Intelligent document processing system using computer vision and NLP for automated data extraction. Processes thousands of documents with 99.2% accuracy.",
      tech: ["TensorFlow", "React", "Node.js", "MongoDB", "OpenCV"],
      gradientFrom: "#f093fb",
      gradientTo: "#f5576c",
      features: ["OCR extraction", "Intelligent classification", "Automated workflows"]
    },
    {
      title: "RAG Knowledge Base",
      description: "Retrieval-augmented generation system for enterprise knowledge management. Combines vector search with LLMs for precise, contextual answers.",
      tech: ["LangChain", "Pinecone", "Next.js", "PostgreSQL", "Redis"],
      gradientFrom: "#4facfe",
      gradientTo: "#00f2fe",
      features: ["Vector embeddings", "Semantic search", "Real-time updates"]
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time analytics dashboard with predictive insights and automated reporting. Leverages ML models to forecast trends and anomalies.",
      tech: ["Python", "D3.js", "AWS", "Redis", "Apache Kafka"],
      gradientFrom: "#43e97b",
      gradientTo: "#38f9d7",
      features: ["Predictive modeling", "Anomaly detection", "Custom dashboards"]
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavigationDock />

      {/* Revolutionary Hero Section */}
      <section 
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Multi-layer Background Effects */}
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={80}
          color="#ffffff"
          refresh={false}
        />
        
        <AnimatedGridPattern
          width={60}
          height={60}
          numSquares={100}
          maxOpacity={0.8}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-30",
          )}
        />

        {/* Orbiting Tech Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={300}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-2xl">🤖</span>
            </div>
          </OrbitingCircles>
          
          <OrbitingCircles
            className="h-[50px] w-[50px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={300}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-2xl">⚡</span>
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            className="h-[40px] w-[40px] border-none bg-transparent"
            reverse
            duration={15}
            delay={0}
            radius={200}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-xl">🚀</span>
            </div>
          </OrbitingCircles>

          <OrbitingCircles
            className="h-[40px] w-[40px] border-none bg-transparent"
            reverse
            duration={15}
            delay={7}
            radius={200}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-xl">💡</span>
            </div>
          </OrbitingCircles>
        </div>

        {/* Animated Beams */}
        <AnimatedBeam
          className="absolute inset-0"
          containerRef={containerRef}
          fromRef={heroRef}
          toRef={skillsRef}
          duration={3}
          pathColor="rgba(255, 255, 255, 0.2)"
          gradientStartColor="#667eea"
          gradientStopColor="#f093fb"
        />

        {/* Hero Content */}
        <div ref={heroRef} className="relative z-10 container mx-auto px-4 py-8 text-center">
          <div className="mb-12 space-y-6">
            <AuroraText 
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent"
              colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#43e97b"]}
            >
              Swayam Gupta
            </AuroraText>
            
            <SparklesText 
              className="text-3xl md:text-4xl font-medium"
              sparklesCount={15}
              colors={{first: '#A07CFE', second: '#FE8FB5'}}
            >
              AI Engineer & Innovator
            </SparklesText>
          </div>

          <AnimatedShinyText className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Architecting the future with AI • Building intelligent systems that transform industries • 
            Pioneering voice AI and multimodal applications
          </AnimatedShinyText>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <RainbowButton size="lg">
              <span className="text-lg font-medium">Explore My Universe</span>
            </RainbowButton>
            <RainbowButton variant="outline" size="lg">
              <span className="text-lg font-medium">Connect & Collaborate</span>
            </RainbowButton>
          </div>
        </div>
      </section>

      {/* Immersive Skills Constellation */}
      <section ref={skillsRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <SparklesText 
              className="text-4xl md:text-5xl font-bold mb-6"
              sparklesCount={20}
            >
              Skills Constellation
            </SparklesText>
            <AnimatedShinyText className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A universe of technologies mastered through years of innovation and exploration
            </AnimatedShinyText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Interactive Tech Cloud */}
            <div className="relative h-[500px] flex items-center justify-center">
              <IconCloud images={techIcons} />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent" />
            </div>

            {/* Skills Progress with Orbiting Elements */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4">
                  <OrbitingCircles
                    className="h-[30px] w-[30px] border-none bg-transparent"
                    duration={10}
                    radius={80}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                      <span className="text-sm">AI</span>
                    </div>
                  </OrbitingCircles>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Artificial Intelligence</h3>
                    <span className="text-2xl">🧠</span>
                  </div>
                  <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={95}
                    gaugePrimaryColor="#667eea"
                    gaugeSecondaryColor="#e2e8f0"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-muted-foreground">Expert in ML, DL, NLP, Computer Vision, LLMs</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4">
                  <OrbitingCircles
                    className="h-[30px] w-[30px] border-none bg-transparent"
                    duration={12}
                    delay={6}
                    radius={80}
                    reverse
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                      <span className="text-sm">FS</span>
                    </div>
                  </OrbitingCircles>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Full Stack Engineering</h3>
                    <span className="text-2xl">⚡</span>
                  </div>
                  <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={92}
                    gaugePrimaryColor="#4facfe"
                    gaugeSecondaryColor="#e2e8f0"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-muted-foreground">React, Node.js, Python, TypeScript, Databases</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4">
                  <OrbitingCircles
                    className="h-[30px] w-[30px] border-none bg-transparent"
                    duration={8}
                    delay={4}
                    radius={80}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                      <span className="text-sm">☁️</span>
                    </div>
                  </OrbitingCircles>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Cloud Architecture</h3>
                    <span className="text-2xl">☁️</span>
                  </div>
                  <AnimatedCircularProgressBar
                    max={100}
                    min={0}
                    value={88}
                    gaugePrimaryColor="#f093fb"
                    gaugeSecondaryColor="#e2e8f0"
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-muted-foreground">AWS, Docker, Kubernetes, Microservices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Epic Journey Timeline */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <AuroraText 
              className="text-4xl md:text-5xl font-bold mb-6"
              colors={["#667eea", "#764ba2", "#f093fb", "#f5576c"]}
            >
              Innovation Journey
            </AuroraText>
            <AnimatedShinyText className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Milestones in my quest to push the boundaries of artificial intelligence
            </AnimatedShinyText>
          </div>

          <div className="max-w-5xl mx-auto">
            <ArcTimeline data={timelineData} />
          </div>
        </div>
      </section>

      {/* Revolutionary Projects Showcase */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={60}
          color="#667eea"
          refresh={false}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <SparklesText 
              className="text-4xl md:text-5xl font-bold mb-6"
              sparklesCount={25}
              colors={{first: '#667eea', second: '#f093fb'}}
            >
              Revolutionary Projects
            </SparklesText>
            <AnimatedShinyText className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI applications that are reshaping industries and pushing technological boundaries
            </AnimatedShinyText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="relative group">
                <BorderBeam 
                  size={100} 
                  duration={6 + index} 
                  colorFrom={project.gradientFrom}
                  colorTo={project.gradientTo}
                />
                
                <WarpBackground>
                  <MagicCard
                    className="p-8 h-full bg-card/80 backdrop-blur-sm"
                    gradientFrom={project.gradientFrom}
                    gradientTo={project.gradientTo}
                    gradientOpacity={0.1}
                  >
                    <div className="space-y-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-2xl"
                             style={{background: `linear-gradient(45deg, ${project.gradientFrom}, ${project.gradientTo})`}}>
                          🚀
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                          <ul className="text-muted-foreground space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </MagicCard>
                </WarpBackground>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosmic Contact Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <Meteors number={40} className="absolute inset-0" />
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={70}
          color="#f093fb"
          refresh={false}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <AuroraText 
              className="text-4xl md:text-6xl font-bold mb-8"
              colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8", "#43e97b"]}
            >
              Let's Shape the Future
            </AuroraText>
            
            <SparklesText 
              className="text-xl md:text-2xl mb-12 leading-relaxed"
              sparklesCount={20}
              colors={{first: '#A07CFE', second: '#FE8FB5'}}
            >
              Ready to build something extraordinary? Let's combine our visions and create 
              AI solutions that will revolutionize tomorrow.
            </SparklesText>

            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
              <RainbowButton size="lg">
                <span className="text-lg font-medium">🚀 Start a Project</span>
              </RainbowButton>
              <RainbowButton variant="outline" size="lg">
                <span className="text-lg font-medium">💬 Schedule a Call</span>
              </RainbowButton>
              <RainbowButton variant="outline" size="lg">
                <span className="text-lg font-medium">📧 Send a Message</span>
              </RainbowButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">Available for projects worldwide</p>
              </div>
              
              <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Rapid Delivery</h3>
                <p className="text-muted-foreground text-sm">Agile development & quick iterations</p>
              </div>
              
              <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Result Focused</h3>
                <p className="text-muted-foreground text-sm">Outcome-driven AI solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}