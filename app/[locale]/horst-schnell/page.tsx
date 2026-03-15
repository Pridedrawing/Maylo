// app/[locale]/horst-schnell/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { horstSchnellAlbums, horstSchnellTracks } from "@/data/horstSchnellData";
import { tracks as mayloTracks } from "@/data/siteData";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { useArtworkPalette } from "@/components/theme/useArtworkPalette";
import { getLocalizedString } from "@/lib/i18n-helpers";

const BG = "#1C1209";

export default function HorstSchnellPage() {
  const t = useTranslations("horstSchnell.home");
  const locale = useLocale();
  const album = horstSchnellAlbums[0];
  const albumTracks = horstSchnellTracks.filter((tr) => tr.albumId === album.id);

  const [showAll, setShowAll] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const tracksToShow = showAll ? albumTracks : albumTracks.slice(0, 8);

  useArtworkPalette(album.coverImage);

  return (
    <div style={{ backgroundColor: BG }}>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-amber-900/20">
        <div className="absolute inset-0">
          <Image
            src={album.coverImage}
            alt="Lieder eines Lebens"
            fill
            className="object-cover blur-md scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-[#1C1209]" />
        </div>

        <div className="relative mx-auto flex min-h-[55vh] max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:px-6 md:py-16">
          {/* Left: text */}
          <div className="max-w-xl space-y-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-amber-500">
              {t("hero.label")}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-amber-50 md:text-4xl">
              {t("hero.title")}
            </h1>
            <p className="text-sm leading-relaxed text-amber-100/80">
              {t("hero.tagline")}
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href={`/${locale}/horst-schnell/tracks/der-weg-durch-die-zeiten`}
                className="rounded-full bg-amber-500 px-5 py-2 text-black font-medium"
              >
                {t("hero.listenCTA")}
              </Link>
              <Link
                href={`/${locale}/horst-schnell/music`}
                className="rounded-full border border-amber-700/50 px-5 py-2 text-amber-200"
              >
                {t("hero.exploreAllSongs")}
              </Link>
            </div>
          </div>

          {/* Right: album cover */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border border-amber-900/40 shadow-[0_0_60px_rgba(180,100,0,0.2)]">
              <Image
                src={album.coverImage}
                alt="Lieder eines Lebens"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-3xl border border-amber-900/30 bg-amber-950/20 p-8 md:p-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-amber-50">
            {t("about.title")}
          </h2>
          <p className="text-sm leading-relaxed text-amber-100/80">
            {t("about.description")}
          </p>
        </div>
      </section>

      {/* ALL SONGS GRID + TRACK JOURNEY */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:px-6 md:py-0">
        {/* Track journey */}
        <div className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight text-amber-50">
              {t("trackJourney.title")}
            </h2>
            <Link
              href={`/${locale}/horst-schnell/music`}
              className="text-xs text-amber-600 underline"
            >
              {t("trackJourney.viewFullTrackList")}
            </Link>
          </div>

          <div className="space-y-6">
            {tracksToShow.map((track, index) => {
              const desc = getLocalizedString(track.description || "", locale);
              const isLastVisible = !showAll && index === 7;
              return (
                <div key={track.id} className="space-y-4">
                  <article className="grid gap-4 rounded-2xl border border-amber-900/20 bg-amber-950/10 p-5 backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
                    <div className="flex flex-col justify-between border-b border-amber-900/20 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                      <div className="space-y-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-amber-700">
                            {t("trackJourney.track")} {String(track.trackNumber).padStart(2, "0")}
                          </p>
                          <Link
                            href={`/${locale}/horst-schnell/tracks/${track.slug}`}
                            className="mt-1 inline-block text-sm font-semibold text-amber-100 hover:underline"
                          >
                            {track.title}
                          </Link>
                        </div>
                        <AudioPlayer
                          src={track.audioSrc}
                          autoPlay={autoPlayNext && index === 8}
                          onEnded={isLastVisible ? () => { setShowAll(true); setAutoPlayNext(true); } : undefined}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)]">
                      <div className="relative h-full aspect-square min-h-[120px] overflow-hidden rounded-2xl border border-amber-900/20">
                        <Image
                          src={track.coverImage}
                          alt={track.title}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <p className="text-sm text-amber-200/70 line-clamp-6 font-lora">
                          {desc}
                        </p>
                        <Link
                          href={`/${locale}/horst-schnell/tracks/${track.slug}`}
                          className="mt-2 inline-flex self-end text-[11px] text-amber-600 underline"
                        >
                          {t("trackJourney.readMore")}
                        </Link>
                      </div>
                    </div>
                  </article>
                  {index < tracksToShow.length - 1 && (
                    <div className="flex justify-center">
                      <div className="h-6 w-0.5 bg-gradient-to-b from-amber-900/40 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showAll && albumTracks.length > 8 && (
            <div className="flex justify-center pt-4">
              <button
                onClick={() => setShowAll(true)}
                className="rounded-full border border-amber-700/50 px-6 py-2 text-sm text-amber-400 hover:bg-amber-900/20"
              >
                {t("trackJourney.viewFullTrackList")} ({albumTracks.length - 8} more)
              </button>
            </div>
          )}
        </div>

        {/* All songs grid */}
        <div className="space-y-4">
          <aside className="space-y-4 rounded-3xl border border-amber-900/20 bg-black/40 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              {t("allSongs.title")}
            </h3>
            <p className="text-xs text-amber-800">
              {t("allSongs.description")}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {albumTracks.map((track) => (
                <Link
                  key={track.id}
                  href={`/${locale}/horst-schnell/tracks/${track.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-amber-900/20"
                >
                  <Image
                    src={track.coverImage}
                    alt={track.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-x-2 bottom-2 line-clamp-2 text-[10px] font-medium text-neutral-50 drop-shadow">
                    {track.title}
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          <aside className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-4">
            <Link href={`/${locale}/maylo`} className="block">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-400 hover:text-neutral-200">
                Just One More Day
              </h3>
            </Link>
            <p className="text-xs text-neutral-600">Mylon Grey</p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {mayloTracks.map((track) => (
                <Link
                  key={track.id}
                  href={`/${locale}/tracks/${track.slug}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
                >
                  <Image
                    src={track.coverImage}
                    alt={track.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-x-2 bottom-2 line-clamp-2 text-[10px] font-medium text-neutral-50 drop-shadow">
                    {track.title}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="pb-16" />
    </div>
  );
}
