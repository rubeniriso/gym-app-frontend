"use client";
import { Routine } from "@/types/routine";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
interface RoutineThumbnailProps {
  routine: Routine;
  isActive: boolean;
}
const RoutineThumbnail = async ({
  routine,
  isActive,
}: RoutineThumbnailProps) => {
  return (
    <div className="flex flex-col">
      <a onClick={goToRoutine} className="hover:cursor-pointer">
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
          <div>
            <Label />
            <Checkbox checked={isActive} />
          </div>
        </div>
      </a>
    </div>
  );
};

const goToRoutine = () => {
  // TODO
  console.log("do smth");
};

export default RoutineThumbnail;
