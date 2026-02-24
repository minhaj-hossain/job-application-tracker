let interviewArr = [];
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

// card counter 
function totalCardCounter() {



    totalCards.innerText = cardCounter.children.length;
    totalJobs.innerText = cardCounter.children.length;
    interview.innerText = interviewArr.length;
    rejected.innerText = rejectedArr.length;

}

// toggle btn functionality
function toggleBtn(id) {

    let element = document.getElementById(id);
    let btns = btnsAll.children



    for (let btn of btns) {

        btn.classList.remove('font-semibold', 'bg-[#3b82f6]', 'text-white');
        btn.classList.add('font-medium', 'bg-white', 'text-[#64748b]');
        cardCounter.classList.add('hidden');

    }



    element.classList.remove('font-medium', 'bg-white', 'text-[#64748b]');
    element.classList.add('font-semibold', 'bg-[#3b82f6]', 'text-white');
    if (element.innerText == 'All') {

        cardCounter.classList.remove('hidden');

    }


}

function notAvailableCard() {
    notAvailable.innerHTML = `
    <div class="space-y-5 flex flex-col justify-center items-center bg-white rounded-xl py-[110px] px-6 ">
        <div><img src="./assets/jobs.png" alt="jobs"></div>
        <div class="text-center">
            <h3 class="mb-1 font-semibold text-2xl">No jobs available</h3>
            <p class="text-[#64748b]">Check back soon for new job opportunities</p>
        </div>
    </div>`;
}

//adding event listner to main container to use event delegation
mainContainer.addEventListener('click', e => {


    if (e.target.matches('#all-btn')) {
        totalCardCounter()
        notAvailable.innerHTML = '';

        if (cardCounter.children.length == 0) {
            notAvailableCard();
        } else {
            notAvailable.innerHTML = '';
        }
    }

    if (e.target.matches('#interview-btn')) {
        totalCardCounter()
        if (interviewArr.length == 0) {
            notAvailableCard();
            
        } else {
            renderInterview();
        }
    }

    if (e.target.matches('#rejected-btn')) {

        totalCardCounter()
        if (rejectedArr.length == 0) {
            notAvailableCard();
            

        } else {
            renderRejected();
        }

    }

})


//setting onclick function on btns
function addBtnClick(e) {

    if (e.target.classList.contains('card-interview-btn')) {

        const elem = e.target.parentNode.parentNode;

        const companyName = elem.querySelector('.company-name').innerText;
        const position = elem.querySelector('.position').innerText
        const location = elem.querySelector('.location').innerText
        const type = elem.querySelector('.type').innerText
        const salary = elem.querySelector('.salary').innerText
        const statusBtn = elem.querySelector('.status-btn').innerText
        const description = elem.querySelector('.description').innerText

        elem.querySelector('.status-btn').innerText = 'Interviewed';

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            statusBtn: 'Interviewed',
            description
        }

        const cardExits = interviewArr.find(item => item.companyName == cardInfo.companyName)

        if (!cardExits) {
            interviewArr.push(cardInfo);
        }

        rejectedArr = rejectedArr.filter(item => item.companyName !== companyName);

        if (allBtn.classList.contains('bg-white')) {
            if (document.getElementById('interview-btn').classList.contains('text-white')) {
                if (interviewArr.length > 0) {
                    renderInterview()
                } else {
                    notAvailableCard();
                }

            } else if (document.getElementById('rejected-btn').classList.contains('text-white')) {
                if (rejectedArr.length > 0) {
                    renderRejected()
                } else {
                    notAvailableCard();
                }
            }
        }

        totalCardCounter();


    } else if (e.target.classList.contains('card-rejected-btn')) {

        const elem = e.target.parentNode.parentNode;

        const companyName = elem.querySelector('.company-name').innerText;
        const position = elem.querySelector('.position').innerText
        const location = elem.querySelector('.location').innerText
        const type = elem.querySelector('.type').innerText
        const salary = elem.querySelector('.salary').innerText
        const statusBtn = elem.querySelector('.status-btn').innerText
        const description = elem.querySelector('.description').innerText

        elem.querySelector('.status-btn').innerText = 'rejected';

        const cardInfo = {
            companyName,
            position,
            location,
            type,
            salary,
            statusBtn: 'Rejected',
            description
        }

        const cardExits = rejectedArr.find(item => item.companyName == cardInfo.companyName)

        if (!cardExits) {
            rejectedArr.push(cardInfo);

        }

        interviewArr = interviewArr.filter(item => item.companyName !== companyName);


        if (allBtn.classList.contains('bg-white')) {
            if (document.getElementById('interview-btn').classList.contains('text-white')) {
                if (interviewArr.length > 0) {
                    renderInterview()
                } else {
                    notAvailableCard();
                }

            } else if (document.getElementById('rejected-btn').classList.contains('text-white')) {
                if (rejectedArr.length > 0) {
                    renderRejected()
                } else {
                    notAvailableCard();
                }
            }
        }

        totalCardCounter();
    }
}

