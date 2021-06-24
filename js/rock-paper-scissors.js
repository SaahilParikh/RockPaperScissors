const CHOICES = ["rock", "paper", "scissors"];

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "paper" 
    || playerSelection == "paper" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "rock") {
        return -1;
        //return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        //return `You Win! ${playerSelection} beats ${computerSelection}`;
        return 1;
    }

}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(prompt("choose your throw"), computerPlay());
    }
    return score;
}