import { fetchGalleryItems } from './gallery-data.js';
import { displayGallery } from './gallery-display.js';
import { setupGalleryFilters } from './gallery-filter.js';
import { setupNavigation } from "./navigation.js";
import { updateLastModified } from "./last-modified.js";
import { displayGalleryFooter } from './gallery-footer.js';

setupNavigation();
updateLastModified();

document.addEventListener("DOMContentLoaded", () => {
  fetchGalleryItems('data/products.json').then(galleryItems => {
    displayGallery(galleryItems);
    setupGalleryFilters(galleryItems, displayGallery);
    displayGalleryFooter(galleryItems);
  });
});