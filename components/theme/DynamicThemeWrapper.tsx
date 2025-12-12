"use client";

import { useArtworkPalette } from "./useArtworkPalette";
import { useTheme } from "./ThemeContext";

interface Props {
  artworkSrc?: string;
  children: React.ReactNode;
}

export function DynamicThemeWrapper({ artworkSrc, children }: Props) {
  useArtworkPalette(artworkSrc);
  const { theme } = useTheme();

  return (
    <div
      className="relative"
      style={{
        borderColor: theme.primarySoft,
        boxShadow: `0 0 40px ${theme.primarySoft}`,
      }}
    >
      {children}
    </div>
  );
}
