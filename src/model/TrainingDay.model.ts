async function getAllSessions() {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingdays/get-all`
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
