import {
  FaHome,
  FaBriefcase,
  FaUsers,
  FaPuzzlePiece,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import { textWhite, textPrimary } from "../themes/default-text";
import { clsxMerge } from "../themes/utils";

export interface Site {
  id: string;
  type: "nav" | "playground";
  slug?: string;
  href: string;
  label: string;
  navLabel?: string;
  imageUrl?: string;
}

export const PLAY_GROUND_ITEMS: Site[] = [
  {
    id: "playground-skeletons",
    type: "playground",
    slug: "skeletons",
    href: "/playground/skeletons",
    label: "Skeleton Components",
    imageUrl: "/playground-skeletons.svg",
  },
  {
    id: "playground-model-viewer",
    type: "playground",
    slug: "model-viewer",
    href: "/playground/model-viewer",
    label: "3D Model Viewer",
    imageUrl: "/playground-model-viewer.svg",
  },
  {
    id: "playground-brand-gallery",
    type: "playground",
    slug: "brand-gallery",
    href: "/playground/brand-gallery",
    label: "Brand Gallery",
    imageUrl: "/playground-brand-gallery.svg",
  },
  {
    id: "playground-galaxy",
    type: "playground",
    slug: "galaxy",
    href: "/playground/galaxy",
    label: "Galaxy Animation",
    imageUrl: "/playground-galaxy.svg",
  },
  {
    id: "playground-masonry-layout",
    type: "playground",
    slug: "masonry-layout",
    href: "/playground/masonry-layout",
    label: "Masonry Layout",
    imageUrl: "/playground-masonry-layout.svg",
  },
  {
    id: "playground-snap-edge",
    type: "playground",
    slug: "snap-edge",
    href: "/playground/snap-edge",
    label: "Snap Edge Menu",
    imageUrl: "/playground-snap-edge.svg",
  },
];

export const NAV_ITEMS: Site[] = [
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
    id: "nav-playground",
    type: "nav",
    href: "/playground",
    label: "Playground",
    navLabel: "Playground",
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

export const getIconClass = (isOpen: boolean, path: string | undefined): string => {
  switch (path) {
    case "/":
    case "/clients":
    case "/playground/galaxy":
      return clsxMerge("text-lg font-bold", textWhite);
    case "/contact":
      return isOpen
        ? clsxMerge("text-lg font-bold", textWhite)
        : clsxMerge("text-lg font-bold", textPrimary);
    default:
      return isOpen
        ? clsxMerge("text-lg font-bold", textWhite)
        : clsxMerge("text-lg font-bold", textPrimary, "dark:text-white");
  }
};

export function NavIcon({
  className,
  path,
}: {
  className: string;
  path: string;
}): React.ReactNode {
  switch (path) {
    case "/":
      return <FaHome className={className} />;
    case "/work":
      return <FaBriefcase className={className} />;
    case "/clients":
      return <FaUsers className={className} />;
    case "/playground":
      return <FaPuzzlePiece className={className} />;
    case "/about":
      return <FaInfoCircle className={className} />;
    case "/contact":
      return <FaEnvelope className={className} />;
    default:
      return path && path.startsWith("/playground") ? (
        <FaPuzzlePiece className={className} />
      ) : null;
  }
}
