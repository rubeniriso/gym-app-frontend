"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import RoutineFormContent from "./formContent/RoutineFormContent";
import { RoutineType } from "@/types/routineType";
import { createRoutine, editRoutine } from "@/model/Routine.model";
import { useDialog } from "@/components/hooks/useDialog";
interface AddRoutineThumbnailProps {
  routineTypes: RoutineType[];
}

const AddRoutineCard = ({ routineTypes }: AddRoutineThumbnailProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <RoutineFormContent
        submit_id="1"
        title={"Create routine"}
        submitFunction={createRoutine}
        routineTypes={routineTypes}
      />
    );
  };
  return (
    <button
      onClick={handleOpenDialog}
      className="flex flex-row items-center justify-center w-[300px] h-[400px] bg-slate-200"
    >
      <AddCircleOutlineIcon width={700} height={700} />
    </button>
  );
};

export default AddRoutineCard;
