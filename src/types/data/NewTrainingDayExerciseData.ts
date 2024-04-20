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
export const newTrainingDayExerciseData = z.object({});
