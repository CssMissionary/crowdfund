const buttonOne = document.querySelector('.btn-1');
const triggerButton = document.querySelector('.trigger');
const modalContent = document.querySelector('.modal-container');
const modalOne = document.querySelector('.modal');
const modalTwo = document.querySelector('.modal-Two');
const buttonTwo = document.querySelector('.btn-2');
const buttonThree = document.querySelector('.btn-3');
const buttonFour = document.querySelector('.btn-4');
// Adding Event Listeners

// To close modal container


//To trigger modal container

triggerButton.addEventListener('click', () => {
    modalContent.classList.add('open');
    modalContent.classList.remove('closed');
    modalTwo.classList.remove('open');
});
buttonOne.addEventListener('click',() =>{
    modalContent.classList.add('closed');
    modalContent.classList.remove('open');
});
buttonTwo.addEventListener('click' , () => {
    modalContent.classList.add('closed');
    modalContent.classList.remove('open');
});
buttonThree.addEventListener('click' , () => {
    modalOne.classList.add('closed');
    modalTwo.classList.add('open');
});
buttonFour.addEventListener('click' , () => {
    modalOne.classList.add('closed');
    modalTwo.classList.add('open');
});