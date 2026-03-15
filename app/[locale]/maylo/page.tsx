import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import MayloPage from "./MayloPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Just One More Day – Mylon Grey | Gedenkalbum"
      : "Just One More Day – Mylon Grey | Memorial Album";

  const description =
    locale === "de"
      ? "Ein Gedenkalbum für Maylo — cineastische Lieder über Trauer, Liebe und Erinnerung. Alle Bandcamp-Einnahmen gehen an den Tierschutzverein, der Maylo gerettet hat."
      : "A memorial album for Maylo — cinematic songs about grief, love, and remembrance. All Bandcamp proceeds go to the animal welfare organization that saved Maylo.";

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
  return <MayloPage />;
}
