import { ReactNode } from "react";

interface MyComponentProps {
  children: ReactNode; // ReactNode represents any valid React child: JSX, string, array, etc.
}
const SignInForm = ({ children }: MyComponentProps) => {
  return <div className="">{children}</div>;
};

export default SignInForm;
