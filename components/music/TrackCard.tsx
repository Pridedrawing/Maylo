// components/music/TrackCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from 'next-intl';
import { Track } from "@/types/music";
import { AudioPlayer } from "./AudioPlayer";
import { getLocalizedString } from "@/lib/i18n-helpers";

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const locale = useLocale();
  const trackTitle = getLocalizedString(track.title, locale);
  const trackDescription = getLocalizedString(track.description || '', locale);
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-3">
      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10">
        <Image
          src={track.coverImage}
          alt={trackTitle}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex-1">
        <Link
          href={`/tracks/${track.slug}`}
          className="text-sm font-semibold hover:underline"
        >
          {trackTitle}
        </Link>
        {trackDescription && (
          <p className="text-xs text-neutral-300 line-clamp-2">
            {trackDescription}
          </p>
        )}
      </div>

      <AudioPlayer src={track.audioSrc} />
    </article>
  );
}
