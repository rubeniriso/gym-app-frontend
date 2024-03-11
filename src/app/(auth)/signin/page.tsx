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
        <Input type="email" placeholder="E-mail" />
        <Label htmlFor="password">Password</Label>
        <Input type="password" placeholder="********" />
        <ButtonWrapper>
          <Button>Sign in</Button>
          <Button>Forgot password</Button>
        </ButtonWrapper>
      </AuthForm>
    </div>
  );
};

export default page;
