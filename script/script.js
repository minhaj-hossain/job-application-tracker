// console.log('welcome to the assignment 4')

let totalCards = document.getElementById('totalCards');
let cardCounter = document.getElementById('card-counter');
const allBtn = document.getElementById('all-btn');



function totalCardCounter() {

    totalCards.innerText = cardCounter.children.length;
}

allBtn.addEventListener('click', totalCardCounter())

