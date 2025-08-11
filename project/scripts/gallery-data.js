export async function fetchGalleryItems(url) {
  const response = await fetch(url);
  const data = await response.json();
  return Array.isArray(data) ? data : data.products;
}