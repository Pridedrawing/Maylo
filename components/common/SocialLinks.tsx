import Link from "next/link";
import { SocialLink as SocialLinkType } from "@/types/site";

interface Props {
  links: SocialLinkType[];
  size?: "sm" | "md";
}

export function SocialLinks({ links, size = "md" }: Props) {
  const iconSize = size === "sm" ? "text-base" : "text-lg";
  const gap = size === "sm" ? "gap-2" : "gap-3";

  return (
    <div className={`flex ${gap}`}>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs"
        >
          <span className={iconSize}>
            {iconForPlatform(link.platform)}
          </span>
        </Link>
      ))}
    </div>
  );
}

function iconForPlatform(platform: SocialLinkType["platform"]) {
  switch (platform) {
    case "instagram":
      return "IG";
    case "tiktok":
      return "TT";
    case "youtube":
      return "YT";
    case "facebook":
      return "f";
    case "x":
      return "X";
    default:
      return "•";
  }
}
