import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MusicPage from "./MusicPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Musik – Just One More Day | Mylon Grey"
      : "Music – Just One More Day | Mylon Grey";

  const description =
    locale === "de"
      ? "Alle Lieder vom Gedenkalbum Just One More Day von Mylon Grey."
      : "All tracks from the memorial album Just One More Day by Mylon Grey.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: "https://mylon-grey.com/covers/Just_one_more_day.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://mylon-grey.com/covers/Just_one_more_day.jpg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MusicPage />;
}
