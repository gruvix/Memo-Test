//handle input:
//first click - show game
//second click - compare cards, remove or hide cards
//after second click, if cards are 0, end game

document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
    startGame();
})

function startGame(){
    let array = [];
    fillArrayWithColors(array);
    duplicateArray(array);
    shuffleArray(array);
    setCardsClasses(array);
}

function setCardsClasses(array){
    const $cards = document.querySelectorAll(".card");
    $cards.forEach($card, index => {
        $card.classList.add(array[index]);
    });
}

function fillArrayWithColors(array){
    let colors = ["red", "blue", "green", "yellow", "pink", "orange"];
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
