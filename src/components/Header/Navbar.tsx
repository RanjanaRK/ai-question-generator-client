"use client";

import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import ModeToggle from "./ModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <>
      <nav className="border-b bg-background">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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
            <div className="   text-xl font-bold">
              AskPDF <span className="text-red-600"> AI</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />

            <Link
              href={"/auth/login"}
              className={buttonVariants({ variant: "default" })}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
