import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const accessToken = req.cookies.get("connect.sid")?.value;

  if (accessToken) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: ["/", "/profile/:path*", "/upgrade-plan/:path*"],
};
