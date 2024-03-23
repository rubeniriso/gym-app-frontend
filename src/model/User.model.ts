"use server";
import { revalidatePath } from "next/cache";

// Define the function to call the backend function
async function getUserActiveRoutine(userId: number) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/users/${userId}/get-active-routine`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data[0]["activeroutine_id"];
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
async function activateUserRoutine(userId: number, routineId: number) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/users/make-routine-active`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          userId: userId,
          routineId: routineId,
        }),
      }
    );
    const data = await response.json();
    revalidatePath("/routines");
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
// Export the function
export { getUserActiveRoutine, activateUserRoutine };
