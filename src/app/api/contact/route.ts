import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, company, message } = await req.json();

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "CCYBER Contact Form <onboarding@resend.dev>",
    to: "rod@ccyberllc.com",
    replyTo: email,
    subject: `New Inquiry from ${firstName} ${lastName}${company ? ` — ${company}` : ""}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}
    `.trim(),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
