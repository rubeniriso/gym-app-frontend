"use server";

async function getAllMusclesByBodypart(bodypart_id: string) {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_URL}/api/v1/muscles/${bodypart_id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching session data:", error);
    throw error;
  }
}

// Export the function
export { getAllMusclesByBodypart };
