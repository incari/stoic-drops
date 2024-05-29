import {
  createNewsletterContent,
  createWelcomeEmailContent,
} from "./create-email";
import { EmailContentType } from "../email-templates/generic";
import { renderEmail } from "../email-templates/newsletter";
import { EmailDetails, EmailType } from "./sendEmails";

export async function buildEmail(
  type: EmailType,
  language?: string
): Promise<EmailDetails> {
  if (type === "welcome") {
    const content: EmailContentType = await createWelcomeEmailContent({
      language,
    });
    return {
      htmlContent: renderEmail(content),
      subject: "✨ Welcome to Your Journey!",
    };
  }
  if (type === "daily") {
    const content: EmailContentType = await createNewsletterContent({
      language,
    });
    return {
      htmlContent: renderEmail(content),
      subject: "✨ Your Daily Dose of Wisdom",
    };
  }
  return {
    htmlContent: "",
    subject: "",
  };
}
// TODO Extend to other options
/* 
  switch (type) {
    case "welcome":
      return {
        htmlContent: renderWelcomeMessage(content),
        subject: "✨ Welcome to Your Journey!",
      };
    case "daily":
      return {
        htmlContent: renderUnsubscribeMessage(content),
        subject: "✨ Your Daily Dose of Wisdom",
      };
    case "daily":
      return {
        htmlContent: renderNewsletter(content, "daily"),
        subject: "✨ Your Daily Dose of Wisdom",
      };

    case "weekly":
      return {
        htmlContent: renderNewsletter(content, "weekly"),
        subject: "✨ Your Weekly Dose of Wisdom",
      };

      case "unsubscribe":
      return {
        htmlContent: renderUnsubscribeMessage(content),
        subject: "We're sorry to see you go",
      }; 

    default:
      throw new Error(`Unknown email type: ${type}`);
    }
    */
