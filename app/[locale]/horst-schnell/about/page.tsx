// app/[locale]/horst-schnell/about/page.tsx
"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const BG = "#1C1209";

export default function HorstSchnellAboutPage() {
  const t = useTranslations("horstSchnell.about");

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <h1 className="mb-10 text-2xl font-semibold text-amber-50">{t("title")}</h1>

        {/* Album cover + bio */}
        <div className="mb-12 grid gap-8 md:grid-cols-[auto_1fr]">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border border-amber-900/30 shadow-[0_0_40px_rgba(180,100,0,0.15)]">
            <Image
              src="/covers/vater/album-cover.png"
              alt="Lieder eines Lebens"
              fill
              className="object-cover"
              sizes="256px"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-amber-100">Dr. Horst Schnell</h2>
            <p className="text-sm leading-relaxed text-amber-200/80 font-lora">
              {t("description")}
            </p>
          </div>
        </div>

        {/* About the album */}
        <article className="rounded-2xl border border-amber-900/20 bg-amber-950/10 p-6 md:p-8">
          <h2 className="mb-4 text-xl font-semibold text-amber-50">{t("albumTitle")}</h2>
          <p className="text-sm leading-relaxed text-amber-200/70 font-lora">
            {t("albumDescription")}
          </p>
        </article>
      </div>
    </div>
  );
}
