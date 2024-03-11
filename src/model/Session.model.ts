async function getAllSessions() {
  try {
    const response = await fetch(
      "http://localhost:5002/api/v1/sessions/get-all"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllSessions };
