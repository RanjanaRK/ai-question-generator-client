import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;
  const refreshToken = req.cookies.get("refresh_token")?.value;

  if (accessToken || refreshToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: ["/profile/:path*", "/upgrade-plan/:path*"],
};
