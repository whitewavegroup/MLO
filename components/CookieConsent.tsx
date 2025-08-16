"use client";
import React from "react";
import { useLang } from "./LanguageProvider";

const KEY = "tlk_cookie_consent"; // accepted | rejected

export default function CookieConsent(){
  const { t } = useLang();
  const [choice, setChoice] = React.useState<string | null>(null);

  React.useEffect(()=>{
    try{
      const v = localStorage.getItem(KEY);
      if(v) setChoice(v);
    }catch{}
  },[]);

  function set(v: "accepted"|"rejected"){
    try{ localStorage.setItem(KEY, v); }catch{}
    setChoice(v);
  }

  if(choice) return null;

  return (
    <div className="cc-banner" role="dialog" aria-live="polite">
      <div><strong>{t("cookieTitle")}</strong></div>
      <div className="small" style={{marginTop:6}}>{t("cookieBody")} <a href="/privacy">{t("privacy")}</a>.</div>
      <div className="cc-actions">
        <button className="cc-btn cc-accept" onClick={()=>set("accepted")}>{t("acceptAll")}</button>
        <button className="cc-btn" onClick={()=>set("rejected")}>{t("reject")}</button>
      </div>
    </div>
  );
}
