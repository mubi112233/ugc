import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect root to /en
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url), 308);
  }

  // Redirect /ge/* to /de/* (canonical German path)
  if (pathname.startsWith("/ge")) {
    const newPath = pathname.replace(/^\/ge/, "/de");
    return NextResponse.redirect(new URL(newPath + request.nextUrl.search, request.url), 308);
  }

  const htmlLang =
    pathname.startsWith("/de") ? "de" : "en";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-html-lang", htmlLang);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
