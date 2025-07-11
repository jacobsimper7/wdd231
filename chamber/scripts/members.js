const url = 'https://jacobsimper7.github.io/wdd231/chamber/data/members.json';

const cards = document.querySelector('#cards');
async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}