"use client";

import { Article } from "@/types/articles";
import { ExternalLink, Calendar } from "lucide-react";

interface ArticleCardProps {
  article: Article;
  index?: number;
  className?: string;
}

export function ArticleCard({ article, index = 0, className = "" }: ArticleCardProps) {
  return (
    <div
      className={`block ${className}`}
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
  );
}

interface ArticleListProps {
  articles: Article[];
  className?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function ArticleList({ 
  articles, 
  className = "", 
  showViewAll = false, 
  viewAllHref = "/articles" 
}: ArticleListProps) {
  return (
    <div className={className}>
      <div className="space-y-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
          />
        ))}
      </div>

      {showViewAll && (
        <div className="mt-8 text-center">
          <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-500">
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-all duration-200 text-foreground hover:text-primary font-medium"
            >
              View All Articles
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
