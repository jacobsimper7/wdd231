const url = 'https://jacobsimper7.github.io/wdd231/chamber/data/members.json';
const display = document.querySelector('#member-list');

let membersData = [];

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    membersData = data.members;

    // Filter for membershipLevel 1 or 2
    const spotlightMembers = membersData.filter(member =>
        member.membershipLevel === 1 || member.membershipLevel === 2
    );

    // Shuffle and pick 3 unique members
    const shuffled = spotlightMembers.sort(() => Math.random() - 0.5);
    const randomThree = shuffled.slice(0, 3);

    displaySpotlightMembers(randomThree);
}

getMemberData();

function displaySpotlightMembers(members) {
    display.innerHTML = '';
    members.forEach(member => {
        let listItem = document.createElement('li');
        listItem.classList.add('spotlight-member');

        let name = document.createElement('h3');
        name.textContent = member.name;

        let address = document.createElement('p');
        address.textContent = member.address;

        let phone = document.createElement('p');
        phone.textContent = member.phone;

        let website = document.createElement('p');
        website.textContent = member.website;

        let membershipLevel = document.createElement('p');
        if (member.membershipLevel === 1) {
            membershipLevel.textContent = 'Membership Level: Gold';
        } 
        else if (member.membershipLevel === 2) {
            membershipLevel.textContent = 'Membership Level: Silver';
        }

        let image = document.createElement('img');
        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');

        listItem.appendChild(name);
        listItem.appendChild(address);
        listItem.appendChild(phone);
        listItem.appendChild(website);
        listItem.appendChild(image);
        listItem.appendChild(membershipLevel);

        display.appendChild(listItem);
    });
}