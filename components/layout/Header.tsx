"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { siteLinks } from "@/data/siteData";
import { SocialLinks } from "@/components/common/SocialLinks";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <header className="border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">
          Mylon Grey
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          <Link href={`/${locale}/music`} className="hover:text-primary-300">
            {t('music')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-primary-300">
            {t('about')}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <SocialLinks links={siteLinks.social} size="sm" />
        </div>

        <button
          className="inline-flex items-center justify-center rounded md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-black/90 px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href={`/${locale}/music`} onClick={() => setOpen(false)}>
              {t('music')}
            </Link>
            <Link href={`/${locale}/about`} onClick={() => setOpen(false)}>
              {t('about')}
            </Link>
          </nav>

          <div className="mt-4 flex items-center gap-4">
            <LanguageSwitcher />
            <SocialLinks links={siteLinks.social} size="sm" />
          </div>
        </div>
      )}
    </header>
  );
}
