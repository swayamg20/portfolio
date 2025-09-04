import fs from 'fs';
import path from 'path';

export interface ComponentDoc {
  name: string;
  title: string;
  description: string;
  date: string;
  author: string;
  published: boolean;
  video?: string;
  content: string;
  category: string;
}

export function getComponentCategory(filename: string): string {
  const categories = {
    'marquee': 'components',
    'terminal': 'components',
    'bento-grid': 'components',
    'animated-list': 'components',
    'dock': 'components',
    'globe': 'components',
    'tweet-card': 'components',
    'orbiting-circles': 'components',
    'avatar-circles': 'components',
    'icon-cloud': 'components',
    'animated-circular-progress-bar': 'components',
    'animated-theme-toggler': 'components',
    'file-tree': 'components',
    'code-comparison': 'components',
    'scroll-progress': 'components',
    'lens': 'components',
    'pointer': 'components',
    'smooth-cursor': 'components',
    'progressive-blur': 'components',
    'arc-timeline': 'components',
    
    'animated-beam': 'special-effects',
    'border-beam': 'special-effects',
    'shine-border': 'special-effects',
    'magic-card': 'special-effects',
    'meteors': 'special-effects',
    'neon-gradient-card': 'special-effects',
    'confetti': 'special-effects',
    'particles': 'special-effects',
    'cool-mode': 'special-effects',
    'scratch-to-reveal': 'special-effects',
    'pixel-image': 'special-effects',
    'highlighter': 'special-effects',
    
    'text-animate': 'text-animations',
    'line-shadow-text': 'text-animations',
    'aurora-text': 'text-animations',
    'video-text': 'text-animations',
    'number-ticker': 'text-animations',
    'animated-shiny-text': 'text-animations',
    'animated-gradient-text': 'text-animations',
    'text-reveal': 'text-animations',
    'hyper-text': 'text-animations',
    'word-rotate': 'text-animations',
    'typing-animation': 'text-animations',
    'scroll-based-velocity': 'text-animations',
    'flip-text': 'text-animations',
    'box-reveal': 'text-animations',
    'sparkles-text': 'text-animations',
    'morphing-text': 'text-animations',
    'spinning-text': 'text-animations',
    'comic-text': 'text-animations',
    
    'rainbow-button': 'buttons',
    'shimmer-button': 'buttons',
    'shiny-button': 'buttons',
    'interactive-hover-button': 'buttons',
    'animated-subscribe-button': 'buttons',
    'pulsating-button': 'buttons',
    'ripple-button': 'buttons',
    
    'warp-background': 'backgrounds',
    'flickering-grid': 'backgrounds',
    'animated-grid-pattern': 'backgrounds',
    'retro-grid': 'backgrounds',
    'ripple': 'backgrounds',
    'dot-pattern': 'backgrounds',
    'grid-pattern': 'backgrounds',
    'interactive-grid-pattern': 'backgrounds',
    'grid-beams': 'backgrounds',
    
    'safari': 'device-mocks',
    'iphone-15-pro': 'device-mocks',
    'android': 'device-mocks',
    
    'blur-fade': 'animations'
  };
  
  return categories[filename as keyof typeof categories] || 'other';
}

export function parseFrontmatter(content: string): Partial<ComponentDoc> {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return {};
  
  const frontmatter = match[1];
  const metadata: Partial<ComponentDoc> = {};
  
  frontmatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim();
      if (value === 'true') metadata[key as keyof ComponentDoc] = true;
      else if (value === 'false') metadata[key as keyof ComponentDoc] = false;
      else metadata[key as keyof ComponentDoc] = value;
    }
  });
  
  return metadata;
}

export function getAllComponents(): ComponentDoc[] {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const name = file.replace('.md', '');
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const metadata = parseFrontmatter(content);
      
      return {
        name,
        title: metadata.title || name,
        description: metadata.description || '',
        date: metadata.date || '',
        author: metadata.author || '',
        published: metadata.published ?? true,
        video: metadata.video,
        content,
        category: getComponentCategory(name)
      };
    })
    .filter(component => component.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getComponentsByCategory(category: string): ComponentDoc[] {
  return getAllComponents().filter(component => component.category === category);
}

export function getComponentByName(name: string): ComponentDoc | null {
  const components = getAllComponents();
  return components.find(component => component.name === name) || null;
}
