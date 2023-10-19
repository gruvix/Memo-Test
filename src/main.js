//handle input:
//first click - show game
//second click - compare cards, remove or hide cards
//after second click, if cards are 0, end game
document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    startGame();
})

let firstCard = null;
let secondCard;
let attemps;

function startGame(){
    attemps = 0;
    firstCard = null;
    let array = [];
    fillArrayWithColors(array);
    duplicateArray(array);
    shuffleArray(array);
    setCardsClasses(array);
    enableCardInput();
    showAttempts();
}

function enableCardInput(){
    const $gameContainer = document.querySelector("#game");
    $gameContainer.onclick = handleInput;
}

function handleInput(event){
    const MAXIMUN_OPACITY = 1;
    const CARD_DELETE_TIMEOUT = 300;
    if(!event.target.classList.contains("card")){
        return;
    }
    if(firstCard === null){
        firstCard = event.target;
        firstCard.style.opacity = MAXIMUN_OPACITY;
        return;
    }
    else if(firstCard === event.target){
        hideFirstCard();
        resetFirstCard();
    }
    else{
        increaseAttempts();
        secondCard = event.target;
        secondCard.style.opacity = MAXIMUN_OPACITY;
        if(areCardsEqual()){
            deleteCards(CARD_DELETE_TIMEOUT);
        }
        else{
            hideCards();
        }
        resetFirstAndSecondCard();
        setTimeout(() => {//must wait for cards to be destroyed to check for remaining cards
            const remainingCards = document.querySelectorAll(".card").length;
            if(remainingCards === 0){
                endGame();
            }
        }, CARD_DELETE_TIMEOUT);
    }
}
function showAttempts(){
    document.querySelector('#attemps').classList.remove('hidden')
}
function increaseAttempts(){
    attemps++;
    document.querySelector("#attemps").innerText = `Attemps: ${attemps}`;
}
function endGame(){
    document.querySelector("#game").classList.add("hidden");
    document.querySelector("#restart").classList.remove("hidden");
}
function hideFirstCard(){
    firstCard.style.opacity = 0;
}
function resetFirstCard(){
    firstCard = null;
}
function deleteCards(DELETE_CARDS_TIMEOUT){
    const card1 = firstCard;
    const card2 = secondCard;
    setTimeout(() => {
        card1.parentElement.remove();
        card2.parentElement.remove();
    }, DELETE_CARDS_TIMEOUT);
}

function resetFirstAndSecondCard(){
    firstCard = null;
    secondCard = null;
}

function areCardsEqual(){
    if(firstCard.classList.toString() === secondCard.classList.toString()){
        return true;
    }
    else{
        return false;
    }
}

function hideCards(){
    const CERO_OPACITY = 0;
    const HIDE_CARDS_TIMEOUT = 400;
    const card1 = firstCard;
    const card2 = secondCard;
    setTimeout(() => {
        card1.style.opacity = CERO_OPACITY;
        card2.style.opacity = CERO_OPACITY;
    }, HIDE_CARDS_TIMEOUT)
}

function setCardsClasses(array){
    const $cards = document.querySelectorAll(".card");
    $cards.forEach(($card, index) => {
        $card.classList.add(array[index]);
    });
}

function fillArrayWithColors(array){
    let colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    colors.forEach(color => {
        array.push(color);
    });
}

function duplicateArray(array){
    const originalLenght = array.length;
    for (let index = 0; index < originalLenght; index++) {
        array.push(array[index])
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function restartPage(){
    location.reload();
}
document.querySelector("#restart").addEventListener("click", restartPage);
