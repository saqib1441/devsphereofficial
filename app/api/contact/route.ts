import { contactHtml } from "@/lib/mailTemplate";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data: ContactFormData = await req.json();

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${data.subject}`,
        html: contactHtml({
          subject: data.subject,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
      });
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email",
          error,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
        error,
      },
      { status: 400 }
    );
  }
}
