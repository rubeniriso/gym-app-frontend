import React from "react";
interface WeekWrapperProps {
  children: React.ReactNode;
}
const WeekWrapper = async ({ children }: WeekWrapperProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div>{children}</div>
    </div>
  );
};

export default WeekWrapper;
