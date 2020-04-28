/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toString().toLowerCase();
    }
    /* Display Phrase on screen */
    addPhraseToDisplay() {
        const phraseList = document.querySelector('ul');
        for(let i = 0; i < this.phrase.length; i++) {
            const listItem = document.createElement('li');
            listItem.innerHTML = this.phrase[i];
            phraseList.appendChild(listItem);
            if(listItem.innerHTML === ' ') {
                listItem.classList.add('space');
            } else {
                listItem.classList.add('hide');
                listItem.classList.add('letter');
                listItem.classList.add(listItem.innerHTML);
            }
        }
    }
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const letterValue = document.getElementsByClassName(letter);
        if (this.checkLetter(letter) === true) {
            for(let i = 0; i < letterValue.length; i++){
                letterValue[i].classList.remove('hide');
                letterValue[i].classList.add('show');
            }
        } else {
            Game.removeLife();
        }
    }
}