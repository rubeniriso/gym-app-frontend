import { Routine } from "@/app/types/routine";
import Image from "next/image";
interface RoutineThumbnailProps {
  routine: Routine;
}
const RoutineThumbnail = async ({ routine }: RoutineThumbnailProps) => {
  return (
    <div>
      <Image
        alt={routine.iconAltText}
        src={routine.iconUrl}
        width={400}
        height={400}
      />
      <h2>{routine.name}</h2>
      <p>{routine.description}</p>
    </div>
  );
};

export default RoutineThumbnail;
