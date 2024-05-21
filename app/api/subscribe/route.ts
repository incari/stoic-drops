import { createClient } from "@libsql/client";

const config = {
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
};

export async function POST(req: Request) {
  const db = createClient(config);

  try {
    if (req.method === "POST") {
      const { email } = await req.json();
      console.log(email);
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
          status: 400,
        });
      }

      await db.execute({
        sql: "INSERT INTO Customers (Email) VALUES (?)",
        args: [email],
      });

      return Response.json({
        message: "You have successfully subscribed with your email!",
      });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 501,
    });
  }

  return new Response(null, { status: 405 });
}
