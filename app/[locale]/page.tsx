import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import PortalPage from "./PortalPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Zwei Alben. Zwei Geschichten. | mylon-grey.com"
      : "Two Albums. Two Stories. | mylon-grey.com";

  const description =
    locale === "de"
      ? "Zwei Alben, zwei Leben — Just One More Day von Mylon Grey und Lieder eines Lebens von Dr. Horst Schnell. Wähle deine Reise."
      : "Two albums, two lives — Just One More Day by Mylon Grey and Lieder eines Lebens by Dr. Horst Schnell. Choose your journey.";

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
  return <PortalPage />;
}
