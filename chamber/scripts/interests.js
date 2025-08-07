fetch('data/interest.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.discover');
    container.innerHTML = ""; // Clear any existing content

    data.interest.forEach(item => {
      const card = document.createElement('div');
      card.className = 'interest-card';

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="${item.image}" alt="${item.name}" class="interest-img">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more">Learn More</button>
      `;

      container.appendChild(card);
    });
  });

function showVisitMessage() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'visit-message';

  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  let message = "";

  if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const diffMs = now - Number(lastVisit);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
      message = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${diffDays} days ago.`;
    }
  }

  sidebar.textContent = message;
  
  const main = document.querySelector('main');
  main.insertBefore(sidebar, document.querySelector('.discover'));

  localStorage.setItem('lastVisit', now);
}

document.addEventListener("DOMContentLoaded", showVisitMessage);