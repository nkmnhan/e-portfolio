import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

export const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  email: FaEnvelope,
};
