import { createClient } from "@libsql/client";

const config = {
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
};

export interface ErrorRes extends Error {
  message: string;
  code?: string;
}

export async function POST(req: Request) {
  const db = createClient(config);

  try {
    if (req.method === "POST") {
      const { email } = await req.json();
      if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), {
          status: 400,
        });
      }

      await db.execute({
        sql: "INSERT INTO users (Email) VALUES (?)",
        args: [email],
      });

      return new Response(
        JSON.stringify({
          message: "You have successfully subscribed with your email!",
        }),
        { status: 200 }
      );
    }
  } catch (error: any) {
    if (error instanceof Error) {
      console.log(error.message);
      if (error?.message.includes("UNIQUE constraint failed: users.email")) {
        return new Response(
          JSON.stringify({ error: "This email already exists." }),
          { status: 409 } // Use 409 Conflict for existing resource
        );
      }
      return new Response(
        JSON.stringify({
          error: "Something went wrong, please try again.",
        }),
        { status: 500 }
      );
    } else {
      console.error("Unknown error occurred:", error);
      return new Response(
        JSON.stringify({
          error: "An unknown error occurred, please try again.",
        }),
        { status: 500 }
      );
    }
  }
}
