import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

const SignInCard = () => {
  return (
    <div className="flex items-center justify-center">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Sign in to access all our features!</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInWithGoogleButton />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInCard;
