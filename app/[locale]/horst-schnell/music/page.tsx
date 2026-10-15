import type { Metadata } from "next";
import { ogImageEntry, ogImageForCover } from "@/lib/og-image";
import { setRequestLocale } from "next-intl/server";
import HorstSchnellMusicPage from "./HorstSchnellMusicPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Musik – Lieder eines Lebens | Dr. Horst Schnell"
      : "Music – Lieder eines Lebens | Dr. Horst Schnell";

  const description =
    locale === "de"
      ? "Alle 22 Lieder von Lieder eines Lebens — ein musikalisches Portrait über 90 Jahre."
      : "All 22 tracks from Lieder eines Lebens — a musical portrait of 90 years.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImageEntry("/covers/vater/album-cover.png", "Lieder eines Lebens")],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageForCover("/covers/vater/album-cover.png")],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HorstSchnellMusicPage />;
}
