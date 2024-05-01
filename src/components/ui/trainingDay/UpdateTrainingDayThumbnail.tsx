"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UpdateTrainingDayForm from "./UpdateTrainingDayForm";
import { useDialog } from "../../hooks/useDialog";
import { updateTrainingDay } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";

interface UpdateTrainingDayThumbnailProps {
  trainingDay: TrainingDay;
}

const UpdateTrainingDayThumbnail = ({
  trainingDay,
}: UpdateTrainingDayThumbnailProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <UpdateTrainingDayForm
        submit_id={trainingDay.trainingday_id}
        title={"Update trainingDay"}
        submitFunction={updateTrainingDay}
      />
    );
  };
  return (
    <button
      onClick={handleOpenDialog}
      className="text-black rounded-sm px-4 py-2 justify-between flex flex-row items-center bg-slate-200"
    >
      <AddCircleOutlineIcon />
      Update training day
    </button>
  );
};

export default UpdateTrainingDayThumbnail;
