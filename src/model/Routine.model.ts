"use server";
import { newRoutineData } from "@/types/data/newRoutineData";
import { Routine } from "@/types/routine";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Define the function to call the backend function
async function getAllUserRoutines(userId: number) {
  try {
    console.log(`http://localhost:5002/api/v1/routines/user/${userId}`);
    const response = await fetch(
      `http://localhost:5002/api/v1/routines/user/${userId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

async function createRoutine(
  user_id: number,
  routine: z.infer<typeof newRoutineData>
) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/routines/create/${user_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routine),
      }
    );
    await response.json();
    revalidatePath("/routines");
  } catch (error) {
    console.log(error);
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllUserRoutines, createRoutine };
