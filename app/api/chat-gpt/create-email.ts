import { ChatModel } from "openai/resources/index.mjs";
import OpenAI from "openai";
import { newsletterPrompt } from "../../utils/chatgpt/prompts";
import { getRandomQuote } from "../../utils/chatgpt/quotes";

const model: ChatModel = "gpt-3.5-turbo";

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

const createEmail = async ({ language }: { language: string }) => {
  const body = newsletterPrompt(getRandomQuote(), language);

  const completion = await openai.chat.completions.create({
    model,
    messages: [{ role: "user", content: body }],
    temperature: 0.5,
    /*max_tokens: 400,
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

export { createEmail };
