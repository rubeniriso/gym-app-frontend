"use client";
import React, { useEffect, useState } from "react";
import RoutineThumbnail from "./RoutineThumbnail";
import AddRoutineThumbnail from "./AddRoutineThumbnail";
interface RoutinesContainerProps {
  children: React.ReactNode;
}
const RoutinesContainer = ({ children }: RoutinesContainerProps) => {
  return (
    <div className="flex flex-start flex-wrap gap-4 mx-5 my-5 flex-row">
      {children}
    </div>
  );
};

export default RoutinesContainer;
