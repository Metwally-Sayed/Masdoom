import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("masdoomToken")?.value || "";
  const path = request.nextUrl.pathname;
  const ispublic = path === "/login" || path === "/signup" || path === "/";

  // Check if the user is attempting to access a public route and has a token
  if (ispublic && token) {
    // Check if the token is valid
    try {
      // const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
      const decodedToken = await verifyAuth(token);
      console.log(decodedToken);

      if (decodedToken) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
      }
    } catch (error) {
      // Token is invalid, redirect to login
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }

  // Check if the user is attempting to access a protected route without a token
  if (!ispublic && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/profile", "/profile/:path*"],
};
