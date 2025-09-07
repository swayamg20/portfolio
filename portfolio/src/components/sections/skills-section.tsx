'use client'

import { TextAnimate } from "@/components/magicui/text-animate";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { SkillsOrbit, SkillsLegend, ArticleList } from "@/components/shared";
import { SkillsData } from "@/types/skills";
import { ArticlesData } from "@/types/articles";
import skillsData from "@/data/skills.json";
import articlesData from "@/data/articles.json";

export function SkillsSection() {
  const { coreSkills, advancedSkills } = skillsData as SkillsData;
  const { articles } = articlesData as ArticlesData;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dot Pattern Background */}
      <DotPattern 
        className="opacity-30 text-muted-foreground/20"
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
      />
      <div className="container mx-auto px-4 relative z-10">
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
            <SkillsOrbit 
              coreSkills={coreSkills}
              advancedSkills={advancedSkills}
            />

            {/* Skills Legend */}
            <SkillsLegend 
              coreSkills={coreSkills}
              advancedSkills={advancedSkills}
              className="mt-8"
            />
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
            <ArticleList 
              articles={articles}
              showViewAll={true}
              viewAllHref="/articles"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
