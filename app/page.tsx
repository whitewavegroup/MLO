"use client";
import LanguageToggle from "@/components/LanguageToggle";
import ComplianceFooter from "@/components/ComplianceFooter";
import { useLang } from "@/components/LanguageProvider";
import Image from "next/image";
import PipelineProFormEmbed from "@/components/PipelineProFormEmbed";

export default function Page() {
  const { t } = useLang();
  return (
    <>
      <div className="container">
        <nav className="nav">
          <div className="brand">
            <Image src="/logo-placeholder.svg" alt="Logo" width={40} height={40} />
            <h1>{t("brand")}</h1>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a className="cta" href="#form">{t("primaryCTA")}</a>
            <LanguageToggle />
          </div>
        </nav>

        <section className="hero">
          <div className="card">
            <span className="badge">Mortgage</span>
            <h2 className="h1">{t("heroTitle")}</h2>
            <p className="sub">{t("heroSub")}</p>
            <div className="cta-row">
              <a className="btn" href="#form">{t("primaryCTA")}</a>
              <a className="btn-alt" href="tel:+14696885222">{t("secondaryCTA")}</a>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>{t("programs")}</h3>
            <div className="grid">
              {[
                { title: "Conventional", desc: "3%+ down • Strong all-around option" },
                { title: "FHA", desc: "Low down • Flexible guidelines" },
                { title: "VA", desc: "Eligible veterans • $0 down" },
                { title: "USDA", desc: "Rural areas • $0 down (eligibility)" },
                { title: "Jumbo", desc: "High-balance loans" },
                { title: "Refinance", desc: "Lower payment • Cash-out" }
              ].map((p) => (
                <div className="tile" key={p.title}>
                  <h4>{p.title}</h4>
                  <div className="small">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="form" style={{ marginTop: 20 }}>
          <PipelineProFormEmbed />
        </section>
      </div>

      <ComplianceFooter />
    </>
  );
}
