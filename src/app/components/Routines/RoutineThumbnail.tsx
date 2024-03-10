import React from "react";
import { Routine } from "@/app/types/routine";

interface RoutinesContainerProps {
  routines?: Routine[];
}

const RoutinesContainer = ({ routines }: RoutinesContainerProps) => {
  return (
    <div className="">
      {routines &&
        routines.map((routine) => <div key={routine.routine_id}>{}</div>)}
    </div>
  );
};

export default RoutinesContainer;
