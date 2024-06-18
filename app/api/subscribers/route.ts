import { createClient } from "@libsql/client";
import { db } from "../dbClient";
export const dynamic = "force-dynamic"; // static by default, unless reading the request

export async function GET(request: Request) {
  const userEmails = await db.execute({
    sql: "SELECT id, email FROM users",
    args: [],
  });
  const emails = JSON.stringify(userEmails);

  return new Response(emails);
}
