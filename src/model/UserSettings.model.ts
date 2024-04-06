"use server";
import { revalidateTag } from "next/cache";

async function createUserSettings(userId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/usersettings/${userId}/create`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
// Define the function to call the backend function
async function getUserActiveRoutine(userId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/usersettings/${userId}/get-active-routine`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
async function activateUserRoutine(userId: string, routineId: number) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/usersettings/make-routine-active`,
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
    revalidateTag("routines");
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}
// Export the function
export { getUserActiveRoutine, activateUserRoutine, createUserSettings };
