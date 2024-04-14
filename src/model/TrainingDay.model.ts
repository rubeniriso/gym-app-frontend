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

async function getAllWeekTrainingDays(weekId: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/trainingDays/week/${weekId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching training days for given week:", error);
    throw error;
  }
}

// Export the function
export { getAllSessions, getAllWeekTrainingDays };
