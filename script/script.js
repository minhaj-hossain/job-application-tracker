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



            renderInterview();





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

            // notAvailable.innerHTML = '';



            renderRejected();





        }





    }



    // if (e.target.matches('#card-interview-btn')) {

    //     console.log(e.target.parentNode.parentNode);



    // }

})





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



        if (!interview.closest('.hidden')) {

            renderInterview();

        }



        // 2. If we are currently looking at the Rejected tab, re-render it

        if (!rejected.closest('.hidden')) {

            renderRejected();

        }



        totalCardCounter()

        console.log(cardInfo)

    } else if (e.target.classList.contains('card-rejected-btn')) {

        const elem = e.target.parentNode.parentNode;



        console.log(elem)



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



        if (!interview.closest('.hidden')) {

            renderInterview();

        }




        if (!rejected.closest('.hidden')) {

            renderRejected();

        }

        totalCardCounter()

        console.log(cardInfo)

    }

}





// cardCounter.addEventListener('click', e => {



// if (e.target.classList.contains('card-interview-btn')) {

//     const elem = e.target.parentNode.parentNode;



//     const companyName = elem.querySelector('.company-name').innerText;

//     const position = elem.querySelector('.position').innerText

//     const location = elem.querySelector('.location').innerText

//     const type = elem.querySelector('.type').innerText

//     const salary = elem.querySelector('.salary').innerText

//     const statusBtn = elem.querySelector('.status-btn').innerText

//     const description = elem.querySelector('.description').innerText



//     elem.querySelector('.status-btn').innerText = 'Interviewed';





//     const cardInfo = {

//         companyName,

//         position,

//         location,

//         type,

//         salary,

//         statusBtn: 'Interviewed',

//         description

//     }





//     const cardExits = interviewArr.find(item => item.companyName == cardInfo.companyName)



//     if (!cardExits) {

//         interviewArr.push(cardInfo);

//     }



//     rejectedArr = rejectedArr.filter(item => item.companyName !== companyName);





//     totalCardCounter()

//     console.log(cardInfo)

// } else if (e.target.classList.contains('card-rejected-btn')) {

//     const elem = e.target.parentNode.parentNode;



//     console.log(elem)



//     const companyName = elem.querySelector('.company-name').innerText;

//     const position = elem.querySelector('.position').innerText

//     const location = elem.querySelector('.location').innerText

//     const type = elem.querySelector('.type').innerText

//     const salary = elem.querySelector('.salary').innerText

//     const statusBtn = elem.querySelector('.status-btn').innerText

//     const description = elem.querySelector('.description').innerText





//     elem.querySelector('.status-btn').innerText = 'rejected';



//     const cardInfo = {

//         companyName,

//         position,

//         location,

//         type,

//         salary,

//         statusBtn: 'Rejected',

//         description

//     }





//     const cardExits = rejectedArr.find(item => item.companyName == cardInfo.companyName)



//     if (!cardExits) {

//         rejectedArr.push(cardInfo);

//     }





//     interviewArr = interviewArr.filter(item => item.companyName !== companyName);



//     totalCardCounter()

//     console.log(cardInfo)

// }









// console.log(e.target.parentNode.parentNode)

// })





cardCounter.addEventListener('click', addBtnClick);

notAvailable.addEventListener('click', addBtnClick);






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




totalCardCounter()




