let progress = document.querySelectorAll(".the-progress span")
let section = document.querySelector(".our-skills");





let ourSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;

window.addEventListener("onscroll", function () {
    if(window.scrollY >= ourSection.offsetTop - 350) {
        if(!started) {
            nums.forEach((num) => startProcess(num))
        }
        started = true
    }
}) 

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 350) {
            progress.forEach((span) => {
                span.style.width = span.dataset.width
            })
    }
    if(window.scrollY >= ourSection.offsetTop - 350) {
        if(!started) {
            nums.forEach((num) => startProcess(num))
        }
        started = true
    }
}


function startProcess(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
} 


