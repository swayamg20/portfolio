export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  category: string;
}

export interface ArticlesData {
  articles: Article[];
}
