import React from "react";
import RoutineThumbnail from "./RoutineThumbnail";
interface RoutinesContainerProps {
  children: React.ReactElement<typeof RoutineThumbnail>[];
}
const RoutinesContainer = async ({ children }: RoutinesContainerProps) => {
  return <div className="flex flex-row gap-4">{children}</div>;
};

export default RoutinesContainer;
