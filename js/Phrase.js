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
}