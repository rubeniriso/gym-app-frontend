"use server";
async function getAllExercises() {
  try {
    const response = await fetch(`${process.env.DOMAIN_URL}/api/v1/exercises`, {
      next: { tags: ["exercises"] },
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllExercises };
