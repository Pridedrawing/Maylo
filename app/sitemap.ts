import type { MetadataRoute } from "next";
import { tracks } from "@/data/siteData";
import { horstSchnellTracks } from "@/data/horstSchnellData";

const BASE = "https://mylon-grey.com";
const locales = ["en", "de"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Portal
    entries.push({ url: `${BASE}/${locale}`, lastModified, priority: 1.0 });

    // Maylo section homepages
    entries.push({ url: `${BASE}/${locale}/maylo`, lastModified, priority: 0.9 });

    // Horst Schnell section homepage
    entries.push({ url: `${BASE}/${locale}/horst-schnell`, lastModified, priority: 0.9 });

    // Other pages
    entries.push({ url: `${BASE}/${locale}/music`, lastModified, priority: 0.7 });
    entries.push({ url: `${BASE}/${locale}/about`, lastModified, priority: 0.7 });
    entries.push({ url: `${BASE}/${locale}/horst-schnell/music`, lastModified, priority: 0.7 });
    entries.push({ url: `${BASE}/${locale}/horst-schnell/about`, lastModified, priority: 0.7 });
    entries.push({ url: `${BASE}/${locale}/horst-schnell/impressum`, lastModified, priority: 0.7 });

    // Maylo track pages
    for (const track of tracks) {
      entries.push({
        url: `${BASE}/${locale}/tracks/${track.slug}`,
        lastModified,
        priority: 0.8,
      });
    }

    // Horst Schnell track pages
    for (const track of horstSchnellTracks) {
      entries.push({
        url: `${BASE}/${locale}/horst-schnell/tracks/${track.slug}`,
        lastModified,
        priority: 0.8,
      });
    }
  }

  return entries;
}
