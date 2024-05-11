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
  const [muscles, setMuscles] = useState<Muscle[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

  const handleDeleteTrainingDayExercise = (trainingdayexercise_id: string) => {
    deleteTrainingDayExercise(trainingdayexercise_id);
    onDeleteTrainingDayExercise();
  };
  useEffect(() => {
    const getBodyparts = async () => {
      try {
        const bodyparts: Bodypart[] = await getAllBodyParts();
        setBodyparts(bodyparts);
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
        setExercises(exercises);
      };
      const getMuscles = async () => {
        try {
          const muscles = await getAllMusclesByBodypart(
            selectedBodypart as string
          );
          setMuscles(muscles);
        } catch (error) {
          console.log("Error fetching muscles, error");
        }
      };
      getMuscles();
      getExercisesByBodyPart();
    } else {
      setExercises([]);
      setMuscles([]);
    }
  }, [selectedBodypart]);
  const handleMuscleChange = (muscle: string, field: any) => {
    field.onChange(muscle);

    var value: string[] = [];
    // for (var i = 0, l = options.length; i < l; i++) {
    //   if (options[i].selected) {
    //     value.push(options[i].value);
    //   }
    // }
    value.push(muscle);
    setSelectedMuscles(value);
  };
  useEffect(() => {
    if (selectedMuscles.length > 0 && selectedMuscles[0] != "") {
      const getExercisesByMuscles = async () => {
        const exercises = await getAllExercisesByMuscle(
          selectedMuscles as string[]
        );
        setExercises(exercises);
      };
      getExercisesByMuscles();
    } else {
      if (selectedBodypart) {
        const getExercisesByBodyPart = async () => {
          const exercises = await getAllExercisesByBodyPart(
            selectedBodypart as string
          );
          setExercises(exercises);
        };
        getExercisesByBodyPart();
      }
    }
  }, [selectedMuscles]);

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
        render={({ field }) => (
          <FormItem>
            <FormLabel>BodyPart</FormLabel>
            <Select
              onValueChange={(event) => {
                field.onChange(event);
                setSelectedBodypart(event);
              }}
              defaultValue={field.value}
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
        name={`exerciseData.${index}.muscle`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Muscles</FormLabel>
            <Select
              onValueChange={(event) => handleMuscleChange(event, field)}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select the muscle" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {muscles.map((muscle: Muscle, key) => (
                  <SelectItem key={key} value={muscle.muscle_id}>
                    {muscle.name}
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exercise</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
