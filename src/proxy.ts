import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const proxy = async (request: NextRequest, response: NextResponse) => {
  const cookieStore = await cookies();

  // const token = req.cookies.get("connect.sid")?.value;
  const token = request.cookies.get("connect.sid")?.value;

  console.log(request.cookies.getAll());
  console.log("token:", token);
  console.log("abcccc");

  if (token) {
    console.log("Authenticated");
    return NextResponse.next();
  }

  console.log("Not Authenticated");
  return NextResponse.redirect(new URL("/auth/login", request.url));
};

export default proxy;

export const config = {
  matcher: ["/", "/profile/:path*", "/upgrade-plan/:path*"],
};
