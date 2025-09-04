#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// Component URLs based on the sitemap structure
const COMPONENTS = {
  // Core components
  marquee: 'https://magicui.design/docs/components/marquee.md',
  terminal: 'https://magicui.design/docs/components/terminal.md',
  'hero-video-dialog': 'https://magicui.design/docs/components/hero-video-dialog.md',
  'bento-grid': 'https://magicui.design/docs/components/bento-grid.md',
  'animated-list': 'https://magicui.design/docs/components/animated-list.md',
  dock: 'https://magicui.design/docs/components/dock.md',
  globe: 'https://magicui.design/docs/components/globe.md',
  'tweet-card': 'https://magicui.design/docs/components/tweet-card.md',
  'orbiting-circles': 'https://magicui.design/docs/components/orbiting-circles.md',
  'avatar-circles': 'https://magicui.design/docs/components/avatar-circles.md',
  'icon-cloud': 'https://magicui.design/docs/components/icon-cloud.md',
  'animated-circular-progress-bar': 'https://magicui.design/docs/components/animated-circular-progress-bar.md',
  'animated-theme-toggler': 'https://magicui.design/docs/components/animated-theme-toggler.md',
  'file-tree': 'https://magicui.design/docs/components/file-tree.md',
  'code-comparison': 'https://magicui.design/docs/components/code-comparison.md',
  'script-copy-button': 'https://magicui.design/docs/components/script-copy-button.md',
  'scroll-progress': 'https://magicui.design/docs/components/scroll-progress.md',
  lens: 'https://magicui.design/docs/components/lens.md',
  pointer: 'https://magicui.design/docs/components/pointer.md',
  'smooth-cursor': 'https://magicui.design/docs/components/smooth-cursor.md',
  'progressive-blur': 'https://magicui.design/docs/components/progressive-blur.md',
  'arc-timeline': 'https://magicui.design/docs/components/arc-timeline.md',
  
  // Special effects
  'animated-beam': 'https://magicui.design/docs/components/animated-beam.md',
  'border-beam': 'https://magicui.design/docs/components/border-beam.md',
  'shine-border': 'https://magicui.design/docs/components/shine-border.md',
  'magic-card': 'https://magicui.design/docs/components/magic-card.md',
  meteors: 'https://magicui.design/docs/components/meteors.md',
  'neon-gradient-card': 'https://magicui.design/docs/components/neon-gradient-card.md',
  confetti: 'https://magicui.design/docs/components/confetti.md',
  particles: 'https://magicui.design/docs/components/particles.md',
  'cool-mode': 'https://magicui.design/docs/components/cool-mode.md',
  'scratch-to-reveal': 'https://magicui.design/docs/components/scratch-to-reveal.md',
  'pixel-image': 'https://magicui.design/docs/components/pixel-image.md',
  highlighter: 'https://magicui.design/docs/components/highlighter.md',
  
  // Text animations
  'text-animate': 'https://magicui.design/docs/components/text-animate.md',
  'line-shadow-text': 'https://magicui.design/docs/components/line-shadow-text.md',
  'aurora-text': 'https://magicui.design/docs/components/aurora-text.md',
  'video-text': 'https://magicui.design/docs/components/video-text.md',
  'number-ticker': 'https://magicui.design/docs/components/number-ticker.md',
  'animated-shiny-text': 'https://magicui.design/docs/components/animated-shiny-text.md',
  'animated-gradient-text': 'https://magicui.design/docs/components/animated-gradient-text.md',
  'text-reveal': 'https://magicui.design/docs/components/text-reveal.md',
  'hyper-text': 'https://magicui.design/docs/components/hyper-text.md',
  'word-rotate': 'https://magicui.design/docs/components/word-rotate.md',
  'typing-animation': 'https://magicui.design/docs/components/typing-animation.md',
  'scroll-based-velocity': 'https://magicui.design/docs/components/scroll-based-velocity.md',
  'flip-text': 'https://magicui.design/docs/components/flip-text.md',
  'box-reveal': 'https://magicui.design/docs/components/box-reveal.md',
  'sparkles-text': 'https://magicui.design/docs/components/sparkles-text.md',
  'morphing-text': 'https://magicui.design/docs/components/morphing-text.md',
  'spinning-text': 'https://magicui.design/docs/components/spinning-text.md',
  'comic-text': 'https://magicui.design/docs/components/comic-text.md',
  
  // Buttons
  'rainbow-button': 'https://magicui.design/docs/components/rainbow-button.md',
  'shimmer-button': 'https://magicui.design/docs/components/shimmer-button.md',
  'shiny-button': 'https://magicui.design/docs/components/shiny-button.md',
  'interactive-hover-button': 'https://magicui.design/docs/components/interactive-hover-button.md',
  'animated-subscribe-button': 'https://magicui.design/docs/components/animated-subscribe-button.md',
  'pulsating-button': 'https://magicui.design/docs/components/pulsating-button.md',
  'ripple-button': 'https://magicui.design/docs/components/ripple-button.md',
  
  // Backgrounds
  'warp-background': 'https://magicui.design/docs/components/warp-background.md',
  'flickering-grid': 'https://magicui.design/docs/components/flickering-grid.md',
  'animated-grid-pattern': 'https://magicui.design/docs/components/animated-grid-pattern.md',
  'retro-grid': 'https://magicui.design/docs/components/retro-grid.md',
  ripple: 'https://magicui.design/docs/components/ripple.md',
  'dot-pattern': 'https://magicui.design/docs/components/dot-pattern.md',
  'grid-pattern': 'https://magicui.design/docs/components/grid-pattern.md',
  'interactive-grid-pattern': 'https://magicui.design/docs/components/interactive-grid-pattern.md',
  'grid-beams': 'https://magicui.design/docs/components/grid-beams.md',
  
  // Device mocks
  safari: 'https://magicui.design/docs/components/safari.md',
  'iphone-15-pro': 'https://magicui.design/docs/components/iphone-15-pro.md',
  android: 'https://magicui.design/docs/components/android.md',
  
  // Animations
  'blur-fade': 'https://magicui.design/docs/components/blur-fade.md'
};

