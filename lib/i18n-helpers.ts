// Utility function to get localized string
export function getLocalizedString(
  value: string | { en: string; de: string },
  locale: string
): string {
  if (typeof value === 'string') {
    return value;
  }
  return value[locale as 'en' | 'de'] || value.en;
}
