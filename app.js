/* Imports */

/* State */
const  = document.getElementById('sponge-Bob');
spongeBob.addEventListener('click', () => {
    runGame('spongeBob');
});
const  = document.getElementById('pat-Rick');
spongeBob.addEventListener('click', () => {
    runGame('patRick');
});
const  = document.getElementById('squid-Ward');
    spongeBob.addEventListener('click', () => {
    runGame('squidWard');
});
const results = document.getElementById('results');
const playerFight = document.getElementById('player-fight');
const computerFight = document.getElementById('computer-Fight');
const resultImage = document.getElementById('result-image');

function runGame(player) {
    const computer = generateFight();
    const result = score(player, computer);



function setStatus(element, isWinner) {
    const topLevelElement = element.parentElement.parentElement;
    if (isWinner) {
        topLevelElement.classList.add('winner');
        }
        else {
            topLevelElement.classList.remove('winner');
        }
    }
/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
