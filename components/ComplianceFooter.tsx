import Image from "next/image";
import { useLang } from "./LanguageProvider";

export default function ComplianceFooter() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container" style={{ padding: 0 }}>
        <div className="small" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <Image src="/equal-housing.svg" alt={t("equalHousing")} width={20} height={20} />
          <span>{t("disclaimer")}</span>
        </div>
        <div className="small" style={{ marginTop: 10 }}>{t("footerLegal")}</div>
        <div className="small" style={{ marginTop: 6 }}>{t("primericaNote")}</div>
        <div className="small" style={{ marginTop: 6, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href={t("disclosuresURL")} target="_blank" rel="noopener noreferrer">{t("disclosuresLabel")}: {t("disclosuresURL")}</a>
          <a href={t("nmlsURL")} target="_blank" rel="noopener noreferrer">{t("nmlsLabel")}</a>
        </div>
      </div>
    </footer>
  );
}
