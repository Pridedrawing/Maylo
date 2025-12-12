import { StreamingLinks as StreamingLinksType } from "@/types/music";
import Link from "next/link";

interface Props {
  links: StreamingLinksType;
  size?: "xs" | "sm";
}

const labelMap: Record<string, string> = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  amazonMusic: "Amazon Music",
  youtubeMusic: "YouTube Music",
  deezer: "Deezer",
  tidal: "Tidal",
};

export function StreamingLinks({ links, size = "sm" }: Props) {
  const className =
    size === "xs"
      ? "text-[10px] px-2 py-1"
      : "text-xs px-2.5 py-1.5";

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(links).map(([platform, url]) => (
        <Link
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full border border-white/10 bg-white/5 ${className}`}
        >
          {labelMap[platform] ?? platform}
        </Link>
      ))}
    </div>
  );
}
