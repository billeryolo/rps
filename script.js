/// Get the computer's choice
/// a round function
/// take two choices and determine a winner. Make it case insensetive
/// Game function to play 5 rounds

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

function playRound(playerSelection, computerSelection) {
playerSelection = getPlayerSelection().toLowerCase();
computerSelection = getComputerSelection().toLocaleLowerCase();


    if (((playerSelection == "rock") && (computerSelection == "scissors")) || ((playerSelection == "scissors") && (computerSelection == "paper")) || ((playerSelection == "paper") && (computerSelection == "rock"))){
        return "win"
    }
    else if (computerSelection == playerSelection){
        return "tie"
    }
    else{
        return "lost"
    }
  }
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
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
}