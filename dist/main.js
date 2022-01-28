const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn-choice');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

function endGame(winner) {
    const overlay = document.querySelector('#modal-overlay');
    let icon = overlay.querySelector('img');
    let message = overlay.querySelector('h2');
    const button = overlay.querySelector('button');


    if (winner == 'player') {
        icon.src = '../img/trophy.png';
        message.innerHTML = 'You won the game!';
    } else if (winner == 'computer') {
        icon.src = '../img/sad-face.png';
        message.innerHTML = 'You lost the game!';
    }

    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');

    button.addEventListener('click', () => {
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('flex');
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#player-score').innerHTML = playerScore;
        document.querySelector('#computer-score').innerHTML = computerScore;
    })
}

function displayMessage(winner, playerSelection, computerSelection) {
    const message = document.querySelector('#message');
    let winnerMessage = message.querySelector('h2');
    let result = message.querySelector('h3');

    if (winner == 'player') {
        winnerMessage.innerHTML = 'You win!';
        result.innerHTML = `You chose ${playerSelection} and computer chose ${computerSelection}`;
    } else if (winner == 'computer') {
        winnerMessage.innerHTML = 'Computer wins!';
        result.innerHTML = `You chose ${playerSelection} and computer chose ${computerSelection}`;
    } else {
        winnerMessage.innerHTML = 'It\'s a tie!';
        result.innerHTML = `You both chose ${playerSelection}`;
    }

    message.classList.remove('invisible');
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        displayMessage('tie', playerSelection, computerSelection);
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        document.querySelector('#computer-score').innerHTML = computerScore;
        displayMessage('computer', playerSelection, computerSelection);
    } else {
        playerScore++;
        document.querySelector('#player-score').innerHTML = playerScore;
        displayMessage('player', playerSelection, computerSelection);
    }

    if (playerScore == 5) {
        endGame('player');
    } else if (computerScore == 5) {
        endGame('computer');
    }
}

buttons.forEach(e => e.addEventListener('click', () => {
    const playerSelection = e.querySelector('img').getAttribute('alt');
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}));