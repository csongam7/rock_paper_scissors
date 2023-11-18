console.log("Wello Horld")

let playerScore = 0;
let computerScore = 0;
let gameIsOn = false;
/* Make 3 button for the user with the texts: "Rock", "Paper", "Scissor" */
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissor");
const buttons = document.querySelectorAll(".button");
const roundButton = document.querySelector('#roundButton');

roundButton.addEventListener("click", function() {
    gameIsOn = true;
});

    buttons.forEach((button) =>
        button.addEventListener("click", function round(){
            const computersChoice = getComputerChoice();
                if (button.innerText == computersChoice){
                    alert(`It's a tie, the computer picket ${computersChoice} as well`);
                    return;
                }

                if (button.innerText == "Rock" &&  computersChoice != "Paper" && computersChoice != button.innerText){
                    if(gameIsOn){
                    gameCounter(checkWhoWon(true, computersChoice))
                    return;
                    }
                    checkWhoWon(true, computersChoice);
                    return;
                }

                else if(button.innerText == "Paper" && computersChoice != "Scissor"){
                    if(gameIsOn){
                    gameCounter(checkWhoWon(true, computersChoice))
                    return;
                    }
                    checkWhoWon(true, computersChoice);
                    return;
                }

                else if(button.innerText == "Scissor" && computersChoice != "Rock"){
                    if(gameIsOn){
                    gameCounter(checkWhoWon(true, computersChoice))
                    return;
                    }
                    checkWhoWon(true, computersChoice);
                    return;
                }
                else
                if(gameIsOn){gameCounter(checkWhoWon(false, computersChoice))
                    return;
                }
                checkWhoWon(true, computersChoice);
            }
        )
    )

/* After his choice make the computer choose randomly of the same 3*/
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
/*Alert the user the result.*/
function checkWhoWon(didIwin, computersChoice){
    if (didIwin){
        alert(`You are the winner the computer has choosen ${computersChoice}`);
        return "Player";
    }
    else {
        alert(`You have been beaten by the computer whose pick was ${computersChoice}`);
        return "Computer";
    }
};

function gameCounter(whoScored){
    
    if (whoScored == "Player"){
        playerScore ++;
    }
    else if (whoScored == "Computer"){
        computerScore ++;
    }
    
    if (playerScore < 3 && computerScore < 3){
        alert(`Current score: Player:${playerScore} - Computer:${computerScore}`)
        return
    }
    
    if (playerScore > computerScore){
        alert(`congratulations you have beaten the computer in Rock Paper Scissor! The final score is: Player:${playerScore} - Computer:${computerScore}`)
    }
    else if (computerScore > playerScore){
        alert(`You have been beaten by the computer in Rock Paper Scissor! The final score is: Player:${playerScore} - Computer:${computerScore}`)
    }
    playerScore = 0;
    computerScore = 0;
    gameIsOn = false;
}