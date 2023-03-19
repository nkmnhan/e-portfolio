import GithhubIco from "@/components/icons/github";
import InstagramIco from "@/components/icons/instagram";
import LinkedInIco from "@/components/icons/linkedin";
import { NavigationProps } from "@/components/nav-bar";

export const navigations: NavigationProps[] = [
  { id: "home", name: "Home", href: "/" },
  { id: "about", name: "About", href: "/about" },
  { id: "gallary", name: "Gallary", href: "/gallary" },
  { id: "contact", name: "Contact", href: "/contact" },
];

export const socialContacts: NavigationProps[] = [
  { id: "instagram", name: "Instagram", href: "#", icon: InstagramIco() },
  {
    id: "github",
    name: "Github",
    href: "https://github.com/nkmnhan",
    icon: GithhubIco(),
  },
  { id: "linkedin", name: "LinkedIn", href: "##", icon: LinkedInIco() },
];
