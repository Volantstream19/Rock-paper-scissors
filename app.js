const computerFight = ['Jackson', 'Spongebob', 'Patrick'];

function getRandomNumber(choices) {
    return Math.floor(Math.random() * choices);
}

function generateFight(array) {
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
/* State */

/* Actions */
function loadPage() {}
function runGame(player) {
    const computerResult = generateFight(computerFight);

    console.log(computerResult);
    console.log(player);

    results.classList.remove('hidden');

    playerFightImg.src = `${player}.jpg`;
    computerFightImg.src = `${computerResult}.jpg`;
}

/* Components */

/* Component */

// get DOM

// display

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
loadPage();
