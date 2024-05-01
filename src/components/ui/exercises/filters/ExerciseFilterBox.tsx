import { ExerciseFilter } from "@/types/exerciseFilter";
import React from "react";
interface ExerciseFilterBoxProps {
  children: any;
}
const ExerciseFilterBox = ({ children }: ExerciseFilterBoxProps) => {
  return <div>{children}</div>;
};

export default ExerciseFilterBox;
