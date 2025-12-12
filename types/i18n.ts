// Helper types for multilingual content
export type LocalizedString = {
  en: string;
  de: string;
};

export type LocalizedField<T> = T extends string
  ? string | LocalizedString
  : T;
