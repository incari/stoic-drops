import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { sendEmails } from "../../utils/services/sendEmails";
import { User } from "@/utils/supabase/types";

export async function POST(req: Request) {
  "use server";

  const { emailAddress, language } = await req.json();
  const supabase = createClient();

  try {
    const { data, error }: PostgrestSingleResponse<User[]> = await supabase
      .from("users")
      .insert({
        email_address: emailAddress,
        language,
      })
      .select();

    /*     const { data, error } = await supabase
      .from("emails")
      .insert({
        email_address: emailAddress,
        subject: "another",
        subText: "subject",
        email_content: "htmlContent",
      })
      .select();
 */
    if (error) {
      console.error("Error inserting data:", error);
      return null;
    }

    if (!data || data.length === 0) {
      console.error("No data returned");
      return null;
    }
    const [{ user_id: userId }] = data;

    await sendEmails([{ emailAddress, userId, language, type: "welcome" }]);

    return new Response(
      JSON.stringify({
        message:
          "You have successfully subscribed with your email and updated your information!",
      }),
      { status: 200 }
    );
  } catch (e) {
    console.log("DB error: ", e);
    /*TODO  Handler other errors later.
    if (error instanceof Error) {
      if (error?.message.includes("UNIQUE constraint failed: users.email")) {
        return new Response(
          JSON.stringify({ error: "This email already exists." }),
          // 409 for conflict for existing resource
          { status: 409 }
        );
      }
    */
    return new Response(
      JSON.stringify({
        error: "Something went wrong, please try again.",
      }),
      { status: 500 }
    );
  }
}

/* export async function GET() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  console.log(notes);
  return new Response(
    JSON.stringify({
      notes,
    })
  );
}
 */

/* import { createUser } from "./createUser";
import { updateUserInfo } from "./updateUserInfo";
import { sendEmails } from "../../utils/services/sendEmails";

export interface ErrorRes extends Error {
  message: string;
  code?: string;
}

export async function POST(req: Request) {
  "use server";

  try {
    const { email, language, name, lastName, age } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
      });
    }

    // Create user
    const customerId = await createUser(email);

    // Add new fields if possible
    await updateUserInfo(customerId, language, name, lastName, age);

    // TODO Send welcome newsletter.
    // sendWelcomeEmail
    await sendEmails([
      { address: email, type: "welcome" },
      { address: "ing.racana@gmail.com", type: "welcome" },
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
 */
