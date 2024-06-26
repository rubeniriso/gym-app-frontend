import { z } from "zod";

export const TrainingDayExerciseSchema = z.object({
  sets: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().int().optional()
  ),
  reps: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().int().optional()
  ),
  weight: z.preprocess(
    (a) => parseFloat(z.string().parse(a)),
    z.number().optional()
  ),
  rir: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().int().optional()
  ),
  exercise_id: z.string().optional(),
});
