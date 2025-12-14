"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeContext";

interface GiscusCommentsProps {
  trackSlug: string;
}

export function GiscusComments({ trackSlug }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous instance
    containerRef.current.innerHTML = "";

    // Build custom theme URL with current album colors
    const themeUrl = `/api/giscus-theme?primary=${encodeURIComponent(theme.primary)}&background=${encodeURIComponent(theme.background)}&primarySoft=${encodeURIComponent(theme.primarySoft)}`;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "Pridedrawing/Maylo");
    script.setAttribute("data-repo-id", "R_kgDOQnoFyQ");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOQnoFyc4CzvJA");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", themeUrl);
    script.setAttribute("data-lang", "de");
    script.setAttribute("data-loading", "lazy");
    script.crossOrigin = "anonymous";
    script.async = true;

    containerRef.current.appendChild(script);
  }, [trackSlug, theme.primary, theme.primarySoft, theme.background]);

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-xl font-semibold tracking-tight">Kommentare</h2>
      <div 
        ref={containerRef} 
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      />
    </div>
  );
}
