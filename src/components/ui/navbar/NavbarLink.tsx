"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import { buttonVariants } from "../button";
import { usePathname } from "next/navigation";
interface NavbarLinkProps {
  url: string;
  childElement: ReactNode;
}

const NavbarLink = ({ url, childElement }: NavbarLinkProps) => {
  const pathname = usePathname();

  const navbarLinkPrimaryVariant = buttonVariants({ variant: "secondary" });
  const navbarLinkSecondaryVariant = buttonVariants({ variant: "outline" });
  const navbarLinkClassName =
    pathname === url ? navbarLinkPrimaryVariant : navbarLinkSecondaryVariant;

  const childElementPrimaryVariant = "text-white";
  const childElementSecondaryVariant = "text-black";
  const childElementClassName =
    pathname === url
      ? childElementPrimaryVariant
      : childElementSecondaryVariant;

  return (
    <Link className={navbarLinkClassName + ""} href={url}>
      <p className={childElementClassName}> {childElement}</p>
    </Link>
  );
};

export default NavbarLink;
