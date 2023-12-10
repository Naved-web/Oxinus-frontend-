export const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API fetching error:", error);
      return null;
    }
  };