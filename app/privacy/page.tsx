"use client";
import { useLang } from "@/components/LanguageProvider";

export default function Privacy(){
  const { t } = useLang();
  return (
    <div className="container">
      <h1 style={{marginTop:20}}>{t("privacy")}</h1>
      <div className="card">
        <p className="small">
          We collect only the information you submit (name, email, phone, and answers in the form) to evaluate mortgage options and contact you.
          We use essential cookies for site functionality and may use optional analytics if you consent. Data may be processed by our service
          providers (e.g., PipelinePRO). You can request deletion by emailing hblancovitch@gmail.com.
        </p>
        <p className="small">
          Solo recopilamos la información que envías (nombre, correo, teléfono y respuestas en el formulario) para evaluar opciones hipotecarias
          y contactarte. Usamos cookies esenciales para el funcionamiento del sitio y analíticas opcionales si das tu consentimiento. Los datos
          pueden ser procesados por nuestros proveedores (p. ej., PipelinePRO). Puedes solicitar eliminación enviando un correo a
          hblancovitch@gmail.com.
        </p>
      </div>
    </div>
  );
}
