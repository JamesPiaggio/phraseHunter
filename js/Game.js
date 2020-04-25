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
        const randomPhrase = {
            phrase: this.phrases[randomNum]
                             }
        return randomPhrase;
    }
    
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        new Phrase(this.activePhrase.phrase).addPhraseToDisplay();
    };
    
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        
    }
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        
    }
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        
    }
}