const Fights = ['Jackson', 'Spongebob', 'Patrick'];

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function randomFight(array) {
    const random = getRandomNumber(array.length);
    const item = array[random];
    return item;
}

/* Imports */
const SpongebobFight = document.getElementById('Spongebob');
const PatrickFight = document.getElementById('Patrick');
const JacksonFight = document.getElementById('Jackson');
const results = document.getElementById('results');
const playerFightImg = document.getElementById('playerFight');
const computerFightImg = document.getElementById('computerFight');
const totalDisplay = document.getElementById('total-display');
const lossesDisplay = document.getElementById('losses-display');
const winsDisplay = document.getElementById('wins-display');
const choose = document.getElementById('Choose');

/* State */
let gameState = 'guess';
let wins = '0';
let total = '0';
let losses = '0';

/* Actions */
function loadPage() {
    displayScoreboard();
    displayState();
}
function runGame(player) {
    gameState = 'results';
    const computerResult = randomFight(Fights);

    results.classList.remove('hidden');

    playerFightImg.src = `${player}.jpg`;
    computerFightImg.src = `${computerResult}.jpg`;

    const result = score(player, computerResult);

    function score(player, computerResult) {
        // player win
        if (player === 'Patrick' && computerResult === 'Jackson') {
            return 'player';
        }
        if (player === 'Spongebob' && computerResult === 'Patrick') {
            return 'player';
        }
        if (player === 'Jackson' && computerResult === 'Spongebob') {
            return 'player';
        }
        // computer win
        if (player === 'Patrick' && computerResult === 'Spongebob') {
            return 'computer';
        }
        if (player === 'SpongeBob' && computerResult === 'Jackson') {
            return 'computer';
        }
        if (player === 'Jackson' && computerResult === 'Patrick') {
            return 'computer';
        }
        // tie
        return 'tie';
    }
    if (result === 'player') {
        wins++;
        total++;
    } else if (result === 'computer') {
        losses++;
        total++;
    } else if (result === 'tie') {
        total++;
    }

    loadPage();
}

// event listeners
SpongebobFight.addEventListener('click', () => {
    runGame('Spongebob');
});

PatrickFight.addEventListener('click', () => {
    runGame('Patrick');
});

JacksonFight.addEventListener('click', () => {
    runGame('Jackson');
});

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
}
function displayState() {
    if (gameState === 'results') {
        choose.classList.add('hidden');
        results.classList.remove('hidden');
    } else if (gameState === 'guess') {
        choose.classList.remove('hidden');
        results.classList.add('hidden');
    }
}

const playAgainButton = document.getElementById('playAgainButton');

playAgainButton.addEventListener('click', () => {
    playAgain();
});
function playAgain() {
    gameState = 'guess';
    loadPage();
}
loadPage();
