import sendgrid from "@sendgrid/mail";
import { renderNewsletter } from "../../components/email-templates/newsletter";
import { createEmail } from "../chat-gpt/create-email";
import { Newsletter } from "../../components/email-templates/generic";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmails(emails: string[]): Promise<void> {
  const content: Newsletter = await createEmail({ language: "es" });

  for (const email of emails) {
    const message = {
      to: email,
      from: "ing.racana@gmail.com", // Ensure this is a verified sender email in your SendGrid account
      subject: "✨ Your Dose of Wisdom",
      text: "Guiding You to a More Intentional Life",
      html: renderNewsletter(content),
    };

    try {
      //   await sendgrid.send(message);
      console.log(`Email sent to ${email}`); // Optional: Log success for each email
    } catch (error) {
      console.error(`Failed to send email to ${email}`, error); // Log errors for each failed attempt
    }
  }
}
