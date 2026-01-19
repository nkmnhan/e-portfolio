# Artist Portfolio

Portfolio platform for **3D Artists**, **Animation Artists**, and **Concept Artists**.

## Features

- **Dark Cinematic Theme** - Artwork pops against dark backgrounds
- **Server Components** - Fast, SEO-friendly rendering
- **Responsive Design** - Mobile-first, tablet-friendly
- **External Placeholders** - Unsplash/Pravatar images for development

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, featured artworks, artists, showreels |
| Artists | `/artists` | Artist directory by specialization |
| Artist Profile | `/artists/[slug]` | Individual artist with portfolio |
| Gallery | `/gallery` | All artworks by category |
| Showreels | `/showreels` | Video demo reels |

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server (port 3001)
pnpm dev

# Build for production
pnpm build
```

## Tech Stack

- Next.js 16+ (App Router)
- TypeScript
- Tailwind CSS v4
- Flowbite-React
- React Icons

## Project Structure

```
app/
├── components/
│   ├── artwork/       # ArtworkCard, ArtworkGrid
│   ├── artist/        # ArtistCard
│   ├── nav/           # Header, Footer
│   └── ui/            # Hero, SectionHeader, ShowreelCard
├── artists/
│   ├── page.tsx       # Artists listing
│   └── [slug]/
│       └── page.tsx   # Artist profile
├── gallery/
│   └── page.tsx       # Artwork gallery
├── showreels/
│   └── page.tsx       # Video reels
├── layout.tsx         # Root layout
├── page.tsx           # Home page
└── globals.css        # Dark theme tokens

lib/
├── data.ts            # Mock data & types
└── utils.ts           # Utility functions
```

## Mock Data

The project includes mock data with external placeholder images:

- **5 Artists** - 3D artists, animators, concept artists
- **10 Artworks** - Characters, environments, VFX
- **3 Showreels** - Animation and VFX demo reels

Images are loaded from:
- Unsplash (artworks, covers)
- Pravatar (avatars)

## Design Tokens

Dark cinematic theme with CSS custom properties:

```css
--color-bg: #0a0a0b;
--color-surface: #1c1c1f;
--color-primary: #06b6d4;  /* Cyan */
--color-accent: #a855f7;   /* Purple */
```

## Development Notes

- **NO "use client"** - All components are Server Components
- **Port 3001** - Runs alongside portfolio-nextjs (3000)
- **Mobile-first** - Design for mobile, scale up

## License

MIT
