// components/common/LanguageDetection.tsx
"use client";

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

const STORAGE_KEY = 'language-preference-set';

export function LanguageDetection() {
  const t = useTranslations('languageDetection');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if user has already made a language choice
    const hasSetPreference = localStorage.getItem(STORAGE_KEY);
    if (hasSetPreference) {
      return;
    }

    // Get browser language
    const browserLang = navigator.language.toLowerCase();
    
    // Check if browser is set to German (de, de-DE, de-AT, de-CH, etc.)
    const isGermanBrowser = browserLang.startsWith('de');
    
    // Check if currently on English page
    const isOnEnglishPage = currentLocale === 'en';

    // Show prompt if German browser but on English page
    if (isGermanBrowser && isOnEnglishPage) {
      setShowPrompt(true);
    }
  }, [currentLocale]);

  const switchToGerman = () => {
    // Mark preference as set
    localStorage.setItem(STORAGE_KEY, 'true');
    setShowPrompt(false);
    
    // Switch to German version of current page
    const newPath = pathname.replace(`/${currentLocale}`, '/de');
    router.push(newPath);
  };

  const stayOnEnglish = () => {
    // Mark preference as set
    localStorage.setItem(STORAGE_KEY, 'true');
    setShowPrompt(false);
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-neutral-950 p-6 shadow-2xl">
        <div className="mb-4 text-3xl">🌍</div>
        <h2 className="mb-3 text-lg font-semibold text-neutral-50">
          {t('title')}
        </h2>
        <p className="mb-6 text-sm text-neutral-300">
          {t('description')}
        </p>
        <div className="flex gap-3">
          <button
            onClick={stayOnEnglish}
            className="flex-1 rounded-full border border-white/40 px-5 py-2.5 text-sm text-neutral-50 transition-colors hover:bg-white/5"
          >
            {t('stayEnglish')}
          </button>
          <button
            onClick={switchToGerman}
            className="flex-1 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
          >
            {t('switchGerman')}
          </button>
        </div>
      </div>
    </div>
  );
}
