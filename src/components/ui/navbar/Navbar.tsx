"use client";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { ThemeToggle } from "../../theme-toggle";
import HomeIcon from "@mui/icons-material/Home";
import { useSession, signOut, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";
const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const primaryVariant = buttonVariants({ variant: "secondary" });
  const secondaryVariant = buttonVariants({ variant: "outline" });

  return (
    <nav className="py-2 border-b border-s-zinc-200 fixed w-full z-10 bg-background">
      <div className="container flex gap-4 justify-between">
        <div className="flex items-center gap-4">
          <NavbarLink url={"/"} childElement={<HomeIcon />}></NavbarLink>
          {session && (
            <NavbarLink
              url={"/routines"}
              childElement={"Routines"}
            ></NavbarLink>
          )}
          <NavbarLink
            url={"/exercises"}
            childElement={"Exercises"}
          ></NavbarLink>
        </div>
        <div className="flex flex-row gap-4">
          <ThemeToggle />
          {session && session.user ? (
            <div className="flex flex-row gap-4">
              <Avatar>
                <AvatarImage src={session.user.image as string} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Link
                href="#"
                onClick={() => signOut()}
                className={buttonVariants({ variant: "outline" })}
              >
                Sign out
              </Link>
            </div>
          ) : (
            <Link
              href="#"
              onClick={() => signIn()}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
