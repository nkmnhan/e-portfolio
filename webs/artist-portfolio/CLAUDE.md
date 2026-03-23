# Artist Portfolio

3D/Animation/Concept Art portfolio showcase. Visual-first, dark/cinematic aesthetic — artwork is the hero.

## Port & Identity
- **Port**: 3001
- **Theme**: Dark/cinematic (cyan primary, purple accent, orange highlights)
- **Design**: Minimal UI, high-quality media display, immersive presentation

## Project Categories
`character` | `environment` | `concept-art` | `animation` | `vfx` | `game-art` | `film`

## Data Types
- `Profile` — artist bio, skills, experience, social links
- `Project` — portfolio items with `MediaItem` discriminated union (image, video, carousel, 3d-model, embed, media-carousel)
- `Showreel` — video demo reels with timestamp breakdowns

## Image Placeholders (dev only)
- Artworks: `https://images.unsplash.com/photo-{id}?w={width}&h={height}&fit=crop`
- Avatars: `https://i.pravatar.cc/150?u={seed}`
- General: `https://picsum.photos/{width}/{height}?random={seed}`

## Scripts
```bash
pnpm dev          # Dev server (:3001)
pnpm build        # Production build
pnpm lint         # ESLint
```
