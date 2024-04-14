import { z } from "zod";

/**
 * Represents a Week
 */
export type NewTrainingDayData = {
    /** name of the TrainingDat */
    name: string;
    /** Description of the TrainingDay */
    description: string;
};
export const newtrainingDayData = z.object({
    name: z.string().trim().min(1, { message: "The training day must have a name" }),
    description: z.string().optional(),
});
