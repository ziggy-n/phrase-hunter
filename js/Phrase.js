/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

   constructor(phrase){
     this.phrase = phrase.toLowerCase();
     this.phraseLength = 0;
     this.hits = 0;
   }

   addPhraseToDisplay(){
     const ul = document.getElementById("phrase").firstElementChild;
     const length_w_spaces = this.phrase.length;

     for(let i = 0; i < length_w_spaces; i++){
       const c = this.phrase.charAt(i);
       const child = document.createElement('li');
       ul.appendChild(child);
       if(c === ' '){
         child.className = 'space';
       } else {
         child.className = `hide letter ${c}`;
         child.innerText = c;
         this.phraseLength++;
       }
     }
   }

   checkLetter(letter){
     return this.phrase.includes(letter);
   }

   showMatchedLetter(letter){
      const listElements = document.getElementById("phrase").firstElementChild.children;
      for(let i = 0; i < listElements.length; i++){
        if(listElements[i].classList.contains(letter)){
          listElements[i].setAttribute("class", `show letter ${letter}`);
          this.hits++;
        }
      }
   }

 }
