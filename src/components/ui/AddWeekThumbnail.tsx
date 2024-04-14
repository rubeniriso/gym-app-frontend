"use client";
import { NewWeekData } from "@/types/data/NewWeekData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import WeekFormContent from "./weeks/WeekFormContent";
import RoutineFormContent from "./routines/formContent/RoutineFormContent";
import { useDialog } from "../hooks/useDialog";
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
      <AddCircleOutlineIcon />
      Add week
    </button>
  );
};

export default AddWeekThumbnail;
