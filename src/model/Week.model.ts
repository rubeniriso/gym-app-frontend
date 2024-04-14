"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newWeekData } from "@/types/data/NewWeekData";
async function getAllRotuineWeeks(routineId: string) {
  try {
    console.log(routineId);
    revalidateTag("weeks");
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/routine/${routineId}`,
      { next: { tags: ["weeks"] }, method: "GET" }
    );
    revalidateTag("weeks")
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
async function createWeek(
  routineId: string,
  routine: z.infer<typeof newWeekData>
) {
  console.log(routineId, routine)
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
export { getAllRotuineWeeks, createWeek };
