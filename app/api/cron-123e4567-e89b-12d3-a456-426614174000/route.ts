import { sendEmails } from "../send-email/sendEmail";

export async function GET(req: Request) {
  try {
    const myEmail = ["ing.racana@gmail.com"];

    await sendEmails(myEmail);

    return Response.json({ message: "sending emails" });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }));
  }
}
