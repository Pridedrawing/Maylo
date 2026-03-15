import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HorstSchnellAboutPage from "./HorstSchnellAboutPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Über Dr. Horst Schnell | Lieder eines Lebens"
      : "About Dr. Horst Schnell | Lieder eines Lebens";

  const description =
    locale === "de"
      ? "Das Leben von Dr. Horst Schnell — von Magdeburg im Krieg bis zum Ingenieursdoktorat, einem weltweiten Patent und einem Familienerbe. Die Geschichte hinter Lieder eines Lebens."
      : "The life of Dr. Horst Schnell — from wartime Magdeburg to engineering doctorate, a worldwide patent, and a family legacy. The story behind Lieder eines Lebens.";

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
  return <HorstSchnellAboutPage />;
}
