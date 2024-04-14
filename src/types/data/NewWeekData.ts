import { z } from "zod";

/**
 * Represents a Week
 */
export type NewWeekData = {
  /** name of the Week */
  name: string;
  /** Description of the Week */
  description: string;
};
export const newWeekData = z.object({
  name: z.string().trim().min(1, { message: "The week must have a name" }),
  description: z.string().optional(),
});
