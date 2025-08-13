export async function fetchGalleryItems(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    return Array.isArray(data) ? data : data.products;
  } catch (error) {
    console.error("Error fetching gallery items:", error);
    // Optionally show an error message to the user
    return [];
  }
}