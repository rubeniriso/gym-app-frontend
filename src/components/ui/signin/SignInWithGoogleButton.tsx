import React from "react";
import { Button } from "../button";
import Image from "next/image";
import { signIn } from "@/auth";
const SignInWithGoogleButton = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        type="submit"
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
      </Button>{" "}
    </form>
  );
};

export default SignInWithGoogleButton;
