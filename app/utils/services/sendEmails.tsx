import sendgrid from "@sendgrid/mail";
import { buildEmail } from "./emailContent";
import { createClient } from "@/utils/supabase/server";

export type EmailType = "welcome" | "daily"; //| "unsubscribe"   | "weekly";

export interface EmailData {
  emailAddress: string;
  userId: number;
  type: EmailType;
  language?: string;
}

export interface EmailDetails {
  htmlContent: string;
  subject: string;
}
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmails(emails: EmailData[]): Promise<void> {
  "use server";
  const supabase = createClient();

  for (const { emailAddress: to, type, language, userId } of emails) {
    try {
      // Generate email content with chatgpt api
      const { htmlContent, subject } = await buildEmail(type, language);
      if (htmlContent === "" || subject === "") continue; // Don't send email if no content

      /*      const htmlContent = `Hello from supabase ${language} + ${type}`;
      const subject = "Testing this"; */

      const subtext = "Guiding You to a More Intentional Life";

      const message = {
        to,
        from: "ing.racana@gmail.com", // Ensure this is a verified sender email in your SendGrid account
        subject,
        text: subtext,
        html: htmlContent,
      };

      // Send email
      await sendgrid.send(message);

      // Store email in DB
      const response = await supabase.from("emails").insert({
        user_id: userId,
        email_content: htmlContent,
        subject,
        subtext,
      });

      console.log("Response saving email: ", response);
      console.log(`Email sent to ${to}`); // Log success for each email
    } catch (error) {
      console.error(`Failed to send email to ${to}`, error); // Log errors for each failed attempt
    }
  }
}
