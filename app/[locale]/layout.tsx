import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log("gola", messages);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <h1>hola</h1>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
