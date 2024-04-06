import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../card";
import SignInWithGoogleButton from "./SignInWithGoogleButton";

const SignInCard = () => {
  return (
    <Card>
      <CardTitle>Sign in</CardTitle>
      <CardDescription>Sign in to access all features!</CardDescription>
      <CardContent>
        <SignInWithGoogleButton />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
