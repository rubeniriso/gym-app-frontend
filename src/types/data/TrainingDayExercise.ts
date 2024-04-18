import { z } from "zod";

/**
 * Represents a Week
 */
export type TrainingDayExercise = {
  /** name of the TrainingDay */
  name: string /** name of the TrainingDay */;
  trainingdayexercise_id: string;
  exercise_id: string;
  exerciseName: string;
  reps: number;
  /** Description of the TrainingDay */
  description: string;
  weight: number;
  sets: number;
  /** Reps in reserve */
  rir: number;
};
