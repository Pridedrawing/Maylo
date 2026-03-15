// app/[locale]/horst-schnell/tracks/[slug]/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { horstSchnellTracks, horstSchnellAlbums } from "@/data/horstSchnellData";
import { useArtworkPalette } from "@/components/theme/useArtworkPalette";
import { getLocalizedString } from "@/lib/i18n-helpers";

const BG = "#1C1209";

export default function HorstSchnellTrackPage() {
  const params = useParams<{ slug?: string }>();
  const router = useRouter();
  const t = useTranslations("horstSchnell.track");
  const locale = useLocale();

  const slugParam = params?.slug;
  const slug =
    typeof slugParam === "string"
      ? slugParam
      : Array.isArray(slugParam)
      ? slugParam[0]
      : "";

  const track = horstSchnellTracks.find((tr) => tr.slug === slug);
  const album = track
    ? horstSchnellAlbums.find((a) => a.id === track.albumId)
    : undefined;

  const trackDescription = track
    ? getLocalizedString(track.description || "", locale)
    : "";

  if (!track) {
    return (
      <div
        className="min-h-screen p-8 text-white"
        style={{ backgroundColor: BG }}
      >
        <h1 className="text-xl mb-4">Track not found: {slug}</h1>
        <Link href={`/${locale}/horst-schnell/music`} className="text-amber-500 underline">
          Back to music
        </Link>
      </div>
    );
  }

  useArtworkPalette(track.coverImage);

  const orderedTracks = useMemo(
    () => horstSchnellTracks.filter((tr) => tr.albumId === track.albumId),
    [track.albumId]
  );
  const index = orderedTracks.findIndex((tr) => tr.id === track.id);
  const prevTrack = index > 0 ? orderedTracks[index - 1] : undefined;
  const nextTrack =
    index >= 0 && index < orderedTracks.length - 1
      ? orderedTracks[index + 1]
      : undefined;

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    router.push(`/${locale}/horst-schnell/tracks/${targetSlug}`);
  };

  return (
    <div
      className="min-h-screen px-4 py-10 md:px-6 md:py-16 text-white"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto max-w-6xl">
        <Link
          href={`/${locale}/horst-schnell/music`}
          className="mb-4 inline-flex rounded-full border border-amber-900/50 px-5 py-2 text-sm text-amber-400 hover:bg-amber-900/20"
        >
          {t("backToMusic")}
        </Link>

        {/* Track header */}
        <div className="mb-8 space-y-3">
          <h1 className="text-2xl font-semibold text-amber-50">{track.title}</h1>
          {album && (
            <span className="inline-flex rounded-full border border-amber-900/40 px-4 py-1 text-sm text-amber-600">
              {t("fromAlbum")} Lieder eines Lebens
            </span>
          )}
        </div>

        {/* Main layout */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Left: Cover + Player + Description + Lyrics */}
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              {/* Cover */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-amber-900/30">
                <Image
                  src={track.coverImage}
                  alt={track.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Audio player */}
              <audio ref={audioRef} src={track.audioSrc} preload="none" />

              {/* Progress bar */}
              <div className="w-full space-y-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-amber-900/40 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber-400 [&::-moz-range-thumb]:border-0"
                />
                <div className="flex justify-between text-xs text-amber-700">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button
                  type="button"
                  onClick={() => goToTrack(prevTrack?.slug)}
                  disabled={!prevTrack}
                  aria-label={t("previous")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-900/50 bg-amber-950/40 text-lg text-amber-300 disabled:opacity-30"
                >
                  «
                </button>

                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? t("pause") : t("play")}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-600/60 bg-amber-500 text-lg text-black"
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>

                <button
                  type="button"
                  onClick={() => goToTrack(nextTrack?.slug)}
                  disabled={!nextTrack}
                  aria-label={t("next")}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-900/50 bg-amber-950/40 text-lg text-amber-300 disabled:opacity-30"
                >
                  »
                </button>
              </div>

              <p className="text-xs text-amber-700">
                {t("trackOf", { current: index + 1, total: orderedTracks.length })}
              </p>
            </div>

            {/* Description */}
            {trackDescription && (
              <p className="pl-5 text-lg leading-relaxed text-amber-200/80 font-lora">
                {trackDescription}
              </p>
            )}

            {/* Lyrics */}
            {track.lyrics && (
              <article className="rounded-2xl border border-amber-900/20 bg-amber-950/10 p-5">
                <h2 className="mb-4 text-xl font-semibold tracking-tight text-amber-50">
                  {t("lyrics")}
                </h2>
                <div className="whitespace-pre-wrap text-sm leading-relaxed text-amber-200/70">
                  {track.lyrics}
                </div>
              </article>
            )}
          </div>

          {/* Right: Songs in album */}
          <div>
            <aside className="space-y-4 rounded-3xl border border-amber-900/20 bg-black/40 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                {t("songsInJourney")}
              </h3>
              <p className="text-xs text-amber-800">
                {t("songsInJourneyDesc")}
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {orderedTracks.map((trackItem) => (
                  <Link
                    key={trackItem.id}
                    href={`/${locale}/horst-schnell/tracks/${trackItem.slug}`}
                    className="group relative aspect-square overflow-hidden rounded-xl border border-amber-900/20"
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
      </div>
    </div>
  );
}
