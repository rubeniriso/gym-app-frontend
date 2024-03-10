import { getAllUserRoutines } from "@/model/Routine.model";
import { Routine } from "@/app/types/routine";
interface RoutineThumbnailProps {}
export const RoutineThumbnail = async ({}: RoutineThumbnailProps) => {
  return (
    <div>
      {data.map((routine: Routine) => (
        <li key={routine.name}>
          <h2>{routine.name}</h2>
          <p>{routine.description}</p>
          <p>Week ID: {routine.week_id}</p>
        </li>
      ))}
    </div>
  );
};
