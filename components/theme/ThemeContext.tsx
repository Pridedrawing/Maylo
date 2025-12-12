"use client";

import { createContext, useContext, useState } from "react";

export interface ThemeColors {
  primary: string;
  primarySoft: string;
  background: string;
  textOnPrimary: string;
}

const defaultTheme: ThemeColors = {
  primary: "#e5b3ff",
  primarySoft: "rgba(229, 179, 255, 0.15)",
  background: "#050509",
  textOnPrimary: "#050509",
};

interface ThemeContextValue {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => undefined,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
