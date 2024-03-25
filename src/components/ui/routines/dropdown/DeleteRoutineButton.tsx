import React from "react";
import { useDialog } from "@/components/hooks/useDialog"; // Import the useDialog hook
import { DropdownMenuItem } from "../../dropdown-menu";
import RoutineFormContent from "../formContent/RoutineFormContent";
import { RoutineType } from "@/types/routineType";
import { deleteRoutine } from "@/model/Routine.model";
import DeleteFormContent from "../formContent/DeleteFormContent";

interface EditRoutineButtonProps {
  routine_id: string;
}

const EditRoutineButton = ({ routine_id }: EditRoutineButtonProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <DeleteFormContent
        title={"Delete routine"}
        submitFunction={deleteRoutine}
        submit_id={routine_id}
      />
    );
  };

  return (
    <DropdownMenuItem>
      <button className="w-full text-start" onClick={handleOpenDialog}>
        Delete
      </button>
    </DropdownMenuItem>
  );
};

export default EditRoutineButton;
