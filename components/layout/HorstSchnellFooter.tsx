"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useCookieConsent } from "@/components/common/CookieContext";

const BG = "#1C1209";

export function HorstSchnellFooter() {
  const locale = useLocale();
  const { showSettings } = useCookieConsent();

  return (
    <footer
      className="border-t border-amber-900/20 py-4 text-xs text-amber-900"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <p>© Dr. Horst Schnell – Lieder eines Lebens</p>
          <Link
            href={`/${locale}/horst-schnell/impressum`}
            className="underline hover:text-amber-700 transition-colors"
          >
            Impressum & Datenschutz
          </Link>
          <button
            onClick={showSettings}
            className="underline hover:text-amber-700 transition-colors"
          >
            Cookie-Einstellungen
          </button>
        </div>
      </div>
    </footer>
  );
}
