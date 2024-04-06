import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ThemeToggle } from "../theme-toggle";
import { auth, signIn, signOut } from "@/auth";
import HomeIcon from "@mui/icons-material/Home";
import { redirect } from "next/navigation";
const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="py-2 border-b border-s-zinc-200 fixed w-full z-10">
      <div className="container flex gap-4 justify-between">
        <div className="flex items-center gap-4">
          <Link className={buttonVariants({ variant: "outline" })} href="/">
            <HomeIcon />
          </Link>
          {session && (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/routines"
            >
              Routines
            </Link>
          )}
        </div>
        <div className="flex flex-row gap-4">
          <ThemeToggle />
          {session && session.user ? (
            <div className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src={session.user.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirect: true, redirectTo: `/` });
                }}
              >
                <Button variant={"outline"}>Sign Out</Button>
              </form>
            </div>
          ) : (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/auth"}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
