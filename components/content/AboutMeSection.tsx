import Image from "next/image";
import { AboutContent } from "@/types/site";

interface Props {
  about: AboutContent;
}

export function AboutMeSection({ about }: Props) {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-10 md:px-6 md:py-16">
      <header className="flex flex-col gap-6 md:flex-row md:items-center">
        {about.portraitImage && (
          <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-white/10 md:mx-0 md:h-48 md:w-48">
            <Image
              src={about.portraitImage}
              alt={about.displayName}
              fill
              className="object-cover"
              sizes="192px"
            />
          </div>
        )}

        <div className="space-y-2 md:flex-1">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {about.displayName}
          </h1>
          <p className="text-base text-neutral-300">{about.tagline}</p>

          <div className="mt-3 flex flex-wrap gap-3 text-xs text-neutral-300">
            {about.location && (
              <span className="rounded-full border border-white/10 px-3 py-1">
                {about.location}
              </span>
            )}
            {about.genres?.map((g) => (
              <span
                key={g}
                className="rounded-full border border-white/10 px-3 py-1"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          {about.biography.map((block) => (
            <article key={block.id} className="space-y-2">
              {block.heading && (
                <h2 className="text-lg font-semibold tracking-tight">
                  {block.heading}
                </h2>
              )}
              <p className="text-sm leading-relaxed text-neutral-200 whitespace-pre-line">
                {block.body}
              </p>
            </article>
          ))}
        </div>

        <aside className="space-y-6 rounded-2xl border border-white/5 bg-black/40 p-4">
          {about.influences && about.influences.length > 0 && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                Influences
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-200">
                {about.influences.map((inf) => (
                  <li key={inf}>• {inf}</li>
                ))}
              </ul>
            </section>
          )}

          {about.achievements && about.achievements.length > 0 && (
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-300">
                Highlights
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-neutral-200">
                {about.achievements.map((ach) => (
                  <li key={ach}>• {ach}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>
    </section>
  );
}
