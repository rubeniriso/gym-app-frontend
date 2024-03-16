// Define the function to call the backend function
async function getUserActiveRoutine(userId: number) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/users/${userId}/get-active-routine`,
      {
        mode: "no-cors",
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

// Export the function
export { getUserActiveRoutine };
