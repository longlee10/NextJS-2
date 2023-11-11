import Welcome from "@/emails/Welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "test@mailinator.com",
    subject: "...",
    react: <Welcome name="Hoang Le" />,
  });

  return NextResponse.json({});
}
