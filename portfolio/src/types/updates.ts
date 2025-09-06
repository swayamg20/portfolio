export interface RecentUpdate {
  id: string;
  type: string;
  category: 'status' | 'article' | 'project' | 'learning';
  title: string;
  description: string;
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red' | 'yellow';
  isPulsing: boolean;
  date: string;
  link?: string | null;
}

export interface RecentUpdatesData {
  updates: RecentUpdate[];
  lastUpdated: string;
}

export const colorMap = {
  green: 'bg-green-400',
  blue: 'bg-blue-400',
  purple: 'bg-purple-400',
  orange: 'bg-orange-400',
  red: 'bg-red-400',
  yellow: 'bg-yellow-400',
} as const;

export const textColorMap = {
  green: 'text-green-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  red: 'text-red-400',
  yellow: 'text-yellow-400',
} as const;

export const categoryIconPaths = {
  status: "M13 10V3L4 14h7v7l9-11h-7z",
  article: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  project: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  learning: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
} as const;

export const categoryStyles = {
  status: {
    borderStyle: 'border-l-4 border-l-green-400',
    bgGradient: 'bg-gradient-to-r from-green-50/50 to-transparent dark:from-green-900/20',
  },
  article: {
    borderStyle: 'border-l-4 border-l-blue-400',
    bgGradient: 'bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20',
  },
  project: {
    borderStyle: 'border-l-4 border-l-orange-400',
    bgGradient: 'bg-gradient-to-r from-orange-50/50 to-transparent dark:from-orange-900/20',
  },
  learning: {
    borderStyle: 'border-l-4 border-l-purple-400',
    bgGradient: 'bg-gradient-to-r from-purple-50/50 to-transparent dark:from-purple-900/20',
  },
} as const;
