# Translational Futures Foundation — Portfolio Site

A multi-page nonprofit showcase website built as a **frontend portfolio sample project**. It demonstrates production-quality React architecture, accessible UI, Formspree integration, and a cohesive healthcare design system.

> **Note:** TFF is a fictional organization. Team members, statistics, and contact details are sample content for demonstration purposes.

## Deploy to Vercel

Use these settings when importing from GitHub:

| Setting | Value |
|---------|--------|
| **Framework Preset** | Vite |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

`vercel.json` in the repo configures the above automatically, plus SPA rewrites so routes like `/about` and `/programs/ptsd` work on refresh.

### Environment variables (required for forms)

Add these in **Project → Settings → Environment Variables** for Production, Preview, and Development:

| Name | Value |
|------|--------|
| `VITE_FORMSPREE_CONTACT` | `https://formspree.io/f/xbdvpwkr` |
| `VITE_FORMSPREE_DONATE` | `https://formspree.io/f/mrewojkn` |
| `VITE_FORMSPREE_NEWSLETTER` | `https://formspree.io/f/mvzjvlrn` |

Redeploy after adding env vars so the build picks them up.

## Live Demo

Deploy to [Vercel](https://vercel.com) and add your URL here.

## Screenshots

Add screenshots of:
- Home (hero + programs preview)
- Program detail page (`/programs/ptsd`)
- Donate page (`/donate`)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 + SWC |
| Routing | React Router 6 (multi-page) |
| Styling | Tailwind CSS + shadcn/ui |
| Forms | react-hook-form + Zod + Formspree |
| Charts | Recharts (Impact page) |
| Icons | Lucide React |

## Architecture

```
src/
├── data/           # Centralized content (programs, team, publications, FAQ)
├── layouts/        # MainLayout (Header + Outlet + Footer)
├── pages/          # 11 routes (Home, About, Programs, …)
├── components/
│   ├── sections/   # Reusable home page blocks
│   ├── forms/      # Contact, Donate, Newsletter (Formspree)
│   └── ui/         # shadcn primitives + PageHeader, Breadcrumbs
├── lib/            # scroll.ts, seo.ts
└── hooks/          # useFadeInOnScroll
```

**Key design decisions:**
- **Data layer** — All copy lives in typed `src/data/*.ts` files; pages consume shared data (single source of truth).
- **Formspree** — Serverless form handling without a custom backend.
- **Healthcare palette** — Deep navy primary (`hsl(220 45% 15%)`) for trust and credibility.
- **Accessibility** — Skip link, `aria-live` chat, labeled forms, `prefers-reduced-motion`, jsx-a11y linting.

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment template and add Formspree endpoints
cp .env.example .env

# Start dev server (http://localhost:8080)
npm run dev
```

### Formspree Setup

1. Create a free account at [formspree.io](https://formspree.io)
2. Create three forms: Contact, Donate, Newsletter
3. Add endpoint URLs to `.env`:

```env
VITE_FORMSPREE_CONTACT=https://formspree.io/f/your-contact-id
VITE_FORMSPREE_DONATE=https://formspree.io/f/your-donate-id
VITE_FORMSPREE_NEWSLETTER=https://formspree.io/f/your-newsletter-id
```

Without these env vars, forms show a helpful error toast instead of failing silently.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint (includes jsx-a11y) |
| `npm run typecheck` | TypeScript check |

## Routes

| Path | Page |
|------|------|
| `/` | Home (cinematic hub) |
| `/about` | Mission, timeline, values |
| `/programs` | Program listing |
| `/programs/:slug` | Program detail (ptsd, chronic-pain, tbi, substance-abuse) |
| `/team` | Staff + advisory board |
| `/impact` | Stats, testimonials, chart |
| `/research` | Filterable publications |
| `/resources` | FAQ, crisis links, downloads |
| `/donate` | Donation tiers + pledge form |
| `/contact` | Contact form + map |
| `/privacy` | Privacy policy |

## Image Attribution

Stock photos from [Unsplash](https://unsplash.com):
- Hero: neuroscience/medical imagery
- Mission: brain scan research
- Team: professional collaboration
- Impact: supportive care

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | ≥ 85 (mobile) |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |

Run: `npx lighthouse http://localhost:4173 --view` after `npm run build && npm run preview`

## CI

GitHub Actions runs `typecheck`, `lint`, and `build` on push/PR to `main`.

## License

Sample project for portfolio demonstration. Not affiliated with any real organization.
