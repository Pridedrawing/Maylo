import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mylon Grey – Official Website",
  description: "Official website of Mylon Grey – cinematic songs for fragile moments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
