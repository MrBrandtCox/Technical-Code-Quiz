let StartBtn = document.getElementById("start");
let Menu = document.getElementById("Menu");
let timer = document.getElementById("timer");
let quizSection = document.getElementById("quizSection");
let question = document.getElementById("question");
let answerA = document.getElementById("answerA");
let answerB = document.getElementById("answerB");
let answerC = document.getElementById("answerC");
let answerD = document.getElementById("answerD");
let initialsForm = document.getElementById("initialsForm");
let scoreSection = document.getElementById("scoreSection");
let initials = document.getElementById("initials");
let endMenu= document.getElementById("endMenu");
// 1. create an array for questions
var questions = [
    {
        q: "A string is indicated by which of the following?",
        a: "A) { } Curly brackets",
        b: "B) [ ] Square brackets", 
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
        q:"Is JavaScript a case sensitive language?", //question 4 has 2 extra bubbles
        a:"Yes", 
        b:"No",
        c:"Nes",
        d:"What is JavaScript..",
        answer:"a",
    },
    {
        q:"What are the scopes of a variable in JavaScript?",
        a:"Native Scope & Global Scope",
        b:"Native Scope & Foreign Scope",
        c:"Global Scope & Local Scope",
        d:"Local Scope & Foreign Scope",
        answer:"c",
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

score = 0;
timerCount = 60;
questionCount = 0;
let storedUsers;

function renderPageLoad () {
    quizSection.style = "display: none";
    endMenu.style = "display: none";
    if (JSON.parse(localStorage.getItem("highscores")) === null) {
        storedUsers = [];
    } else {
        storedUsers = JSON.parse(localStorage.getItem("highscores"));
    }
    console.log(storedUsers);
}

function runQuiz () {
    if(questionCount === 5 || timerCount<= 0) { // change questions count from 3 whenever I write more questions.
        return endQuiz();
    }
    timer.textContent = "Time: " + timerCount;
    question.textContent = questions[questionCount].q;
    answerA.textContent = questions[questionCount].a;
    answerB.textContent = questions[questionCount].b;
    answerC.textContent = questions[questionCount].c;
    answerD.textContent = questions[questionCount].d;
}

renderPageLoad();
// 2. Starts button to begin quiz
StartBtn.addEventListener("click", function () {
        startTimer();
    Menu.style = "display: none";
    quizSection.style = "display: block";
    endMenu.style = "display: none";
    runQuiz();
})

// 3. Create a timer and start quiz
function startTimer () {
    let countdown = setInterval(function () {
        timerCount--;
        timer.textContent = "Time: " + timerCount;
        if(timerCount <= 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}
// 4. Display first question with 4 choices

// 5. Manage user decision, adjust timer if incorrect, adjust score if correct, display next question 
function manageSelectionA () {
    if (questions[questionCount].answer === "a") {
        questionCount++;
        score+= 10;
        console.log("Correct!")
    }else {
        console.log("Incorrect");
        timerCount -= 5;
        questionCount++;
    }
    runQuiz();
};
function manageSelectionB () {
    if (questions[questionCount].answer === "b") {
        questionCount++;
        score+= 10;
        console.log("Correct!")
    }else {
        console.log("Incorrect");
        timerCount -= 5;
        questionCount++;
    }
    runQuiz();
};
function manageSelectionC () {
    if (questions[questionCount].answer === "c") {
        questionCount++;
        score+= 10;
        console.log("Correct!")
    }else {
        console.log("Incorrect");
        timerCount -= 5;
        questionCount++;
    }
    runQuiz();
};
function manageSelectionD () {
    if (questions[questionCount].answer === "d") {
        questionCount++;
        score+= 10;
        console.log("Correct!")
    }else {
        console.log("Incorrect");
        timerCount -= 5;
        questionCount++;
    }
    runQuiz();
};
answerA.addEventListener("click", manageSelectionA);
answerB.addEventListener("click", manageSelectionB);
answerC.addEventListener("click", manageSelectionC);
answerD.addEventListener("click", manageSelectionD);
// 6. When finished, end quiz and provide an input for user to enter initials
function endQuiz () {
    quizSection.style = "display: none";
    endMenu.style = "display: flex";
    console.log(score);
}

function saveScore(e) {
    e.preventDefault();
    newScore = {
        user: initials.value,
        userScore: score,
    };
    storedUsers.push(newScore); 
    localStorage.setItem("highscores", JSON.stringify(storedUsers));
    window.location.href = "highscores.html"; 
}
initialsForm.addEventListener("submit", saveScore);
// 7. Save high score in local storage

// 8. Redirect the to high scores page 