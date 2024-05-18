import createMiddleware from "next-intl/middleware";
import { locales } from "./app/constants/languages";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match any internationalized pathnames
  matcher: ["/", "/:locale([a-z]{2,})/:path*"],
};
