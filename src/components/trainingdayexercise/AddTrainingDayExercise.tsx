"use client";
import React from "react";
import { useDialog } from "../hooks/useDialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createTrainingDayExercise } from "@/model/TrainingDayExercise.model";

import AddTrainingDayExerciseFormContent from "./AddTrainingDayExerciseFormContent";
interface AddTrainingDayExercise {
  trainingday_id: string;
}

const AddTrainingDayExercise = ({ trainingday_id }: AddTrainingDayExercise) => {
  const { onOpen, setDialogContent } = useDialog();
  const handleOpenDialog = () => {
    onOpen();
    setDialogContent(
      <AddTrainingDayExerciseFormContent
        submit_id={trainingday_id}
        title={"Create exercise"}
        submitFunction={createTrainingDayExercise}
      />
    );
  };
  return (
    <button
      onClick={handleOpenDialog}
      className="text-black rounded-sm px-4 py-2 justify-between flex flex-row items-center bg-slate-200"
    >
      <AddCircleOutlineIcon />
      Add Exercise
    </button>
  );
};
export default AddTrainingDayExercise;
