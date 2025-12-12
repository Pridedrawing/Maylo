export type StreamingPlatform =
  | "spotify"
  | "appleMusic"
  | "amazonMusic"
  | "youtubeMusic"
  | "deezer"
  | "tidal";

export interface StreamingLinks {
  [platform: string]: string;
}

export interface Track {
  id: string;
  slug: string;
  title: string;
  albumId: string;
  trackNumber: number;
  durationSeconds?: number;
  audioSrc: string;
  coverImage: string;
  description?: string;
  lyrics?: string;
  credits?: string;
  releaseDate?: string;
  streaming?: StreamingLinks;
}

export interface Album {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  releaseDate?: string;
  coverImage: string;
  heroImage?: string;
  tracks: string[];
  streaming?: StreamingLinks;
  credits?: string;
  genres?: string[];
  moodTags?: string[];
}
