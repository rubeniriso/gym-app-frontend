"use server";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { newtrainingDayData } from "@/types/data/NewTrainingDayData";

async function getAllBodyParts() {
  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/v1/bodyparts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllBodyParts };
