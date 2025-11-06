const API_URL = import.meta.env.VITE_API_URL;

export const detectMood = async (base64Image) => {
  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64Image }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error detecting mood:", error);
    throw error;
  }
};