// app/[locale]/horst-schnell/impressum/page.tsx
"use client";

import LegalSections from "@/components/legal/LegalSections";

const BG = "#1C1209";

export default function HorstSchnellImpressumPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>
      <div className="mx-auto max-w-4xl space-y-10 px-4 py-16 md:px-6">
        <LegalSections />
      </div>
    </div>
  );
}
