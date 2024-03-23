import React from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import RoutineThumbnail from "../../components/ui/routines/RoutineThumbnail";
import { getUserActiveRoutine } from "@/model/User.model";
import AddRoutineThumbnail from "@/components/ui/routines/AddRoutineThumbnail";
import { RoutineType } from "@/types/routineType";
import { getAllRoutineTypes } from "@/model/RoutineType.model";
import RoutineCard from "@/components/ui/routines/RoutineCard";

const Page = async () => {
  const routines: Routine[] = await getAllUserRoutines(1);
  const activeRoutine: number = await getUserActiveRoutine(1);
  const routineTypes: RoutineType[] = await getAllRoutineTypes();
  console.log(routineTypes);
  return (
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
      <AddRoutineThumbnail routineTypes={routineTypes} />
    </RoutinesContainer>
  );
};

export default Page;
