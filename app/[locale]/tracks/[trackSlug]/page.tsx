// app/[locale]/tracks/[trackSlug]/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations, useLocale } from 'next-intl';
import Image from "next/image";
import Link from "next/link";

import { tracks, albums } from "@/data/siteData";
import { StreamingLinks } from "@/components/common/StreamingLinks";
import { useArtworkPalette } from "@/components/theme/useArtworkPalette";
import { getLocalizedString } from "@/lib/i18n-helpers";

export default function TrackPage() {
  const params = useParams<{ trackSlug?: string; locale?: string }>();
  const router = useRouter();
  const t = useTranslations('track');
  const locale = useLocale();

  const slugParam = params?.trackSlug;
  const slug =
    typeof slugParam === "string"
      ? slugParam
      : Array.isArray(slugParam)
      ? slugParam[0]
      : "";

  const track = tracks.find((t) => t.slug === slug);
  const album = track
    ? albums.find((a) => a.id === track.albumId)
    : undefined;

  const trackDescription = track ? getLocalizedString(track.description || '', locale) : '';
  const albumTitle = album ? getLocalizedString(album.title, locale) : '';

  // If slug is wrong, show debug info
  if (!track) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#050509",
          color: "white",
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Track not found
        </h1>
        <p style={{ marginBottom: "0.5rem" }}>
          Requested slug:{" "}
          <strong>{slug || "(empty string / undefined)"}</strong>
        </p>
        <p>Available track slugs:</p>
        <ul style={{ marginTop: "0.5rem" }}>
          {tracks.map((t) => (
            <li key={t.slug}>{t.slug}</li>
          ))}
        </ul>
      </div>
    );
  }

  // ⬇️ This line makes the theme follow the cover artwork
  useArtworkPalette(track.coverImage);

  // Ordered list of tracks in the same album (uses order from siteData.ts)
  const orderedTracks = useMemo(
    () => tracks.filter((t) => t.albumId === track.albumId),
    [track.albumId]
  );
  const index = orderedTracks.findIndex((t) => t.id === track.id);
  const prevTrack = index > 0 ? orderedTracks[index - 1] : undefined;
  const nextTrack =
    index >= 0 && index < orderedTracks.length - 1
      ? orderedTracks[index + 1]
      : undefined;

  // Local player for this page
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Reset audio when slug changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);

    const handleEnded = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [slug]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const goToTrack = (targetSlug: string | undefined) => {
    if (!targetSlug) return;
    router.push(`/${locale}/tracks/${targetSlug}`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16 text-white">
      <Link href={`/${locale}/music`} className="mb-4 inline-flex rounded-full border border-white/40 px-5 py-2 text-sm">
        {t('backToMusic')}
      </Link>

      {/* Track Info at top */}
      <div className="mb-8 space-y-3">
        <h1 className="text-2xl font-semibold">{track.title}</h1>

        {album && (
          <Link
            href={`/${locale}/music/just-one-more-day`}
            className="inline-flex rounded-full border border-white/40 px-5 py-2 text-sm"
          >
            {t('fromAlbum')} {albumTitle}
          </Link>
        )}

        {track.streaming && (
          <div className="pt-2">
            <StreamingLinks links={track.streaming} />
          </div>
        )}
      </div>

      {/* Lyrics and Songs section */}
      {track.lyrics && (
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Left column: Cover + Player + Lyrics */}
          <div className="space-y-6">
            {/* Cover and Player */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={track.coverImage}
                  alt={track.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Player controls */}
              <audio ref={audioRef} src={track.audioSrc} preload="none" />
              
              {/* Progress bar */}
              <div className="w-full space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0"
                />
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => goToTrack(prevTrack?.slug)}
                  disabled={!prevTrack}
                  aria-label={t('previous')}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white disabled:opacity-30"
                >
                  «
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? t('pause') : t('play')}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white text-lg text-black"
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>

                <button
                  type="button"
                  onClick={() => goToTrack(nextTrack?.slug)}
                  disabled={!nextTrack}
                  aria-label={t('next')}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-lg text-white disabled:opacity-30"
                >
                  »
                </button>
              </div>

              <p className="text-xs text-neutral-300">
                {t('trackOf', { current: index + 1, total: orderedTracks.length })}
              </p>
            </div>

            {/* Description */}
            {trackDescription && (
              <p className="pl-5 text-sm text-neutral-300">{trackDescription}</p>
            )}

            {/* Lyrics */}
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h2 className="text-xl font-semibold tracking-tight">
                {t('lyrics')}
              </h2>
              <div className="whitespace-pre-wrap text-sm leading-relaxed text-neutral-200">
                {track.lyrics}
              </div>
            </article>
          </div>

          {/* Right column: Songs in this journey */}
          <div>
            {/* Track thumbnail navigator */}
            <aside className="space-y-4 rounded-3xl border border-white/5 bg-black/40 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                {t('songsInJourney')}
              </h3>
              <p className="text-xs text-neutral-400">
                {t('songsInJourneyDesc')}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {orderedTracks.map((trackItem) => (
                  <Link
                    key={trackItem.id}
                    href={`/${locale}/tracks/${trackItem.slug}`}
                    className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={trackItem.coverImage}
                      alt={trackItem.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="120px"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute inset-x-2 bottom-2 line-clamp-2 text-[10px] font-medium text-neutral-50 drop-shadow">
                      {trackItem.title}
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}
