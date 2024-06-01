"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WeekFormContent from "./WeekFormContent";
import { useDialog } from "../../hooks/useDialog";
import { createWeek } from "@/model/Week.model";
interface AddWeekProps {
  routineId: string;
}

const AddWeekThumbnail = ({ routineId }: AddWeekProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <WeekFormContent
        submit_id={routineId}
        title={"Create routine"}
        submitFunction={createWeek}
      />
    );
  };
  return (
    <button
      onClick={handleOpenDialog}
      className="text-black rounded-sm px-4 py-2 justify-between flex flex-row items-center bg-slate-200"
    >
      Add week
    </button>
  );
};

export default AddWeekThumbnail;
