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

interface TrainingDayExerciseFormProps {
  trainingDayExercises: TrainingDayExercise[];
  onDeleteTrainingDayExercise: () => void;
}
const TrainingDayExerciseForm = ({
  trainingDayExercises,
  onDeleteTrainingDayExercise,
}: TrainingDayExerciseFormProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const form = useForm<z.infer<typeof TrainingDaySchema>>({
    resolver: zodResolver(TrainingDaySchema),
  });

  const handleDeleteTrainingDayExercise = (trainingdayexercise_id: string) => {
    deleteTrainingDayExercise(trainingdayexercise_id);
    onDeleteTrainingDayExercise();
  };

  useEffect(() => {
    const getExercises = async () => {
      try {
        const exercises: Exercise[] = await getAllExercises();
        setExercises(exercises);
      } catch (error) {
        console.log("Error fetching exercises:", error);
      }
    };
    getExercises();
  }, []);

  function onSubmit(values: z.infer<typeof TrainingDaySchema>) {}
  return (
    <>
      {trainingDayExercises.length != 0 ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {trainingDayExercises &&
              trainingDayExercises.map(
                (trainingDayExercise: TrainingDayExercise, index: number) => (
                  <div className="flex flex-row" key={index}>
                    <div className="flex flex-col">
                      <label>Exercise</label>
                      <select>
                        <option value="">Select an exercise</option>
                        {exercises.map((exercise: Exercise, key) => (
                          <option
                            key={key}
                            value={`trainingdayexercises.${index}.exercise_id`}
                          >
                            {exercise.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor={`trainingdayexercises.${index}.sets`}>
                        Sets:
                      </label>

                      <input
                        name={`trainingdayexercises.${index}.sets`}
                        type="number"
                        value={trainingDayExercise.sets}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor={`trainingdayexercises.${index}.reps`}>
                        Reps:
                      </label>
                      <input
                        name={`trainingdayexercises.${index}.reps`}
                        type="number"
                        value={trainingDayExercise.reps}
                      />
                    </div>
                    <div className="flex flex-col">
                      <Button
                        variant="destructive"
                        type="button"
                        onClick={() =>
                          handleDeleteTrainingDayExercise(
                            trainingDayExercise.trainingdayexercise_id
                          )
                        }
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
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