function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join('./resources', filename);
    
    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`⏭️  Skipped: ${filename} (already exists)`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 404) {
        console.log(`❌ Not found: ${filename} (404)`);
        file.close();
        fs.unlinkSync(filepath); // Remove empty file
        resolve();
      } else {
        console.log(`⚠️  Failed: ${filename} (${response.statusCode})`);
        file.close();
        fs.unlinkSync(filepath); // Remove empty file
        resolve();
      }
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath); // Remove empty file
      console.log(`❌ Error downloading ${filename}: ${err.message}`);
      resolve();
    });
  });
}

async function downloadAllComponents() {
  console.log('🚀 Downloading Magic UI component markdowns...\n');
  
  // Ensure resources directory exists
  if (!fs.existsSync('./resources')) {
    fs.mkdirSync('./resources', { recursive: true });
  }
  
  const totalComponents = Object.keys(COMPONENTS).length;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;
  
  console.log(`📊 Total components to process: ${totalComponents}\n`);
  
  // Download components in batches to avoid overwhelming the server
  const batchSize = 5;
  const componentEntries = Object.entries(COMPONENTS);
  
  for (let i = 0; i < componentEntries.length; i += batchSize) {
    const batch = componentEntries.slice(i, i + batchSize);
    
    await Promise.all(
      batch.map(async ([name, url]) => {
        const filename = `${name}.md`;
        try {
          await downloadFile(url, filename);
          downloaded++;
        } catch (error) {
          failed++;
          console.log(`❌ Failed to download ${filename}: ${error.message}`);
        }
      })
    );
    
    // Small delay between batches
    if (i + batchSize < componentEntries.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log('\n📊 Download Summary:');
  console.log(`  ✅ Downloaded: ${downloaded}`);
  console.log(`  ⏭️  Skipped: ${skipped}`);
  console.log(`  ❌ Failed: ${failed}`);
  console.log(`  📁 Total: ${totalComponents}`);
  
  if (downloaded > 0) {
    console.log('\n🎉 Markdown files saved to ./resources/ folder!');
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
const command = args[0];

if (command === '--help' || command === '-h') {
  console.log('Magic UI Markdown Downloader');
  console.log('');
  console.log('Usage:');
  console.log('  node download-markdowns.js          # Download all components');
  console.log('  node download-markdowns.js --help   # Show this help');
  console.log('');
  console.log('This script downloads all component markdown files from magicui.design');
  console.log('and saves them to the ./resources/ folder.');
} else {
  downloadAllComponents().catch(console.error);
}
