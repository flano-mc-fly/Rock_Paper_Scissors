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


    




