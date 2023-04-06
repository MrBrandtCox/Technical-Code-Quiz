let StartBtn = document.getElementById("start");
let Menu = document.getElementById("Menu");
let timer = document.getElementById("timer");
let quizSection = document.getElementById("quizSection");
// 1. create an array for questions
var questions = [
    {
        q: "A string is indicated by which of the following?",
        a: "A) {} Curly brackets",
        b: "B) [] Angle brackets", 
        c: "C) Quotation marks",
        d: "D) ! Exclamation marks",
        answer: "c",
    },
    {
        q:"An ID is indicated by which of the following symbols?",
        a:"A) %",
        b:"B) #",
        c:"C) $",
        d:"D) None of the above",
        answer:"b",
    },
    {
        q:"The element selector ul is an abbreviation for which of the following?",
        a:"A) Unused listener",
        b:"B) Unfortunate layer",
        c:"C) Unusually loud",
        d:"D) Unordered list",
        answer:"d",
    },
    {
        q:"",
        a:"", 
        b:"",
        c:"",
        d:"",
        answer:"",
    },
    {
        q:"",
        a:"",
        b:"",
        c:"",
        d:"",
        answer:"",
    },
    {
        q:"",
        a:"",
        b:"",
        c:"",
        d:"",
        answer:"",
    },
    {
        q:"",
        a:"",
        b:"",
        c:"",
        d:"",
        answer:"",
    },
];

timerCount = 5;
function renderPageLoad () {
    quizSection.style = "display: none";
}

renderPageLoad();

//quizSection.style = "display: none";
// 2. Starts button to begin quiz
StartBtn.addEventListener("click", function () {
        startTimer();
    Menu.style = "display: none";
})

// 3. Create a timer and start quiz
function startTimer () {
    let countdown = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if(timerCount === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}
// 4. Display first question with 4 choices
// 5. Manage user decision, adjust timer if incorrect, adjust score if correct, display next question 
// 6. When finished, end quiz and provide an input for user to enter initials
// 7. Save high score in local storage
// 8. Redirect the to high scores page 