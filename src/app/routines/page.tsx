import React from "react";
import RoutinesContainer from "../../components/ui/routines/RoutinesContainer";
import { Routine } from "../../types/routine";
import { getAllUserRoutines } from "@/model/Routine.model";
import { getUserActiveRoutine } from "@/model/UserSettings.model";
import { RoutineType } from "@/types/routineType";
import { getAllRoutineTypes } from "@/model/RoutineType.model";
import RoutineCard from "@/components/ui/routines/RoutineCard";
import AddRoutineCard from "@/components/ui/routines/AddRoutineCard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  console.log(session);
  if (!session || !session.user) redirect("/api/auth/signin");
  const routines: Routine[] = await getAllUserRoutines(
    session.user.id as string
  );
  const activeRoutine: number = await getUserActiveRoutine(
    session.user.id as string
  );
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
