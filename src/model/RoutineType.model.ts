import { RoutineType } from "@/types/routineType";

// Define the function to call the backend function
async function getAllRoutineTypes() {
  try {
    const response = await fetch(`http://localhost:5002/api/v1/routinetypes/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllRoutineTypes };
