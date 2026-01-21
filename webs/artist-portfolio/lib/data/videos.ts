// Shared video URLs for mockup purposes
// These are sample videos from Google's public test video bucket
// All videos are publicly accessible and valid URLs

export const SAMPLE_VIDEOS = {
  abstract3d: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  nature: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  action: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  cinematic: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  dramatic: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  scifi: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  vfx: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  animation: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  bigBuck: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephantsDream: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  sintel: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  tearsOfSteel: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
} as const;

export type VideoKey = keyof typeof SAMPLE_VIDEOS;

// Valid YouTube embed IDs for testing
export const SAMPLE_YOUTUBE = {
  blender: "YE7VzlLtp-4", // Blender Demo Reel
  agent327: "mN0zPOpADL4", // Blender Open Movie
  springShort: "WhWc3b3KhnY", // Blender Animation Spring
} as const;

// Valid Vimeo embed IDs for testing  
export const SAMPLE_VIMEO = {
  tears: "32001208", // Tears of Steel
  cosmos: "108018156", // Cosmos Laundromat
  glass: "194269988", // Glass Half
} as const;
