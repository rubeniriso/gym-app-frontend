import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode; // ReactNode represents any valid React child: JSX, string, array, etc.
}
const AuthForm = ({ children }: AuthProps) => {
  return <div className="">{children}</div>;
};

export default AuthForm;
