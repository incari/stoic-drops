import sendgrid from "@sendgrid/mail";
import { buildEmail } from "./emailContent";

export type EmailType = "welcome" | "daily"; //| "unsubscribe"   | "weekly";

export interface EmailData {
  address: string;
  type: EmailType;
  language?: string;
}

export interface EmailDetails {
  htmlContent: string;
  subject: string;
}
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmails(emails: EmailData[]): Promise<void> {
  for (const { address, type, language } of emails) {
    try {
      const { htmlContent, subject } = await buildEmail(type, language);
      if (htmlContent === "" || subject === "") continue; // Don't send email if no content

      const message = {
        to: address,
        from: "ing.racana@gmail.com", // Ensure this is a verified sender email in your SendGrid account
        subject,
        text: "Guiding You to a More Intentional Life",
        html: htmlContent,
      };

      // Send email
      await sendgrid.send(message);
      console.log(`Email sent to ${address}`); // Log success for each email
    } catch (error) {
      console.error(`Failed to send email to ${address}`, error); // Log errors for each failed attempt
    }
  }
}
