import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const ispublic = path === "/login" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  if (ispublic && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!ispublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/login", "/signup", "/profile", "/profile/:path*"],
};
