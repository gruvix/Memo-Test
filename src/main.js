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
let secondCard

function startGame(){
    firstCard = null;
    let array = [];
    fillArrayWithColors(array);
    duplicateArray(array);
    shuffleArray(array);
    setCardsClasses(array);
    enableCardInput();
}

function enableCardInput(){
    const $gameContainer = document.querySelector("#game");
    $gameContainer.onclick = handleInput;
}

function handleInput(event){

    if(!event.target.classList.contains("card")){
        return;
    }
    if(firstCard === null){
        firstCard = event.target;
        firstCard.style.opacity = 1;
        return;
    }
    else if(firstCard === event.target){
        return;
    }
    else{
        secondCard = event.target;
        secondCard.style.opacity = 1;
        hideCards();
        compareCards();
        resetIds();
    }

}

function resetIds(){
    firstCard = null;
    secondCard = null;
}

function compareCards(){
    if(firstCard.classList === secondCard.classList){
        console.log("LAS CARTAS SON IGUALES");
    }
}

function hideCards(){
    const ceroOpacity = 0;
    const hideCardsTimeout = 400;
    const card1 = firstCard;
    const card2 = secondCard;
    setTimeout(() => {
        card1.style.opacity = 0.3;
        card2.style.opacity = 0.3;
    }, hideCardsTimeout)
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
