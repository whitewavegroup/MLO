import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: "Texas Loan Keys — Mortgage",
  description: "Bilingual mortgage funnel with NEPQ questions for Texas Loan Keys.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
