import { NextResponse } from "next/server";

const LOCALES = ["en", "es"];
const SPANISH_LANGS = ["es", "ca", "gl", "eu"];

function preferredLocale(request) {
  const accept = request.headers.get("accept-language") || "";
  const primary = accept.split(",")[0].trim().slice(0, 2).toLowerCase();
  return SPANISH_LANGS.includes(primary) ? "es" : "en";
}

// Every page lives under /en or /es. Anything else (including "/") is
// redirected to the visitor's language; crawlers without Accept-Language get /en.
export function middleware(request) {
  const { pathname, search } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (LOCALES.includes(first)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  url.search = search;
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Vary", "Accept-Language");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
