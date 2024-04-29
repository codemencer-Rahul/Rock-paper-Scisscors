let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`choice was clicked ${userChoice}`);
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    console.log(`user choice : ${userChoice}`);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log(`computer choice : ${compChoice}`);

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // paper,scissors
           userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            // scissors,rock
           userWin = compChoice == "scissors" ? false : true;
        }
        else{
            // rock,paper
           userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = [Math.floor( Math.random()*3 )];
    return options[ranIdx];
};

// comparing the move...

const drawGame = () => {
    msg.innerText = "Draw Game. Play Game";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = rgb(211, 209, 209);
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin == true){
        user_Score.innerText = ++userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#06f922";
        msg.style.color = "white";
    }
    else{
        comp_Score.innerText = ++compScore;
        msg.innerText = `Computer Win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#f90606";
        msg.style.color = "black";
    }
};