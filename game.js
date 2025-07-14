//create a function named "getComputerChoice"
function getComputerChoice() {
//generate a random number   
    const number = Math.random();
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
    //create the variable "answer" and store the answer.
    //prompt the question: "Let's play a game. What do you choose? rock, paper or scissors?"
    return prompt("Let's play a game. What do you choose? rock, paper or scissors?").toLowerCase();
}
//create function "playGame"
function playGame() {
    //create variable "humanScore" and set it to 0
    let humanScore = 0;
    //create variable "computerScore" and set it to 0
    let computerScore = 0;

    //create a function named "playRound"
    //define two parameters for "playRound": "humanChoice" and "computerChoice"
    function playRound (humanChoice, computerChoice) {
    //use these parameters to take human and computer choices as arguments

    if (humanChoice === computerChoice) {
        console.log("it's a tie");
    }
    //rock beats scissors
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    //paper beats rock    
            (humanChoice === "paper" && computerChoice === "rock") ||
    //scissors beat paper
            (humanChoice === "scissors" && computerChoice === "paper"))
    {
    //announce the human as winner
    //increment "humanScore" variable
        ++humanScore 
        console.log(`you win! ${humanChoice} beats ${computerChoice}`);
    }
    //computer rock beats scissors
    else if ((computerChoice === "rock" && humanChoice === "scissors") || 
    //computer paper beats rock    
            (computerChoice === "paper" && humanChoice === "rock") ||
    //computer scissors beat paper
            (computerChoice === "scissors" && humanChoice === "paper"))
    {
    //announce the computer as winner
    //increment "computerScore" variable
        ++computerScore
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
    }
    }
    //play 5 rounds
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    //announce the game winner
    if (humanScore > computerScore) {
        console.log(`You won the game! You got ${humanScore} points. The computer only ${computerScore}`)
    }
    else if (computerScore > humanScore){
        console.log(`Sorry you lost the game! You got only ${humanScore} points. The computer got ${computerScore}`)
    }
    else {
        console.log(`It's a tie! No Winner for this game. Let's play another round`)
    }
}