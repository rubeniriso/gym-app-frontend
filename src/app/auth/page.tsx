import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignInWithGoogleButton from "@/components/ui/auth/SignInWithGoogleButton";

const Page = async () => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
          <CardDescription>
            To access this page you have to be authenticated.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInWithGoogleButton />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
