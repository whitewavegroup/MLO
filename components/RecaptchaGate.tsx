"use client";
import React from "react";
import { useLang } from "./LanguageProvider";

declare global {
  interface Window { grecaptcha?: { ready: (cb: ()=>void)=>void; execute: (siteKey: string, opts: any)=>Promise<string>; }; }
}

export default function RecaptchaGate({ children }: { children: React.ReactNode }){
  const { lang } = useLang();
  const [allowed, setAllowed] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  React.useEffect(()=>{
    if(!siteKey){
      setAllowed(true); // graceful: no key -> don't block
      return;
    }
    const id = "recaptcha-script";
    if(!document.getElementById(id)){
      const s = document.createElement("script");
      s.id = id;
      s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      s.async = true;
      document.head.appendChild(s);
    }
    const run = () => {
      if(!window.grecaptcha) return setTimeout(run, 100);
      window.grecaptcha.ready(async ()=>{
        try{
          const token = await window.grecaptcha!.execute(siteKey, { action: "form" });
          const res = await fetch("/api/recaptcha/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, action: "form" }) });
          const json = await res.json();
          if(json.ok) setAllowed(true);
          else setError("reCAPTCHA failed. Please open the form in a new tab.");
        }catch(e){
          setError("We couldn't complete verification. Please open the form in a new tab.");
        }
      });
    };
    run();
  }, [siteKey, lang]);

  if(allowed) return <>{children}</>;
  if(error) return <div className="card">{error}</div>;
  return <div className="card"><div className="small">Verifying you're not a bot…</div></div>;
}
