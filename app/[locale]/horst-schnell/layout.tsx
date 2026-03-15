// app/[locale]/horst-schnell/layout.tsx

import { HorstSchnellHeader } from "@/components/layout/HorstSchnellHeader";

const BG = "#1C1209";

export default function HorstSchnellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: BG }}>
      <HorstSchnellHeader />
      <main className="flex-1">{children}</main>
      <footer
        className="border-t border-amber-900/20 py-6 text-center text-xs text-amber-900"
        style={{ backgroundColor: BG }}
      >
        © Dr. Horst Schnell – Lieder eines Lebens
      </footer>
    </div>
  );
}
