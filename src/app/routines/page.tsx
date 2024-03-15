import React, { useEffect, useState } from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { useRouter } from "next/navigation";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import RoutineThumbnail from "../../components/ui/routines/RoutineThumbnail";
import { getUserActiveRoutine } from "@/model/User.model";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Page = async () => {
  const routines: Routine[] = await getAllUserRoutines(1);
  //const activeRoutine: number = await getUserActiveRoutine(1);
  const activeRoutine: number = 3;
  return (
    <RoutinesContainer>
      {routines &&
        routines.map((routine: Routine, index) => (
          <div className="flex flex-col">
            <RoutineThumbnail
              key={index}
              routine={routine}
              isActive={activeRoutine == routine.routine_id}
            />
          </div>
        ))}
    </RoutinesContainer>
  );
};

export default Page;
