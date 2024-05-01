"use client";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WeekFormContent from "./WeekFormContent";
import { useDialog } from "../../hooks/useDialog";
import { updateWeek } from "@/model/Week.model";
import UpdateWeekForm from "./UpdateWeekForm";
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
  return (
    <button
      onClick={handleOpenDialog}
      className="text-black rounded-sm px-4 py-2 justify-between flex flex-row items-center bg-slate-200"
    >
      <AddCircleOutlineIcon />
      Update week
    </button>
  );
};

export default UpdateWeekThumbnail;
