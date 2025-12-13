import { StreamingLinks as StreamingLinksType } from "@/types/music";
import Link from "next/link";
import Image from "next/image";

interface Props {
  links: StreamingLinksType;
  size?: "xs" | "sm";
}

const logoMap: Record<string, string> = {
  spotify: "/images/Spotify_Primary_Logo_RGB_White.png",
  appleMusic: "/images/apple_music.png",
  amazonMusic: "/images/amazon_music.png",
};

const labelMap: Record<string, string> = {
  spotify: "Spotify",
  appleMusic: "Apple Music",
  amazonMusic: "Amazon Music",
  youtubeMusic: "YouTube Music",
  deezer: "Deezer",
  tidal: "Tidal",
};

export function StreamingLinks({ links, size = "sm" }: Props) {
  const height = size === "xs" ? 16 : 20;

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(links).map(([platform, url]) => {
        const logo = logoMap[platform];
        
        return (
          <Link
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-all hover:bg-white/10"
          >
            {logo ? (
              <Image
                src={logo}
                alt={labelMap[platform] ?? platform}
                width={height * 4}
                height={height}
                className="object-contain"
              />
            ) : (
              <span className={size === "xs" ? "text-[10px]" : "text-xs"}>
                {labelMap[platform] ?? platform}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
