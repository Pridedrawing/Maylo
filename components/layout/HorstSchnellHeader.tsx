"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

export function HorstSchnellHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("horstSchnell.nav");
  const locale = useLocale();

  return (
    <header
      className="border-b border-amber-900/30 backdrop-blur"
      style={{ backgroundColor: "rgba(28, 18, 9, 0.85)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-4">
          <Link
            href={`/${locale}`}
            className="text-xs text-amber-700 hover:text-amber-500 transition-colors"
          >
            {t("back")}
          </Link>
          <span className="text-amber-900/60">|</span>
          <Link
            href={`/${locale}/horst-schnell`}
            className="text-base font-semibold tracking-wide text-amber-100"
          >
            {t("home")}
          </Link>
        </div>

        <nav className="hidden gap-6 text-sm md:flex">
          <Link
            href={`/${locale}/horst-schnell/music`}
            className="text-amber-200 hover:text-amber-100 transition-colors"
          >
            {t("music")}
          </Link>
          <Link
            href={`/${locale}/horst-schnell/about`}
            className="text-amber-200 hover:text-amber-100 transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href={`/${locale}/horst-schnell/impressum`}
            className="text-amber-200 hover:text-amber-100 transition-colors"
          >
            {t("impressum")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>

        <button
          className="inline-flex items-center justify-center rounded md:hidden text-amber-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {open && (
        <div
          className="border-t border-amber-900/30 px-4 pb-4 md:hidden"
          style={{ backgroundColor: "rgba(28, 18, 9, 0.95)" }}
        >
          <nav className="flex flex-col gap-3 text-sm">
            <Link
              href={`/${locale}/horst-schnell/music`}
              className="text-amber-200"
              onClick={() => setOpen(false)}
            >
              {t("music")}
            </Link>
            <Link
              href={`/${locale}/horst-schnell/about`}
              className="text-amber-200"
              onClick={() => setOpen(false)}
            >
              {t("about")}
            </Link>
            <Link
              href={`/${locale}/horst-schnell/impressum`}
              className="text-amber-200"
              onClick={() => setOpen(false)}
            >
              {t("impressum")}
            </Link>
            <Link
              href={`/${locale}`}
              className="text-amber-700 text-xs"
              onClick={() => setOpen(false)}
            >
              {t("back")}
            </Link>
          </nav>
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
