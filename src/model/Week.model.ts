async function getAllRotuineWeeks(routineId: number) {
  try {
    const response = await fetch(
      `http://localhost:5002/api/v1/weeks/routine/${routineId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

export { getAllRotuineWeeks };
