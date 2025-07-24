const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
  dialogBox.showModal();
    dialogBoxText.innerHTML = 'One apple is 95 calories';
});

openButton2.addEventListener('click', () => {
  dialogBox.showModal();
    dialogBoxText.innerHTML = 'One orange is 45 calories';
});

openButton3.addEventListener('click', () => {
  dialogBox.showModal();
    dialogBoxText.innerHTML = 'One bannana is 105 calories';
});

closeButton.addEventListener('click', () => {
  dialogBox.close();
});