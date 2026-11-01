# Artist Portfolio

Portfolio for **3D Artists**, **Animation Artists**, and **Concept Artists**.

## Features

- **Dark Cinematic Theme** - `artist-dark` theme from `@eportfolio/theme`, switchable at runtime
- **Server Components first** - Client islands only for media players, filters and forms
- **Rich media** - Images, video, carousels, embedded 3D models (Sketchfab) and YouTube/Vimeo
- **Responsive Design** - Mobile-first, tablet-friendly
- **External Placeholders** - Unsplash/Pravatar/Picsum images for development

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, featured projects, showreels |
| About | `/about` | Bio, skills, experience |
| Projects | `/projects` | All projects, filterable by category |
| Project | `/projects/[slug]` | Project detail with media and prev/next navigation |
| Showreels | `/showreels` | Video demo reels |
| Showreel | `/showreels/[id]` | Reel with timestamped breakdown |
| Contact | `/contact` | Contact form and social links |

## Quick Start

```bash
# From the repo root
pnpm install
pnpm dev:artist    # http://localhost:3001

# Production build
pnpm --filter artist-portfolio build
```

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 + `@eportfolio/theme` tokens
- React Three Fiber / drei
- React Icons

## Project Structure

```
app/
├── components/
│   ├── media/         # Media renderers (image, video, carousel, 3D, embeds) + hooks
│   ├── nav/           # Header, Footer
│   └── ui/            # Hero, Card, form controls, filters, ShowreelCard
├── about/
├── contact/
├── projects/[slug]/
├── showreels/[id]/
├── layout.tsx
├── page.tsx
└── globals.css

lib/
├── data/              # Mock data (profile, projects by category, showreels)
├── services/          # Data access layer (swap for an API later)
└── types/             # Profile, Project, Showreel types
```

## Project Categories

`character` | `environment` | `concept-art` | `animation` | `vfx` | `game-art` | `film`

## License

MIT
