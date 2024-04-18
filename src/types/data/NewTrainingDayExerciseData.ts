import { z } from "zod";

/**
 * Represents a Week
 */
export type NewTrainingDayExerciseData = {
  /** name of the TrainingDat */
  name: string;
  /** Description of the TrainingDay */
  description: string;
};
export const newTrainingDayExerciseData = z.object({
  sets: z.number().int().optional(),
  reps: z.number().int().optional(),
  weight: z.number().optional(),
  rir: z.number().int().optional(),
  session_id: z.string(),
  exercise_id: z.string(),
});
