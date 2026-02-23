// console.log('welcome to the assignment 4')
let interviewArr = ['hello', 'how are you', 'what are you doing', 'why are you doing'];
let rejectedArr = [];

let totalCards = document.getElementById('totalCards');
let cardCounter = document.getElementById('card-counter');
let interview = document.getElementById('interview');
let rejected = document.getElementById('rejected')
const allBtn = document.getElementById('all-btn');
const btnsAll = document.getElementById('btns-all');
let totalJobs = document.querySelector('.total-jobs')
let notAvailable = document.querySelector('.not-available')
const mainContainer = document.querySelector('main');
const cardNotAppliedBtn = document.getElementById('card-not-applied-btn')


function totalCardCounter() {

    totalCards.innerText = cardCounter.children.length;
    totalJobs.innerText = cardCounter.children.length;
    interview.innerText = interviewArr.length;
    rejected.innerText = rejectedArr.length;
}

function toggleBtn(id) {
    let element = document.getElementById(id);
    let btns = btnsAll.children


    for (let btn of btns) {

        btn.classList.remove('font-semibold', 'bg-[#3b82f6]', 'text-white');
        btn.classList.add('font-medium', 'bg-white', 'text-[#64748b]');
        // console.log(btn.innerText)

        cardCounter.classList.add('hidden');

        if (interview.innerText == '0') {
        }

    }

    element.classList.remove('font-medium', 'bg-white', 'text-[#64748b]');
    element.classList.add('font-semibold', 'bg-[#3b82f6]', 'text-white');

    if (element.innerText == 'All') {
        cardCounter.classList.remove('hidden');
    }




}

mainContainer.addEventListener('click', e => {


    if (e.target.matches('#all-btn')) {

        totalCardCounter()


        notAvailable.innerHTML = '';
        if (cardCounter.children.length == 0) {
            console.log('iam zero')

            notAvailable.innerHTML = `
            <div class="space-y-5 flex flex-col justify-center items-center bg-white rounded-xl py-[110px] px-6 ">
                    <div>
                        <img src="./assets/jobs.png" alt="jobs">
                    </div>
                    <div class="text-center">
                        <h3 class="mb-1 font-semibold text-2xl">No jobs available</h3>
                        <p class="text-[#64748b]">Check back soon for new job opportunities</p>

                    </div>
                </div>
            
            `


        } else {
            console.log('iam not zero')
            notAvailable.innerHTML = '';


        }

    }

    if (e.target.matches('#interview-btn')) {

        totalCardCounter()


        notAvailable.innerHTML = '';
        if (interviewArr.length == 0) {


            console.log('iam zero')

            notAvailable.innerHTML = `
            <div class="space-y-5 flex flex-col justify-center items-center bg-white rounded-xl py-[110px] px-6 ">
                    <div>
                        <img src="./assets/jobs.png" alt="jobs">
                    </div>
                    <div class="text-center">
                        <h3 class="mb-1 font-semibold text-2xl">No jobs available</h3>
                        <p class="text-[#64748b]">Check back soon for new job opportunities</p>

                    </div>
                </div>
            
            `


        } else {
            console.log('iam not zero')
            notAvailable.innerHTML = '';


        }

    }


    if (e.target.matches('#rejected-btn')) {
        totalCardCounter()


        notAvailable.innerHTML = '';
        if (rejectedArr.length == 0) {
            console.log('iam zero')

            notAvailable.innerHTML = `
            <div class="space-y-5 flex flex-col justify-center items-center bg-white rounded-xl py-[110px] px-6 ">
                    <div>
                        <img src="./assets/jobs.png" alt="jobs">
                    </div>
                    <div class="text-center">
                        <h3 class="mb-1 font-semibold text-2xl">No jobs available</h3>
                        <p class="text-[#64748b]">Check back soon for new job opportunities</p>

                    </div>
                </div>
            
            `


        } else {
            console.log('iam not zero')
            notAvailable.innerHTML = '';


        }


    }

    // if (e.target.matches('#card-interview-btn')) {
    //     console.log(e.target.parentNode.parentNode);

    // }
})


cardCounter.addEventListener('click', e => {
    const elem = e.target.parentNode.parentNode;

    const companyName = elem.querySelector('.company-name');
    console.log(companyName.innerText)


    // console.log(e.target.parentNode.parentNode)
})




totalCardCounter()




