import { z } from "zod";
import { TrainingDayExerciseSchema } from "./trainingDayExerciseSchema";

export const TrainingDaySchema = z.object({
  trainingdayexercises: z.array(TrainingDayExerciseSchema),
});
