import ButtonWrapper from "@/components/ui/ButtonWrapper";
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/ui/form/AuthForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="">
      <AuthForm>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="E-mail" />

        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Username" />

        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="********" />

        <Label htmlFor="repeatPassword">Repeat password</Label>
        <Input id="repeatPassword" type="password" placeholder="********" />
        <ButtonWrapper>
          <Button>Sign up!</Button>
        </ButtonWrapper>
      </AuthForm>
    </div>
  );
};

export default page;
