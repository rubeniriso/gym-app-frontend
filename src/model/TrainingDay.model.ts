"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";

async function getAllSessions() {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingdays/get-all`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

async function getAllWeekTrainingDays(weekId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingDays/week/${weekId}`,
      { next: { tags: ["trainingDay"] }, method: "GET" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching training days for given week:", error);
    throw error;
  }
}

async function createTrainingDay(
  weekId: string,
  trainingDay: z.infer<typeof newtrainingDayData>
) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingDays/create/${weekId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainingDay),
      }
    );
    revalidateTag("trainingDay");
  } catch (error) {
    console.log(error);
    console.error("Error fetching trainingDay data:", error);
    throw error;
  }
}

// Export the function
export { getAllSessions, getAllWeekTrainingDays, createTrainingDay };
