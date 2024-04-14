"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TrainingDayFormContent from "./TrainingDayFormContent";
import { useDialog } from "../../hooks/useDialog";
import { createTrainingDay } from "@/model/TrainingDay.model";
interface AddTrainingDayProps {
  weekId: string;
}

const AddTrainingDayThumbnail = ({ weekId }: AddTrainingDayProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <TrainingDayFormContent
        submit_id={weekId}
        title={"Create Training Day"}
        submitFunction={createTrainingDay}
      />
    );
  };
  return (
    <button
      onClick={handleOpenDialog}
      className="text-black rounded-sm px-4 py-2 justify-between flex flex-row items-center bg-slate-200"
    >
      <AddCircleOutlineIcon />
      Add Training Day
    </button>
  );
};

export default AddTrainingDayThumbnail;
