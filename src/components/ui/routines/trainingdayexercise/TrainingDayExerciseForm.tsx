"use client";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TrainingDayExerciseFormElement from "./TrainingDayExerciseFormElement";
import { Button } from "@/components/ui/button";
import { FormSchema } from "@/types/data/updateTrainingDayExercisesData";
import { updateTrainingDayExercises } from "@/model/TrainingDay.model";

interface TrainingDayExerciseFormProps {
  trainingDayExercises: TrainingDayExercise[];
  onDeleteTrainingDayExercise: () => void;
  trainingday_id: string;
}

const TrainingDayExerciseForm = ({
  trainingDayExercises,
  onDeleteTrainingDayExercise,
  trainingday_id,
}: TrainingDayExerciseFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
    updateTrainingDayExercises(trainingday_id, values);
    //TODO: Send all this data to a new endpoint in charge of persisting it in the database.
  }
  return (
    <>
      {trainingDayExercises.length != 0 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3">
            {trainingDayExercises &&
              trainingDayExercises.map(
                (trainingDayExercise: TrainingDayExercise, index: number) => (
                  <TrainingDayExerciseFormElement
                    key={index}
                    trainingDayExercise={trainingDayExercise}
                    index={index}
                    onDeleteTrainingDayExercise={onDeleteTrainingDayExercise}
                    form={form}
                  />
                )
              )}
            <Button type="submit">Save</Button>
          </form>
        </Form>
      ) : (
        <p>No exercises for this training day.</p>
      )}
    </>
  );
};

export default TrainingDayExerciseForm;
