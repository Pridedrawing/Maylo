import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { tracks } from "@/data/siteData";
import { getLocalizedString } from "@/lib/i18n-helpers";
import TrackPage from "./TrackPageClient";

type Props = {
  params: Promise<{ locale: string; trackSlug: string }>;
};

export function generateStaticParams() {
  return tracks.map((track) => ({ trackSlug: track.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, trackSlug } = await params;
  const track = tracks.find((t) => t.slug === trackSlug);

  if (!track) {
    return { title: "Track not found" };
  }

  const title = `${track.title} – Just One More Day | Mylon Grey`;
  const rawDescription = getLocalizedString(track.description || "", locale);
  const description =
    rawDescription ||
    "A track from the memorial album Just One More Day by Mylon Grey.";

  const ogImage =
    "https://mylon-grey.com/" + track.coverImage.replace(/^\//, "");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TrackPage />;
}
