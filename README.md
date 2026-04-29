# pavkhemerak.dev — Frontend

The frontend application for [pavkhemerak.dev](https://pavkhemerak.dev), built with Next.js 16 and styled in the **Obsidian Cyber Minimalist** design system.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Fonts | Inter (body), Space Grotesk (mono/code) |
| Icons | Google Material Symbols |
| Markdown | [react-markdown](https://github.com/remarkjs/react-markdown) + remark-gfm |

## Pages & Sections

### Home (`/`)
A single-page portfolio with vertically-stacked sections:

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `HeroSection.tsx` | Name, title, animated terminal-style intro |
| Featured Deployments | `FeaturedDeployments.tsx` | Highlighted project cards |
| Experience | `ExperienceSection.tsx` | Work history timeline |
| Background Profile | `BackgroundProfileSection.tsx` | Education, certifications, skills overview |
| Technical Skills | `SkillsSection.tsx` | Categorized skill bars with proficiency levels |
| Tools & Projects | `ToolsSection.tsx` | Project showcase with live links |
| Contact | `ContactSection.tsx` | Contact form (sends email via `/api/contact`) |

Portfolio section content is now CMS-driven at runtime through backend endpoint `GET /api/portfolio/content` with local defaults in `app/lib/portfolioContent.ts`.

### Blog (`/blog`)
Dynamic blog listing fetched from the Rust backend API. Features:
- Category filtering (Cybersecurity, Linux, Web3, Architecture)
- Pagination
- Masonry grid layout (desktop) / stacked cards (mobile)

### Blog Post (`/blog/[slug]`)
Individual blog post rendered from Markdown content. Features:
- Custom-styled markdown components matching the design system
- Code blocks with terminal-style headers
- Tables, blockquotes, and image support

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) 18+
- [pnpm](https://pnpm.io) (or npm/yarn)
- Backend API running (see `../backend/README.md`)

### Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Start development server
pnpm dev
```

The frontend runs on `http://localhost:3000`. API requests to `/api/blog/*`, `/api/github/*`, `/api/tools/*`, and `/api/health` are automatically proxied to the backend at `http://localhost:3001` via Next.js rewrites. Portfolio content is fetched server-side directly from `BACKEND_URL` / `NEXT_PUBLIC_BACKEND_URL`.

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `GMAIL_USER` | — | Gmail address for contact form SMTP |
| `GMAIL_APP_PASSWORD` | — | Gmail App Password (NOT your login password) |
| `BACKEND_URL` | `http://localhost:3001` | Rust backend API URL |
| `NEXT_PUBLIC_BACKEND_URL` | `http://localhost:3001` | Public fallback URL for server/client contexts |

### Build for Production

```bash
pnpm build
pnpm start
```

## Design System

The **Obsidian Cyber Minimalist** theme is defined in `app/globals.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0d1516` | Page background |
| Primary (Cyber Cyan) | `#00e5ff` | Interactive elements, accents |
| Secondary (Logic Orange) | `#ff571a` | Warnings, secondary actions |
| Tertiary (Success Green) | `#00f13d` | Status indicators |
| Surface | `#192122` | Card backgrounds |
| Border | `#333333` | Structural grid lines |
| Corner Radius | `0px` | Strictly sharp corners (brutalist) |

**Typography:** Dual-font strategy — `Inter` for body text, `Space Grotesk` for mono/UI labels.

## Project Structure

```
pavkhemerak.dev-frontend/
├── app/
│   ├── globals.css          # Design system tokens + utilities
│   ├── layout.tsx           # Root layout (NavBar, Footer, BottomNav)
│   ├── page.tsx             # Home page (all sections)
│   ├── api/
│   │   ├── contact/route.ts # Contact form email handler
│   │   └── ping/route.ts    # Ping utility (Next.js route)
│   ├── blog/
│   │   ├── page.tsx         # Blog listing (fetches from backend)
│   │   └── [slug]/page.tsx  # Blog post detail (markdown rendering)
│   └── lib/
│       ├── portfolioContent.ts # CMS shape + defaults + merge helper
│       └── types.ts            # Shared TypeScript types
├── components/
│   ├── BackgroundProfileSection.tsx
│   ├── BottomNavBar.tsx
│   ├── ContactSection.tsx
│   ├── ExperienceSection.tsx
│   ├── FeaturedDeployments.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── NavBar.tsx
│   ├── PixelatedImage.tsx
│   ├── SkillsSection.tsx
│   └── ToolsSection.tsx
├── public/assets/           # Static images
├── next.config.ts           # API rewrites + image domains
├── package.json
└── tsconfig.json
```

## API Integration

The frontend communicates with two API layers:

1. **Next.js API Routes** (same-origin, serverless):
   - `POST /api/contact` — Send contact form emails via Gmail SMTP
   - `GET /api/ping?host=` — Ping utility

2. **Rust Backend** (proxied via Next.js rewrites):
   - `GET /api/blog/posts` — Blog post listing
   - `GET /api/blog/posts/:slug` — Blog post detail
   - `GET /api/blog/categories` — Category list
   - `GET /api/github/activity` — GitHub activity feed
   - `GET /api/tools/etherscan?address=` — Etherscan bot analyzer
   - `GET /api/health` — Backend health check

## Deployment

Currently deployed on [Vercel](https://vercel.com). For production with the backend:

1. Set `BACKEND_URL` in Vercel environment variables to your API domain
2. Ensure CORS is configured on the backend for your frontend domain
3. Set `GMAIL_USER` and `GMAIL_APP_PASSWORD` in Vercel env vars
