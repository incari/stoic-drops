import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function GET() {
  return NextResponse.json({ hello: "world" });
}

/* 
      const msg = {
        to: email,
        from: "your-verified-email@example.com", // Replace with your verified sender email
        subject: "Subscription Confirmation",
        text: "You have successfully subscribed to our newsletter!",
        html: "<strong>You have successfully subscribed to our newsletter!</strong>",
      };

      await sgMail.send(msg);
 */

export async function POST(req: NextRequest) {
  console.log("testing backend");

  if (req.method === "POST") {
    try {
      const { email } = await req.json();

      if (!email) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 }
        );
      }

      // Add your email sending logic here
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
}
