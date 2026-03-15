"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MayloBanner({ locale }: { locale: string }) {
  const pathname = usePathname();

  // Hide banner on portal (root locale page) and Horst Schnell section
  const isPortal = pathname === `/${locale}`;
  const isHorstSchnell = pathname.startsWith(`/${locale}/horst-schnell`);

  if (isPortal || isHorstSchnell) return null;

  return (
    <div className="w-full" style={{ backgroundColor: "#1E261D" }}>
      <div className="flex justify-center px-4">
        <div className="max-w-6xl w-full">
          <Link href={`/${locale}/maylo`}>
            <img
              src="/covers/just one more day banner.jpg"
              alt="Just One More Day"
              className="h-auto w-full cursor-pointer transition-opacity hover:opacity-90"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
