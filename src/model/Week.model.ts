async function getAllRotuineWeeks(routineId: string) {
  try {
    console.log(routineId)
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/weeks/routine/${routineId}`,
      { next: { tags: ["weeks"] }, method: "GET" }
    );
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

export { getAllRotuineWeeks };
