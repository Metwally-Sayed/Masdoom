import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";

  const verifyiedtoken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  const path = request.nextUrl.pathname;

  const ispublic = path === "/login" || path === "/signup" || path === "/";

  if (ispublic && verifyiedtoken) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!ispublic && !verifyiedtoken) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/profile", "/profile/:path*"],
};
