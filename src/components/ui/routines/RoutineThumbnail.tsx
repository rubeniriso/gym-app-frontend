import { Routine } from "@/types/routine";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
interface RoutineThumbnailProps {
  routine: Routine;
  isActive: boolean;
}
const RoutineThumbnail = async ({
  routine,
  isActive,
}: RoutineThumbnailProps) => {
  console.log(routine);
  return (
    <div className="flex flex-col">
      <Image
        alt={routine.iconAltText}
        src={routine.icon_url}
        width={400}
        height={400}
      />
      <div className="flex flex-row">
        <div>
          <h2>{routine.name}</h2>
          <p>{routine.description}</p>
        </div>
        <Checkbox checked={isActive} />
      </div>
    </div>
  );
};

export default RoutineThumbnail;
