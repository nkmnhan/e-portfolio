export interface Site {
  id: string;
  type: "nav" | "play-ground";
  slug?: string;
  href: string;
  label: string;
  navLabel?: string;
}

export const SITES: Site[] = [
  {
    id: "play-ground-skeletons",
    type: "play-ground",
    slug: "skeletons",
    href: "/play-ground/skeletons",
    label: "💀 Skeleton Components",
  },
  {
    id: "play-ground-model-viewer",
    type: "play-ground",
    slug: "model-viewer",
    href: "/play-ground/model-viewer",
    label: "🎨 3D Model Viewer",
  },
  {
    id: "play-ground-brand-gallery",
    type: "play-ground",
    slug: "brand-gallery",
    href: "/play-ground/brand-gallery",
    label: "🏢 Brand Gallery",
  },
  {
    id: "play-ground-galaxy",
    type: "play-ground",
    slug: "galaxy",
    href: "/play-ground/galaxy",
    label: "🌌 Galaxy Animation",
  },
  {
    id: "play-ground-masonry-layout",
    type: "play-ground",
    slug: "masonry-layout",
    href: "/play-ground/masonry-layout",
    label: "📱 Masonry Layout",
  },
  {
    id: "play-ground-snap-edge",
    type: "play-ground",
    slug: "snap-edge",
    href: "/play-ground/snap-edge",
    label: "🚀 Snap Edge Menu",
  },
  { id: "nav-home", type: "nav", href: "/", label: "Home", navLabel: "Menu" },
  {
    id: "nav-work",
    type: "nav",
    href: "/work",
    label: "Work",
    navLabel: "Work",
  },
  {
    id: "nav-clients",
    type: "nav",
    href: "/clients",
    label: "Clients",
    navLabel: "Clients",
  },
  {
    id: "nav-play-ground",
    type: "nav",
    href: "/play-ground",
    label: "Play Ground",
    navLabel: "Play Ground",
  },
  {
    id: "nav-about",
    type: "nav",
    href: "/about",
    label: "About Us",
    navLabel: "About Us",
  },
  {
    id: "nav-contact",
    type: "nav",
    href: "/contact",
    label: "Contact",
    navLabel: "Contact",
  },
];

export const PLAY_GROUND_ITEMS = SITES.filter(site => site.type === "play-ground");
export const NAV_ITEMS = SITES.filter(site => site.type === "nav");