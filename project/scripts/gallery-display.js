export function displayGallery(items, gridSelector = '#galleryGrid') {
  const grid = document.querySelector(gridSelector);
  grid.innerHTML = '';
  items.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.tabIndex = 0;
    div.setAttribute('data-idx', idx);

    div.innerHTML = `
      <a href="javascript:void(0)">
        <img src="${item.img}" alt="${item.alt}" loading="lazy">
        <div class="overlay"><p>${item.name}</p></div>
      </a>
    `;
    grid.appendChild(div);
  });

  // Modal setup
  let modal = document.getElementById('gallery-modal');
  if (!modal) {
    modal = document.createElement('dialog');
    modal.id = 'gallery-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-modal" aria-label="Close">&times;</button>
        <h2 id="modal-title"></h2>
        <img id="modal-img" src="" alt="" style="max-width:100%;border-radius:10px;">
        <p id="modal-desc"></p>
        <p><strong>Price: $</strong><span id="modal-price"></span></p>
        <p><strong>Author:</strong> <a id="modal-author-link" href="" target="_blank"></a></p>
        <p><strong>License:</strong> <span id="modal-license"></span></p>
        <button id="modal-learn-more" class="cta">Learn More</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Card click event
  grid.querySelectorAll('.gallery-item').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-idx');
      const item = items[idx];
      modal.querySelector('#modal-title').textContent = item.name;
      modal.querySelector('#modal-img').src = item.img;
      modal.querySelector('#modal-img').alt = item.alt;
      modal.querySelector('#modal-desc').textContent = item.alt;
      modal.querySelector('#modal-price').textContent = item.price || "N/A";
      modal.querySelector('#modal-author-link').textContent = item.author;
      modal.querySelector('#modal-author-link').href = item["author-link"] || "#";
      modal.querySelector('#modal-license').textContent = item.license || "";
      modal.querySelector('#modal-learn-more').onclick = () => {
        window.open(item.link, "_blank");
      };
      modal.showModal();
    });
  });

  // Close modal
  modal.querySelector('.close-modal').onclick = () => modal.close();
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}