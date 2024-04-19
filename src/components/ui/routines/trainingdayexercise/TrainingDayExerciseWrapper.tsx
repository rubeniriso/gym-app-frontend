import { getTrainingDayExercisesByTrainingDayId } from "@/model/TrainingDayExercise.model";
import React from "react";
import TrainingDayExerciseCard from "./TrainingDayExerciseCard";
import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";

interface TrainingDayExerciseWrapperProps {
  trainingday_id: string;
}
const TrainingDayExerciseWrapper = async ({
  trainingday_id,
}: TrainingDayExerciseWrapperProps) => {
  const trainingdayexercises = await getTrainingDayExercisesByTrainingDayId(
    trainingday_id
  );
  return (
    <div>
      {trainingdayexercises &&
        trainingdayexercises.map(
          (trainingdayexercise: TrainingDayExercise, index: number) => (
            <TrainingDayExerciseCard
              key={index}
              trainingDayExercise={trainingdayexercise}
            />
          )
        )}
    </div>
  );
};

export default TrainingDayExerciseWrapper;
