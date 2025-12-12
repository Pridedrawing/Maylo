import Image from "next/image";
import Link from "next/link";
import { albums, aboutContent, siteLinks } from "@/data/siteData";
import { AlbumCard } from "@/components/music/AlbumCard";
import { StreamingLinks } from "@/components/common/StreamingLinks";

export default function HomePage() {
  const featuredAlbum = albums[0];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
      <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            Official Website
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {aboutContent.displayName}
          </h1>
          <p className="max-w-xl text-sm text-neutral-200">
            {aboutContent.tagline}
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <StreamingLinks
              links={siteLinks.streaming}
              size="sm"
            />
          </div>

          <div className="mt-4 flex gap-3 text-xs">
            <Link
              href="/music"
              className="rounded-full bg-white px-4 py-2 text-black"
            >
              Explore music
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-4 py-2"
            >
              About the artist
            </Link>
          </div>
        </div>

        {featuredAlbum && (
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={featuredAlbum.coverImage}
              alt={featuredAlbum.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20" />
            <div className="pointer-events-none absolute bottom-4 left-4 space-y-1 text-xs">
              <p className="text-neutral-300">Latest Release</p>
              <p className="text-sm font-semibold">{featuredAlbum.title}</p>
            </div>
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold tracking-tight">
            Discography
          </h2>
          <Link
            href="/music"
            className="text-xs text-neutral-300 hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </section>
    </div>
  );
}
