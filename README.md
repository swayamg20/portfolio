# Portfolio Website - Magic UI Components

A beautiful portfolio website showcasing all the Magic UI components we've downloaded. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Component Showcase**: Display all 71 Magic UI components
- **Category Organization**: Organized by component type (buttons, animations, effects, etc.)
- **Responsive Design**: Mobile-first responsive layout
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful interactions

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/          # React components
│   ├── styles/             # CSS and styling
│   │   └── globals.css     # Global styles with Tailwind
│   └── utils/              # Utility functions
│       └── markdown.ts     # Markdown processing utilities
├── content/                 # Component markdown files (71 components)
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown files with frontmatter

## 📦 Installation

```bash
cd portfolio
npm install
```

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate` - Generate sitemaps (from parent scripts folder)
- `npm run download` - Download component markdowns (from parent scripts folder)

## 🎨 Component Categories

The portfolio will showcase components organized into these categories:

- **Components** (20+): Core UI components like marquee, terminal, bento-grid
- **Special Effects** (12): Visual effects like meteors, confetti, particles
- **Text Animations** (18): Text-based animations like spinning-text, comic-text
- **Buttons** (7): Interactive button components like rainbow-button
- **Backgrounds** (9): Background patterns and effects
- **Device Mocks** (3): Device frame components
- **Animations** (1): General animation components

## 🔧 Configuration

- **Tailwind**: Custom color scheme and animations
- **TypeScript**: Strict mode with path aliases
- **Next.js**: App directory with image optimization
- **PostCSS**: Autoprefixer and Tailwind processing

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid system
- Touch-friendly interactions

## 🎯 Next Steps

1. **Component Grid**: Create a responsive grid to display all components
2. **Category Pages**: Build dedicated pages for each component category
3. **Component Detail**: Individual component showcase pages
4. **Search & Filter**: Add search functionality and filtering options
5. **Interactive Demos**: Live component demonstrations
6. **Dark Mode**: Toggle between light and dark themes

## 📚 Resources

- [Magic UI Documentation](https://magicui.design/docs/components/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

MIT
