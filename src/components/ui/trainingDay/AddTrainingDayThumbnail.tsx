"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TrainingDayFormContent from "./TrainingDayFormContent";
import { useDialog } from "../../hooks/useDialog";
import { createTrainingDay } from "@/model/TrainingDay.model";
import { Button } from "@/components/ui/button";
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
  return <Button onClick={handleOpenDialog}>Add Training Day</Button>;
};

export default AddTrainingDayThumbnail;
