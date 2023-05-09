/// Get the computer's choice
/// a round function
/// take two choices and determine a winner. Make it case insensetive
/// Game function to play 5 rounds

const div = document.querySelector('#score')
let playerScore = 0;
let computerScore = 0;

const div1 = document.createElement('div');
const body = document.body;


function getRandInt(){
    return Math.floor((Math.random())*3)+1;
}
function getComputerSelection(){
   randInt = getRandInt() 
    if (randInt == 1){
        return "rock"
    }
    else if (randInt == 2){
        return "paper"
    }
    else if (randInt == 3){
        return "scissors"
    }
}
function getPlayerSelection(){
    return prompt("Make a choice")
}
function addRestartButton(){
    const restart = document.createElement('button');
    restart.textContent = "Restart";
    restart.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        div.textContent = `SCORE: ${playerScore} - ${computerScore}.`;
        body.removeChild(div1);
        body.removeChild(restart);
    })
    body.appendChild(restart);
}

function playRound(playerSelection, computerSelection) {
if((playerScore < 5) && (computerScore < 5)){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerSelection().toLocaleLowerCase();


        if (((playerSelection == "rock") && (computerSelection == "scissors")) || ((playerSelection == "scissors") && (computerSelection == "paper")) || ((playerSelection == "paper") && (computerSelection == "rock"))){
            ++playerScore;
            div.textContent = `SCORE: ${playerScore} - ${computerScore}. You won!`   
            if(playerScore === 5){
                div1.textContent = "Congratulations, you have won the game!"
                body.insertBefore(div1, rock)
                addRestartButton();
            }
        }
        else if (computerSelection == playerSelection){
            div.textContent = `SCORE: ${playerScore} - ${computerScore}. It's a tie!`   
        }
        else{
            ++computerScore;
            div.textContent = `SCORE: ${playerScore} - ${computerScore}. You lost.`
            if(computerScore === 5){
                    div1.textContent = "You lost the game. :("
                    body.insertBefore(div1, rock);
                    addRestartButton();
            }   
        }
  }
}
/* function playGame(){
    let round = 0;
    while(round < 5){
    let playerChoice = playRound()
        if (playerChoice==="win"){
            playerScore = playerScore + 1
            console.log(`You win!`)
            console.log(`The score is ${playerScore} - ${computerScore}`)
            round = round + 1
        }
        else if(playerChoice === "lost"){
            computerScore = computerScore + 1
            console.log(`You lost!`)
            console.log(`The score is ${playerScore} - ${computerScore}`)
            round = round + 1
        }
        else{
            console.log("It's a tie!")
            console.log(`The score is ${playerScore} - ${computerScore}`)
            round = round + 1
        }
    }
    (playerScore > computerScore) ? console.log(`Congratulations, you have won the game!`) : playerScore < computerScore ? console.log(`You have lost the game!`) : console.log("It's a draw!")
} */
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    playRound("rock");
})
paper.addEventListener('click', () => {
    playRound("paper");
})
scissors.addEventListener('click', () => {
    playRound("scissors");
})

