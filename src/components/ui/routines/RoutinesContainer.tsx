"use client";
import React, { useEffect, useState } from "react";
import RoutineThumbnail from "./RoutineThumbnail";
import AddRoutineThumbnail from "./AddRoutineCard";
import DialogComponent from "../dialog/DialogComponent";
interface RoutinesContainerProps {
  children: React.ReactNode;
}
const RoutinesContainer = ({ children }: RoutinesContainerProps) => {
  return (
    <div className="flex justify-center  my-5 flex-row">
      <div className="w-[75%] flex flex-wrap gap-8">{children}</div>

      <DialogComponent />
    </div>
  );
};

export default RoutinesContainer;
