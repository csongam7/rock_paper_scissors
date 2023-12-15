let playerScore = 0;
let computerScore = 0;
let gameIsOn = false;
/* Make 3 button for the user with the texts: "rock", "paper", "scissor" */
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorButton = document.querySelector("#scissor");
const buttons = document.querySelectorAll(".button");
const roundButton = document.querySelector('#roundButton');
let messageToThePlayer = document.querySelector('#message_to_the_player');
const battlefield = document.querySelector('#battlefield');

//makes the changing values go back to the default one.
function setbackToDefault(){
    setTimeout(function(){
    playerScore = 0;
    computerScore = 0;
    gameIsOn = false;
    document.querySelector('#main_scoreboard').innerHTML = '';
    document.querySelector('#message_to_the_player').innerText = '';
    document.querySelector('#computers_score_counter').classList.add('.hide');
    document.querySelector('#players_score_counter').classList.add('.hide');
    const smallerSymbols = document.querySelectorAll('.smaller_symbol');
    const smallerSymbolsArray = [...smallerSymbols];
    smallerSymbolsArray.forEach(smallerSymbol => smallerSymbol.src = "/images/question_mark.png");
    }, 3000);  
}


roundButton.addEventListener("click", function() {
    //initialize the socreboard when the player wants to play a 5 round game againts the computer
    //setbackToDefault();
    gameIsOn = true;
    document.querySelector('#players_score_counter').innerText = 0;
    document.querySelector('#computers_score_counter').innerText = 0;
    document.querySelectorAll('.smaller_symbol').src="/images/question_mark.png";
    /*battlefield.classList.add("show")

    const mainScoreboard = document.createElement('div');
    
    //initialize player's part of the scoreboard
    const playersScoreboard = document.createElement('div');
    const playersName = document.createElement('span');
    playersName.innerText = 'Player\s score:';
    const playersScore = document.createElement('span');
    playersScore.id = 'playersScore';
    
    
    playersScoreboard.appendChild(playersName);
    playersScoreboard.appendChild(playersScore);
    mainScoreboard.appendChild(playersScoreboard);

    //initialize computer's part of the scoreboard
    const computersScoreboard = document.createElement('div');
    const computersName = document.createElement('span');
    computersName.innerText = 'Computer\'s score:';
    const computersScore = document.createElement('span');
    computersScore.id = "computersScore";
   
    //adding then to the dom
    computersScoreboard.appendChild(computersName);
    computersScoreboard.appendChild(computersScore);
    mainScoreboard.appendChild(computersScoreboard);
    mainScoreboard.id = "main_scoreboard";
    document.body.appendChild(mainScoreboard);
*/});

    buttons.forEach((button) =>
        button.addEventListener("click", function round(){
            const computersChoice = getComputerChoice();
                if (button.id == computersChoice){
                    displayWhoWon("tie", computersChoice, button.id);
                    return;
                }

                if (button.id == "rock" &&  computersChoice != "paper"){
                    if(gameIsOn){
                    gameCounter(displayWhoWon("player", computersChoice, button.id))
                    return;
                    }
                    displayWhoWon("player", computersChoice, button.id);
                    return;
                }

                else if(button.id == "paper" && computersChoice != "scissor"){
                    if(gameIsOn){
                    gameCounter(displayWhoWon("player", computersChoice, button.id))
                    return;
                    }
                    displayWhoWon("player", computersChoice, button.id);
                    return;
                }

                else if(button.id == "scissor" && computersChoice != "rock"){
                    if(gameIsOn){
                    gameCounter(displayWhoWon("player", computersChoice, button.id))
                    return;
                    }
                    displayWhoWon("player", computersChoice, button.id);
                    return;
                }
                else if(gameIsOn){
                    gameCounter(displayWhoWon("computer", computersChoice, button.id))
                    return;
                }
                displayWhoWon("computer", computersChoice, button.id);
            }
        )
    )

// After his choice make the computer choose randomly of the same 3
function getComputerChoice(){
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
//Alert the user the result.
function displayWhoWon(result, computersChoice, playersChoice){
    /**/
    document.querySelector("#players_symbol").src=`/images/${playersChoice}.png`; 
    document.querySelector("#computers_symbol").src= `/images/${computersChoice}.png`;
    if (result == "player"){
        messageToThePlayer.innerText = (`You won the computer has choosen ${computersChoice}.`);
        return "Player";
        
    }
    else if (result == "computer"){
        messageToThePlayer.innerText = (`You have been beaten by the computer whose choice was ${computersChoice}.`);
        return "Computer";
    }
    else{
        messageToThePlayer.innerText = (`It's a tie the computer has picked ${computersChoice} as well.`);
    }
};


function gameCounter(whoScored){

    if (whoScored == "Player"){
        playerScore ++;
        document.querySelector('#players_score_counter').innerText = playerScore;
    }
    else if (whoScored == "Computer"){
        computerScore ++;
        document.querySelector('#computers_score_counter').innerText = computerScore;
        console.log(document.querySelector('#computers_score'));
    }

    if (playerScore + computerScore == 5){
        if (playerScore > computerScore){
            messageToThePlayer.innerText = `congratulations you have beaten the computer in rock paper scissor! The final score is: Player:${playerScore} - Computer:${computerScore}`;
            console.log(document.querySelector('#computers_score').innerText, document.querySelector('#players_score').innerText);
        }
        else if (computerScore > playerScore){
            messageToThePlayer.innerText = `You have been beaten by the computer in rock paper scissor! The final score is: Player:${playerScore} - Computer:${computerScore}`;
        }
        setbackToDefault();
    }
}