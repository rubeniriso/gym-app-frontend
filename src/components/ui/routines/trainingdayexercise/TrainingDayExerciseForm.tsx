"use client";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TrainingDayExerciseFormElement from "./TrainingDayExerciseFormElement";
import { Button } from "@/components/ui/button";

interface TrainingDayExerciseFormProps {
  trainingDayExercises: TrainingDayExercise[];
  onDeleteTrainingDayExercise: () => void;
}

const FormSchema = z.object({
  exerciseData: z.array(
    z.object({
      trainingDayExerciseId: z.string(),
      bodyPart: z.string({
        required_error: "Please select a body part.",
      }),
      muscle: z.string({
        required_error: "Please select a muscle.",
      }),
      exercise: z.string({
        required_error: "Please select a exercise",
      }),
      sets: z.coerce.number({
        required_error: "Please introduce the number of sets",
      }),
      reps: z.coerce.number({
        required_error: "Please introduce the number of reps",
      }),
      weight: z.coerce.number({
        required_error: "Please introduce the weight",
      }),
      rir: z.coerce.number({
        required_error: "Please introduce the rir",
      }),
    })
  ),
});

const defaultFormValues = {
  exerciseData: [
    {
      sets: 1,
      reps: 1,
      weight: 1,
      rir: 0,
    },
  ],
};

function onSubmit(values: z.infer<typeof FormSchema>) {
  console.log(values);
  //TODO: Send all this data to a new endpoint in charge of persisting it in the database.
}

const TrainingDayExerciseForm = ({
  trainingDayExercises,
  onDeleteTrainingDayExercise,
}: TrainingDayExerciseFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultFormValues,
  });

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
