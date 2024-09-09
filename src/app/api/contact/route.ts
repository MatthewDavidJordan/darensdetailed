// src/pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Or the recipient's email
      subject: "[NEW CONTACT] Contact Form Submission",
      html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p>This email was sent from your website contact form.</p>
          <p><em>Please reply directly to the sender if you need to respond.</em></p>
        `,
    });

    console.log("Email sent: ", info.response);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

// Handle preflight OPTIONS requests from outside domains
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