cardCounter.addEventListener('click', addBtnClick);
notAvailable.addEventListener('click', addBtnClick);

function renderRejected() {
    notAvailable.innerHTML = '';

    totalCardCounter()
    for (let card of rejectedArr) {

        notAvailable.innerHTML += `
        <div class="card-left p-6 bg-white border border-[#f1f2f4] space-y-5 rounded-lg">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="company-name font-semibold text-[18px]">${card.companyName}</h3>
                            <h4 class="position text-[#64748b]">${card.position}</h4>

                        </div>
                        <div
                            class="card-right bg-white border border-[#f1f2f4] w-10 h-10 rounded-full flex justify-center items-center">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>

                    </div>
                    <p class="text-[14px] text-[#64748b]"><span class="location">${card.location}</span>
                        •<span class="type">
                            ${card.type}
                        </span>•
                        <span class="salary">${card.salary}</span>
                    </p>

                    <div>
                        <button id="card-not-applied-btn"
                            class="btn max-w-max status-btn mb-2 bg-[#eef4ff] uppercase font-medium text-[14px]">Rejected</button>
                        <p class="description text-[14px] text-[#323b49]">${card.description}</p>

                    </div>

                    <div>
                        <button id="card-interview-btn"
                            class="btn max-w-max card-interview-btn mr-2 uppercase font-semibold text-[#10b981] text-[14px] border border-[#10b981] ">interview</button>
                        <button id="card-rejected-btn"
                            class="btn max-w-max uppercase card-rejected-btn font-semibold text-[#ef4444] border border-[#ef4444]">Rejected</button>

                    </div>



                </div>

        `
    }
}

function renderInterview() {
    notAvailable.innerHTML = '';

    totalCardCounter()
    for (let card of interviewArr) {

        notAvailable.innerHTML += `
        <div class="card-left p-6 bg-white border border-[#f1f2f4] space-y-5 rounded-lg">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="company-name font-semibold text-[18px]">${card.companyName}</h3>
                            <h4 class="position text-[#64748b]">${card.position}</h4>

                        </div>
                        <div
                            class="card-right bg-white border border-[#f1f2f4] w-10 h-10 rounded-full flex justify-center items-center">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>

                    </div>
                    <p class="text-[14px] text-[#64748b]"><span class="location">${card.location}</span>
                        •<span class="type">
                            ${card.type}
                        </span>•
                        <span class="salary">${card.salary}</span>
                    </p>

                    <div>
                        <button id="card-not-applied-btn"
                            class="btn max-w-max status-btn mb-2 bg-[#eef4ff] uppercase font-medium text-[14px]">Interviewed</button>
                        <p class="description text-[14px] text-[#323b49]">${card.description}</p>

                    </div>

                    <div>
                        <button id="card-interview-btn"
                            class="btn max-w-max card-interview-btn mr-2 uppercase font-semibold text-[#10b981] text-[14px] border border-[#10b981] ">interview</button>
                        <button id="card-rejected-btn"
                            class="btn max-w-max uppercase card-rejected-btn font-semibold text-[#ef4444] border border-[#ef4444]">Rejected</button>

                    </div>



                </div>

        `
    }
}

totalCardCounter();