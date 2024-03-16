import { Routine } from "@/types/routine";

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

async function createRoutine(userId: number, routine: Routine) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/routines/user/${userId}`,
      {
        method: "POST",
        body: JSON.stringify(routine),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllUserRoutines };
