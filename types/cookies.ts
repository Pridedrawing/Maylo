// types/cookies.ts
export type CookieCategory = 'essential' | 'media';

export interface CookiePreferences {
  essential: boolean; // Always true, not changeable
  media: boolean; // YouTube embeds
}

export interface CookieConsent {
  preferences: CookiePreferences;
  timestamp: number;
  hasResponded: boolean;
}
