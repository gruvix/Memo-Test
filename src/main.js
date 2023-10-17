//set 6 color, duplicate, shuffle cards

//handle input:
//first click - show game
//second click - compare cards, remove or hide cards
//after second click, if cards are 0, end game

document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
})

function createColorsArray(){
    let colors = ["red", "blue", "green", "yellow"];
    return colors;
}

function duplicateArray(array){
    array = array.concat(array)
    return array;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
