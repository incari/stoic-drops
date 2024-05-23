export const dynamic = "force-dynamic"; // static by default, unless reading the request
import sgMail from "@sendgrid/mail";
import sgClient from "@sendgrid/client";

export const runtime = "nodejs";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
sgClient.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function GET() {
  try {
    //TODO fix types
    const contacts: any = await sgClient.request({
      method: "GET",
      url: "/v3/marketing/contacts",
    });

    return new Response(contacts);
  } catch (error) {
    return new Response("hl");
  }
}
/*
export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    console.log("email", email);

    if (!email) {
      return Response.json({ error: "Email is required" });
    }
    const time = new Date();

    const msg = {
      to: "ing.racana@gmail.com",
      from: "ing.racana@gmail.com",
      subject: "Subscription Confirmation",
      text: "You have successfully subscribed to our newsletter!",
      html: `
      <div>
      Automatically send it at:  <strong>${time}!</strong>
      </div>
     `,
    };

    await sgMail.send(msg);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    return Response.json({ message: error });
  }
}

// /api/sendEmail.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const msg = {
        to: "your-email@example.com", // Change to your recipient
        from: "your-sender-email@example.com", // Change to your verified sender
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
      };

      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent!" });
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
 */
