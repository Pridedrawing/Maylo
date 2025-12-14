"use client";

import { useTranslations } from "next-intl";

export default function AboutPageClient() {
  const t = useTranslations("about");

  return (
    <>
      {/* Imprint Section */}
      <section className="space-y-4 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("imprint.title")}
        </h2>
        
        <div className="space-y-4 text-sm text-neutral-200">
          <p className="font-semibold">{t("imprint.heading")}</p>
          
          <div>
            <p className="font-medium">{t("imprint.name")}</p>
            <p className="whitespace-pre-line">{t("imprint.address")}</p>
          </div>

          <p>
            <span className="font-medium">{t("imprint.email")}</span>
            <br />
            <a
              href="mailto:mylon.grey@gmx.de"
              className="text-neutral-300 hover:underline"
            >
              mylon.grey@gmx.de
            </a>
          </p>

          <div>
            <p className="font-semibold">{t("imprint.responsible")}</p>
            <p>{t("imprint.responsibleName")}</p>
            <p>{t("imprint.responsibleAddress")}</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="space-y-6 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("privacy.title")}
        </h2>

        {/* 1. Data Controller */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.controller.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.controller.description")}
          </p>
          <div className="text-sm text-neutral-200">
            <p className="font-medium">{t("privacy.controller.name")}</p>
            <p className="whitespace-pre-line">
              {t("privacy.controller.address")}
            </p>
            <p className="mt-2">
              <span className="font-medium">
                {t("privacy.controller.email")}
              </span>
              <br />
              <a
                href="mailto:mylon.grey@gmx.de"
                className="text-neutral-300 hover:underline"
              >
                mylon.grey@gmx.de
              </a>
            </p>
          </div>
        </div>

        {/* 2. General Information */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.general.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.general.description")}
          </p>
        </div>

        {/* 3. Server Logs */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.serverLogs.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.serverLogs.description")}
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-neutral-200">
            {(t.raw("privacy.serverLogs.items") as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-neutral-200">
            {t("privacy.serverLogs.purpose")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.serverLogs.legalBasis")}
          </p>
        </div>

        {/* 4. Cookies */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.cookies.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.cookies.description")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.cookies.essential")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.cookies.analytics")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.cookies.consent")}
          </p>
          <p className="whitespace-pre-line text-sm text-neutral-300">
            {t("privacy.cookies.legalBasis")}
          </p>
        </div>

        {/* 5. Analytics */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.analytics.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.analytics.description")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.analytics.dataProcessed")}
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-neutral-200">
            {(t.raw("privacy.analytics.items") as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-sm text-neutral-200">
            {t("privacy.analytics.consent")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.analytics.thirdCountries")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.analytics.legalBasis")}
          </p>
        </div>

        {/* 6. Google Fonts */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.googleFonts.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.googleFonts.description")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.googleFonts.dataTransfer")}
          </p>
          <p className="whitespace-pre-line text-sm text-neutral-200">
            {t("privacy.googleFonts.provider")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.googleFonts.thirdCountries")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.googleFonts.legalBasis")}
          </p>
        </div>

        {/* 7. YouTube */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.youtube.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.youtube.description")}
          </p>
          <p className="whitespace-pre-line text-sm text-neutral-200">
            {t("privacy.youtube.provider")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.youtube.dataTransfer")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.youtube.thirdCountries")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.youtube.legalBasis")}
          </p>
        </div>

        {/* 8. Spotify */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.spotify.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.spotify.description")}
          </p>
          <p className="whitespace-pre-line text-sm text-neutral-200">
            {t("privacy.spotify.provider")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.spotify.dataTransfer")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.spotify.legalBasis")}
          </p>
        </div>

        {/* 9. Donations */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.donations.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.donations.description")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.donations.dataProcessed")}
          </p>
          <p className="text-sm text-neutral-200">
            {t("privacy.donations.paymentProvider")}
          </p>
          <p className="text-sm text-neutral-300">
            {t("privacy.donations.legalBasis")}
          </p>
        </div>

        {/* 10. Contact */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.contact.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.contact.description")}
          </p>
          <p className="whitespace-pre-line text-sm text-neutral-300">
            {t("privacy.contact.legalBasis")}
          </p>
        </div>

        {/* 11. Rights */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{t("privacy.rights.title")}</h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.rights.description")}
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-neutral-200">
            {(t.raw("privacy.rights.items") as string[]).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 12. Complaint */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.complaint.title")}
          </h3>
          <p className="text-sm text-neutral-200">
            {t("privacy.complaint.description")}
          </p>
        </div>

        {/* 13. Updates */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">
            {t("privacy.updates.title")}
          </h3>
          <p className="whitespace-pre-line text-sm text-neutral-200">
            {t("privacy.updates.description")}
          </p>
        </div>
      </section>
    </>
  );
}
