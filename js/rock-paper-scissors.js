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

let userTotal = 0;
let computerTotal = 0;

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(prompt("choose your throw"), computerPlay());
    }
    return score;
}

let butRock = document.querySelector("#rock");
let butPaper = document.querySelector("#paper");
let butScissors = document.querySelector("#scissors");

let scores = document.querySelector('#scores');
let userScore = document.querySelector('#user-score');
let computerScore = document.querySelector('#computer-score');
let txt = document.querySelector('#comment');

function updateScore(outcome) {
    if(!started) return;
    console.log(outcome);
    if (outcome == -1) {
        txt.textContent = "Argh, you lost this round."
        computerTotal++;
        computerScore.textContent = computerTotal;
    } else if (outcome == 1) {
        userTotal++;
        txt.textContent = "Whoop! You won this round."
        userScore.textContent = userTotal;
    } else {
        txt.textContent = "Oof, that's a tie."
    }
    if (computerTotal == 5) {
        lowerDiv.appendChild(clickStart);
        computerTotal = 0;  
        userTotal = 0;
        txt.textContent = "You lost the game! :("
        lowerDiv.removeChild(scores);
        started = false;
    }
    else if (userTotal == 5) {
        lowerDiv.appendChild(clickStart);
        computerTotal = 0;  
        userTotal = 0;
        txt.textContent = "You won the game! :)"
        lowerDiv.removeChild(scores);
        started = false;
    }
}

butRock.addEventListener('click', function() {
    let outcome = playRound("rock", computerPlay());
    updateScore(outcome);
});

butPaper.addEventListener('click', function() {
    let outcome = playRound("paper", computerPlay());
    updateScore(outcome);
});

butScissors.addEventListener('click', function() {
    let outcome = playRound("scissors", computerPlay());
    updateScore(outcome);
});

let clickStart = document.querySelector("#begin");
console.log(clickStart);
let lowerDiv = document.querySelector('#lower-div');

let started = false;
clickStart.addEventListener('click', () => {
    started = true;
    console.log("here");
    lowerDiv.removeChild(clickStart);
    computerScore.textContent = 0;
    userScore.textContent = 0;
    lowerDiv.appendChild(scores);
    txt.textContent = "Rock Paper Scissors!"
});




