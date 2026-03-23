import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";
import type { SocialLink } from "@/lib/types";

export const socialIcons: Record<SocialLink["platform"], React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  email: FaEnvelope,
};
