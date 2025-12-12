// components/layout/Footer.tsx
"use client";

import { useTranslations } from 'next-intl';
import { useCookieConsent } from '@/components/common/CookieContext';

export function Footer() {
  const t = useTranslations('footer');
  const { showSettings } = useCookieConsent();
  
  return (
    <footer className="border-t border-white/5 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <p>© {new Date().getFullYear()} Mylon Grey. {t('rights')}</p>
          <button
            onClick={showSettings}
            className="text-[11px] underline hover:text-neutral-200 transition-colors"
          >
            {t('cookieSettings')}
          </button>
        </div>
        <p className="text-[11px]">
          Built with Next.js · Music, memories, and Maylo.
        </p>
      </div>
    </footer>
  );
}
