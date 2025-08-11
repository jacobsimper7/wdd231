export function displayGalleryFooter(products) {
  const footer = document.querySelector("footer");
  if (!footer) return;

  // Remove previous gallery credits if present
  const oldSection = footer.querySelector(".gallery-credits");
  if (oldSection) oldSection.remove();

  const section = document.createElement("section");
  section.className = "gallery-credits";

  products.forEach(product => {
    // Only show if author and license info are present
    if (product.author && product.license) {
      const p = document.createElement("p");
      p.innerHTML = `
        <strong>${product.title}</strong> image by 
        <a href="${product['author-link']}" target="_blank" rel="noopener">${product.author}</a>
        is licensed under ${product.license}.
      `;
      section.appendChild(p);
    }
  });

  footer.appendChild(section);
}