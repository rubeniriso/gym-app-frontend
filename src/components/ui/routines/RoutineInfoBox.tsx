"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { RoutineType } from "@/types/routineType";
import RoutineDropdownMenu from "./dropdown/RoutineDropdownMenu";
interface RoutineInfoBoxProps {
  name: string;
  description: string;
  routine_id: string;
  isActive: boolean;
  handleChange: () => void;
  routineTypes: RoutineType[];
}
const RoutineInfoBox = async ({
  name,
  description,
  routine_id,
  isActive,
  handleChange,
  routineTypes,
}: RoutineInfoBoxProps) => {
  return (
    <>
      <div className="max-w-[300px] max-h-[300px] flex flex-row px-6 justify-between py-4 border-t">
        <div>
          <h2>{name}</h2>
          <p className="overflow-x-clip">{description}</p>
        </div>
        <div>
          <RoutineDropdownMenu
            routine_id={routine_id}
            routineTypes={routineTypes}
          />
        </div>
      </div>
      <div>
        <Label></Label>
        <Switch
          className="absolute top-4 right-4"
          checked={isActive}
          onClick={handleChange}
        />
      </div>
    </>
  );
};

export default RoutineInfoBox;
