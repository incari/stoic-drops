import { NextResponse } from "next/server";
import OpenAI from "openai";
import { quote, translationPrompt } from "../../utils/chatgpt/prompts";
import { Model } from "openai/resources/models.mjs";
import { ChatModel } from "openai/resources/index.mjs";

const model: ChatModel = "gpt-3.5-turbo";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { lang } = await req.json();

  const body = quote(lang);

  const completion = await openai.chat.completions.create({
    model,
    messages: [{ role: "user", content: body }],
    /* temperature: 0.5,
    max_tokens: 400,
   */
  });

  const theResponse = completion.choices[0].message;

  return NextResponse.json({ output: theResponse }, { status: 200 });
}
