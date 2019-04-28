/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/***
make disabled buttons, visibly disabled
***/


let game = null;

const btnStartGame = document.getElementById("btn__reset");
const keyboard = document.getElementById("qwerty");


 // click event listener for start button, which creates new game object and starts the game by calling startGame
btnStartGame.addEventListener("click", () => {
  game = new Game();
  game.startGame();
});


 // event listener for onscreen keyboard buttons
keyboard.addEventListener("click", (event) => {
  const key = event.target;
  if(key.className === "key"){
    game.handleInteraction(key);
  }
});


$(document).keydown(function(event){
  event.preventDefault();
  game.handleInteractionKB(event.key);
});
