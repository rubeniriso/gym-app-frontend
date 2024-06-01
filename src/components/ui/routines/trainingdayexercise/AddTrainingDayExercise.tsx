"use client";
import React from "react";
import { useDialog } from "../../../hooks/useDialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { createEmptyTrainingDayExercise } from "@/model/TrainingDayExercise.model";

import { Button } from "../../button";
import { Form } from "../../form";
import { newTrainingDayExerciseData } from "@/types/data/NewTrainingDayExerciseData";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { log } from "console";
interface AddTrainingDayExercise {
  onAddTrainingDayExercise: () => void;
  trainingday_id: string;
}

const AddTrainingDayExercise = ({
  trainingday_id,
  onAddTrainingDayExercise,
}: AddTrainingDayExercise) => {
  const form = useForm<z.infer<typeof newTrainingDayExerciseData>>({
    resolver: zodResolver(newTrainingDayExerciseData),
  });
  function onSubmit(values: z.infer<typeof newTrainingDayExerciseData>) {
    createEmptyTrainingDayExercise(trainingday_id);
    onAddTrainingDayExercise();
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-row items-center justify-center">
            <Button type="submit">Add Exercise</Button>
          </div>
        </form>
      </Form>
    </>
  );
};
export default AddTrainingDayExercise;
