// components/common/CookieConsent.tsx
"use client";

import { useCookieConsent } from './CookieContext';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CookiePreferences } from '@/types/cookies';

export function CookieConsent() {
  const t = useTranslations('cookies');
  const { hasResponded, acceptAll, acceptEssentialOnly, setPreferences, showSettings, hideSettings, isSettingsOpen, preferences } = useCookieConsent();
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  if (hasResponded && !isSettingsOpen) {
    return null;
  }

  return (
    <>
      {/* Banner */}
      {!hasResponded && !isSettingsOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-neutral-950/95 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="mb-2 text-sm font-semibold text-neutral-50">
                  {t('banner.title')}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-300">
                  {t('banner.description')}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={acceptEssentialOnly}
                  className="rounded-full border border-white/40 px-5 py-2 text-sm text-neutral-50 transition-colors hover:bg-white/5"
                >
                  {t('banner.essentialOnly')}
                </button>
                <button
                  onClick={showSettings}
                  className="rounded-full border border-white/40 px-5 py-2 text-sm text-neutral-50 transition-colors hover:bg-white/5"
                >
                  {t('banner.settings')}
                </button>
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
                >
                  {t('banner.acceptAll')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-neutral-950 p-6 md:p-8">
            <h2 className="mb-4 text-xl font-semibold text-neutral-50">
              {t('settings.title')}
            </h2>
            <p className="mb-6 text-sm text-neutral-300">
              {t('settings.description')}
            </p>

            <div className="space-y-4">
              {/* Essential Cookies */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 text-sm font-semibold text-neutral-50">
                      {t('settings.essential.title')}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {t('settings.essential.description')}
                    </p>
                  </div>
                  <div className="ml-4 text-xs font-medium text-neutral-400">
                    {t('settings.alwaysActive')}
                  </div>
                </div>
              </div>

              {/* Media Cookies */}
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="mb-1 text-sm font-semibold text-neutral-50">
                      {t('settings.media.title')}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {t('settings.media.description')}
                    </p>
                  </div>
                  <label className="relative ml-4 inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={tempPreferences.media}
                      onChange={(e) => setTempPreferences({ ...tempPreferences, media: e.target.checked })}
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-neutral-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-800"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              <button
                onClick={() => {
                  setTempPreferences(preferences);
                  hideSettings();
                }}
                className="rounded-full border border-white/40 px-5 py-2 text-sm text-neutral-50 transition-colors hover:bg-white/5"
              >
                {t('settings.cancel')}
              </button>
              <button
                onClick={() => setPreferences(tempPreferences)}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
              >
                {t('settings.savePreferences')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
