// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, email, message, services } = await req.json();

  // Helper function to format selected services
  const formatSelectedServices = (serviceCategory: any) => {
    return Object.entries(serviceCategory)
      .filter(([_, selected]) => selected)
      .map(([service]) => {
        // Convert camelCase to proper text
        return service
          .replace(/([A-Z])/g, " $1") // Add space before capital letters
          .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
          .replace(/([a-z])([A-Z])/g, "$1 $2"); // Add space between words
      })
      .join("\n      • "); // Add bullet points
  };

  // Get selected services
  const selectedExteriorServices = formatSelectedServices(services.exterior);
  const selectedInteriorServices = formatSelectedServices(services.interior);

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
      subject: "[NEW CONTACT] Service Request Form Submission",
      html: `
          <h2>New Service Request Form Submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          ${
            selectedExteriorServices
              ? `
          <p><strong>Selected Exterior Services:</strong></p>
          <p style="margin-left: 20px;">
            • ${selectedExteriorServices}
          </p>
          `
              : ""
          }
          
          ${
            selectedInteriorServices
              ? `
          <p><strong>Selected Interior Services:</strong></p>
          <p style="margin-left: 20px;">
            • ${selectedInteriorServices}
          </p>
          `
              : ""
          }

          <p><strong>Additional Message:</strong></p>
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

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
