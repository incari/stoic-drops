import { ChatModel } from "openai/resources/index.mjs";
import OpenAI from "openai";
import { newsletterPrompt } from "../chatgpt/prompts";
import { getRandomQuote } from "../chatgpt/quotes";
import { welcomeContent } from "../email-templates/welcome";

const model: ChatModel = "gpt-3.5-turbo"; //"gpt-4o"; //

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

type Props = {
  language?: string;
};

const createNewsletterContent = async ({ language = "en" }: Props) => {
  const body = newsletterPrompt(getRandomQuote());

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
    /*
    temperature: 0.5,
    max_tokens: 400,
     */
  });

  const res = (await completion.choices[0].message.content) || "";

  const parse = JSON.parse(extractJsonContent(res));
  try {
    return parse;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return {};
};

const createWelcomeEmailContent = async ({ language = "en" }: Props) => {
  // Return the english content directly.
  if (language === "en") {
    return welcomeContent;
  }

  // Else translate it.
  const completion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: "assistant",
        content: `
          ${welcomeContent}
          Translate it to the language enclosed by [] on the ISO 639-1 code format: [${language}] `,
      },
    ],
    /*
    temperature: 0.5,
    max_tokens: 400,
     */
  });
  const res = (await completion.choices[0].message.content) || "";

  const parse = JSON.parse(extractJsonContent(res));
  try {
    return parse;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return {};
};

export { createNewsletterContent, createWelcomeEmailContent };
