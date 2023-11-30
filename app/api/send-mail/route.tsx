import ContactTemplate from "@/email/ContactTemplate";
import Email from "@/email/Welcome";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, message } = await request.json();
  try {
    await resend.emails.send({
      from: "believe@merza.co.zw",
      to: email,
      subject: "An enquiry has been filed from contact us page",
      react: <ContactTemplate email={email} message={message} />,
    });
  } catch (err) {
    return NextResponse.json({
      status: "500",
      message: "Something failed",
    });
  }

  return NextResponse.json({
    status: "200",
    message: "Email sent successful",
  });
}
