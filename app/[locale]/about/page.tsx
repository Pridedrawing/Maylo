import { getTranslations, setRequestLocale } from "next-intl/server";
import { aboutContent, siteLinks } from "@/data/siteData";
import { StreamingLinks } from "@/components/common/StreamingLinks";
import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {aboutContent.displayName}
        </h1>
        <p className="text-base text-neutral-300">{aboutContent.tagline}</p>

        <div className="flex flex-wrap gap-2 text-xs">
          <StreamingLinks links={siteLinks.streaming} size="sm" />
        </div>
      </section>

      <AboutPageClient />
    </div>
  );
}

