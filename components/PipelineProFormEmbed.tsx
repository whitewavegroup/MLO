"use client";
import React from "react";
import { useLang } from "./LanguageProvider";
import RecaptchaGate from "./RecaptchaGate";

export default function PipelineProFormEmbed(){
  const { lang, t } = useLang();
  const url = lang === "es"
    ? process.env.NEXT_PUBLIC_PIPELINEPRO_FORM_URL_ES
    : process.env.NEXT_PUBLIC_PIPELINEPRO_FORM_URL_EN;

  if(!url){
    return (
      <div className="card">
        <strong>Form URL not set.</strong>
        <div className="small" style={{marginTop:8}}>
          Add <code>NEXT_PUBLIC_PIPELINEPRO_FORM_URL_EN</code> and <code>NEXT_PUBLIC_PIPELINEPRO_FORM_URL_ES</code> in your environment variables.
        </div>
      </div>
    );
  }

  return (
    <div className="embedWrap">
      <div className="embedBar">
        <span className="small">PipelinePRO Form</span>
        <a className="small" href={url} target="_blank" rel="noopener noreferrer">{t("openInTab")}</a>
      </div>
      <RecaptchaGate>
        <iframe className="embed" src={url} title="PipelinePRO Form" loading="eager" allow="clipboard-write *; geolocation *" />
      </RecaptchaGate>
    </div>
  );
}
