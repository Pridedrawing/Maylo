// app/[locale]/music/page.tsx
"use client";

import { albums, tracks } from "@/data/siteData";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { AlbumCard } from "@/components/music/AlbumCard";
import { DynamicThemeWrapper } from "@/components/theme/DynamicThemeWrapper";
import { getLocalizedString } from "@/lib/i18n-helpers";

export default function MusicPage() {
  const locale = useLocale();
  const t = useTranslations('music');
  const singles = tracks.filter((t) => t.albumId === "single");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      <h1 className="text-2xl font-semibold mb-6">{t('title')}</h1>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>

      {singles.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">{t('singles')}</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {singles.map((s) => (
              <DynamicThemeWrapper key={s.id} artworkSrc={s.coverImage}>
                <a
                  href={`/${locale}/tracks/${s.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-black/40 shadow-lg"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={s.coverImage}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 250px, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                </a>
              </DynamicThemeWrapper>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
