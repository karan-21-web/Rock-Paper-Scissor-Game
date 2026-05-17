let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const Gencompchoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randIndx = Math.floor(Math.random() * 3);

    return options[randIndx];
};

const drawgame = () => {

    console.log("Game was draw");
       msg.innerText = "Draw Play Again!!";
          msg.style.backgroundColor = "darkcyan";
       
};

const showWinner = (userwin) => {

    if (userwin) {
        userscore++;
        userscorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
    } else {
        compscore++
            compscorePara.innerText = compscore;
        console.log("you lose");
           msg.innerText = "you lose";
           msg.style.backgroundColor = "Red";
    }
};

const playgame = (userchoice) => {

    console.log("user choice", userchoice);

    // Generate Computer Choice
    const compchoice = Gencompchoice();

    console.log("compchoice", compchoice);

    if (userchoice === compchoice) {

        drawgame();

    } else {

        let userwin = true;

        if (userchoice === "rock") {

            // scissors, paper
            userwin = compchoice === "paper" ? false : true;

        } else if (userchoice === "paper") {

            // scissors, rock
            userwin = compchoice === "scissors" ? false : true;

        } else {

            // rock, paper
            userwin = compchoice === "rock" ? false : true;
        }

        showWinner(userwin);
    }
};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    });

});