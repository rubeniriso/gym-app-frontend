import React from "react";
import RoutineThumbnail from "./RoutineThumbnail";

interface RoutinesContainerProps {
  children: React.ReactElement<typeof RoutineThumbnail>[]; // ReactNode can be any valid React child: JSX, string, number, etc.
}

const RoutinesContainer = ({ children }: RoutinesContainerProps) => {
  return <div className="">{children}</div>;
};

export default RoutinesContainer;
