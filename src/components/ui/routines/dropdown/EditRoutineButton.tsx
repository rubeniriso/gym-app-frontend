import React from "react";
import { useDialog } from "@/components/hooks/useDialog"; // Import the useDialog hook
import { DropdownMenuItem } from "../../dropdown-menu";
import RoutineFormContent from "../formContent/RoutineFormContent";
import { RoutineType } from "@/types/routineType";
import { editRoutine } from "@/model/Routine.model";

interface EditRoutineButtonProps {
  routineTypes: RoutineType[];
  routine_id: string;
}

const EditRoutineButton = ({
  routineTypes,
  routine_id,
}: EditRoutineButtonProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <RoutineFormContent
        title={"Edit routine"}
        submitFunction={editRoutine}
        routineTypes={routineTypes}
        submit_id={routine_id}
      />
    );
  };

  return (
    <DropdownMenuItem>
      <button className="w-full text-start" onClick={handleOpenDialog}>
        Edit
      </button>
    </DropdownMenuItem>
  );
};

export default EditRoutineButton;
