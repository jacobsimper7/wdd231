const url = 'https://jacobsimper7.github.io/wdd231/chamber/data/members.json';

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('#directory');

let membersData = []; // Store members globally

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;
    displayMembersGrid(membersData); // Show grid by default

    // Set up event listeners AFTER data is loaded
    gridButton.addEventListener('click', () => {
        displayMembersGrid(membersData);
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });
    listButton.addEventListener('click', () => {
        displayMembersList(membersData);
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });
}

getMemberData();

function displayMembersList(members) {
    display.innerHTML = '';
    display.classList.add("list");
    display.classList.remove("grid");
    members.forEach(member => {
        let card = document.createElement('section');
        card.setAttribute('class', 'list');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let email = document.createElement('p');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        email.innerHTML = `<a href="mailto:${member.email}">${member.email}</a>`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);
        display.appendChild(card);
    });
}

function displayMembersGrid(members) {
    display.innerHTML = '';
    display.classList.remove("list");
    display.classList.add("grid");
    members.forEach(member => {
        let card = document.createElement('section');
        card.setAttribute('class', 'grid');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        display.appendChild(card);
    });
}