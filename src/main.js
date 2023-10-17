//Start game - hide start

//set 6 color, duplicate, shuffle cards

//handle input:
//first click - show game
//second click - compare cards, remove or hide cards
//after second click, if cards are 0, end game

document.querySelector("#start").addEventListener("click", () => {
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#game").classList.remove("hidden");
})