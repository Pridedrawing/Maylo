"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from 'next-intl';
import { Album } from "@/types/music";
import { DynamicThemeWrapper } from "@/components/theme/DynamicThemeWrapper";
import { getLocalizedString } from "@/lib/i18n-helpers";

interface Props {
  album: Album;
}

export function AlbumCard({ album }: Props) {
  const locale = useLocale();
  const title = getLocalizedString(album.title, locale);
  const subtitle = album.subtitle ? getLocalizedString(album.subtitle, locale) : undefined;
  const description = album.description ? getLocalizedString(album.description, locale) : undefined;
  
  return (
    <DynamicThemeWrapper artworkSrc={album.coverImage}>
      <Link
        href={`/${locale}/music/${album.slug}`}
        className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-black/40 shadow-lg"
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={album.coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 250px, 100vw"
            priority={false}
          />
        </div>
        <div className="flex flex-1 flex-col gap-1 p-4">
          <h3 className="text-base font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-xs text-neutral-300">{subtitle}</p>
          )}
          {description && (
            <p className="mt-1 line-clamp-2 text-xs text-neutral-400">
              {description}
            </p>
          )}
        </div>
      </Link>
    </DynamicThemeWrapper>
  );
}
