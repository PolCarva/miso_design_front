// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { from, name, message } = await request.json();

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND API keys not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const emailToSend = {
    from: `${name} <website@pablocarvalho.dev>`,
    to: ["misomiso.design@gmail.com"],
    subject: `Mensaje de ${name} por la web de misodesign.work`,
    html: `<h1>Mensaje de ${name}</h1>
    <h2>De: ${name} (${from})</h2>
    <hr><br>
    <p style="display: block; font-size: 18px">
    ${message}
    </p><br><br>`,
  };

  try {
    await resend.emails.send(emailToSend);

    console.log("Email sent successfully");

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}