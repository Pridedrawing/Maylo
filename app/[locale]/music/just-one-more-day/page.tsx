// app/music/just-one-more-day/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from 'next-intl';
import { albums, tracks } from "@/data/siteData";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { getLocalizedString } from "@/lib/i18n-helpers";

export default function JustOneMoreDayAlbumPage() {
  const locale = useLocale();
  const t = useTranslations('home.trackJourney');
  // Album is identified by slug in the URL
  const bySlug = albums.find((a) => a.slug === "just-one-more-day");
  // Fallback to first album to avoid "Album not found" situations
  const album = bySlug ?? albums[0];

  // Album ID is "for-maylo" in siteData.ts, all tracks use albumId: "for-maylo"
  const albumTracks = tracks.filter((t) => t.albumId === album.id);

  const albumTitle = getLocalizedString(album.title, locale);
  const albumSubtitle = getLocalizedString(album.subtitle || '', locale);
  const albumDescription = getLocalizedString(album.description || '', locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={album.coverImage}
            alt={albumTitle}
            fill
            className="object-cover"
            sizes="256px"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-semibold">{albumTitle}</h1>
          {albumSubtitle && (
            <p className="text-neutral-300">{albumSubtitle}</p>
          )}
          {albumDescription && (
            <p className="text-sm text-neutral-200">{albumDescription}</p>
          )}

          <Link href="/music" className="mt-4 inline-block text-sm underline">
            ← Back to all music
          </Link>
        </div>
      </div>

      <h2 className="mt-10 mb-8 text-xl font-semibold">Tracks</h2>

      <div className="space-y-6">
        {albumTracks.map((track, index) => {
          const trackDescription = getLocalizedString(track.description || '', locale);
          return (
            <div key={track.id} className="space-y-4">
              <article className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
                {/* Left: meta + player */}
                <div className="flex flex-col justify-between border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                        {t('track')} {String(track.trackNumber).padStart(2, "0")}
                      </p>
                      <Link
                        href={`/${locale}/tracks/${track.slug}`}
                        className="mt-1 inline-block text-sm font-semibold hover:underline"
                      >
                        {track.title}
                      </Link>
                    </div>
                    <AudioPlayer src={track.audioSrc} />
                  </div>
                </div>

                {/* Right: cover + description */}
                <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
                  <div className="relative h-full aspect-square min-h-[120px] overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={track.coverImage}
                      alt={track.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-sm text-neutral-300 line-clamp-6">
                      {trackDescription || "Track description coming soon..."}
                    </p>
                    <Link
                      href={`/${locale}/tracks/${track.slug}`}
                      className="mt-2 inline-flex self-end text-[11px] text-neutral-300 underline"
                    >
                      {t('readMore')}
                    </Link>
                  </div>
                </div>
              </article>
              {index < albumTracks.length - 1 && (
                <div className="flex justify-center">
                  <div className="h-6 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
