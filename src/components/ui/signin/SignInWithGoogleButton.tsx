"use client";
import React from "react";
import { Button } from "../button";
import Image from "next/image";
import { signIn } from "next-auth/react";
const SignInWithGoogleButton = async () => {
  return (
    <Button
      onClick={() => signIn("google")}
      variant={"outline"}
      className="w-full items-center flex gap-2"
    >
      <Image
        src={`https://authjs.dev/img/providers/google.svg`}
        width={25}
        height={25}
        alt="Google icon"
      />
      <p className="">Sign in with Google</p>
    </Button>
  );
};

export default SignInWithGoogleButton;
