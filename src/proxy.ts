import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("connect.sid")?.value;
  console.log(req.cookies.getAll());
  console.log("token:", token);
  console.log("abcccc");

  if (token) {
    console.log("Authenticated");
    return NextResponse.next();
  }

  console.log("Not Authenticated");
  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: ["/", "/profile/:path*", "/upgrade-plan/:path*"],
};
