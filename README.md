# Texas Loan Keys — Embed + reCAPTCHA v3 + Cookie Consent

This build embeds your **PipelinePRO** form (EN/ES), gates it behind **Google reCAPTCHA v3**, and shows a bilingual **cookie consent** banner.

## Setup (Vercel → Project → Settings → Environment Variables)
- `NEXT_PUBLIC_PIPELINEPRO_FORM_URL_EN` = https://...  (public PipelinePRO form URL in English)
- `NEXT_PUBLIC_PIPELINEPRO_FORM_URL_ES` = https://...  (public PipelinePRO form URL in Spanish)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` = your reCAPTCHA v3 *site key*
- `RECAPTCHA_SECRET_KEY` = your reCAPTCHA v3 *secret key*
- (optional) `RECAPTCHA_MIN_SCORE` = 0.5

## How reCAPTCHA works here
- The page loads Google reCAPTCHA v3 and executes an action `"form"`.
- We send the token to `/api/recaptcha/verify`, which calls Google’s `siteverify` with your secret.
- If the score passes, we render the embedded form. If not, we show a fallback message with a link to open the form in a new tab.
> Note: Since the form is hosted by PipelinePRO, this approach prevents most automated embed loads. For strongest protection, also enable anti‑spam within PipelinePRO if available.

## Cookie Consent
- A banner appears until accepted/rejected (stored in `localStorage`). It’s a lightweight notice suitable for US best practices.
- Link to `/privacy` is included; customize that page’s text to match your compliance guidance.

## Run locally
```bash
npm i
npm run dev   # http://localhost:3000
```
Then create a `.env.local` with the variables above.

---
**Loan Officer:** Hector Blancovitch — NMLS #2397888  
**Licensed in TX • Branch:** 1022 S Greenville Ave, Suite 200, Allen, TX 75002  
**Representing:** Primerica Mortgage, LLC, NMLS #1723477  
**Phone:** 469-688-5222 • **Email:** hblancovitch@gmail.com
