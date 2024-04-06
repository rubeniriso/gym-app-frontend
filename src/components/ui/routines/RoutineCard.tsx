"use client";
import { Routine } from "@/types/routine";
import { activateUserRoutine } from "@/model/UserSettings.model";
import RoutineThumbnail from "./RoutineThumbnail";
import RoutineInfoBox from "./RoutineInfoBox";
import { RoutineType } from "@/types/routineType";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
interface RoutineThumbnailProps {
  routine: Routine;
  isActive: boolean;
  routineTypes: RoutineType[];
}
const RoutineCard = async ({
  routine,
  isActive,
  routineTypes,
}: RoutineThumbnailProps) => {
  const session = await auth();
  if (!session || !session.user){
    redirect("/api/auth/signin");
  }
  const handleChange = async () => {
    if (session != undefined && session.user != undefined)
      activateUserRoutine(session.user.id as string, routine.routine_id);
  };
  
  return (
    <div className="flex flex-col shadow-md rounded-xl relative">
      <a className="hover:cursor-pointer">
        <RoutineThumbnail
          icon_url={routine.icon_url}
          icon_alt_text={routine.icon_alt_text}
        />
        <RoutineInfoBox
          name={routine.name}
          description={routine.description}
          isActive={isActive}
          handleChange={handleChange}
          routineTypes={routineTypes}
          routine_id={routine.routine_id.toString()}
        />
      </a>
    </div>
  );
};

export default RoutineCard;
