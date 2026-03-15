import type { Metadata } from "next";
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
      ? "Alle 20 Lieder von Lieder eines Lebens — ein musikalisches Portrait über 90 Jahre."
      : "All 20 tracks from Lieder eines Lebens — a musical portrait of 90 years.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "https://mylon-grey.com/covers/vater/album-cover.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://mylon-grey.com/covers/vater/album-cover.png"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HorstSchnellMusicPage />;
}
