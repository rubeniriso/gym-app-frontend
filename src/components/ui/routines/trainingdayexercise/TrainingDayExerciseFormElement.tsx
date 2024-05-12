"use client";
import React, { useEffect, useState } from "react";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  getAllExercisesByBodyPart,
  getAllExercisesByMuscle,
} from "@/model/Exercises.model";
import { Button } from "@/components/ui/button";
import { Exercise } from "@/types/exercise";
import { deleteTrainingDayExercise } from "@/model/TrainingDayExercise.model";
import { getAllBodyParts } from "@/model/Bodypart.model";
import { Bodypart } from "@/types/bodypart";
import { Muscle } from "@/types/muscle";
import { getAllMusclesByBodypart } from "@/model/Muscle.model";

interface TrainingDayExerciseFormElementProps {
  trainingDayExercise: TrainingDayExercise;
  onDeleteTrainingDayExercise: () => void;
  index: number;
  form: any;
}
const TrainingDayExerciseFormElement = ({
  trainingDayExercise,
  onDeleteTrainingDayExercise,
  index,
  form,
}: TrainingDayExerciseFormElementProps) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyparts, setBodyparts] = useState<Bodypart[]>([]);
  const [selectedBodypart, setSelectedBodypart] = useState<string>("");

  const handleDeleteTrainingDayExercise = (trainingdayexercise_id: string) => {
    deleteTrainingDayExercise(trainingdayexercise_id);
    onDeleteTrainingDayExercise();
  };
  useEffect(() => {
    const getBodyparts = async () => {
      try {
        const bodyparts: Bodypart[] = await getAllBodyParts();
        setBodyparts(bodyparts);
        if (trainingDayExercise.bodypart_id) {
          setSelectedBodypart(trainingDayExercise.bodypart_id);
        }
      } catch (error) {
        console.log("Error fetching bodyparts:", error);
      }
    };
    getBodyparts();
    // Add to the form submit the identifier of the trainingDayExercise.
    form.setValue(
      `exerciseData.${index}.trainingDayExerciseId`,
      trainingDayExercise.trainingdayexercise_id
    );
  }, []);
  useEffect(() => {
    if (selectedBodypart) {
      const getExercisesByBodyPart = async () => {
        const exercises = await getAllExercisesByBodyPart(
          selectedBodypart as string
        );
        console.log(exercises);
        setExercises(exercises);
      };
      getExercisesByBodyPart();
    } else {
      setExercises([]);
    }
  }, [selectedBodypart]);

  return (
    <div className="space-x-2 flex flex-wrap ">
      <FormField
        control={form.control}
        name={`exerciseData.${index}.trainingDayExerciseId`}
        render={({ field }) => (
          <FormItem className="hidden">
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.bodyPart`}
        defaultValue={trainingDayExercise.bodypart_id}
        render={({ field }) => (
          <FormItem>
            <FormLabel>BodyPart</FormLabel>
            <Select
              onValueChange={(event) => {
                field.onChange(event);
                setSelectedBodypart(event);
              }}
              defaultValue={trainingDayExercise.bodypart_id}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select the body part" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {bodyparts.map((bodypart: Bodypart, key) => (
                  <SelectItem key={key} value={bodypart.bodypart_id}>
                    {bodypart.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.exercise`}
        defaultValue={trainingDayExercise.exercise_id}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exercise</FormLabel>
            <Select
              defaultValue={trainingDayExercise.exercise_id}
              onValueChange={field.onChange}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select the exercise" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {exercises.map((exercise: Exercise, key) => (
                  <SelectItem key={key} value={`${exercise.exercise_id}`}>
                    {exercise.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.sets`}
        defaultValue={trainingDayExercise.sets}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Sets:</FormLabel>
            <FormControl>
              <Input type="number" placeholder="sets" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.reps`}
        defaultValue={trainingDayExercise.reps}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Reps:</FormLabel>
            <FormControl>
              <Input type="number" placeholder="reps" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.weight`}
        defaultValue={trainingDayExercise.weight}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Weight:</FormLabel>
            <FormControl>
              <Input type="number" placeholder="reps" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`exerciseData.${index}.rir`}
        defaultValue={trainingDayExercise.rir}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rir:</FormLabel>
            <FormControl>
              <Input type="number" placeholder="rir" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        className="mt-auto"
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
  );
};

export default TrainingDayExerciseFormElement;
