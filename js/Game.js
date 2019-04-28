/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {

   constructor(){
     this.missed = 0;
     this.phrases = [
       new Phrase("Seen better days"),
       new Phrase("Apples and Oranges"),
       new Phrase("Off the Top"),
       new Phrase("There Be Dragons"),
       new Phrase("Second Fiddle")
     ];
     this.activePhrase = null;
   }


    getRandomPhrase(){
      return this.phrases[Math.floor(Math.random()* this.phrases.length)];
    }


   startGame(){
     // hides start screen overlay
     const overlay = document.getElementById("overlay");
     overlay.style.visibility = "hidden";

     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }

   checkForWin(){
     return this.activePhrase.hits === this.activePhrase.phraseLength
   }

   gameOver(state){
     const overlay = document.getElementById("overlay");
     overlay.style.visibility = "visible";

     const mssg = document.getElementById("game-over-message");
     mssg.textContent = "You " + state;


     // prepare for next game:

     // reset images to liveHeart
     const ol = document.getElementById("scoreboard").firstElementChild;
     for(let i = 0; i < 5; i++){
       ol.children[i].firstElementChild.src = "images/liveHeart.png";
     }

     // set class attribute of all keys to key
     let currentRow = document.getElementById("qwerty").firstElementChild;
     let currentkey = currentRow.firstElementChild;
     for(let i = 0; i < 10; i++){
       currentkey.removeAttribute("disabled");
       currentkey.setAttribute("class", "key");
       currentkey = currentkey.nextElementSibling;
     }
     currentRow = currentRow.nextElementSibling;
     currentkey = currentRow.firstElementChild;
     for(let i = 0; i < 9; i++){
       currentkey.removeAttribute("disabled");
       currentkey.setAttribute("class", "key");
       currentkey = currentkey.nextElementSibling;
     }
     currentRow = currentRow.nextElementSibling;
     currentkey = currentRow.firstElementChild;
     for(let i = 0; i < 7; i++){
       currentkey.removeAttribute("disabled");
       currentkey.setAttribute("class", "key");
       currentkey = currentkey.nextElementSibling;
     }


     // remove all li elements in phrase div
     const ul = document.getElementById("phrase").firstElementChild;
     while(ul.firstElementChild){
       ul.removeChild(ul.firstElementChild);
     }

   }


   removeLife(){
     document.getElementById("scoreboard")
      .firstElementChild
      .children[this.missed]
      .firstElementChild.src = "images/lostHeart.png";
     this.missed++;
     if(this.missed === 5){
       this.gameOver('loose');
     }
   }


   handleInteraction(key){
     const letter = key.textContent;
     key.disabled = true;

     if(this.activePhrase.checkLetter(letter)){
       key.setAttribute("class", "key chosen");
       this.activePhrase.showMatchedLetter(letter);
       if(this.checkForWin()){
         this.gameOver("win");
       }
     } else {
       key.setAttribute("class", "key wrong");
       this.removeLife();
     }
   }


   handleInteractionKB(letter){

     let key = null
     let found = false;

     // find key element
     let currentRow = document.getElementById("qwerty").firstElementChild;
     let currentkey = currentRow.firstElementChild;
     for(let i = 0; !found && i < 10; i++){
       if(currentkey.textContent === letter){
         key = currentkey;
         found = true;
       }
       currentkey = currentkey.nextElementSibling;
     }
     currentRow = currentRow.nextElementSibling;
     currentkey = currentRow.firstElementChild;
     for(let i = 0; !found && i < 9; i++){
       if(currentkey.textContent === letter){
         key = currentkey;
         found = true;
       }
       currentkey = currentkey.nextElementSibling;
     }
     currentRow = currentRow.nextElementSibling;
     currentkey = currentRow.firstElementChild;
     for(let i = 0; !found && i < 7; i++){
       if(currentkey.textContent === letter){
         key = currentkey;
         found = true;
       }
       currentkey = currentkey.nextElementSibling;
     }


     key.disabled = true;


     if(this.activePhrase.checkLetter(letter)){
      key.setAttribute("class", "key chosen");
       this.activePhrase.showMatchedLetter(letter);
       if(this.checkForWin()){
         this.gameOver("win");
       }
     } else {
       key.setAttribute("class", "key wrong");
       this.removeLife();
     }
   }





 }
