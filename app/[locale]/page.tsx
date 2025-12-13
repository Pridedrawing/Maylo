// app/[locale]/page.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from 'next-intl';
import { albums, tracks, siteLinks, aboutContent } from "@/data/siteData";
import { StreamingLinks } from "@/components/common/StreamingLinks";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { useArtworkPalette } from "@/components/theme/useArtworkPalette";
import { useCookieConsent } from "@/components/common/CookieContext";
import { getLocalizedString } from "@/lib/i18n-helpers";

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  const { preferences } = useCookieConsent();
  const album = albums[0];
  const albumTracks = tracks.filter((t) => t.albumId === album.id);
  const allTracks = tracks;

  // Apply dynamic theme based on album cover
  useArtworkPalette(album.coverImage);

  const albumTitle = getLocalizedString(album.title, locale);
  const albumSubtitle = getLocalizedString(album.subtitle || '', locale);
  const albumDescription = getLocalizedString(album.description || '', locale);

  return (
    <div>
      {/* HERO SECTION - Dark background */}
      <div className="bg-neutral-950" style={{ backgroundColor: "#1E261D" }}>
        {/* HERO / BANNER */}
        <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0">
          <Image
            src={album.coverImage}
            alt={albumTitle}
            fill
            className="object-cover blur-md scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-neutral-950" />
        </div>

        <div className="relative mx-auto flex min-h-[55vh] max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:px-6 md:py-16">
          {/* Left: text focus */}
          <div className="max-w-xl space-y-5">
            <p className="text-[11px] uppercase tracking-[0.25em] text-neutral-300">
              {t('hero.officialWebsite')}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {aboutContent.displayName}
            </h1>
            <p className="text-sm text-neutral-200">
              {aboutContent.tagline}{" "}
              {t('hero.subtitle')}{" "}
              <span className="font-medium italic">{albumTitle}</span>.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href={`/${locale}/tracks/just-one-more-day`}
                className="rounded-full bg-white px-5 py-2 text-black"
              >
                {t('hero.listenCTA')}
              </Link>

              <Link
                href={`/${locale}/music`}
                className="rounded-full border border-white/40 px-5 py-2"
              >
                {t('hero.exploreAllSongs')}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="rounded-full border border-white/20 px-4 py-2 text-xs"
              >
                {t('hero.readTheStory')}
              </Link>
            </div>

            <div className="mt-4 text-xs text-neutral-300">
              <p className="mb-2">{t('hero.listenOn')}</p>
              <StreamingLinks links={siteLinks.streaming} size="sm" />
            </div>

            <Link
              href="https://mylongrey.bandcamp.com/album/just-one-more-day"
              target="_blank"
              className="mt-4 inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-[11px] text-neutral-200 hover:bg-white/10"
            >
              {t('hero.donation')}
            </Link>
          </div>

          {/* Right: YouTube video */}
          <div className="max-w-3xl flex-1">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_0_40px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="relative aspect-video w-full">
                {preferences.media ? (
                  <iframe
                    src="https://www.youtube.com/embed/3ZGOyzRZ-BM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-black p-6 text-center">
                    <div className="mb-4 text-4xl">🎬</div>
                    <p className="mb-4 text-sm font-medium text-neutral-200">
                      {t('hero.videoBlocked')}
                    </p>
                    <p className="mb-4 text-xs text-neutral-400">
                      {t('hero.videoBlockedDesc')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* LOWER SECTIONS - Theme background */}
      <div className="text-neutral-50" style={{ backgroundColor: "#1E261D" }}>
        {/* DONATION SECTION */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-900/30 to-amber-900/10 p-8 md:p-12">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-amber-50">
            {t('donation.title')}
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-amber-100">
            {t('donation.description')}
          </p>
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-amber-50">{t('donation.supportThroughMusic')}</h3>
              <p className="mb-3 text-xs text-amber-200">
                {t('donation.supportThroughMusicDesc')}
              </p>
              <Link
                href="https://mylongrey.bandcamp.com/album/just-one-more-day"
                target="_blank"
                className="inline-flex rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-amber-950 shadow-lg transition-all hover:bg-amber-300 hover:shadow-xl"
              >
                {t('donation.supportOnBandcamp')}
              </Link>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-semibold text-amber-50">{t('donation.supportDirectly')}</h3>
              <p className="mb-3 text-xs text-amber-200">
                {t('donation.supportDirectlyDesc')}
              </p>
              <Link
                href="https://www.mixfelle-dobermann-nothilfe.de/"
                target="_blank"
                className="inline-flex rounded-full border border-amber-400 px-6 py-2 text-sm font-semibold text-amber-400 transition-all hover:bg-amber-400/10"
              >
                {t('donation.visitOrganization')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:px-6 md:py-16">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            {t('story.title')}
          </h2>
          <div className="relative space-y-4">
            <Image
              src="/covers/maylo.jpg"
              alt="Maylo"
              width={250}
              height={250}
              className="float-right ml-4 mb-4 rounded-lg object-cover"
            />
            {t('story.description').split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-neutral-200">
                {paragraph}
              </p>
            ))}
            {aboutContent.biography.map((block) => (
              <article key={block.id} className="space-y-2">
                {block.heading && (
                  <h3 className="text-sm font-semibold tracking-tight">
                    {block.heading}
                  </h3>
                )}
                <p className="text-sm leading-relaxed text-neutral-200 whitespace-pre-line">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </article>

        {/* Track thumbnail navigator */}
        <aside className="space-y-4 rounded-3xl border border-white/5 bg-black/40 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
            {t('allSongs.title')}
          </h3>
          <p className="text-xs text-neutral-400">
            {t('allSongs.description')}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {allTracks.map((track) => (
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
      </section>

      {/* TRACK JOURNEY SECTION */}
      <section className="border-t border-white/5 mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight">
            {t('trackJourney.title')}
          </h2>
          <Link
            href={`/${locale}/music`}
            className="text-xs text-neutral-300 underline"
          >
            {t('trackJourney.viewFullTrackList')}
          </Link>
        </div>

        <div className="space-y-6">
          {albumTracks.map((track, index) => {
            const trackDescription = getLocalizedString(track.description || '', locale);
            return (
            <div key={track.id} className="space-y-4">
              <article
                className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]"
              >
                {/* Left: meta + player */}
                <div className="flex flex-col justify-between border-b border-white/10 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                        {t('trackJourney.track')} {String(track.trackNumber).padStart(2, "0")}
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
                      {trackDescription || "Add a one-line description here later, describing the moment or memory this song belongs to in Maylo's story."}
                    </p>
                    <Link
                      href={`/${locale}/tracks/${track.slug}`}
                      className="mt-2 inline-flex self-end text-[11px] text-neutral-300 underline"
                    >
                      Read more
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
      </section>
      </div>
    </div>
  );
}
