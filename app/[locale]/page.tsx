"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

export default function PortalPage() {
  const locale = useLocale();
  const t = useTranslations("portal");

  return (
    <div
      className="flex min-h-screen flex-col text-neutral-50"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Minimal top bar */}
      <div className="flex items-center justify-end px-6 py-4">
        <LanguageSwitcher />
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-10">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
          {t("subheadline")}
        </p>
        <h1 className="mb-12 text-2xl font-semibold tracking-tight md:text-3xl">
          {t("headline")}
        </h1>

        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {/* Card 1: Maylo */}
          <Link
            href={`/${locale}/maylo`}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(30,38,29,0.6)]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/covers/Just_one_more_day.jpg"
                alt="Just One More Day"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 400px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {t("maylo.label")}
              </p>
              <h2 className="text-xl font-semibold tracking-tight">
                {t("maylo.title")}
              </h2>
              <p className="text-sm leading-relaxed text-neutral-300">
                {t("maylo.description")}
              </p>
              <span className="mt-4 inline-flex self-start rounded-full border border-white/30 px-5 py-2 text-sm transition-colors group-hover:border-white/60 group-hover:bg-white/10">
                {t("maylo.cta")} →
              </span>
            </div>
          </Link>

          {/* Card 2: Dr. Horst Schnell */}
          <Link
            href={`/${locale}/horst-schnell`}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-amber-900/30 bg-black/40 transition-all duration-300 hover:border-amber-700/50 hover:shadow-[0_0_40px_rgba(180,100,0,0.2)]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/covers/vater/album-cover.png"
                alt="Lieder eines Lebens"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 400px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-600">
                {t("horstSchnell.label")}
              </p>
              <h2 className="text-xl font-semibold tracking-tight">
                {t("horstSchnell.title")}
              </h2>
              <p className="text-sm leading-relaxed text-neutral-300">
                {t("horstSchnell.description")}
              </p>
              <span className="mt-4 inline-flex self-start rounded-full border border-amber-700/50 px-5 py-2 text-sm text-amber-400 transition-colors group-hover:border-amber-500 group-hover:bg-amber-900/20">
                {t("horstSchnell.cta")} →
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
