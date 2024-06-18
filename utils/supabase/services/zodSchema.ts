import { z } from "zod";

const SectionSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const NewsletterSchema = z.object({
  title: z.string(),
  sections: z.array(SectionSchema),
});

export type Newsletter = z.infer<typeof NewsletterSchema>;
