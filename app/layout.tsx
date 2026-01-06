import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mylon Grey – Official Website – Memorial Album 'Just One More Day'",
  description:
    "Official website of Mylon Grey – cinematic songs for fragile moments. Listen to the memorial album 'Just One More Day' dedicated to Maylo. All Bandcamp proceeds support animal welfare organizations that rescue dogs in need.",
  metadataBase: new URL("https://mylon-grey.com"),
  openGraph: {
    type: "website",
    title: "Mylon Grey – Official Website – Memorial Album 'Just One More Day'",
    description:
      "Official website of Mylon Grey – cinematic songs for fragile moments. Listen to the memorial album 'Just One More Day' dedicated to Maylo. All Bandcamp proceeds support animal welfare organizations that rescue dogs in need.",
    url: "https://mylon-grey.com",
    siteName: "Mylon Grey",
    images: [
      {
        url: "https://mylon-grey.com/covers/Just_one_more_day.jpg",
        width: 1200,
        height: 1200,
        alt: "Just One More Day - Mylon Grey Album Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mylon Grey – Official Website – Memorial Album 'Just One More Day'",
    description:
      "Official website of Mylon Grey – cinematic songs for fragile moments. Listen to the memorial album 'Just One More Day' dedicated to Maylo. All Bandcamp proceeds support animal welfare organizations that rescue dogs in need.",
    images: ["https://mylon-grey.com/covers/Just_one_more_day.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
