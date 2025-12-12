import { StreamingLinks } from "./music";

export interface AboutSectionBlock {
  id: string;
  heading?: string;
  body: string;
}

export interface AboutContent {
  displayName: string;
  tagline: string;
  portraitImage?: string;
  location?: string;
  genres?: string[];
  influences?: string[];
  biography: AboutSectionBlock[];
  achievements?: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  platform:
    | "instagram"
    | "tiktok"
    | "youtube"
    | "facebook"
    | "x"
    | "threads"
    | "website"
    | "other";
  url: string;
}

export interface SiteLinks {
  social: SocialLink[];
  streaming: StreamingLinks;
}
