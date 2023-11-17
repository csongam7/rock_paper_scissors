console.log("Wello Horld")


/* Make 3 button for the user with the texts: "Rock", "Paper", "Scissor" */
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissor");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) =>
    button.addEventListener("click", function(){
        const computersChoice = getComputerChoice();
        
        if (button.innerText == computersChoice){
            alert(`It's a tie, the computer picket ${computersChoice} as well`);
            return;
        }

        if (button.innerText == "Rock" &&  computersChoice != "Paper" && computersChoice != button.innerText){
            alertMessage(true, computersChoice);
        }

        else if(button.innerText == "Paper" && computersChoice != "Scissor"){
            alertMessage(true, computersChoice);
        }

        else if(button.innerText == "Scissor" && computersChoice != "Rock"){
            alertMessage(true, computersChoice);
        }

        else {alertMessage(false, computersChoice);}
    }
    )
    );

/* After his choice make the computer choose randomly of the same 3*/
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
/*Alert the user the result.*/
function alertMessage(didIwin, computersChoice){
    if (didIwin){
        alert(`You are the winner the computer has choosen ${computersChoice}`);
    }
    else {
        alert(`You have been beaten by the computer whose pick was ${computersChoice}`);
    }
};


