import { createClient } from "@libsql/client";
import { createUser } from "./createUser";
import { updateUserInfo } from "./updateUserInfo";
import { sendEmails } from "../../utils/services/sendEmails";

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
    const { email, language, name, lastName, age } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // Create user
    const customerId = await createUser(db, email);

    // Add new fields if possible
    await updateUserInfo(db, customerId, language, name, lastName, age);

    // TODO Send welcome newsletter.
    // sendWelcomeEmail
    sendEmails([
      { address: email, type: "welcome" },
      { address: "ing.racana@gmail.com", type: "daily" },
    ]);

    return new Response(
      JSON.stringify({
        message:
          "You have successfully subscribed with your email and updated your information!",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    if (error instanceof Error) {
      if (error?.message.includes("UNIQUE constraint failed: users.email")) {
        return new Response(
          JSON.stringify({ error: "This email already exists." }),
          // 409 for conflict for existing resource
          { status: 409 }
        );
      }
      return new Response(
        JSON.stringify({
          error: "Something went wrong, please try again.",
        }),
        { status: 500 }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "An unknown error occurred, please try again.",
        }),
        { status: 500 }
      );
    }
  }
}
