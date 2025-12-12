// components/common/CookieContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookiePreferences, CookieConsent } from '@/types/cookies';

interface CookieContextType {
  preferences: CookiePreferences;
  hasResponded: boolean;
  acceptAll: () => void;
  acceptEssentialOnly: () => void;
  setPreferences: (prefs: CookiePreferences) => void;
  showSettings: () => void;
  hideSettings: () => void;
  isSettingsOpen: boolean;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const STORAGE_KEY = 'cookie-consent';

const defaultPreferences: CookiePreferences = {
  essential: true,
  media: false,
};

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<CookiePreferences>(defaultPreferences);
  const [hasResponded, setHasResponded] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const consent: CookieConsent = JSON.parse(stored);
        setPreferencesState(consent.preferences);
        setHasResponded(consent.hasResponded);
      } catch (e) {
        console.error('Failed to parse cookie consent', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const savePreferences = (prefs: CookiePreferences, responded: boolean) => {
    const consent: CookieConsent = {
      preferences: prefs,
      timestamp: Date.now(),
      hasResponded: responded,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setPreferencesState(prefs);
    setHasResponded(responded);
  };

  const acceptAll = () => {
    savePreferences({ essential: true, media: true }, true);
    setIsSettingsOpen(false);
  };

  const acceptEssentialOnly = () => {
    savePreferences({ essential: true, media: false }, true);
    setIsSettingsOpen(false);
  };

  const setPreferences = (prefs: CookiePreferences) => {
    savePreferences({ ...prefs, essential: true }, true);
    setIsSettingsOpen(false);
  };

  const showSettings = () => setIsSettingsOpen(true);
  const hideSettings = () => setIsSettingsOpen(false);

  // Don't render children until we've loaded preferences
  if (!isLoaded) {
    return null;
  }

  return (
    <CookieContext.Provider
      value={{
        preferences,
        hasResponded,
        acceptAll,
        acceptEssentialOnly,
        setPreferences,
        showSettings,
        hideSettings,
        isSettingsOpen,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
