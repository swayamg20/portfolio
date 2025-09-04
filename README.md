# Magic UI Portfolio Project

This repository contains tools to generate sitemaps for the [Magic UI](https://magicui.design) website and a portfolio project showcasing all the components.

## Features

- **Complete Coverage**: Generates sitemaps for all components, templates, and pages
- **Modular Generation**: Generate specific sitemaps or all at once
- **SEO Optimized**: Includes proper XML structure, lastmod dates, and priorities
- **Robots.txt**: Automatically generates robots.txt with sitemap references
- **Markdown Downloader**: Downloads all component documentation markdown files

## Repository Structure

```
├── scripts/                   # Utility scripts
│   ├── generate-sitemaps.js  # Sitemap generation
│   ├── download-markdowns.js # Component markdown downloader
│   ├── sitemaps/            # Generated sitemap files
│   ├── sitemap.xml          # Main sitemap index
│   └── robots.txt           # SEO robots file
├── portfolio/                # Portfolio website project
│   ├── src/                 # Next.js source code
│   ├── content/             # Component markdown files (71 components)
│   ├── package.json         # Portfolio dependencies
│   └── README.md            # Portfolio documentation
└── README.md                # This file
```

## Installation

### For Utility Scripts
```bash
npm install
```

## Usage

### From Root Directory (Recommended)
```bash
# Generate sitemaps
npm run generate               # All sitemaps
npm run generate:components    # Components only
npm run generate:templates     # Templates only

# Download component markdowns
npm run download               # Download all components
npm run download:components    # Same as above

# Portfolio management
npm run portfolio:install      # Install portfolio dependencies
npm run portfolio:dev         # Start portfolio development server
npm run portfolio:build       # Build portfolio for production
npm run portfolio:start       # Start portfolio production server
```

### Direct Execution
```bash
# Utility scripts
node scripts/generate-sitemaps.js
node scripts/download-markdowns.js

# Portfolio (from portfolio directory)
cd portfolio
npm install
npm run dev
```

## Generated Files

### Sitemaps (in scripts/ folder)
```
├── sitemap.xml                    # Main sitemap index
├── robots.txt                     # SEO robots file
└── sitemaps/
    ├── components-sitemap.xml     # All UI components
    ├── special-effects-sitemap.xml # Special effects components
    ├── text-animations-sitemap.xml # Text animation components
    ├── buttons-sitemap.xml        # Button components
    ├── backgrounds-sitemap.xml    # Background components
    ├── device-mocks-sitemap.xml   # Device mock components
    ├── animations-sitemap.xml     # Animation components
    ├── templates-sitemap.xml      # Template pages
    └── pages-sitemap.xml          # Main pages
```

### Component Markdowns (in portfolio/content/ folder)
```
├── marquee.md                # Marquee component docs
├── rainbow-button.md         # Rainbow button docs
├── spinning-text.md          # Spinning text docs
└── ... (71 total components)
```

## Sitemap Structure

The script generates sitemaps covering:

- **Components** (50+ components)
- **Special Effects** (12 effects)
- **Text Animations** (18 animations)
- **Buttons** (7 button types)
- **Backgrounds** (9 background patterns)
- **Device Mocks** (3 device types)
- **Animations** (1 animation type)
- **Templates** (9 template types)
- **Pages** (4 main pages)

## Markdown Downloader

The downloader script fetches all component documentation from [Magic UI](https://magicui.design) and saves them as markdown files:

- **71 component markdowns** downloaded
- **Organized by category** (components, effects, animations, etc.)
- **Complete documentation** with code examples and usage
- **Batch processing** with rate limiting to be respectful to the server
- **Skip existing files** to avoid re-downloading

## Customization

Edit `SITE_STRUCTURE` in `generate-sitemaps.js` to:
- Change the base URL
- Add/remove components
- Modify URL paths
- Adjust priorities and change frequencies

## Output Format

Each sitemap follows the standard XML sitemap protocol with:
- `<loc>`: Full URL to the page
- `<lastmod>`: Current date
- `<changefreq>`: Weekly updates
- `<priority>`: 0.8 for all pages

## SEO Benefits

- **Search Engine Discovery**: Helps search engines find all pages
- **Indexing Speed**: Faster crawling and indexing
- **Content Organization**: Clear structure for search engines
- **Update Tracking**: Lastmod dates for content freshness

## License

MIT
