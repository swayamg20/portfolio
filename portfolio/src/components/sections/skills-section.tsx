'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { SkillsGrid, ArticleList } from "@/components/shared";
import { SkillsData } from "@/types/skills";
import { ArticlesData } from "@/types/articles";
import skillsData from "@/data/skills.json";
import articlesData from "@/data/articles.json";

export function SkillsSection() {
  const { skills } = skillsData as SkillsData;
  const { articles } = articlesData as ArticlesData;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Skills Grid */}
          <div className="relative">
            <div className="text-center lg:text-left mb-6 sm:mb-8">
              <TextAnimate
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4"
                animation="blurInUp"
                by="character"
                duration={0.6}
                startOnView={true}
                once={true}
              >
                Skills
              </TextAnimate>
              <TextAnimate
                className="text-base sm:text-lg text-muted-foreground"
                animation="blurInUp"
                by="character"
                duration={0.5}
                startOnView={true}
                once={true}
              >
                Technologies I've worked with
              </TextAnimate>
            </div>

            {/* Skills Grid */}
            <SkillsGrid 
              skills={skills}
            />
          </div>

          {/* Right Side - Articles */}
          <div className="">
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <TextAnimate
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4"
                animation="blurInUp"
                by="character"
                duration={0.6}
                startOnView={true}
                once={true}
              >
                Recent Articles
              </TextAnimate>
              <TextAnimate
                className="text-base sm:text-lg text-muted-foreground"
                animation="blurInUp"
                by="character"
                duration={0.5}
                startOnView={true}
                once={true}
              >
                I have recently started writing on Medium, here are some of my latest articles:
              </TextAnimate>
            </div>

            {/* Articles List */}
            <ArticleList 
              articles={articles}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
