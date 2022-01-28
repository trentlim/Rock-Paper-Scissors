const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn-choice');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function popUp(winner) {
    overlay = document.querySelector('#modal-overlay');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');
}

function increment(winner) {
    if (winner == 'player') {
        playerScore++;
    } else {
        computerScore++;
    }

    document.querySelector('#player-score').innerHTML = playerScore;
    document.querySelector('#computer-score').innerHTML = computerScore;
}

function playRound(playerSelection, computerSelection) {
    let winner = '';

    if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'computer';
    } else {
        winner = 'player';
    }

    // popUp(winner);
    increment(winner);
}

buttons.forEach(e => e.addEventListener('click', () => {
    const playerSelection = e.querySelector('img').getAttribute('alt');
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}));