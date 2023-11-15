import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/profile", "/profile/:path*"],
};
