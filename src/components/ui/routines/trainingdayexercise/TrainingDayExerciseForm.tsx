"use client";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { Form, useForm } from "react-hook-form";
import { TrainingDaySchema } from "@/types/data/trainingDaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  function onSubmit(values: z.infer<typeof TrainingDaySchema>) {
    console.log(values);
  }
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
