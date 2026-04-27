# pavkhemerak.dev

The personal portfolio and technical blog of **Pavkhemerak**. Built for precision, performance, and aggressive minimalism.

This frontend application showcases a "Cyber-Architect" brutalist aesthetic—featuring high-contrast terminal-style interfaces, structural grids, and zero border-radius elements.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Inter (Sans) & Space Grotesk (Mono)
- **Icons**: Google Material Symbols
- **Design System**: Stitch Obsidian Cyber Minimalist

## Features

- **Single Page Architecture**: Seamless vertical scrolling navigation between system modules.
- **Background Profile Section**: A comprehensive "Cyber-Analyst" identity module featuring technical architecture stats and professional timelines.
- **Responsive Neo-Brutalist Design**: A unique dark-mode UI with sharp edges (0px border-radius), "Cyber Cyan" accents, and ghost-border hover effects.
- **Terminal Aesthetics**: Simulated terminal windows with scanline overlays and syntax-highlighted code blocks for displaying skills and experience.
- **Project Showcase**: A gallery of technical experiments and applications with status badges and technology tags.
- **Mobile-Optimized**: Dedicated bottom navigation bar for mobile devices ensuring a seamless experience across all screen sizes.

## Project Structure

- `app/`: Next.js App Router core. Contains the main `page.tsx` as the SPA entry point.
- `components/`: Modularized React components following the brutalist design system.
  - `HeroSection.tsx`: Core identity and intro.
  - `BackgroundProfileSection.tsx`: Detailed identity, skills matrix, and timeline.
  - `ExperienceSection.tsx`: Professional history module.
  - `FeaturedDeployments.tsx`: Project showcase.
  - `SkillsSection.tsx`: Technical proficiency terminal.
- `public/`: Static assets.

## Getting Started

First, install the dependencies using `pnpm` (recommended):

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create an optimized production build:

```bash
pnpm build
```

To test the production build locally:

```bash
pnpm start
```

## License

All rights reserved. © 2026 Pavkhemerak.
