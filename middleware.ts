import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es", "zk", "de", "fr", "it", "hi", "ja", "ar", "ru"],

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es|zk|de|fr|it|hi|ja|ar|ru)/:path*"],
};
