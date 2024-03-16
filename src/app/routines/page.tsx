import React from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import RoutineThumbnail from "../../components/ui/routines/RoutineThumbnail";
import { getUserActiveRoutine } from "@/model/User.model";
import AddRoutineThumbnail from "@/components/ui/routines/AddRoutineThumbnail";

const Page = async () => {
  const routines: Routine[] = await getAllUserRoutines(1);
  const activeRoutine: number = await getUserActiveRoutine(1);
  return (
    <RoutinesContainer>
      {routines &&
        routines.map((routine: Routine, index) => (
          <RoutineThumbnail
            key={index}
            routine={routine}
            isActive={activeRoutine == routine.routine_id}
          />
        ))}
      <AddRoutineThumbnail />
    </RoutinesContainer>
  );
};

export default Page;
