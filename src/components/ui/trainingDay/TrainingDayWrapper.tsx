"use client";

import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import AddTrainingDayExercise from "../routines/trainingdayexercise/AddTrainingDayExercise";
import TrainingDayExerciseForm from "../routines/trainingdayexercise/TrainingDayExerciseForm";
import { useEffect, useState } from "react";
import { getTrainingDayExercisesByTrainingDayId } from "@/model/TrainingDayExercise.model";

interface TrainingDayWrapperProps {
  trainingday_id: string;
  description: string;
}

const TrainingDayWrapper = ({
  trainingday_id,
  description,
}: TrainingDayWrapperProps) => {
  const [trainingDayExercises, setTrainingDayExercises] = useState<
    TrainingDayExercise[]
  >([]);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchTrainingDayExercises = async () => {
      try {
        const trainingDayExercises: TrainingDayExercise[] =
          await getTrainingDayExercisesByTrainingDayId(trainingday_id);

        setTrainingDayExercises(trainingDayExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchTrainingDayExercises();
  }, [toggle]);

  const handleTrainingDayExercisesChange = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-3">
        <AddTrainingDayExercise
          trainingday_id={trainingday_id.toString()}
          onAddTrainingDayExercise={handleTrainingDayExercisesChange}
        />
      </div>
      <TrainingDayExerciseForm
        trainingDayExercises={trainingDayExercises}
        onDeleteTrainingDayExercise={handleTrainingDayExercisesChange}
      />
    </>
  );
};

export default TrainingDayWrapper;
