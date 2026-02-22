// console.log('welcome to the assignment 4')
let interviewArr = ['hello', 'how are you', 'what are you doing', 'why are you doing']
let rejectedArr = ['you are fired'];

let totalCards = document.getElementById('totalCards');
let cardCounter = document.getElementById('card-counter');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected')
const allBtn = document.getElementById('all-btn');
const btnsAll = document.getElementById('btns-all');



function totalCardCounter() {

    totalCards.innerText = cardCounter.children.length;
    interview.innerText = interviewArr.length;
    rejected.innerText = rejectedArr.length;
}

function toggleBtn(id) {
    let element = document.getElementById(id);
    let btns = btnsAll.children
    

    for (let btn of btns) {

        btn.classList.remove('font-semibold', 'bg-[#3b82f6]', 'text-white');
        btn.classList.add('font-medium', 'bg-white', 'text-[#64748b]');
    }

    element.classList.remove('font-medium','bg-white', 'text-[#64748b]');
    element.classList.add('font-semibold', 'bg-[#3b82f6]', 'text-white');


}




totalCardCounter()




