import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { horstSchnellTracks } from "@/data/horstSchnellData";
import { getLocalizedString } from "@/lib/i18n-helpers";
import HorstSchnellTrackPage from "./HorstSchnellTrackPageClient";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return horstSchnellTracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const track = horstSchnellTracks.find((t) => t.slug === slug);

  if (!track) {
    return { title: "Track not found" };
  }

  const title = `${track.title} – Lieder eines Lebens | Dr. Horst Schnell`;
  const rawDescription = getLocalizedString(track.description || "", locale);
  const description =
    rawDescription ||
    "A track from Lieder eines Lebens by Dr. Horst Schnell.";

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
  return <HorstSchnellTrackPage />;
}
