import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function GET() {
  return NextResponse.json({ hello: "worlkd" });
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
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("testing backend");

  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  } else {
  }
}
