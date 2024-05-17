import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";
import { NextResponse } from "next/server";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

export async function GET() {
  try {
    await sgClient.request({
      method: "GET",
      url: "/v3/marketing/contacts",
    });

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {}
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    console.log("email", email);

    if (!email) {
      return Response.json({ error: "Email is required" });
    }

    const msg = {
      to: email,
      from: "ing.racana@gmail.com",
      subject: "Subscription Confirmation",
      text: "You have successfully subscribed to our newsletter!",
      html: "<strong>You have successfully subscribed to our newsletter!</strong>",
    };

    await sgMail.send(msg);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    return Response.json({ message: error });
  }
}
