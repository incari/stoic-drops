import { ChatModel } from "openai/resources/index.mjs";
import OpenAI from "openai";
import { newsletterPrompt, newsletterPromptV2 } from "../chatgpt/prompts";
import { getRandomQuote } from "../chatgpt/quotes";
import { welcomeContent } from "../email-templates/welcome";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NewsletterSchema } from "@/utils/supabase/services/zodSchema";

/* const model: ChatModel = "gpt-3.5-turbo"; //"gpt-4o"; //

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}); */
/*

  const completion = await openai.chat.completions.create({
    model,
    messages: [
      { role: "assistant", content: body },
      {
        role: "assistant",
        content: `
          Translate it to the language enclosed by [] on the ISO 639-1 code format: [${language}] `,
      },
    ],
    
    temperature: 0.5,
    max_tokens: 400,
   
    });
    
    const res = (await completion.choices[0].message.content) || "";
   

function extractJsonContent(input: string): string {
  // Define a regular expression to match JSON content.
  const regex = /```json([\s\S]*?)```/g;

  const matches = input.match(regex);

  // If matches are found, remove the ```json and ``` markers, otherwise return the initial string.
  if (matches) {
    return matches.map((match) => match.replace(/```json|```/g, "")).join("\n");
  }

  return input;
}
 */
type Props = {
  language?: string;
};

const createNewsletterContent = async ({ language = "en" }: Props) => {
  // const body = newsletterPrompt(getRandomQuote());

  const prompt = newsletterPromptV2(getRandomQuote(), language);

  try {
    const { object: newsletter } = await generateObject({
      model: google("models/gemini-1.5-pro-latest"),
      temperature: 0.5,
      prompt,
      schema: NewsletterSchema,
    });

    return newsletter;
  } catch (error) {
    console.error("Error creating the email:", error);
  }
};

const createWelcomeEmailContent = async ({ language = "en" }: Props) => {
  // Return the english content directly.
  /*   if (language === "en") {
    return welcomeContent;
  } */

  const prompt = `
  ${welcomeContent}
  Translate it to the language enclosed by [] on the ISO 639-1 code format: [${language}] `;

  try {
    const { object: newsletter } = await generateObject({
      model: google("models/gemini-1.5-pro-latest"),
      temperature: 0.5,
      prompt,
      schema: NewsletterSchema,
    });

    return newsletter;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
};

export { createNewsletterContent, createWelcomeEmailContent };
