"use client";
import { getTrainingDayExercisesByTrainingDayId } from "@/model/TrainingDayExercise.model";
import React, { useEffect, useState } from "react";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import TrainingDayExerciseCard from "./TrainingDayExerciseCard";
import { Form, useForm } from "react-hook-form";
import { TrainingDaySchema } from "@/types/data/trainingDaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../form";
import { Input } from "../../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../select";
import { getAllExercises } from "@/model/Exercises.model";
import { Exercise } from "@/types/exercise";

interface TrainingDayExerciseFormProps {
  trainingday_id: string;
}
const TrainingDayExerciseForm = ({
  trainingday_id,
}: TrainingDayExerciseFormProps) => {
  const [trainingDayExercises, setTrainingDayExercises] = useState<
    TrainingDayExercise[]
  >([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const form = useForm<z.infer<typeof TrainingDaySchema>>({
    resolver: zodResolver(TrainingDaySchema),
  });
  useEffect(() => {
    const fetchTrainingDayExercises = async () => {
      try {
        // Assuming getTrainingDayExercisesByTrainingDayId returns exercises for a given training day ID
        const trainingDayExercises: TrainingDayExercise[] =
          await getTrainingDayExercisesByTrainingDayId(trainingday_id);
        console.log(trainingDayExercises);

        setTrainingDayExercises(trainingDayExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchTrainingDayExercises();
  }, [trainingday_id]);
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
  });

  function onSubmit(values: z.infer<typeof TrainingDaySchema>) {}
  return (
    <>
      {trainingDayExercises ? (
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
                  </div>
                )
              )}
          </form>
        </Form>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TrainingDayExerciseForm;
