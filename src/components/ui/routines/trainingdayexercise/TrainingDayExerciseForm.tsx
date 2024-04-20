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
                  <div key={index}>
                    {/*<FormField
                  control={form.control}
                  name={`trainingdayexercises.${index}.exercise_id`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Routine type</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a routine type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {exercises.map((exercise: Exercise) => (
                            <SelectItem
                              key={exercise.exercise_id}
                              value={exercise.exercise_id.toString()}
                            >
                              {exercise.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />*/}
                    <FormField
                      control={form.control}
                      name={`trainingdayexercises.${index}.sets`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sets</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Weightlifting rt 1"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`trainingdayexercises.${index}.reps`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reps</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Weightlifting rt 1"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`trainingdayexercises.${index}.weight`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Weight</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Weightlifting rt 1"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
