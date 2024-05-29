import { EmailData, sendEmails } from "../../utils/services/sendEmails";

export async function GET(req: Request) {
  try {
    const testEmails: Array<EmailData> = [
      {
        address: "ing.racana@gmail.com",
        type: "daily",
      },
      {
        address: "ing.racana@gmail.com",
        type: "welcome",
      },
    ];

    await sendEmails(testEmails);

    return Response.json({ message: "sending emails" });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
