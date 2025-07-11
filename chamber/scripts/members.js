const url = 'https://jacobsimper7.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');
async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

function displayMembers(members) {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let logo = document.createElement('img');
        let contact = document.createElement('p');
        let email = document.createElement('p');

        name.textContent = member.name;
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        contact.textContent = `Contact: ${member.contact}`;
        email.innerHTML = `Email: <a href="mailto:${member.email}">${member.email}</a>`;

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(contact);
        card.appendChild(email);

        cards.appendChild(card);
    });
}