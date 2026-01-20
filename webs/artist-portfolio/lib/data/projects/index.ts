// Projects Index - Combines all category data
// Import individual category files for easier maintenance

import { characterProjects } from "./characters.data";
import { animationProjects } from "./animation.data";
import { conceptArtProjects } from "./concept-art.data";
import { environmentProjects } from "./environment.data";
import { vfxProjects } from "./vfx.data";
import { gameArtProjects } from "./game-art.data";
import { filmProjects } from "./film.data";

// Re-export individual category arrays for direct access
export {
  characterProjects,
  animationProjects,
  conceptArtProjects,
  environmentProjects,
  vfxProjects,
  gameArtProjects,
  filmProjects,
};

// Combined projects array (all categories)
export const projects = [
  ...characterProjects,
  ...animationProjects,
  ...conceptArtProjects,
  ...environmentProjects,
  ...vfxProjects,
  ...gameArtProjects,
  ...filmProjects,
];
