"use client";
import React, { useEffect, useState } from "react";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { Form, useForm } from "react-hook-form";
import { TrainingDaySchema } from "@/types/data/trainingDaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getAllExercises } from "@/model/Exercises.model";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/exercise";
import { deleteTrainingDayExercise } from "@/model/TrainingDayExercise.model";
import { ImSpinner9 } from "react-icons/im";
import { getAllBodyParts } from "@/model/Bodypart.model";
import { Bodypart } from "@/types/bodypart";
import { Muscle } from "@/types/muscle";
import { getAllMusclesByBodypart } from "@/model/Muscle.model";
import TrainingDayExerciseFormElement from "./TrainingDayExerciseFormElement";

interface TrainingDayExerciseFormProps {
  trainingDayExercises: TrainingDayExercise[];
  onDeleteTrainingDayExercise: () => void;
}
const TrainingDayExerciseForm = ({
  trainingDayExercises,
  onDeleteTrainingDayExercise,
}: TrainingDayExerciseFormProps) => {
  const form = useForm<z.infer<typeof TrainingDaySchema>>({
    resolver: zodResolver(TrainingDaySchema),
  });
  function onSubmit(values: z.infer<typeof TrainingDaySchema>) {}
  return (
    <>
      {trainingDayExercises.length != 0 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {trainingDayExercises &&
              trainingDayExercises.map(
                (trainingDayExercise: TrainingDayExercise, index: number) => (
                  <TrainingDayExerciseFormElement
                    key={index}
                    trainingDayExercise={trainingDayExercise}
                    index={index}
                    onDeleteTrainingDayExercise={onDeleteTrainingDayExercise}
                  />
                )
              )}
          </form>
        </Form>
      ) : (
        <p>No exercises for this training day.</p>
      )}
    </>
  );
};

export default TrainingDayExerciseForm;
