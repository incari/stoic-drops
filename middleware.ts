import { type NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./app/constants/languages";
/*  SUPABASE auth ?
import { updateSession } from "@/utils/supabase/middleware";
export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request);
}
 */
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  localeDetection: false,
  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match any internationalized pathnames
  matcher: ["/", "/:locale([a-z]{2})/:path*"],
};
