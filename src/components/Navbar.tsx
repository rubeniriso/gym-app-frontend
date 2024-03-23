import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./theme-toggle";
const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 ">
      <div className="container flex gap-4 justify-between">
        <div>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/signin"
          >
            Sign in
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/signup"
          >
            Sign up
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/routines"
          >
            Routines
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
