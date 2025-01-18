let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#message");

const userScorePara = document.querySelector("#user-scr");

const compScorePara = document.querySelector("#comp-scr");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const i = Math.floor(Math.random() * 3);
    return options[i];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play Again!";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }

    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU Lost!  ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }


};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === paper ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });
});