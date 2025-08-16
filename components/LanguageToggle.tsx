"use client";
import { useLang } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const next = lang === "en" ? "es" : "en";
  return (
    <button className="toggle" onClick={() => setLang(next)} aria-label="Change language">
      {t("langBtn")}
    </button>
  );
}
