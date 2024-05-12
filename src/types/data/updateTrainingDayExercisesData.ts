import { z } from "zod";

export const FormSchema = z.object({
  exerciseData: z.array(
    z.object({
      trainingDayExerciseId: z.string(),
      bodyPart: z.string({
        required_error: "Please select a body part.",
      }),
      muscle: z.string({
        required_error: "Please select a muscle.",
      }),
      exercise: z.string({
        required_error: "Please select a exercise",
      }),
      sets: z.coerce.number({
        required_error: "Please introduce the number of sets",
      }),
      reps: z.coerce.number({
        required_error: "Please introduce the number of reps",
      }),
      weight: z.coerce.number({
        required_error: "Please introduce the weight",
      }),
      rir: z.coerce.number({
        required_error: "Please introduce the rir",
      }),
    })
  ),
});
