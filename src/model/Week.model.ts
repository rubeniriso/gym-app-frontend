"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newWeekData } from "@/types/data/NewWeekData";
async function getAllRotuineWeeks(routineId: string) {
  try {
    revalidateTag("weeks");
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/routine/${routineId}`,
      { next: { tags: ["weeks"] }, method: "GET" }
    );
    revalidateTag("weeks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
async function getWeekWithTrainingDaysData(weekId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/${weekId}/with-trainingdays-data/`,
      { next: { tags: ["week"] }, method: "GET" }
    );
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
async function createWeek(
  routineId: string,
  routine: z.infer<typeof newWeekData>
) {
  console.log(routineId, routine);
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/create/${routineId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routine),
      }
    );
    revalidateTag("weeks");
  } catch (error) {
    console.log(error);
    console.error("Error fetching session data:", error);
    throw error;
  }
}

async function deleteWeek(weekId: string) {
  try {
    await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/${weekId}`, { method: "DELETE" }
    );
    revalidateTag("weeks");
  } catch (error) {
    console.error("Error deleting week:", error);
    throw error;
  }
}

async function getWeekData(weekId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/${weekId}`, { method: "GET" }
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error deleting week:", error);
    throw error;
  }
}

export { getAllRotuineWeeks, createWeek, getWeekWithTrainingDaysData, deleteWeek, getWeekData };
