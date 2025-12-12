"use client";

import { useEffect } from "react";
import ColorThief from "colorthief";
import { ThemeColors, useTheme } from "./ThemeContext";

export function useArtworkPalette(src: string | undefined) {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const rgb = colorThief.getColor(img) as [number, number, number];
        const [r, g, b] = rgb;

        const primary = `rgb(${r}, ${g}, ${b})`;
        const background = `rgb(${Math.max(
          0,
          r - 40
        )}, ${Math.max(0, g - 40)}, ${Math.max(0, b - 40)})`;

        const nextTheme: ThemeColors = {
          primary,
          primarySoft: `rgba(${r}, ${g}, ${b}, 0.18)`,
          background,
          textOnPrimary: "#050509",
        };

        setTheme(nextTheme);
      } catch {
        // fallback silently
      }
    };
  }, [src, setTheme]);
}
