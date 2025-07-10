//create a function named "getComputerChoice"
function getComputerChoice() {
//generate a random number   
    let number = Math.random();
//if random number is less than 0,33 return "rock"
    if (number <= 0.33) {
        return "rock";
    }
//else if random number is greater than 0,66 return "paper"
    if (number >= 0.66) {
        return "paper";
    }
//else return "scissors"
    else {
        return "scissors";
    }
}

//create a function named "getHumanChoice"
function getHumanChoice() {
    //create the variable "answer", store the answer and make it case-insensitive.
    //prompt the question: "Let's play a game. What do you choose? rock, paper or scissors?"
    let answer = prompt("Let's play a game. What do you choose? rock, paper or scissors?").toLowerCase();
    
}

//create variable "humanScore" and set it to 0
var humanScore = 0;
//create variable "computerScore" and set it to 0
var computerScore = 0;

//create a function named "playRound"
//define two parameters for "playRound": "humanChoice" and "computerChoice"
function playRound (humanChoice, computerChoice) {
//use these parameters to take human and computer choices as arguments
getComputerChoice(computerChoice)
getHumanChoice(humanChoice)
console.log(humanChoice)
console.log(computerChoice)
//rock beats scissors

//paper beats rock

//scissors beat paper

}

//announce the winner
//increment "humanScore" or "computerScore" variable based on the round winner

