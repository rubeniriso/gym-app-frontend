import { newRoutineData } from "@/types/data/newRoutineData";
import { Routine } from "@/types/routine";
import { revalidatePath } from "next/cache";

// Define the function to call the backend function
async function getAllUserRoutines(userId: number) {
  try {
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

async function createRoutine(routine: newRoutineData) {
  try {
    console.log(routine);
    /*const response = await fetch(
      `http://localhost:5002/api/v1/routines/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(routine),
      }
    );
    const data = await response.json();
    revalidatePath("routines");*/
  } catch (error) {
    console.log(error);
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllUserRoutines, createRoutine };
