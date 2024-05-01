"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";
import { redirect } from "next/navigation";

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

async function updateTrainingDay(trainingday_id: string, trainingDay: z.infer<typeof newtrainingDayData>) {
  try {
    await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingDays/update/${trainingday_id}`, {
      method: "PUT", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trainingDay)
    }
    );
    revalidateTag("trainingDay");
  } catch (error) {
    console.error("Error updating week: ", error)
    throw error;
  }
}

async function deleteTrainingDay(trainingday_id: string) {
  try {
    console.log(`${process.env.DOMAIN_URL}/api/v1/trainingDays/${trainingday_id}`)
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingDays/${trainingday_id}`, { method: "DELETE" }
    );
    const data = await response.json();
    revalidateTag("trainingDay");
  } catch (error) {
    console.error("Error deleting week:", error);
    throw error;
  }
}

// Export the function
export { getAllSessions, getAllWeekTrainingDays, createTrainingDay, updateTrainingDay, deleteTrainingDay };
