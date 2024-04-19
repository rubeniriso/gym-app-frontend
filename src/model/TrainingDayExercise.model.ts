"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";
import { newTrainingDayExerciseData } from "@/types/data/NewTrainingDayExerciseData";

async function getTrainingDayExercisesByTrainingDayId(trainingDayId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingdayexercises/${trainingDayId}`,
      {
        next: { tags: [`trainingDayExercises[${trainingDayId}]`] },
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching training days for given week:", error);
    throw error;
  }
}

async function createTrainingDayExercise(
  trainingDayId: string,
  trainingDayExercise: z.infer<typeof newTrainingDayExerciseData>
) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingdayexercises/create/trainingday/${trainingDayId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainingDayExercise),
      }
    );
    revalidateTag(`trainingDayExercises[${trainingDayId}]`);
  } catch (error) {
    console.log(error);
    console.error("Error fetching trainingDayExercise data:", error);
    throw error;
  }
}

// Export the function
export { getTrainingDayExercisesByTrainingDayId, createTrainingDayExercise };
