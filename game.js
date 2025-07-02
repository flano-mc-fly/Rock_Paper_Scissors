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
    //create the variable "humanChoice" and store the answer.
    //prompt the question: "Let's play a game. What do you choose? rock, paper or scissors?"
    let humanChoice = prompt("Let's play a game. What do you choose? rock, paper or scissors?");
    console.log(humanChoice)
}






