// Shared video URLs for mockup purposes
// These are sample videos from Google's public test video bucket

export const SAMPLE_VIDEOS = {
  abstract3d: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  nature: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  action: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  cinematic: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  dramatic: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  scifi: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  vfx: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  animation: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
} as const;

export type VideoKey = keyof typeof SAMPLE_VIDEOS;
