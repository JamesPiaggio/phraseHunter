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
        const newPhrases = ['Super Mario Brothers', 'Donkey Kong Country', 'Earthbound', 'Chrono Trigger', 'Super Metroid'];
        return newPhrases;
    };
    
    /**
    * Selects random phrase from the phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        const randomPhrase = new Phrase(this.phrases[randomNum]);
        return randomPhrase;
    };
    
    /**
    * Begins game by clearing the previous game and selecting a random phrase and displaying it to user
    */
    startGame() {
        this.missed = 0;
        // Removes old phrase
        const phraseUl = document.querySelector('.section ul');
        const phraseLi = document.querySelectorAll('ul li');
        for (let i = 0; i < phraseLi.length; i++) {
            phraseUl.removeChild(phraseLi[i]);
        }
        // Reactivates buttons
        const buttons = document.querySelectorAll('.keyrow button');
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].className === 'wrong') {
                buttons[i].classList.add('key');
                buttons[i].classList.remove('wrong');
            } else if (buttons[i].className === 'chosen') {
                buttons[i].classList.add('key');
                buttons[i].classList.remove('chosen');
            }
        }
        // Resets Hearts/Lives
        for (let i = 0; i < document.getElementsByClassName('tries').length; i++) {
            document.getElementsByClassName('tries')[i].querySelector('img').src = 'images/liveHeart.png';
        }
        // Adds new phrase to display
        new Phrase(this.activePhrase.phrase).addPhraseToDisplay();
        document.querySelector('#overlay').style.display = 'none';
    };
    
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        // If hidden characters equal 0, you win
        if (document.getElementsByClassName('hide').length === 0) {
            this.gameOver(true);
            return true;
        } else {
            return false;
        }
    };
    
    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed += 1;
        const lives = document.getElementsByClassName('tries');
        lives[this.missed - 1].querySelector('img').src = 'images/lostHeart.png';
        if (this.missed == 5) {
            this.gameOver(false);
        }
    };
    
    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        // Displays winning message
        if (gameWon === true) {
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('#overlay').style.backgroundColor = 'green';
            document.querySelector('#overlay h1').innerHTML = 'Great job! You win!';
        // Displays losing message    
        } else {
            document.querySelector('#overlay').style.display = 'block';
            document.querySelector('#overlay').style.backgroundColor = 'red';
            document.querySelector('#overlay h1').innerHTML = 'Sorry, you lose! Try again...';
        }
    };
    
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disable;
        if (this.activePhrase.checkLetter(button.innerHTML)) {
            this.activePhrase.showMatchedLetter(button.innerHTML);
            button.classList.add('chosen');
            this.checkForWin();
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
    };
}