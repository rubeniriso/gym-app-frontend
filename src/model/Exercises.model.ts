"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";

async function getAllExercises() {
  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/v1/exercises`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

async function getAllExercisesByMuscle(muscles: string[]) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/exercises/muscles`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ muscles: muscles }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching training days for given week:", error);
    throw error;
  }
}
async function getAllExercisesByBodyPart(bodyPartId: string) {
  try {
    console.log("yepper");
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/exercises/bodypart/${bodyPartId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching training days for given week:", error);
    throw error;
  }
}
// Export the function
export { getAllExercises, getAllExercisesByMuscle, getAllExercisesByBodyPart };
