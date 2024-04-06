import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { auth, signIn, signOut } from "@/auth";
import HomeIcon from "@mui/icons-material/Home";
const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 ">
      <div className="container flex gap-4 justify-between">
        <div>
          <Link className={buttonVariants({ variant: "outline" })} href="/">
            <HomeIcon />
          </Link>
          {session ? (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/routines"
            >
              Routines
            </Link>
          ) : (
            <></>
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
                  await signOut();
                }}
              >
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <Button type="submit">Sign In</Button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
