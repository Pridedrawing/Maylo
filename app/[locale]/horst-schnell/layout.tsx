// app/[locale]/horst-schnell/layout.tsx

import { HorstSchnellHeader } from "@/components/layout/HorstSchnellHeader";
import { HorstSchnellFooter } from "@/components/layout/HorstSchnellFooter";

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
      <HorstSchnellFooter />
    </div>
  );
}
