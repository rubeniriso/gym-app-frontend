import React from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import RoutineThumbnail from "../../components/ui/routines/RoutineThumbnail";
import { getUserActiveRoutine } from "@/model/User.model";
import { RoutineType } from "@/types/routineType";
import { getAllRoutineTypes } from "@/model/RoutineType.model";
import RoutineCard from "@/components/ui/routines/RoutineCard";
import DialogComponent from "@/components/ui/dialog/DialogComponent";
import AddRoutineCard from "@/components/ui/routines/AddRoutineCard";

const Page = async () => {
  const routines: Routine[] = await getAllUserRoutines(1);
  const activeRoutine: number = await getUserActiveRoutine(1);
  const routineTypes: RoutineType[] = await getAllRoutineTypes();
  return (
    <>
      <RoutinesContainer>
        {routines &&
          routines.map((routine: Routine, index) => (
            <RoutineCard
              key={index}
              routine={routine}
              isActive={activeRoutine == routine.routine_id}
              routineTypes={routineTypes}
            />
          ))}
        <AddRoutineCard routineTypes={routineTypes} />
      </RoutinesContainer>
    </>
  );
};

export default Page;
