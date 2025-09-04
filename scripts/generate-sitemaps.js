#!/usr/bin/env node

const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');

// Magic UI website structure based on the documentation
const SITE_STRUCTURE = {
  baseUrl: 'https://magicui.design',
  sections: {
    components: {
      path: '/docs/components/',
      items: [
        'marquee', 'terminal', 'hero-video-dialog', 'bento-grid', 'animated-list',
        'dock', 'globe', 'tweet-card', 'orbiting-circles', 'avatar-circles',
        'icon-cloud', 'animated-circular-progress-bar', 'animated-theme-toggler',
        'file-tree', 'code-comparison', 'script-copy-button', 'scroll-progress',
        'lens', 'pointer', 'smooth-cursor', 'progressive-blur', 'arc-timeline'
      ]
    },
    specialEffects: {
      path: '/docs/components/',
      items: [
        'animated-beam', 'border-beam', 'shine-border', 'magic-card', 'meteors',
        'neon-gradient-card', 'confetti', 'particles', 'cool-mode', 'scratch-to-reveal',
        'pixel-image', 'highlighter'
      ]
    },
    textAnimations: {
      path: '/docs/components/',
      items: [
        'text-animate', 'line-shadow-text', 'aurora-text', 'video-text',
        'number-ticker', 'animated-shiny-text', 'animated-gradient-text',
        'text-reveal', 'hyper-text', 'word-rotate', 'typing-animation',
        'scroll-based-velocity', 'flip-text', 'box-reveal', 'sparkles-text',
        'morphing-text', 'spinning-text', 'comic-text'
      ]
    },
    buttons: {
      path: '/docs/components/',
      items: [
        'rainbow-button', 'shimmer-button', 'shiny-button', 'interactive-hover-button',
        'animated-subscribe-button', 'pulsating-button', 'ripple-button'
      ]
    },
    backgrounds: {
      path: '/docs/components/',
      items: [
        'warp-background', 'flickering-grid', 'animated-grid-pattern', 'retro-grid',
        'ripple', 'dot-pattern', 'grid-pattern', 'interactive-grid-pattern', 'grid-beams'
      ]
    },
    deviceMocks: {
      path: '/docs/components/',
      items: ['safari', 'iphone-15-pro', 'android']
    },
    animations: {
      path: '/docs/components/',
      items: ['blur-fade']
    },
    templates: {
      path: '/templates/',
      items: [
        'ai-agent-pro', 'pro-dev-tool', 'mobile-pro', 'saas-pro', 'startup-pro',
        'portfolio', 'changelog', 'new-blog', 'new'
      ]
    },
    pages: {
      path: '/',
      items: ['', 'docs', 'templates', 'showcase']
    }
  }
};

function generateSitemap(section, items, basePath) {
  const sitemap = create({ version: '1.0' })
    .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  items.forEach(item => {
    const url = sitemap.ele('url');
    url.ele('loc').txt(`${SITE_STRUCTURE.baseUrl}${basePath}${item}`);
    url.ele('lastmod').txt(new Date().toISOString().split('T')[0]);
    url.ele('changefreq').txt('weekly');
    url.ele('priority').txt('0.8');
  });

  return sitemap.end({ prettyPrint: true });
}

function generateMainSitemap() {
  const mainSitemap = create({ version: '1.0' })
    .ele('sitemapindex', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

  Object.keys(SITE_STRUCTURE.sections).forEach(section => {
    const sitemap = mainSitemap.ele('sitemap');
    sitemap.ele('loc').txt(`${SITE_STRUCTURE.baseUrl}/sitemaps/${section}-sitemap.xml`);
    sitemap.ele('lastmod').txt(new Date().toISOString().split('T')[0]);
  });

  return mainSitemap.end({ prettyPrint: true });
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/components-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/templates-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/special-effects-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/text-animations-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/buttons-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/backgrounds-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/device-mocks-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/animations-sitemap.xml
Sitemap: ${SITE_STRUCTURE.baseUrl}/sitemaps/pages-sitemap.xml`;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, content) {
  ensureDirectoryExists(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  console.log(`✅ Generated: ${filePath}`);
}

function generateAllSitemaps() {
  console.log('🚀 Generating Magic UI sitemaps...\n');

  // Create sitemaps directory
  const sitemapsDir = './sitemaps';
  ensureDirectoryExists(sitemapsDir);

  // Generate main sitemap index
  const mainSitemap = generateMainSitemap();
  writeFile('./sitemap.xml', mainSitemap);

  // Generate robots.txt
  const robotsTxt = generateRobotsTxt();
  writeFile('./robots.txt', robotsTxt);

  // Generate individual sitemaps
  Object.entries(SITE_STRUCTURE.sections).forEach(([section, config]) => {
    const sitemap = generateSitemap(section, config.items, config.path);
    const filename = `${section}-sitemap.xml`;
    writeFile(path.join(sitemapsDir, filename), sitemap);
  });

  console.log('\n🎉 All sitemaps generated successfully!');
  console.log('\n📁 Generated files:');
  console.log('  - sitemap.xml (main sitemap index)');
  console.log('  - robots.txt');
  console.log('  - sitemaps/ (directory with individual sitemaps)');
}

function generateSpecificSitemap(section) {
  if (!SITE_STRUCTURE.sections[section]) {
    console.error(`❌ Section "${section}" not found. Available sections:`);
    console.log(Object.keys(SITE_STRUCTURE.sections).join(', '));
    return;
  }

  console.log(`🚀 Generating ${section} sitemap...\n`);
  
  const config = SITE_STRUCTURE.sections[section];
  const sitemap = generateSitemap(section, config.items, config.path);
  
  ensureDirectoryExists('./sitemaps');
  const filename = `${section}-sitemap.xml`;
  writeFile(path.join('./sitemaps', filename), sitemap);
  
  console.log(`\n✅ ${section} sitemap generated: sitemaps/${filename}`);
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];

if (command === '--components') {
  generateSpecificSitemap('components');
} else if (command === '--templates') {
  generateSpecificSitemap('templates');
} else if (command === '--all' || !command) {
  generateAllSitemaps();
} else {
  console.log('Usage:');
  console.log('  npm run generate          # Generate all sitemaps');
  console.log('  npm run generate:components # Generate only components sitemap');
  console.log('  npm run generate:templates  # Generate only templates sitemap');
  console.log('  npm run generate:all        # Generate all sitemaps (default)');
}
