export function setupGalleryFilters(galleryItems, displayGallery) {
  document.querySelectorAll('.gallery-filters button').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.gallery-filters button').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      if (filter === 'all') {
        displayGallery(galleryItems);
      } else {
        displayGallery(galleryItems.filter(item => item.category === filter));
      }
    });
  });
}