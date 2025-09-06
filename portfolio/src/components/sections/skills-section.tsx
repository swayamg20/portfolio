'use client'

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Zap,
  ExternalLink,
  Calendar,
  User
} from "lucide-react";

// Articles data
const articles = [
  {
    id: 1,
    title: "Building Scalable AI Voice Assistants",
    description: "Deep dive into creating production-ready voice AI systems with real-time processing and natural conversation flows.",
    date: "2024-01-15",
    readTime: "8 min read",
    link: "https://medium.com/@swayam/building-scalable-ai-voice-assistants",
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Full Stack Development with Next.js 14",
    description: "Complete guide to building modern web applications with the latest Next.js features and best practices.",
    date: "2023-12-10",
    readTime: "12 min read",
    link: "https://dev.to/swayam/fullstack-nextjs-14",
    category: "Web Dev"
  },
  {
    id: 3,
    title: "Microservices Architecture Patterns",
    description: "Exploring different patterns and strategies for building maintainable microservices at scale.",
    date: "2023-11-22",
    readTime: "15 min read",
    link: "https://hashnode.com/@swayam/microservices-patterns",
    category: "Architecture"
  },
  {
    id: 4,
    title: "Real-time Data Processing with Kafka",
    description: "Implementation strategies for high-throughput data streaming and processing systems.",
    date: "2023-10-08",
    readTime: "10 min read",
    link: "https://medium.com/@swayam/realtime-kafka-processing",
    category: "Data"
  }
];

// Skills data for orbiting circles
const coreSkills = [
  { icon: Code2, name: "Full Stack", color: "bg-blue-500" },
  { icon: Database, name: "Databases", color: "bg-green-500" },
  { icon: Globe, name: "Web APIs", color: "bg-purple-500" },
];

const advancedSkills = [
  { icon: Brain, name: "AI/ML", color: "bg-orange-500" },
  { icon: Smartphone, name: "Mobile", color: "bg-pink-500" },
  { icon: Zap, name: "DevOps", color: "bg-yellow-500" },
];

export function SkillsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Orbiting Circles */}
          <div className="relative">
            <div className="text-center mb-8">
              <TextAnimate
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                animation="blurInUp"
                by="character"
                duration={0.6}
                startOnView={true}
                once={true}
              >
                Skills & Expertise
              </TextAnimate>
              <TextAnimate
                className="text-lg text-muted-foreground"
                animation="blurInUp"
                by="character"
                duration={0.5}
                startOnView={true}
                once={true}
              >
                Technologies I work with
              </TextAnimate>
            </div>

            {/* Orbiting Circles Container */}
            <div className="relative flex items-center justify-center h-[400px] w-full">
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Inner Orbit - Core Skills */}
              <OrbitingCircles
                duration={15}
                radius={80}
                path={true}
              >
                {coreSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${skill.color} shadow-lg hover:scale-110 transition-transform duration-200`}
                    title={skill.name}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </OrbitingCircles>

              {/* Outer Orbit - Advanced Skills */}
              <OrbitingCircles
                duration={20}
                radius={140}
                path={true}
                reverse
              >
                {advancedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${skill.color} shadow-lg hover:scale-110 transition-transform duration-200`}
                    title={skill.name}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </OrbitingCircles>
            </div>

            {/* Skills Legend */}
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core Skills</h4>
                <ul className="space-y-1 text-muted-foreground">
                  {coreSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
                <ul className="space-y-1 text-muted-foreground">
                  {advancedSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Articles */}
          <div>
            <div className="mb-8">
              <TextAnimate
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                animation="blurInUp"
                by="character"
                duration={0.6}
                startOnView={true}
                once={true}
              >
                Recent Articles
              </TextAnimate>
              <TextAnimate
                className="text-lg text-muted-foreground"
                animation="blurInUp"
                by="character"
                duration={0.5}
                startOnView={true}
                once={true}
              >
                Sharing knowledge and insights
              </TextAnimate>
            </div>

            {/* Articles List */}
            <div className="space-y-6">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className="block"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <article className="group p-6 rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm animate-in slide-in-from-bottom-4 fade-in duration-500">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {article.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {article.readTime}
                          </span>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
                          >
                            Read Article
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* View All Articles Link */}
            <div className="mt-8 text-center">
              <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-500">
                <a
                  href="/articles"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 text-foreground hover:text-primary font-medium"
                >
                  View All Articles
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
