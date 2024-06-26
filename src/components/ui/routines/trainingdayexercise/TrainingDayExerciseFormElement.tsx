"use client";
import React, { useEffect, useState } from "react";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { useForm } from "react-hook-form";
import { TrainingDaySchema } from "@/types/data/trainingDaySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
}
const TrainingDayExerciseFormElement = ({
  trainingDayExercise,
  onDeleteTrainingDayExercise,
  index,
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
  }, []);
  const handleBodypartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPart: string = e.target.value;
    setSelectedBodypart(selectedPart);
  };
  useEffect(() => {
    if (selectedBodypart) {
      const getExercisesByBodyPart = async () => {
        console.log("wat");
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
  const handleMuscleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var options = e.target.options;
    var value: string[] = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSelectedMuscles(value);
  };
  useEffect(() => {
    if (selectedMuscles.length > 0 && selectedMuscles[0] != "") {
      console.log("attempting to send muscles");
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
    <>
      <div className="flex flex-row" key={index}>
        <div className="flex flex-col">
          <label>Body part</label>
          <select
            name={`trainingdayexercises.${index}.bodypart_id`}
            onChange={handleBodypartChange}
          >
            <option value="">Select a body part</option>
            {bodyparts.map((bodypart: Bodypart, key) => (
              <option key={key} value={`${bodypart.bodypart_id}`}>
                {bodypart.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label>Muscles</label>
          <select
            onChange={handleMuscleChange}
            multiple
            name={`trainingdayexercises.${index}.muscle_id`}
          >
            <option value="">Select a muscle</option>
            {muscles.map((muscle: Muscle, key) => (
              <option key={key} value={`${muscle.muscle_id}`}>
                {muscle.name}
              </option>
            ))}
          </select>
        </div>
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
          <label htmlFor={`trainingdayexercises.${index}.sets`}>Sets:</label>

          <input
            name={`trainingdayexercises.${index}.sets`}
            type="number"
            value={trainingDayExercise.sets}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={`trainingdayexercises.${index}.reps`}>Reps:</label>
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
    </>
  );
};

export default TrainingDayExerciseFormElement;
