"use client";
import React, { useEffect, useState } from "react";
import RoutineThumbnail from "./RoutineThumbnail";
import AddRoutineThumbnail from "./AddRoutineThumbnail";
interface RoutinesContainerProps {
  children: React.ReactNode;
}
const RoutinesContainer = ({ children }: RoutinesContainerProps) => {
  return <div className="flex flex-row gap-4">{children}</div>;
};

export default RoutinesContainer;
