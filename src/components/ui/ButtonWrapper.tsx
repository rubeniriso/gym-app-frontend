import React, { ReactNode } from "react";
interface ButtonWrapperProps {
  children: ReactNode;
}
const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <div className="flex flex-col w-full gap-4 pt-4">{children}</div>;
};

export default ButtonWrapper;
