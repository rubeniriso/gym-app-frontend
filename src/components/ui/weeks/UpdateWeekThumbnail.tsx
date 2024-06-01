"use client";
import { useDialog } from "../../hooks/useDialog";
import { updateWeek } from "@/model/Week.model";
import UpdateWeekForm from "./UpdateWeekForm";
import { Button } from "@/components/ui/button";

interface UpdateWeekProps {
  weekId: string;
}

const UpdateWeekThumbnail = ({ weekId }: UpdateWeekProps) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <UpdateWeekForm
        submit_id={weekId}
        title={"Update week"}
        submitFunction={updateWeek}
      />
    );
  };
  return <Button onClick={handleOpenDialog}>Update week</Button>;
};

export default UpdateWeekThumbnail;
