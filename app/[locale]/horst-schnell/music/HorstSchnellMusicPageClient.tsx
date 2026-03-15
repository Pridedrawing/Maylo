// app/[locale]/horst-schnell/music/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { horstSchnellAlbums, horstSchnellTracks } from "@/data/horstSchnellData";
import { AudioPlayer } from "@/components/music/AudioPlayer";

const BG = "#1C1209";

export default function HorstSchnellMusicPage() {
  const locale = useLocale();
  const t = useTranslations("horstSchnell.music");
  const tTrack = useTranslations("horstSchnell.track");
  const album = horstSchnellAlbums[0];
  const tracks = horstSchnellTracks.filter((tr) => tr.albumId === album.id);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <h1 className="text-2xl font-semibold mb-2 text-amber-50">{t("title")}</h1>
        <p className="mb-10 text-sm text-amber-700">Dr. Horst Schnell – Lieder eines Lebens</p>

        {/* Album cover */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border border-amber-900/30">
            <Image
              src={album.coverImage}
              alt="Lieder eines Lebens"
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-amber-600">Album</p>
            <h2 className="text-xl font-semibold text-amber-50">Lieder eines Lebens</h2>
            <p className="text-sm text-amber-200/70">Dr. Horst Schnell</p>
            <p className="text-sm text-amber-700">{tracks.length} tracks</p>
          </div>
        </div>

        {/* Track list */}
        <div className="space-y-2">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-amber-900/20 bg-amber-950/10 px-4 py-3 hover:bg-amber-950/20 transition-colors"
            >
              {/* Cover */}
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-amber-900/20">
                <Image
                  src={track.coverImage}
                  alt={track.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              {/* Title + player */}
              <div className="min-w-0 space-y-1">
                <Link
                  href={`/${locale}/horst-schnell/tracks/${track.slug}`}
                  className="block truncate text-sm font-medium text-amber-100 hover:underline"
                >
                  <span className="mr-2 text-amber-700">
                    {String(track.trackNumber).padStart(2, "0")}
                  </span>
                  {track.title}
                </Link>
                <AudioPlayer src={track.audioSrc} />
              </div>

              {/* Link */}
              <Link
                href={`/${locale}/horst-schnell/tracks/${track.slug}`}
                className="text-xs text-amber-700 hover:text-amber-500 whitespace-nowrap"
              >
                {tTrack("play")} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
