import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/i18n/request';
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Lora } from 'next/font/google';
import "../globals.css";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { CookieProvider } from "@/components/common/CookieContext";
import { CookieConsent } from "@/components/common/CookieConsent";
import { LanguageDetection } from "@/components/common/LanguageDetection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mylon Grey – Official Website",
  description: "Official website of Mylon Grey – cinematic songs for fragile moments.",
  openGraph: {
    type: "website",
    title: "Mylon Grey – Official Website",
    description:
      "Listen to the music, discover the stories behind the songs, and find Mylon on your favorite platforms.",
    url: "https://example.com",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`text-neutral-50 ${lora.variable}`}>
        {/* Banner */}
        <div className="w-full" style={{ backgroundColor: "#1E261D" }}>
          <div className="flex justify-center px-4">
            <div className="max-w-6xl w-full">
              <Link href={`/${locale}`}>
                <img
                  src="/covers/just one more day banner.jpg"
                  alt="Just One More Day"
                  className="h-auto w-full cursor-pointer transition-opacity hover:opacity-90"
                />
              </Link>
            </div>
          </div>
        </div>
        <NextIntlClientProvider messages={messages}>
          <CookieProvider>
            <ThemeProvider>
              <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#1E261D" }}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
            <LanguageDetection />
            <CookieConsent />
          </CookieProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
