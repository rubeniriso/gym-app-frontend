import React from "react";
interface WeekWrapperProps {
  children: React.ReactNode;
}
const WeekWrapper = async ({ children }: WeekWrapperProps) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

export default WeekWrapper;
