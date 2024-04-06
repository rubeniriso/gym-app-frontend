import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import EditRoutineButton from "./EditRoutineButton";
import { RoutineType } from "@/types/routineType";
import DeleteRoutineButton from "./DeleteRoutineButton";
interface RoutineDropdownMenuProps {
  routine_id: string;
  routineTypes: RoutineType[];
}
const RoutineDropdownMenu = ({
  routine_id,
  routineTypes,
}: RoutineDropdownMenuProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsHorizontalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Routine</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <EditRoutineButton
            routine_id={routine_id}
            routineTypes={routineTypes}
          />
          <DeleteRoutineButton routine_id={routine_id} />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default RoutineDropdownMenu;
