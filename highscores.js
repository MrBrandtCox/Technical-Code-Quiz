let highscores = document.getElementById("highscores");

function retrieveHighscores() {
    let storedUsers = JSON.parse(localStorage.getItem("highscores"));
    console.log(storedUsers);
    for (let i = 0; i < storedUsers.length; i++) {
    let scoresDiv = document.createElement("div");
    scoresDiv.innerHTML = 
        "User: " + storedUsers[i].user + " Score: " + storedUsers[i].userScore;
        scoresDiv.style = "font-size: 30px";
        highscores.append(scoresDiv);
    }
}

retrieveHighscores();