import { TrainingDayExercise } from "@/types/data/TrainingDayExercise";
import { TrainingDay } from "@/types/trainingDay";
import React from "react";

interface TrainingDayExerciseProps {
  trainingDayExercise: TrainingDayExercise;
}

const TrainingDayExercise = ({
  trainingDayExercise,
}: TrainingDayExerciseProps) => {
  return (
    <div>
      {trainingDayExercise.name} {trainingDayExercise.exerciseName}{" "}
      {trainingDayExercise.sets} {trainingDayExercise.reps}{" "}
      {trainingDayExercise.rir}
    </div>
  );
};

export default TrainingDayExercise;
