import { createClient } from "@libsql/client";
import { sendEmails } from "../send-email/sendEmail";

const config = {
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
};

export async function GET(req: Request) {
  const db = createClient(config);

  try {
    const customers = await db.execute({
      sql: "SELECT email FROM Customers",
      args: [],
    });

    const emailList: Array<string> = customers.rows.map(
      (item) => item.Email as string
    );

    await sendEmails(emailList);

    return Response.json(customers.rows);
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  return new Response(null, { status: 405 });
}
