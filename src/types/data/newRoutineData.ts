import { z } from "zod";

export const newRoutineData = z.object({
  name: z.string().trim().min(1, { message: "The routine must have a name" }),
  description: z.string().optional(),
  routinetype_id: z
    .string()
    .min(1, { message: "You must choose a routine type" }),
});
