// lib/og-image.ts

// Link previews (WhatsApp, Facebook, X) use small 1200×630 JPEGs from
// /public/og instead of the multi-megabyte cover PNGs, which WhatsApp
// tends to skip. Maylo covers map /covers/X.jpg -> /og/X.jpg, the Horst Schnell
// covers /covers/vater/X.png -> /og/vater/X.jpg. Regenerate with ffmpeg when a cover changes.

const BASE = "https://mylon-grey.com";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/** "/covers/vater/09-ewiges-licht.png" → "https://mylon-grey.com/og/vater/09-ewiges-licht.jpg" */
export function ogImageForCover(coverImage: string): string {
  const path = coverImage.replace(/^\/covers\//, "/og/").replace(/\.png$/i, ".jpg");
  return BASE + path;
}

export function ogImageEntry(coverImage: string, alt: string) {
  return { url: ogImageForCover(coverImage), width: OG_WIDTH, height: OG_HEIGHT, alt };
}
