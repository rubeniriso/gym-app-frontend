import React from "react";
import RoutineThumbnail from "./RoutineThumbnail";
import AddRoutineThumbnail from "./AddRoutineThumbnail";
interface RoutinesContainerProps {
  children: React.ReactNode;
}
const RoutinesContainer = async ({ children }: RoutinesContainerProps) => {
  return <div className="flex flex-row gap-4">{children}</div>;
};

export default RoutinesContainer;
