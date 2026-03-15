import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalSections from "@/components/legal/LegalSections";

const BG = "#1C1209";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title =
    locale === "de"
      ? "Impressum & Datenschutz | mylon-grey.com"
      : "Legal Notice & Privacy Policy | mylon-grey.com";

  return {
    title,
    robots: { index: false },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 md:px-6">
        <LegalSections />
      </div>
    </div>
  );
}
