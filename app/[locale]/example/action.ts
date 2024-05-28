"use server";

import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import {
  newsletterPrompt,
  newsletterPromptV2,
} from "../../utils/chatgpt/prompts";
import { getRandomQuote } from "../../utils/chatgpt/quotes";
import { google } from "@ai-sdk/google";

const SectionSchema = z.object({
  title: z.string(),
  content: z.string(),
});

const NewsletterSchema = z.object({
  title: z.string(),
  sections: z.array(SectionSchema),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;

export const generateNewsletter = async (): Promise<Newsletter> => {
  const prompt = newsletterPromptV2(getRandomQuote(), "en");

  const { object: newsletter } = await generateObject({
    model: openai("gpt-4o"),
    /*
    google("models/gemini-1.5-pro-latest"),
    */
    temperature: 0.5,
    prompt,
    schema: NewsletterSchema,
  });
  return newsletter;
};
