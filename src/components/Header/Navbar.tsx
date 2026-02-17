"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");
  return (
    <>
      <nav className={`${!isAuthPage ? "border-b" : ""} bg-background`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src="/logopdf.png"
              alt="logo"
              width={60}
              height={60}
              className="block dark:hidden"
            />

            <Image
              src="/logopdf2.png"
              alt="logo"
              width={60}
              height={60}
              className="hidden dark:block"
            />
            <div className="text-xl font-bold">
              AskPDF <span className="text-red-600"> AI</span>
            </div>
          </Link>

          {!isAuthPage && (
            <div className="flex items-center gap-3">
              <ModeToggle />

              <Link
                href="/auth/login"
                className={buttonVariants({ variant: "default" })}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
