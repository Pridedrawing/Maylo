import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HorstSchnellPage from "./HorstSchnellPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Lieder eines Lebens – Dr. Horst Schnell | Album zum 90. Geburtstag"
      : "Lieder eines Lebens – Dr. Horst Schnell | 90th Birthday Album";

  const description =
    locale === "de"
      ? "20 Lieder, die 90 Jahre eines bemerkenswerten Lebens würdigen — von den Trümmern Magdeburgs bis zu einem Leben voller Familie, Erfindungen und Weisheit."
      : "20 songs celebrating 90 years of a remarkable life — from the rubble of post-war Magdeburg to a life full of family, invention, and wisdom.";

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
  return <HorstSchnellPage />;
}
