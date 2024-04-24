"use client";
import ExerciseCard from "@/components/ui/exercises/ExerciseCard";
import { getAllBodyParts } from "@/model/Bodypart.model";
import {
  getAllExercisesByBodyPart,
  getAllExercisesByMuscle,
} from "@/model/Exercises.model";
import { getAllMusclesByBodypart } from "@/model/Muscle.model";
import { deleteTrainingDayExercise } from "@/model/TrainingDayExercise.model";
import { Bodypart } from "@/types/bodypart";
import { Exercise } from "@/types/exercise";
import { Muscle } from "@/types/muscle";
import React, { useEffect, useState } from "react";
const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [bodyparts, setBodyparts] = useState<Bodypart[]>([]);
  const [selectedBodypart, setSelectedBodypart] = useState<string>("");
  const [muscles, setMuscles] = useState<Muscle[]>([]);
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

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
    <div className="flex flex-row gap-12 pt-8 px-8">
      <div className="">
        <div className="flex flex-col">
          <label>Body part</label>
          <select onChange={handleBodypartChange}>
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
          <select onChange={handleMuscleChange} multiple>
            <option value="">Select a muscle</option>
            {muscles.map((muscle: Muscle, key) => (
              <option key={key} value={`${muscle.muscle_id}`}>
                {muscle.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
