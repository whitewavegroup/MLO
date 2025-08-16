import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    if (!token) return NextResponse.json({ ok: false, error: "Missing token" }, { status: 400 });

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) return NextResponse.json({ ok: false, error: "Missing RECAPTCHA_SECRET_KEY" }, { status: 500 });

    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);

    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const data = await res.json();
    const minScore = Number(process.env.RECAPTCHA_MIN_SCORE || "0.5");
    const ok = !!data.success && (typeof data.score !== "number" || data.score >= minScore);
    return NextResponse.json({ ok, score: data.score ?? null, raw: data });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "Unknown error" }, { status: 500 });
  }
}
