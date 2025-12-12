"use client";

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next/navigation';
import {locales} from '@/i18n/request';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Extract the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 uppercase ${
            locale === loc
              ? 'font-semibold text-white underline'
              : 'text-neutral-400 hover:text-neutral-200'
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
