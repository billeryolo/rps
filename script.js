/// Get the computer's choice
/// a round function
/// take two choices and determine a winner. Make it case insensetive
/// Game function to play 5 rounds

function randInt(){
    return Math.floor((Math.random())*3)+1;
}
function computerSelecting(){
   choice = randInt() 
    if (choice == 1){
        return "rock"
    }
    else if (choice == 2){
        return "paper"
    }
    else if (choice == 3){
        return "scissors"
    }
}
function playerSelecting(){
    return prompt("Make a choice")
}

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelecting().toLowerCase();
computerSelection = computerSelecting().toLocaleLowerCase();


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
