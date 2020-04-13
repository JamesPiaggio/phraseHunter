/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor () {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const newPhrases = ['bite the bullet', 'under the weather', 'no pain no gain', 'ignorance is bliss', 'live and learn'];
        return newPhrases;
    };
    
    /**
    * Selects random phrase from the phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        console.log(this.phrases[randomNum]);
        return this.phrases[randomNum];
    }
}