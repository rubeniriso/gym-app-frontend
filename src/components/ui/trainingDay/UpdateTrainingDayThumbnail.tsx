"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UpdateTrainingDayForm from "./UpdateTrainingDayForm";
import { useDialog } from "../../hooks/useDialog";
import { updateTrainingDay } from "@/model/TrainingDay.model";
import { TrainingDay } from "@/types/trainingDay";
import { Button } from "@/components/ui/button";

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
  return <Button onClick={handleOpenDialog}>Update training day</Button>;
};

export default UpdateTrainingDayThumbnail;
