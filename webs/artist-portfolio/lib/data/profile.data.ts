// Profile Mock Data
// Edit this file to update your personal information

import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Alex Chen",
  title: "3D Artist & Animator",
  tagline: "Creating characters and worlds that tell stories",
  location: "Los Angeles, CA",
  email: "alex.chen@example.com",
  avatar: "https://i.pravatar.cc/300?u=alex-chen-artist",
  coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1920&h=600&fit=crop",
  shortBio: "Bringing imagination to life through 3D art, animation, and visual storytelling.",
  bio: `I'm a multi-disciplinary artist with 8+ years of experience spanning 3D character art, animation, and concept design. My work has been featured in AAA games, animated films, and award-winning short films.

I specialize in creating believable characters that resonate with audiences, whether they're realistic humans for next-gen games or stylized creatures for animated features. My background in traditional art informs my digital work, bringing a sense of craftsmanship to every project.

Currently available for freelance projects, film collaborations, and studio positions.`,
  specializations: ["3d-artist", "animation-artist", "concept-artist"],
  skills: [
    { name: "ZBrush", category: "3d", level: "expert" },
    { name: "Maya", category: "3d", level: "expert" },
    { name: "Blender", category: "3d", level: "advanced" },
    { name: "Substance Painter", category: "3d", level: "expert" },
    { name: "Marvelous Designer", category: "3d", level: "advanced" },
    { name: "Houdini", category: "animation", level: "intermediate" },
    { name: "After Effects", category: "animation", level: "advanced" },
    { name: "Photoshop", category: "concept", level: "expert" },
    { name: "Procreate", category: "concept", level: "advanced" },
    { name: "Unreal Engine 5", category: "engine", level: "advanced" },
    { name: "Unity", category: "engine", level: "intermediate" },
  ],
  experience: [
    {
      company: "Naughty Dog",
      role: "Senior Character Artist",
      period: "2021 - Present",
      description: "Lead character development for unannounced AAA title. Mentoring junior artists.",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    },
    {
      company: "Blizzard Entertainment",
      role: "3D Character Artist",
      period: "2018 - 2021",
      description: "Created hero characters for Overwatch 2. Collaborated with concept artists.",
    },
    {
      company: "Freelance",
      role: "3D Artist & Animator",
      period: "2016 - 2018",
      description: "Worked with indie studios and advertising agencies on various projects.",
    },
  ],
  education: [
    {
      school: "Gnomon School of VFX",
      degree: "Digital Production Certificate",
      year: "2016",
    },
    {
      school: "Art Center College of Design",
      degree: "BFA Entertainment Design",
      year: "2014",
    },
  ],
  awards: [
    { title: "ArtStation Challenge Winner", category: "Character Design", year: "2023" },
    { title: "CGSociety Choice Award", category: "3D Art", year: "2022" },
    { title: "Rookie Awards Finalist", category: "Game Art", year: "2019" },
  ],
  socialLinks: {
    artstation: "https://artstation.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    instagram: "https://instagram.com/alexchen.art",
    youtube: "https://youtube.com/@alexchenart",
    vimeo: "https://vimeo.com/alexchen",
  },
  availableForWork: true,
};
