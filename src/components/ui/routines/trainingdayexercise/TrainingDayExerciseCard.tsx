import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { TrainingDay } from "@/types/trainingDay";
import React from "react";

interface TrainingDayExerciseCardProps {
  trainingDayExercise: TrainingDayExercise;
  key: number;
}

const TrainingDayExerciseCard = ({
  trainingDayExercise,
  key,
}: TrainingDayExerciseCardProps) => {
  return (
    <div className="h-[100px]">
      Exercise-{key}
      {trainingDayExercise.name} {trainingDayExercise.exerciseName}{" "}
      {trainingDayExercise.sets} {trainingDayExercise.reps}{" "}
      {trainingDayExercise.rir}
    </div>
  );
};

export default TrainingDayExerciseCard;
