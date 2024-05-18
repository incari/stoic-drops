import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./app/constants/languages";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  let messages;

  try {
    messages = (await import(`./messages/${locale}.json`)).default;
  } catch (error) {
    // If the locale file doesn't exist, fallback to the default locale (en)
    try {
      messages = (await import(`./messages/en.json`)).default;
    } catch (error) {
      notFound();
    }
  }

  return {
    messages,
  };
});
