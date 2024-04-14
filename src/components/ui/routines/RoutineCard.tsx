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
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col shadow-lg rounded-xl dark:bg-zinc-700 relative ">
      <a className="hover:cursor-pointer">
        <RoutineThumbnail
          icon_url={routine.icon_url}
          icon_alt_text={routine.icon_alt_text}
          routine_id={routine.routine_id}
        />
        <RoutineInfoBox
          name={routine.name}
          description={routine.description}
          isActive={isActive}
          user_id={session.user.id as string}
          routineTypes={routineTypes}
          routine_id={routine.routine_id}
        />
      </a>
    </div>
  );
};

export default RoutineCard;
