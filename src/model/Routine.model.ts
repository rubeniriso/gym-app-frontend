// Routine.model.js

// Define the function to call the backend function
async function getAllUserRoutines(userId: number) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/user/${userId}/routines`
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
